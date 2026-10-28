// ─── Books on the home page's level shelf ────────────────────────────────────
// A pick from the catalog (library.ts). Within each level, the best-known
// titles come first.

import { libraryItem } from "./library";

export const shelfLevels = ["A2", "B1", "B2", "C1"] as const;

export const shelfBooks = [
  // Classic Adaptations
  "alice-a2",
  "speckled-band-a2",
  "peter-pan-a2",
  "treasure-island-a2",
  "jungle-book-a2",
  "around-the-world-a2",
  "dracula-b1",
  "jekyll-hyde-b1",

  // Full-length classics
  "alice-wonderland",
  "wizard-of-oz",
  "the-little-prince",
  "old-mother-west-wind",
  "danny-meadow-mouse",
  "christmas-carol",
  "peter-pan",
  "jungle-book",
  "the-time-machine",
  "the-invisible-man",
  "the-monkeys-paw",
  "aesop-fables",
  "velveteen-rabbit",
  "tom-sawyer",
  "call-of-the-wild",
  "white-fang",
  "the-canterville-ghost",
  "from-the-heart",
].map(libraryItem);
