// ─── Blog copy in both languages ─────────────────────────────────────────────
// The page around the articles: components/BlogIndex.astro and
// components/BlogPost.astro, which the Spanish (/blog/) and English
// (/en/blog/) pages share. The articles themselves are in src/content/blog/.

import type { Lang } from "./ui";

const es = {
  metaTitle: "Blog de Owloud: consejos para aprender inglés escuchando",
  metaDescription:
    "Guías prácticas para aprender inglés con audiolibros: qué escuchar en cada nivel, cómo mejorar tu listening y cómo recordar el vocabulario nuevo.",
  feedTitle: "Blog de Owloud",
  breadcrumbHome: "Inicio",
  breadcrumb: "Blog",

  // ─── Article list ───
  title: "Aprende inglés",
  accent: "escuchando",
  text: "Guías prácticas para mejorar tu inglés con audiolibros: qué escuchar en tu nivel, cómo entrenar el oído y cómo no olvidar las palabras nuevas.",
  readingTime: (minutes: number) => `${minutes} min de lectura`,

  // ─── Article ───
  author: "Equipo Owloud",
  updated: "Actualizado el",
  summary: "En resumen",
  contents: "En este artículo",
  faq: "Preguntas frecuentes",
  books: "Para escuchar en Owloud",
  booksAll: "Ver toda la biblioteca",

  // ─── Closing call to action ───
  ctaTitle: "Ponlo en práctica hoy",
  ctaText:
    "Descarga Owloud y escucha una historia a tu nivel, con el texto iluminándose mientras la oyes.",
};

// `typeof es` makes TypeScript flag a key missing from the English copy
const en: typeof es = {
  metaTitle: "Owloud Blog: tips for learning English by listening",
  metaDescription:
    "Practical guides to learning English with audiobooks: what to listen to at each level, how to improve your listening and how to remember new words.",
  feedTitle: "Owloud Blog",
  breadcrumbHome: "Home",
  breadcrumb: "Blog",

  title: "Learn English",
  accent: "by listening",
  text: "Practical guides to improving your English with audiobooks: what to listen to at your level, how to train your ear and how to hold on to new words.",
  readingTime: (minutes) => `${minutes} min read`,

  author: "The Owloud team",
  updated: "Updated",
  summary: "In short",
  contents: "In this article",
  faq: "Frequently asked questions",
  books: "Listen on Owloud",
  booksAll: "Browse the full library",

  ctaTitle: "Put it into practice today",
  ctaText:
    "Download Owloud and listen to a story at your level, with the text lighting up as you hear it.",
};

export const blog: Record<Lang, typeof es> = { es, en };
