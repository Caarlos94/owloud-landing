// ─── Copies the app's catalog into src/data/library.json ─────────────────────
// The library page (and the home page's shelf) are built from that file, so
// run this whenever books or stories change in the app, then rebuild:
//
//   npm run sync:library
//
// It reads the app's public Supabase URL and key from the app's .env (see the
// script in package.json), the same read-only access the app itself has.
//
// What gets in: published books, the Classic Adaptations (listed before
// they're published, like the home shelf), and every short story, scheduled
// or not: the web shows the whole collection, release dates aside.

import { writeFile } from "node:fs/promises";

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_KEY;
if (!url || !key) {
  console.error("Missing EXPO_PUBLIC_SUPABASE_URL / EXPO_PUBLIC_SUPABASE_KEY");
  process.exit(1);
}

const columns =
  "id,kind,title,author,cefr,summary,summary_es,cover_image,hero_image,is_published,published_at,adaptation_order,free_full,chapters(duration_seconds)";
const res = await fetch(
  `${url}/rest/v1/books?select=${columns}&or=(is_published.eq.true,adaptation_order.not.is.null,kind.eq.story)`,
  { headers: { apikey: key } },
);
if (!res.ok) {
  console.error(`Supabase answered ${res.status}: ${await res.text()}`);
  process.exit(1);
}
const rows = await res.json();

const items = rows.map((row) => ({
  id: row.id,
  kind:
    row.kind === "story"
      ? "story"
      : row.adaptation_order !== null
        ? "adaptation"
        : "classic",
  title: row.title,
  author: row.author,
  level: row.cefr,
  chapters: row.chapters.length,
  seconds: row.chapters.reduce((sum, c) => sum + (c.duration_seconds ?? 0), 0),
  cover: row.cover_image,
  hero: row.hero_image,
  summary: { es: row.summary_es, en: row.summary },
  freeFull: row.free_full ?? false,
  // Only adaptations have one: their order on the app's shelf, by popularity
  order: row.adaptation_order,
}));

// A stable order, so a sync with no catalog changes leaves the file untouched
items.sort(
  (a, b) =>
    a.kind.localeCompare(b.kind) ||
    (a.order ?? 0) - (b.order ?? 0) ||
    a.title.localeCompare(b.title),
);

// A row missing what the page shows would break the build or show a hole
const incomplete = items.filter(
  (i) => !i.level || !i.cover || !i.hero || !i.summary.es || !i.summary.en,
);
if (incomplete.length) {
  console.error(
    "Missing level, images or summaries:",
    incomplete.map((i) => i.id).join(", "),
  );
  process.exit(1);
}

const file = new URL("../src/data/library.json", import.meta.url);
await writeFile(file, JSON.stringify(items, null, 2) + "\n");

const count = (kind) => items.filter((i) => i.kind === kind).length;
console.log(
  `library.json: ${count("adaptation")} adaptations, ${count("classic")} classics, ${count("story")} stories`,
);
