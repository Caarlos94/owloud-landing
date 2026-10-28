// ─── Home page copy in both languages ────────────────────────────────────────
// Rendered by components/Home.astro, which src/pages/index.astro (Spanish)
// and src/pages/en/index.astro (English) share.

import { catalogLevels, catalogStats } from "../data/library";
import type { Lang } from "./ui";

// The catalog figures quoted below come from the app's data, never typed here
const { books, stories, hours, freeAdaptations } = catalogStats;
const firstLevel = catalogLevels[0];
const lastLevel = catalogLevels[catalogLevels.length - 1];

const es = {
  // ─── Hero ───
  // The accent goes on its own line in green; its last word gets the amber swoosh.
  // Title Case on purpose (display style): long words capitalized, short ones
  // like "by" and "to" stay lowercase, so it's written here instead of CSS.
  heroTitle: "Aprende Inglés",
  heroAccent: "Escuchando Historias",
  heroText:
    "Audiolibros a tu nivel, con texto que se ilumina mientras escuchas. Toca cualquier palabra para traducirla.",
  // Small line over the store name on the App Store button
  appStoreSmall: "Descárgalo en el",
  // Plain text next to it until the Play listing is live
  androidSoon: "Android: muy pronto",
  heroNote: "Empieza gratis en tu iPhone\u00a0· 3 días de prueba en el plan anual",
  phoneAlt:
    "El reproductor de Owloud en un iPhone: la frase que suena se ilumina y al tocar «pocket» aparece «bolsillo»",
  // Floating cards around the hero phone
  heroSync: "Texto sincronizado",
  heroLevel: "a tu nivel",
  heroNewWord: "Palabra nueva",
  heroNewWordPos: "sustantivo",

  // ─── Catalog band under the hero ───
  // Each fact shows its `value` in bold, then its `label`
  facts: [
    { value: books, label: "libros" },
    { value: stories, label: "historias cortas" },
    { value: hours, label: "horas de audio" },
    {
      value: catalogLevels.length,
      label: `niveles, ${firstLevel}–${lastLevel}`,
    },
  ],

  // ─── Level shelf ───
  shelfTitle: "Clásicos para cada nivel",
  shelfText:
    "Libros adaptados y originales, del A2 al C1. Todos con audio y texto sincronizado.",
  // The name next to each pill's CEFR code
  shelfLevelNames: {
    A2: "Principiante",
    B1: "Intermedio",
    B2: "Intermedio alto",
    C1: "Avanzado",
  },
  shelfPrev: "Libros anteriores",
  shelfNext: "Más libros",
  shelfCta: "Empieza a leer gratis",
  shelfAll: "Ver toda la biblioteca",

  // ─── Feature showcase ───
  featuresTitle: "Todo lo que necesitas en una sola app",
  featuresHint: "Toca una función para verla en acción.",
  // `short` is the pill label on phones/tablets; `title` + `text` show from lg: up.
  // `icon` names one of the icons in components/Home.astro, and `shot` its
  // screenshot in assets/features (<shot>-es.png / <shot>-en.png)
  featureTabs: [
    {
      icon: "headphones",
      shot: "karaoke",
      short: "Karaoke",
      title: "Audiolibros estilo karaoke",
      text: "El texto se ilumina palabra por palabra mientras escuchas: entrenas el oído y la vista al mismo tiempo.",
      alt: "El reproductor con El Principito: la frase que suena se ilumina en ámbar",
    },
    {
      icon: "pointer",
      shot: "word",
      short: "Toca una palabra",
      title: "Toca cualquier palabra",
      text: "Traducción al español, pronunciación y audio con un toque, sin salir de la historia. También puedes traducir la frase completa.",
      alt: "Al tocar «drawing» aparece «dibujo», y la frase de abajo se ve traducida al español",
    },
    {
      icon: "cards",
      shot: "cards",
      short: "Tarjetas",
      title: "Tarjetas inteligentes",
      text: "Las palabras que guardas vuelven con repetición espaciada, justo antes de que las olvides.",
      alt: "Una tarjeta de práctica de «sheep» con su ejemplo y la traducción «ovejas»",
    },
    {
      icon: "bookmark",
      shot: "vocab",
      short: "Vocabulario",
      title: "Tu vocabulario personal",
      text: "Guarda las palabras que te importan y mira cómo crece tu lista, historia tras historia.",
      alt: "Las palabras guardadas, agrupadas por libro: cuántas están sin ver, aprendiendo y dominadas",
    },
    {
      icon: "flame",
      shot: "streak",
      short: "Rachas",
      title: "Rachas que te mantienen constante",
      text: "Unos minutos al día y una racha que crece: aprender se vuelve un hábito.",
      alt: "Una racha de 14 días con el calendario del mes",
    },
  ],

  // ─── Why stories work ───
  whyTitle: "Por qué esta vez sí se te queda el inglés",
  whyText:
    "Las listas de palabras se olvidan; las historias no. Aprendes el inglés como se usa de verdad, dentro de algo que quieres seguir escuchando.",
  // `art` names the small piece of the app drawn on top of each card in
  // components/Home.astro
  whyCards: [
    {
      art: "listen",
      title: "Tu oído y tu vista, juntos",
      text: "Escuchas la historia mientras el texto se ilumina. Aprendes cómo se escribe cada palabra y cómo suena, al mismo tiempo.",
    },
    {
      art: "word",
      title: "Cada palabra con su escena",
      text: "No memorizas «castle» de una lista: lo encuentras en la historia, lo tocas y lo guardas. Recuerdas la escena donde apareció, y así se te queda.",
    },
    {
      art: "review",
      title: "Repasas solo lo que hace falta",
      text: "Cada palabra guardada vuelve justo cuando estás por olvidarla. Si la sabes, tarda más en regresar: mañana, en 3 días, en una semana…",
    },
    {
      art: "plot",
      title: "La trama te hace volver",
      text: "Quieres saber cómo sigue la historia, y eso te trae de vuelta cada día. Los capítulos son cortos: caben en tu camino al trabajo.",
    },
  ],
  // The review card's steps: the app's first intervals (REVIEW_INTERVALS_DAYS),
  // up to 21 days, where a word counts as mastered
  whyIntervals: ["1 día", "3 días", "1 sem.", "3 sem."],
  whyChapter: "Capítulo 3",
  whyContinued: "Continuará…",
  whyCta: "Prueba tu primera historia gratis",

  // ─── FAQ ───
  faqTitle: "Preguntas frecuentes",
  faqs: [
    {
      q: "¿Qué es Owloud?",
      a: `Owloud es una app para iPhone que te enseña inglés con audiolibros. Escuchas historias narradas a tu nivel mientras el texto se ilumina palabra por palabra, tocas cualquier palabra para ver su traducción al español y las que guardas vuelven como tarjetas de repaso. La biblioteca tiene ${books} libros y ${stories} historias cortas, con ${hours} horas de audio del ${firstLevel} al ${lastLevel}.`,
    },
    {
      q: "¿Owloud es gratis?",
      a: `Sí, puedes empezar gratis. Tienes ${freeAdaptations} clásicos adaptados de principio a fin, el capítulo 1 de otros tres clásicos, 7 historias cortas completas que cambian cada semana, tarjetas, quizzes y hasta 50 palabras guardadas. Owloud Pro desbloquea todo lo demás.`,
    },
    {
      q: "¿Qué incluye Owloud Pro?",
      a: "Todos los capítulos de todos los libros y todas las historias cortas, palabras guardadas ilimitadas, descarga de capítulos para escuchar sin conexión y herramientas extra en las tarjetas, como velocidad de audio ajustable y notas personales. El plan anual incluye 3 días de prueba gratis que puedes cancelar en cualquier momento antes de que terminen.",
    },
    {
      q: "¿Qué nivel necesito?",
      a: `Ninguno en especial: hay historias y libros del ${firstLevel} al ${lastLevel}. Si estás empezando, las historias cortas de nivel ${firstLevel} son el mejor primer paso; si ya entiendes algo de inglés, prueba un clásico adaptado. Cuando un nivel se te haga fácil, pasa al siguiente.`,
    },
    {
      q: "¿Hay app para Android?",
      a: "Todavía no. Por ahora Owloud solo está disponible para iPhone, en el App Store. La versión para Android llegará muy pronto.",
    },
    {
      q: "¿Qué idiomas puedo aprender con Owloud?",
      a: "Owloud enseña inglés, con historias y libros desde principiante hasta avanzado. Por ahora las traducciones de palabras y frases están en español, así que es perfecta para hispanohablantes, y más adelante llegarán más idiomas.",
    },
    {
      q: "¿En qué se diferencia Owloud de Duolingo?",
      a: "Duolingo enseña con ejercicios cortos y gamificados. Owloud gira en torno a historias reales: lees y escuchas libros clásicos, guardas las palabras que no conoces y esas mismas palabras vuelven como tarjetas de repetición espaciada. En lugar de traducir frases de práctica, construyes tu vocabulario con el inglés tal como se escribe de verdad, y terminas libros reales en el camino.",
    },
    {
      q: "¿Owloud es mejor que Anki?",
      a: "Resuelven problemas distintos. Anki es una app de tarjetas muy potente, pero tienes que crear o importar tus mazos y organizarlos tú. En Owloud las tarjetas se crean solas: cada palabra que guardas al leer llega con su traducción, su pronunciación, un ejemplo y el libro donde la encontraste, y la repetición espaciada la programa automáticamente. Si te gusta personalizar tus mazos, quédate con Anki; si prefieres leer historias y dejar que los repasos lleguen solos, Owloud es para ti.",
    },
    {
      q: "¿Owloud usa repetición espaciada?",
      a: "Sí, es el corazón del sistema de tarjetas. Cada palabra guardada se programa para volver justo antes de que la olvides: si aciertas, tarda más en volver; si fallas, regresa pronto. Solo repasas cada palabra cuando de verdad lo necesita, por eso bastan unos minutos al día.",
    },
    {
      q: "¿Cómo cancelo mi suscripción?",
      a: "Las suscripciones las gestiona Apple. Puedes cancelar cuando quieras desde Perfil → Gestionar suscripción en la app, o en Ajustes del iPhone → tu nombre → Suscripciones, y conservas Pro hasta que termine el periodo.",
    },
  ],
  // ─── Closing call to action ───
  // The store buttons and the note under them reuse the hero's copy
  ctaTitle: "¿Con qué historia empiezas?",
  ctaText: "Escucha tu primera historia hoy, gratis.",
};

// `typeof es` makes TypeScript flag a key missing from the English copy
const en: typeof es = {
  heroTitle: "Learn English",
  heroAccent: "by Listening to Stories",
  heroText:
    "Audiobooks at your level, with text that lights up as you listen. Tap any word to translate it.",
  appStoreSmall: "Download on the",
  androidSoon: "Android: coming soon",
  heroNote: "Start free on your iPhone\u00a0· 3-day free trial on yearly",
  phoneAlt:
    "Owloud's player on an iPhone: the sentence being read lights up, and tapping “pocket” shows “bolsillo”",
  heroSync: "Synced text",
  heroLevel: "at your level",
  heroNewWord: "New word",
  heroNewWordPos: "noun",

  facts: [
    { value: books, label: "books" },
    { value: stories, label: "short stories" },
    { value: hours, label: "hours of audio" },
    {
      value: catalogLevels.length,
      label: `levels, ${firstLevel}–${lastLevel}`,
    },
  ],

  shelfTitle: "Classics for every level",
  shelfText:
    "Adapted and original books from A2 to C1, all with audio and synced text.",
  shelfLevelNames: {
    A2: "Beginner",
    B1: "Intermediate",
    B2: "Upper intermediate",
    C1: "Advanced",
  },
  shelfPrev: "Previous books",
  shelfNext: "More books",
  shelfCta: "Start reading for free",
  shelfAll: "Browse the full library",

  featuresTitle: "Everything you need in one app",
  featuresHint: "Tap a feature to see it in action.",
  featureTabs: [
    {
      icon: "headphones",
      shot: "karaoke",
      short: "Karaoke",
      title: "Karaoke-style audiobooks",
      text: "The text lights up word by word as you listen — train your ears and eyes at the same time.",
      alt: "The player with The Little Prince: the sentence being read lights up in amber",
    },
    {
      icon: "pointer",
      shot: "word",
      short: "Tap a word",
      title: "Tap any word",
      text: "Spanish translation, pronunciation and audio in one tap — without ever leaving the story. You can translate the whole sentence too.",
      alt: "Tapping “drawing” shows “dibujo”, and the sentence below appears translated into Spanish",
    },
    {
      icon: "cards",
      shot: "cards",
      short: "Flashcards",
      title: "Smart flashcards",
      text: "Saved words come back with spaced repetition, right before you'd forget them.",
      alt: "A flashcard for “sheep” with its example and the translation “ovejas”",
    },
    {
      icon: "bookmark",
      shot: "vocab",
      short: "Vocabulary",
      title: "Your personal vocabulary",
      text: "Save the words that matter to you and watch your list grow, story by story.",
      alt: "Saved words grouped by book: how many are not seen yet, learning and mastered",
    },
    {
      icon: "flame",
      shot: "streak",
      short: "Streaks",
      title: "Streaks that keep you going",
      text: "A few minutes a day and a growing streak — learning becomes a habit that sticks.",
      alt: "A 14-day streak with the month's calendar",
    },
  ],

  whyTitle: "Why the English sticks this time",
  whyText:
    "Word lists fade; stories don't. You learn English the way it's really used, inside something you want to keep listening to.",
  whyCards: [
    {
      art: "listen",
      title: "Ears and eyes together",
      text: "You listen to the story while the text lights up, so you learn how each word is written and how it sounds at the same time.",
    },
    {
      art: "word",
      title: "Every word comes with a scene",
      text: "You don't memorize “castle” from a list: you find it in the story, tap it and save it. You remember the scene it came from, and that's what makes it stick.",
    },
    {
      art: "review",
      title: "Review only what you need",
      text: "Each saved word comes back right when you're about to forget it. Know it, and it waits longer: tomorrow, in 3 days, in a week…",
    },
    {
      art: "plot",
      title: "The plot brings you back",
      text: "You want to know what happens next, and that brings you back every day. Chapters are short enough for your commute.",
    },
  ],
  whyIntervals: ["1 day", "3 days", "1 wk", "3 wks"],
  whyChapter: "Chapter 3",
  whyContinued: "To be continued…",
  whyCta: "Try your first story free",

  faqTitle: "Frequently asked questions",
  faqs: [
    {
      q: "What is Owloud?",
      a: `Owloud is an iPhone app that teaches you English with audiobooks. You listen to stories narrated at your level while the text lights up word by word, tap any word to see its Spanish translation, and the words you save come back as review flashcards. The library has ${books} books and ${stories} short stories, with ${hours} hours of audio from ${firstLevel} to ${lastLevel}.`,
    },
    {
      q: "Is Owloud free?",
      a: `Yes, you can start for free. You get ${freeAdaptations} adapted classics from start to finish, chapter 1 of three other classics, 7 full short stories that change every week, flashcards, quizzes, and up to 50 saved words. Owloud Pro unlocks everything else.`,
    },
    {
      q: "What do I get with Owloud Pro?",
      a: "Every chapter of every book and every short story, unlimited saved words, chapter downloads for offline listening, and extra flashcard tools like adjustable audio speed and personal notes. The yearly plan comes with a 3-day free trial you can cancel anytime before it ends.",
    },
    {
      q: "What level do I need?",
      a: `None in particular: there are stories and books from ${firstLevel} to ${lastLevel}. If you're just starting, the ${firstLevel} short stories are the best first step; if you already understand some English, try an adapted classic. When a level feels easy, move up to the next one.`,
    },
    {
      q: "Is there an Android app?",
      a: "Not yet. For now Owloud is only available for iPhone, on the App Store. The Android version is coming soon.",
    },
    {
      q: "What languages can I learn with Owloud?",
      a: "Owloud teaches English, with stories and books from beginner to advanced. Word and sentence translations are currently in Spanish, so it's perfect for Spanish speakers — and more translation languages will come later.",
    },
    {
      q: "How is Owloud different from Duolingo?",
      a: "Duolingo teaches with short, gamified exercises. Owloud is built around real stories: you read and listen to classic books, save the words you don't know, and those exact words come back as spaced-repetition flashcards. Instead of translating practice sentences, you build vocabulary from English as it's actually written — and finish real books along the way.",
    },
    {
      q: "Is Owloud better than Anki?",
      a: "They solve different problems. Anki is a powerful flashcard app, but you have to create or import your decks and manage them yourself. In Owloud the cards build themselves: every word you save while reading comes with its translation, pronunciation, an example and the book you found it in, then gets scheduled with spaced repetition automatically. If you love tinkering with decks, keep Anki — if you'd rather just read stories and let the reviews happen, Owloud is for you.",
    },
    {
      q: "Does Owloud use spaced repetition?",
      a: "Yes — it's the heart of the flashcard system. Every saved word is scheduled so it comes back right before you'd naturally forget it: answer correctly and the word waits longer next time, miss it and it comes back soon. You review each word only when it actually needs reviewing, which is how a few minutes a day is enough.",
    },
    {
      q: "How do I cancel my subscription?",
      a: "Subscriptions are handled by Apple. You can cancel anytime from Profile → Manage subscription in the app, or in your iPhone's Settings → Apple ID → Subscriptions, and you keep Pro until the period ends.",
    },
  ],
  ctaTitle: "Which story will you start with?",
  ctaText: "Listen to your first story today, for free.",
};

export const home: Record<Lang, typeof es> = { es, en };
