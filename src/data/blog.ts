// ─── Blog articles ───────────────────────────────────────────────────────────
// Read by the blog's pages, its RSS feeds and llms.txt. The articles live in
// src/content/blog/<lang>/ (see src/content.config.ts): the folder is the
// article's language and the file name its URL.

import { getCollection, type CollectionEntry } from "astro:content";
import { blogPath, type Lang } from "../i18n/ui";
import { blog } from "../i18n/blog";

export type Post = CollectionEntry<"blog">;

// An id is the file's path: "es/audiolibros-en-ingles-por-nivel"
export const postLang = (post: Post) => post.id.split("/")[0] as Lang;
export const postSlug = (post: Post) => post.id.split("/").slice(1).join("/");
export const postPath = (post: Post) =>
  `${blogPath[postLang(post)]}${postSlug(post)}/`;

// One language's articles, newest first
export const blogPosts = async (lang: Lang) =>
  (await getCollection("blog", (post) => postLang(post) === lang)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

// The same article in the other language, when there is one: an English
// article names the Spanish one it translates in `translationOf`
export const translationOf = async (post: Post) => {
  const all = await getCollection("blog");
  if (postLang(post) === "en") {
    const original = all.find(
      (p) => postLang(p) === "es" && postSlug(p) === post.data.translationOf,
    );
    if (post.data.translationOf && !original)
      throw new Error(
        `${post.id}: translationOf "${post.data.translationOf}" isn't a Spanish article`,
      );
    return original;
  }
  return all.find(
    (p) => postLang(p) === "en" && p.data.translationOf === postSlug(post),
  );
};

// At ~200 words a minute, the usual reading pace
export const readingMinutes = (post: Post) =>
  Math.max(1, Math.round((post.body ?? "").split(/\s+/).length / 200));

// "27 de octubre de 2026" / "October 27, 2026"
const locales: Record<Lang, string> = { es: "es-MX", en: "en-US" };
export const formatDate = (date: Date, lang: Lang) =>
  date.toLocaleDateString(locales[lang], { dateStyle: "long", timeZone: "UTC" });

// ─── RSS feed ───
// A few lines of XML, not worth a dependency. Served by src/pages/blog/rss.xml.ts
// and src/pages/en/blog/rss.xml.ts.
const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const rssFeed = async (lang: Lang, site: URL) => {
  const t = blog[lang];
  const items = (await blogPosts(lang)).map((post) => {
    const link = new URL(postPath(post), site).href;
    return `
    <item>
      <title>${escape(post.data.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <description>${escape(post.data.description)}</description>
      <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${t.feedTitle}</title>
    <link>${new URL(blogPath[lang], site).href}</link>
    <description>${escape(t.metaDescription)}</description>
    <language>${lang}</language>${items.join("")}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
