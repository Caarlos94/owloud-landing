// ─── Site-wide copy: page meta, nav and footer ───────────────────────────────
// Spanish is the main language (served at /) because Owloud is made for
// Spanish speakers; English lives under /en/. The home page's own copy is in
// home.ts.

export type Lang = "es" | "en";

// Where each language's home page lives
export const homePath: Record<Lang, string> = { es: "/", en: "/en/" };
// And the library page
export const libraryPath: Record<Lang, string> = {
  es: "/biblioteca/",
  en: "/en/library/",
};
// And the blog's front page
export const blogPath: Record<Lang, string> = { es: "/blog/", en: "/en/blog/" };

export const appStoreUrl =
  "https://apps.apple.com/us/app/owloud-learn-english/id6793253654";

// Each language written in itself, for the language menu
export const languageNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

const es = {
  title: "Owloud — Aprende inglés con audiolibros",
  description:
    "Escucha audiolibros en inglés con el texto sincronizado estilo karaoke, toca cualquier palabra para ver su traducción y domina tu vocabulario con tarjetas inteligentes.",
  navFeatures: "Funciones",
  navBlog: "Blog",
  navLibrary: "Biblioteca",
  download: "Descargar",
  changeLanguage: "Cambiar idioma",
  privacy: "Política de privacidad",
  terms: "Términos del servicio",
  support: "Soporte",
  tagline: "Aprende inglés escuchando.",
};

// `typeof es` makes TypeScript flag a key missing from the English copy
const en: typeof es = {
  title: "Owloud — Learn English with audiobooks",
  description:
    "Listen to audiobooks with karaoke-style synced text, tap any word for its meaning, and master your vocabulary with smart flashcards.",
  navFeatures: "Features",
  navBlog: "Blog",
  navLibrary: "Library",
  download: "Download",
  changeLanguage: "Change language",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  support: "Support",
  tagline: "Learn English by listening.",
};

export const ui: Record<Lang, typeof es> = { es, en };
