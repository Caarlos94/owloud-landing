# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Spanish speakers learning English (Mexico, the rest of Latin America and Spain), from beginner (A1) to advanced (C1). They come to owloud.app for one of two reasons:

- To decide whether to install Owloud, an iPhone app for learning English by listening to audiobooks.
- To find out how to learn English by listening. They land on the blog or the library from a search or an AI assistant's answer.

English speakers and visitors from other markets also arrive, but they are not the audience. The English pages under `/en/` mirror the Spanish ones.

## Product Purpose

owloud.app is the marketing and content site for the Owloud iOS app. It has two goals, and they matter equally:

1. **Downloads.** Turn visitors into App Store installs.
2. **Organic discovery.** Be found in search engines and quoted by AI assistants. The home page, the library and the blog all serve this goal.

Success means more installs and more organic visits. The site has no analytics of its own yet, so today neither can be measured on the site itself.

## Positioning

Owloud teaches English inside real stories instead of drills.

- The audiobooks are narrated at each level, and the text lights up word by word like karaoke as it plays.
- Tapping any word gives its Spanish translation, pronunciation and audio.
- Every word the user saves becomes a spaced-repetition flashcard on its own.
- The catalog is made for Spanish speakers and runs from A1 to C1. It has classics, both complete and adapted, plus 98 short stories. The stories cover places and customs from around the world.

The home FAQ positions Owloud against Duolingo (gamified drills) and Anki (decks you build yourself).

## Operating Context

**How visitors get the app**
- The download happens in the App Store. The app is iOS only, and Android is "coming soon".
- The app's share captions link to `owloud.app/get`, which forwards straight to the App Store.

**Pages**
- Home, in Spanish (`/`) and English (`/en/`).
- Library (`/biblioteca/`, `/en/library/`). It is generated from the app's Supabase catalog with `npm run sync:library`.
- Blog (`/blog/`, `/en/blog/`). It includes structured data (JSON-LD), RSS feeds and `/llms.txt`.
- Legal pages: privacy, terms, support and delete-account. The App Store listing links to them, so they must keep their URLs.

**Traffic**
- Where most visitors come from is unknown. It could be Meta ads, search or shared links.

## Capabilities and Constraints

**Stack and hosting**
- The site is a static Astro 7 site with Tailwind v4.
- It deploys to GitHub Pages (owloud.app) on every push to `main`.
- Since it is static, there is no server: no server redirects and no server-side code.

**Languages**
- Spanish is the main language and is served at `/`. English lives under `/en/`.
- Every piece of copy exists in both languages. TypeScript enforces this with `typeof es`.

**Data and assets**
- Catalog numbers (books, stories, hours of audio) are computed from `src/data/library`, never typed by hand.
- Fonts are self-hosted, with no Google Fonts request.
- Book covers come from `cdn.owloud.app` and are resized at build time.

**Free plan and Pro**

These terms appear on the site and must match the app:
- The free plan includes:
  - The adapted classics flagged `freeFull` in the catalog, from start to finish (4 on 2026-10-27).
  - Chapter 1 of three other classics.
  - 7 short stories that rotate every week.
  - Flashcards and quizzes.
  - Up to 50 saved words.
- Owloud Pro unlocks everything else.
- The annual plan has a 3-day free trial.

**Open decisions**
- Whether to show prices. Prices vary by App Store territory, and the site doesn't show any today.
- Which analytics the site should have.

## Brand Commitments

- **Name and mascot:** the name is Owloud. The owl mascot is in `public/owloud-mascot.png` and `public/owloud-curious.png`.
- **Identity:** the site carries the app's identity.
- **Voice:** friendly, plain and encouraging. In Spanish, it uses neutral Latin American *tú*.
- **Hero title:** written in Title Case on purpose, as display type.
- **Visual reference:** Carlos asked for the site to resemble eppika.com without copying it.

## Evidence on Hand

**Real material**
- **App Store rating:** it is public and must be read from the live listing, never hardcoded. On 2026-10-27 the Mexican storefront showed 5.0 from 4 ratings, and the US and Spanish storefronts had none yet.
- **Catalog figures:** computed from `src/data/library.json`.
- **App screenshots:** in `src/assets/features/` (one `-es` and one `-en` file per feature), plus `src/assets/hero-player.png`.
- **Blog article:** it uses measured data from the 98 stories (length, words, words per minute by level) and cites real studies.

**What we don't have, so it must not be invented**
- Real user testimonials. The old placeholder marquee is disabled in `src/components/Home.astro`.
- Press mentions.
- Download or user counts approved for publishing.
- An Android app.

## Product Principles

1. **Spanish speakers first.** The Spanish copy is the source. English mirrors it, never the other way around.
2. **Every page serves both goals.** Each page needs a clear path to the App Store, plus content that search engines and AI assistants can read and quote: plain answers, structured data, and facts up front.
3. **Show the real product.** Use real screenshots, the real catalog and real numbers. Never fabricate proof, reviews or usage figures.
4. **Facts live in one place.** Catalog numbers, free-plan terms and links come from the app's data or a single source in the code, so the site can't contradict the app.
