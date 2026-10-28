// ─── Library page copy in both languages ─────────────────────────────────────
// Rendered by components/Library.astro, which src/pages/biblioteca.astro
// (Spanish) and src/pages/en/library.astro (English) share. Counts come from
// the catalog (data/library.ts), so the copy takes them as arguments.

import type { Level } from "../data/library";
import type { Lang } from "./ui";

const es = {
  metaTitle: "Biblioteca: audiolibros en inglés por nivel · Owloud",
  metaDescription: (books: number, stories: number) =>
    `${books} libros y ${stories} historias cortas en inglés, de principiante a avanzado, con audio narrado y texto sincronizado. Clásicos completos, adaptaciones fáciles e historias de todo el mundo.`,
  breadcrumbHome: "Inicio",
  breadcrumb: "Biblioteca",

  // ─── Hero ───
  heroTitle: "Audiolibros en inglés",
  heroAccent: "para cada nivel",
  heroText:
    "Clásicos completos, adaptaciones más sencillas e historias cortas de todo el mundo. Todo narrado, con el texto iluminándose mientras escuchas.",
  statBooks: "libros",
  statStories: "historias cortas",
  statHours: "horas de audio",
  statLevels: "niveles",

  // ─── Level picker ───
  levelTitle: "¿Cuál es tu nivel?",
  levelText: "Elige uno y te mostramos solo lo que va contigo.",
  levelAll: "Todos",
  levelAllText: "Todo el catálogo, de lo más fácil a lo más retador.",
  levelNames: {
    A1: "Principiante",
    A2: "Básico",
    B1: "Intermedio",
    B2: "Intermedio alto",
    C1: "Avanzado",
  } satisfies Record<Level, string>,
  levelTexts: {
    A1: "Tus primeras frases en inglés, lentas y claras.",
    A2: "Frases cortas y las palabras de todos los días.",
    B1: "Sigues la historia aunque no entiendas cada palabra.",
    B2: "Libros originales, con un poco de esfuerzo.",
    C1: "Clásicos sin adaptar, al ritmo de un nativo.",
  } satisfies Record<Level, string>,
  titles: (n: number) => (n === 1 ? "1 título" : `${n} títulos`),

  // ─── Catalog sections ───
  adaptationsTitle: "Clásicos adaptados",
  adaptationsText: (free: number) =>
    `Las grandes historias de siempre, reescritas en un inglés más sencillo y en capítulos cortos. ${free} de ellas son gratis de principio a fin.`,
  classicsTitle: "Clásicos completos",
  classicsText:
    "Los libros originales, sin recortes, narrados capítulo por capítulo. Para escuchar cada obra tal como la escribió su autor.",
  storiesTitle: "Historias cortas",
  storiesText:
    "Historias reales de todo el mundo que escuchas en menos de tres minutos. Cada semana, 7 son gratis.",
  showMore: (n: number) => `Ver ${n} historias más`,
  free: "Gratis",
  kinds: {
    adaptation: "Clásico adaptado",
    classic: "Clásico completo",
    story: "Historia corta",
  },
  chapters: (n: number) => (n === 1 ? "1 capítulo" : `${n} capítulos`),
  chaptersShort: (n: number) => `${n} cap.`,

  // ─── Detail dialog ───
  close: "Cerrar",
  listenTitle: "Escúchalo en Owloud",
  freeFullNote: "Gratis de principio a fin.",
  storyNote: "Cada semana hay 7 historias gratis.",

  // ─── Closing call to action ───
  ctaTitle: "¿Ya sabes cuál escucharás primero?",
  ctaText:
    "Descarga Owloud y empieza hoy con una historia a tu nivel, gratis.",
};

// `typeof es` makes TypeScript flag a key missing from the English copy
const en: typeof es = {
  metaTitle: "Library: English audiobooks by level · Owloud",
  metaDescription: (books, stories) =>
    `${books} books and ${stories} short stories in English, from beginner to advanced, with narrated audio and synced text. Full-length classics, easier adaptations and stories from around the world.`,
  breadcrumbHome: "Home",
  breadcrumb: "Library",

  heroTitle: "English audiobooks",
  heroAccent: "for every level",
  heroText:
    "Full-length classics, easier adaptations and short stories from around the world. All narrated, with the text lighting up as you listen.",
  statBooks: "books",
  statStories: "short stories",
  statHours: "hours of audio",
  statLevels: "levels",

  levelTitle: "What's your level?",
  levelText: "Pick one and we'll only show what fits you.",
  levelAll: "All",
  levelAllText: "The whole catalog, from easiest to most challenging.",
  levelNames: {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper intermediate",
    C1: "Advanced",
  },
  levelTexts: {
    A1: "Your first sentences in English, slow and clear.",
    A2: "Short sentences and everyday words.",
    B1: "You follow the story without knowing every word.",
    B2: "Original books, with a little effort.",
    C1: "Unabridged classics at a native pace.",
  },
  titles: (n) => (n === 1 ? "1 title" : `${n} titles`),

  adaptationsTitle: "Adapted classics",
  adaptationsText: (free) =>
    `The great stories, rewritten in simpler English and short chapters. ${free} of them are free from start to finish.`,
  classicsTitle: "Full-length classics",
  classicsText:
    "The original books, unabridged, narrated chapter by chapter. Hear each one exactly as its author wrote it.",
  storiesTitle: "Short stories",
  storiesText:
    "True stories from around the world that take under three minutes to hear. Every week, 7 of them are free.",
  showMore: (n) => `Show ${n} more stories`,
  free: "Free",
  kinds: {
    adaptation: "Adapted classic",
    classic: "Full-length classic",
    story: "Short story",
  },
  chapters: (n) => (n === 1 ? "1 chapter" : `${n} chapters`),
  chaptersShort: (n) => `${n} ch.`,

  close: "Close",
  listenTitle: "Listen on Owloud",
  freeFullNote: "Free from start to finish.",
  storyNote: "7 stories are free every week.",

  ctaTitle: "Know which one you'll hear first?",
  ctaText: "Download Owloud and start today with a story at your level, for free.",
};

export const library: Record<Lang, typeof es> = { es, en };
