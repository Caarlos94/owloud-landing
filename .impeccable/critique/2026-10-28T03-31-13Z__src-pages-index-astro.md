---
target: la home
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:/Users/carlosislas/Developer/owloud-web/src/pages/index.astro"
target_fingerprint: "sha256:cc77829fbb5fbaf78f275e6b7bb274818a3db41148e3b0e600f04e61ac0a5df6"
target_path: /Users/carlosislas/Developer/owloud-web/src/pages/index.astro
timestamp: 2026-10-28T03-31-13Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + overlay)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Feature tour shows progress; the shelf advances every 3 s with no visible playing state |
| 2 | Match System / Real World | 2 | Level pills show only "A2 B1 B2 C1" on mobile; "repetición espaciada" unexplained; hero "A1 → C1" vs shelf "del A2 al C1" |
| 3 | User Control and Freedom | 2 | Marquee, shelf autoplay and 6 s tour move on their own; marquee pauses only on hover |
| 4 | Consistency and Standards | 2 | Google Play div looks identical to the real App Store link; drawn karaoke (amber chips, white text) differs from the app's |
| 5 | Error Prevention | 2 | Android gets a dead button; "sin conexión" and "primer capítulo gratis" over-promise the free plan |
| 6 | Recognition Rather Than Recall | 3 | Clear labels; free-plan terms only in the FAQ at the bottom |
| 7 | Flexibility and Efficiency | n/a | Single-path persuasion page |
| 8 | Aesthetic and Minimalist Design | 3 | Coherent sticker style; same 3 features shown 3 times |
| 9 | Error Recovery | 2 | Tapping Google Play gives no feedback; only a 14px note at 75% opacity explains it |
| 10 | Help and Documentation | 3 | Good FAQ with JSON-LD; missing "¿Qué es Owloud?", "¿Hay app para Android?", "¿Qué nivel necesito?" |
| **Total** | | **22/36** | **Acceptable (61%)** |

## Design Specificity Verdict

LLM: Craft and details are owned (sticker tokens mirror the app, real per-language screenshots, real covers, product-specific "why" illustrations), but the structure is the standard app-landing template: hero with phone and floating cards, marquee, carousel, tabbed tour, 4-card grid, CTA, FAQ. The karaoke word-by-word highlight, Owloud's most ownable trait, is never shown at a readable size (230px screenshot covered by floating cards; 15px decorative animation). No audio anywhere. The 98 short stories (79% of catalog, only A1 content) are absent.

Detector: CLI on .astro = 0 (regex-only, undercount). URL scan = 21 findings ES (22 in overlay), 23 EN. Real: low-contrast x3 (white on amber 2.2:1 Home.astro:739; footer 3.9:1 Base.astro:271; closing note 4.45:1 ClosingCta.astro:99); straggler/unbalanced-heading x3 (no text-wrap balance/pretty anywhere). Animation artifact: gray-on-color x1-2 (kw keyframe mid-fade; underlying white-on-amber issue). False positives: hard-offset-shadow x13 (intentional sticker brand), nested-cards x1 (aria-hidden decorative mock).

Overlays left open in Chrome tabs [Human] (ES) and [Human] EN.

## Overall Impression

Honest, well-built and warm, but it sells Owloud with the same template as any language app and over-promises in three places. Biggest opportunity: make the karaoke with audio the protagonist.

## What's Working

1. Honest proof: placeholder testimonials disabled; Free/Pro FAQ matches the app; no invented ratings or counts.
2. Sticker system that explains instead of decorating; "why" illustrations explain each mechanism at a glance.
3. Motion respects preferences (motion-safe/motion-reduce everywhere; tour becomes pills with aria-live on mobile); Duolingo/Anki FAQ answers are quotable.

## Priority Issues

**[P1] Fake Google Play button that looks real.** StoreButtons.astro:47 is a div with the same class, size and black fill as the App Store link, in hero and ClosingCta; under the thumb on mobile. Android is the majority in MX/LatAm. Fix: App Store as the single primary; replace Play with a muted "Android: muy pronto" chip; say "para iPhone" visibly. Command: /impeccable clarify

**[P1] Promises the app doesn't keep.** "Funciona sin conexión" (home.ts:34) vs offline downloads are Pro (home.ts:147); "Elige un clásico a tu nivel y escucha el primer capítulo gratis" (home.ts:174) vs only 3 free classics; hero "A1 → C1" (Home.astro:280) vs shelf "del A2 al C1". Fix: precise copy, mark offline as Pro or drop, show A1 stories. Command: /impeccable clarify

**[P1] Weak organic discovery.** H1 renders "Aprende Inglés<span>Escuchando…" with no space; only FAQPage JSON-LD, no MobileApplication schema; no quotable facts though library.json gives 124 titles, 98 stories, ~65 h audio, A1–C1, iPhone only. Fix: {" "} before span, app schema, static facts strip computed from data, add 3 missing FAQs. Command: /impeccable harden

**[P2] Signature feature underplayed; reads as template.** Hero karaoke covered by floating cards; Home.astro:661-690 animation lights 3-4 words at once, white on amber, smeared and unreadable (detector agrees); 3 features repeated in strip, tabs and cards. Fix: large Lora karaoke line lighting word by word, optional real narrated clip, tap-to-translate on the page; cut one feature list. Commands: /impeccable bolder, then /impeccable distill

**[P2] Motion the visitor can't control.** Mobile marquee ~1.5 items in a 40 s loop, pauses only on hover (WCAG 2.2.2); shelf autoplay (Home.astro:921-933) resumes after touch; duplicate covers at ≥1440. Fix: static strip, stop autoplay permanently after first interaction, no loop when a level has few covers. Command: /impeccable quieter

## Persona Red Flags

- Jordan: unnamed level pills on mobile; "repetición espaciada"; "3 días de prueba en el plan anual" before plans are explained; covers do nothing on tap; "iPhone" not in visible copy.
- Riley: offline vs Pro-only; "elige un clásico" vs 3 free; A1 promised, absent on shelf; rabbit/conejo card vs pocket/bolsillo screenshot; duplicate covers.
- Casey: ~120px empty above H1 (pt-40); dead button under thumb; shelf moves under finger; feature pill ~765px from the screenshot it changes; 20px-tall footer links; mobile nav lacks Biblioteca/Blog.
- Lupita (A2, Mexico, Android, from a Meta ad): first big element is a dead Google Play badge; "Descargar" goes to the App Store; no way to be notified when Android ships.

## Minor Observations

- Contrast: footer 3.9:1, ClosingCta note 4.45:1 (/80 fixes), "Continuará" 2.2:1.
- text-wrap: balance on headings, pretty on body.
- Hero floating cards not aria-hidden; FAQ "▸" not aria-hidden.
- Dev comments (StoreButtons.astro:41-43 with Play URL, H1 comment) ship in public HTML.
- OG image is the square mascot.
- Default blue focus ring, not on-brand.
- Page ends on "¿Cómo cancelo mi suscripción?" with no CTA after the FAQ.

## Questions to Consider

1. What would 10 seconds of real narration (A2 vs C1) do for the install decision?
2. Who is the Google Play badge for today, other than the people it will disappoint?
3. Stories are 79% of the catalog and the only A1 entry. Why does the home only talk about classics?
4. Should the last thing read be cancellation or the owl?
