// ─── /llms.txt: the site in a few lines, for AI assistants ───────────────────
// A plain-text map of what Owloud is and which pages say more (format:
// llmstxt.org). The catalog numbers and the article list come from the same
// data as the pages, so it stays current with every build.

import type { APIRoute } from "astro";
import { blogPosts, postPath } from "../data/blog";
import { libraryItems } from "../data/library";
import {
  appStoreUrl,
  blogPath,
  homePath,
  libraryPath,
  type Lang,
} from "../i18n/ui";

export const GET: APIRoute = async ({ site }) => {
  const link = (path: string) => new URL(path, site).href;
  const books = libraryItems.filter((i) => i.kind !== "story").length;
  const stories = libraryItems.length - books;
  const hours = Math.round(
    libraryItems.reduce((sum, i) => sum + i.seconds, 0) / 3600,
  );
  const articles = async (lang: Lang) =>
    (await blogPosts(lang))
      .map(
        (post) =>
          `- [${post.data.title}](${link(postPath(post))}): ${post.data.description}`,
      )
      .join("\n");

  const text = `# Owloud

> Owloud es una app para aprender inglés escuchando audiolibros, hecha para hispanohablantes. El texto se ilumina palabra por palabra mientras escuchas, tocas cualquier palabra para ver su traducción al español y repasas las que guardas con tarjetas de repetición espaciada.

- Niveles: del A1 al C1 del Marco Común Europeo (MCER).
- Catálogo: ${books} libros (clásicos completos y adaptados) y ${stories} historias cortas, con unas ${hours} horas de audio narrado.
- Gratis: el capítulo 1 de tres clásicos, 7 historias cortas que cambian cada semana, tarjetas, quizzes y hasta 50 palabras guardadas. Owloud Pro desbloquea todo lo demás; el plan anual incluye 3 días de prueba gratis.
- Descarga para iPhone: ${appStoreUrl}

## Páginas

- [Inicio](${link(homePath.es)}): qué es Owloud, cómo funciona y preguntas frecuentes.
- [Biblioteca](${link(libraryPath.es)}): todo el catálogo por nivel, con la duración y el resumen de cada título.
- [Soporte](${link("/support")}): cómo contactar al equipo.

## Blog

${await articles("es")}

## English

- [Home](${link(homePath.en)}): what Owloud is, in English.
- [Library](${link(libraryPath.en)}): the full catalog by level, in English.
- [Blog](${link(blogPath.en)}): guides to learning English by listening.

${await articles("en")}
`;
  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
