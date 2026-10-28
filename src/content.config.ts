// ─── Content collections ─────────────────────────────────────────────────────
// The blog: one Markdown file per article in src/content/blog/es/ (served at
// /blog/<file name>/) or src/content/blog/en/ (/en/blog/<file name>/). The
// frontmatter feeds the page, the search-result snippet and the structured
// data that Google and AI search read.

import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // The snippet under the title in search results; longer gets cut off
    description: z.string().max(160),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // The article's picture: the hero image of a catalog title (an id from
    // data/library.ts)
    image: z.string(),
    // "En resumen": the answer up front, in a few lines that search engines
    // and AI assistants can quote on their own
    summary: z.array(z.string()).min(2),
    // Questions answered after the article, also sent as FAQPage data
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Catalog titles shown under the article (ids from data/library.ts)
    books: z.array(z.string()).default([]),
    // English articles only: the file name of the Spanish article this one
    // translates, so each links to the other (language menu and hreflang)
    translationOf: z.string().optional(),
  }),
});

export const collections = { blog };
