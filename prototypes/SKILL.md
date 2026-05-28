---
name: tcs-design
description: Use this skill to generate well-branded interfaces and assets for The Children's Society (TCS), either for production or throwaway prototypes / mocks / decks. Contains essential design guidelines, colours, type, fonts, hand-drawn illustration cues, and a working UI-kit recreation of the TCS marketing site for componentised re-use.
user-invocable: true
---

# The Children's Society — design skill

Read the **`README.md`** in this directory first. It explains the brand, the two-axis (Breakpoint × Colour mode) token system, the editorial voice, and what's in the rest of the folder.

After the README, the most useful files are:

- **`colors_and_type.css`** — the token bundle. Drop it into any HTML and set `data-mode` + `data-theme` on `<html>`. Fonts, colours, spacing, heading sizes all wired.
- **`fonts/`** — BentonSans (8 weights × roman + italic) and TCS Beta (handwritten). Copy these next to any HTML you ship.
- **`assets/`** — logo (placeholder), iconography guide, illustrations slot. Read `assets/README.md` to understand the icon mapping (Lucide substitutes) and the illustration set.
- **`docs/`** — Numiko's full Figma handover: `architecture.md`, `colours.md`, `typography.md`, `spacing.md`, `components.md`, `usage.md`, `tokens.json`. Pull from these when in doubt.
- **`ui_kits/website/`** — a working click-thru recreation of the TCS website (Home → Donate → Story). Copy components out of `components.jsx` and `pages.jsx` rather than re-inventing.

## When you use this skill

If working on a visual artifact (slides, mocks, throwaway prototypes, deck, marketing comp, etc.):

1. Copy `colors_and_type.css`, the `fonts/` folder and any needed `assets/` into your output directory so the file works offline.
2. Lift components from `ui_kits/website/components.jsx` and `pages.jsx` — they are small and intentionally cosmetic. Don't rebuild a Header, Hero or Footer from scratch.
3. **Set the tone first.** Big bold sentence-case headlines (BentonSans Bold), one or two restrained brushy decorations, a handwritten pull-quote for emotional moments only, and a **single accent** (Broom yellow for Appeals / CTAs, Breaker bay teal only for Resources / longform research).
4. **Stay editorial.** Generous outer margins (`80–100px` desktop), constrained article body widths (`~700px`), square corners everywhere, 2px black borders on buttons.

If working on production code:

- Read `docs/usage.md` for the canonical naming + token-binding patterns.
- Read `docs/colours.md` for the brand-accent pivot rule — never bind components to primitive Broom 500 or Breaker bay 600; always go through `--brand-accent`.
- Inspect `_fig/TCS-Production-designs/` for the raw Figma extraction if you need pixel detail (caveats: vectors come through as positioned rectangles, so this is best for layout structure, not for illustration / logo / brush SVGs).

## When the user invokes this skill with no other guidance

Ask:

1. **What surface?** Marketing page, appeal landing, donate flow, longform article (Resources), deck slide, social asset, internal doc?
2. **Mode?** Light (the default) / Dark / Yellow flood (Appeals / urgency) / Resources Light/Dark (longform).
3. **What story are we telling?** What's the headline? What's the action you want the reader to take?

Then act as an expert designer in the TCS voice: produce a working HTML mock — or production-ready JSX — that uses the existing tokens, components and editorial patterns. Surface only one big idea per artefact; keep copy short and human.

## Hard rules — never break

- ❌ No bluish-purple gradients, no glassmorphism, no soft rounded "friendly" cards with shadows, no emoji, no Inter/Roboto in production (BentonSans only).
- ❌ Don't draw the TCS logo or hand-drawn illustrations from scratch. Use the placeholder assets and flag a request to the brand team for real exports.
- ❌ Don't mix Broom yellow and Breaker bay teal on the same page — they're branch-specific.
- ❌ Don't use the TCS Beta handwritten font for UI / body / buttons. Emotional pull-quotes and the footer affirmation only.
- ✅ Sentence case for everything except proper nouns.
- ✅ 2px square strokes, square corners, generous whitespace.
- ✅ "We" for the charity, "you" for the reader, "I" only inside a young person's quote.

## Caveats baked into this skill

- **Figma `Inter` substitution** — production tokens name `Inter` as a placeholder for `BentonSans`. We load BentonSans directly here. If you re-export from Figma, swap the family name.
- **Illustration SVGs are heavy** — each is 500 KB+ of stacked sub-paths and will hang a page if you stack them. Use the `.png` versions alongside in `assets/illustrations/`, `assets/decoration/`, `assets/dividers/` for production.
- **Bluesky icon is not in Lucide** — ask the brand team for the SVG if you need it.
