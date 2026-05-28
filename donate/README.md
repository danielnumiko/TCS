# The Children's Society — Design System

This is a working design system for **The Children's Society** (TCS), built from their production Sitekit (the Figma-led system by Numiko).

Use it to:
- prototype new pages, campaigns, slides and decks in the TCS voice
- generate hand-off-ready HTML for designers / engineers
- check brand decisions against the documented foundations

> "For 140 years, The Children's Society has been here for young people when they most need support. Today, we've never been more determined to create a society built for all children… every child deserves to feel hopeful, happy and excited for their future."

---

## Sources

| What | Where |
|---|---|
| Figma master | Sitekit / `TCS Production designs.fig` (file key `6IO6xPnCMYlUEidDteuVPX`). Extracted React/JSX components + token CSS in `_fig/` (read-only). |
| Docs handover | Numiko repo: <https://github.com/danielnumiko/TCS> (mirrored locally to `docs/`). |
| Production site | <https://www.childrenssociety.org.uk> |
| Fonts | `fonts/BentonSans-*.otf`, `fonts/TCSBeta-Regular.otf` |

If you have access to the Figma file or the GitHub repo, you'll get more fidelity by reading directly — particularly for the `Illustration` set and the multi-stroke `Brush` decorations, which extract poorly to JSX (vectorised to thousands of positioned rectangles).

---

## Index

| Path | What |
|---|---|
| `README.md` | This file. Start here. |
| `SKILL.md` | Agent-skill manifest — point Claude / Claude Code here to design with this system. |
| `colors_and_type.css` | The token CSS. Colour modes, breakpoints, typography, spacing. Drop into any page. |
| `fonts/` | BentonSans (brand sans) + TCS Beta (handwritten). Six weights + italic. |
| `assets/` | Logo, brand icons, hand-drawn illustration placeholders, brushstroke shapes. |
| `docs/` | Deep-dives carried over from Numiko's handover: `architecture.md`, `colours.md`, `typography.md`, `spacing.md`, `components.md`, `usage.md`, `tokens.json`. |
| `_fig/` | Raw Figma extraction (inventory, tokens.css, JSX per component). Read-only reference. |
| `ui_kits/website/` | Pixel-recreation of the TCS marketing site. Click-thru prototype. |
| `preview/` | Cards rendered into the Design System tab. |

---

## Quick start

```html
<!doctype html>
<html lang="en-GB" data-mode="1280-xl" data-theme="light">
  <head>
    <link rel="stylesheet" href="colors_and_type.css" />
  </head>
  <body>
    <h1>Every child deserves to feel hopeful.</h1>
    <p>For 140 years, The Children's Society has been here for young people…</p>
  </body>
</html>
```

Switch the theme by changing `data-theme`:

| Theme | When |
|---|---|
| `light` | Default — most pages, white background, black ink |
| `dark` | Inverted, black background, white ink |
| `yellow` | Appeals, the "Keep in touch" newsletter, urgency moments — flooded with Broom yellow |
| `resources-light` | Longform Resources articles — brand pivot from Broom yellow to Breaker bay teal |
| `resources-dark` | Resources pages on dark themed sections |

Switch the breakpoint by changing `data-mode` to `320-sm`, `768-md`, `1280-xl`, or `1600-xxl` (default). Heading sizes, paddings and the column scale all flip automatically.

---

## CONTENT FUNDAMENTALS — how TCS writes

TCS writes with **warmth, urgency, and unflinching honesty about what children face**. The voice is the voice of a charity that has been doing this for 140 years and is not going to pretend it's easy.

### Tone

- **Plain, direct British English.** "We're here when they need us." Not "We provide multi-agency youth advocacy interventions." Sentence fragments OK.
- **Hopeful but truthful.** Acknowledge the hard reality, then point to action.
  > "Right now, there are children living through abuse, exploitation and neglect. For them, childhood is a daily battle, with nowhere to turn. **You can change this.**"
- **Empowering, never pitying.** Young people are the protagonists of their own stories — "Helya created…", "Andrew's painting…", "Louise's story" — TCS is the supporting cast. Avoid "vulnerable children" as a label without a name and a story.
- **Specific verbs.** "Listen. Reach. Empower. Collaborate." Big verbs but earned by detail.

### Voice

- **We / you, never the brand in third person.** The reader is `you`. The charity is `we`. Children are `they` or, better, named.
- **Active, not passive.** "Donate today" — not "Donations are being accepted".
- **Short headlines.** 3–8 words is the sweet spot. "Making a difference", "In their own words", "How you can help", "Keep in touch".
- **No marketing fluff.** No "leverage", no "innovative solutions", no "world-class". TCS earns trust by sounding like a person.

### Casing

- **Sentence case** for headings and section titles. Capitalise only the first word and proper nouns.
  - ✅ "Making a difference"
  - ✅ "How your money helps young people"
  - ❌ "Making A Difference"
- **Title Case for proper nouns** only — "The Children's Society", "The Good Childhood Report", "RHS Chelsea Flower Show", "Christingle".
- **All caps** is rare — limited to the brand mark elements like RISE appeal name and small system labels.

### Person + perspective

- **First-person plural ("we", "us") for the organisation.** Always.
- **Second person ("you") for the reader.** "You can help young people break free."
- **First-person singular ("I") only inside a young person's quote.**
  > "I love painting because this is where I can express my ideas and thoughts to others."
- **Third-person narrative ("Helya created…", "Andrew's painting…")** when telling someone else's story.

### Emoji + symbols

- **No emoji in user-facing copy.** Ever. The hand-drawn illustrations do the emotional work.
- Currency: `£` not "GBP". UK English throughout (organisation, programme, behaviour, colours).
- Numbers: spell out one–nine; numerals from 10 upwards. Big donation stats stay as numerals: `4,634`, `140 years`.
- Ampersands `&` only in proper names (e.g. "Quote & CTA"). Otherwise use "and".

### Punctuation

- Single quotes for nested quotes; double for the outermost. "I love painting because this is where I can express my ideas and thoughts to others."
- Brushy handwritten pull-quotes go without trailing punctuation:
  > *I feel like I belong*
- Em-dash with spaces — like this — for asides.
- Apostrophes in possessives respected: "young person's painting", "The Children's Society", "Andrew's painting".

### Copy patterns

| Section | Pattern | Example |
|---|---|---|
| Hero | Handwritten pull-quote OR campaign promise | *"It helped me become more confident."* |
| Section header | Sentence-case, ≤ 6 words | "Making a difference" |
| Stat block | Big numeral + one-line plain-English meaning | **4,634** &nbsp; Children and young people were supported through our services and events 2024/25 |
| Story teaser | Category tag, then 110-character lorem-style summary | `Category tag` &nbsp; "110 character lorem ipsum dolor sit amet, consectetur" |
| CTA | Verb + noun, never a sentence | "Donate today" • "Read Zack's story" • "Make a donation" |
| Newsletter | Two lines: a verb-led ask, then a one-line privacy reassurance | "Keep in touch / Sign up to receive email updates about our work and how you can support vulnerable children." |
| Footer affirmation (signature) | Handwritten, 3–5 words, never punctuated | *I feel like I belong* |

---

## VISUAL FOUNDATIONS — the look

TCS is **bold, warm and slightly hand-made**. A typographic, content-first system, but punctuated by **brush strokes, hand-drawn illustrations and a flag of Broom yellow** that all say "this is made by people, for people".

### Colour vibe

- **Broom yellow `#FFEB00`** is the primary brand colour and carries an enormous amount of weight. It signals optimism, action and emergency at once. Used for: the donate CTA, the newsletter section, appeal pages (whole-page floods), the icon inside primary buttons.
- **Breaker bay teal `#029E9C`** is the secondary brand colour, scoped to **Resources** content (longform reports / research). The two never mix on the same page.
- **Black `#000000`** and **white `#FFFFFF`** do all the heavy lifting. Most surfaces are white; most ink is black. The brand colours are accent + flood — sparingly used in headers/cards, generously used in CTAs and decorative moments.
- **No gradients.** Backgrounds are solid. The only gradient in the system is the subtle dark scrim over hero photography (`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0))`).
- **No mid-tone "brand pastels"** — supporting accents (tangerine `#F28500`, lightening yellow `#F0B700`, pink, blue, navy) appear only inside illustrations, never as UI surfaces.

### Type vibe

- **BentonSans Bold** drives all headings — confident, geometric, friendly humanist sans. Sentence case.
- **BentonSans Regular** for body, Medium for CTAs.
- **TCS Beta** (a brush script) is reserved for **emotional pull-quotes and footer affirmations only**. Never UI. Never paragraphs longer than a single sentence.
- Headings are **big** — at 1280 the H1 is `80px`, at 1600 it climbs to `120px`. Don't be timid with type scale.
- Line-height tight on headings (`1.05–1.15`), comfortable on body (`1.45`).
- Letter-spacing very slightly tightened on display sizes (`-0.01em`), nothing crazy.

### Layout + grid

- Built on a **12-column grid** with token-driven fluid widths (`Spacing/Column layouts/N-N-N-N`). See `docs/spacing.md`.
- **Page edge padding** climbs from `20px` at mobile to `100px` at desktop+. Outer margins are generous; the design breathes.
- Two stacking rhythms: **between major sections** (sitewide ~120px at desktop) and **inside a slice** (slice title gap ~40px).
- Article body widths are **constrained** (`704px` at 1280, `672px` at 1600) — text columns are never the full page width.
- Off-grid two-column layouts (e.g. content left, large pull-quote right) are common in editorial content.

### Backgrounds

- **Full-bleed photography** on heroes — always with a top-to-bottom dark scrim so headline + handwritten quote read against any image.
- **Solid colour surfaces** for slices — white, black, or Broom yellow (no in-betweens).
- **Hand-drawn brush strokes** mark the top + bottom edges of certain heroes and section dividers — gives the system its "made by hand" feel. Stored in Figma under `Brush/375|768|1280|1680 - Top|Bottom`.
- **No repeating patterns or textures.** No noise. No grain.

### Imagery direction

- **Photography is warm, candid, documentary.** Young people in their own environments — outdoors, parks, bedrooms, classrooms. Eye contact common. No staged corporate shots, no stock-photo-handshake.
- **Crops are generous** — full-figure or upper-body, rarely floating heads.
- Colour palette of imagery skews **warm green/brown** (parks, autumn) with cool counterpoints (denim, grey).
- Subjects are **diverse without tokenism** — wide range of ages (7–25), ethnicities, urban + rural settings.
- Images carry a quote or story; rarely an image-only decoration.

### Illustrations

- The supporting visual language is **hand-drawn yellow + orange illustrations with a black brush outline**. Six core illustrations: Campaign (placard), Donate (heart on a hand), Volunteer (hand with a star in the palm), Fundraising (two overlapping hearts), Heart (running figure), Rainbow.
- Illustration style is **expressive, not precise** — wobbly outlines, double-fill in two close-yellows for depth.
- They are used at small/medium size (≈120–180px) inside cards (e.g. the "How you can help" four-up grid).
- Never illustrate things photography can do better. Illustration is for actions, concepts, affordances — not for things.

### Decoration

- **Brush strokes** (top + bottom) bracket hero sections and act as section dividers.
- **Black down-arrow** sits between major sections, painted in a brushy style — a hand-drawn "keep scrolling" cue.
- **Decorative pink curl** (`Decoration/Pink curl`) — small flourish for appeals.
- **Yellow blob** behind heading boxes — used in Appeals to ground the title.
- **No decorative iconography of "decoration's sake"** — every brush stroke + arrow + blob is doing a job.

### Animation

- **Minimal and brand-respectful.** The site is content-led; motion is supporting.
- **Cross-fades and gentle slide-ins** on hero copy and accordions; ~`200–300ms`, easing `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`.
- **No bounces, no springs, no parallax.** No emoji-style spinners.
- Hover states animate `200ms` `ease-out`.

### Hover states

- **Inversions are the rule.** Default `Black button → white text`; hover swaps to `white button → black text`. The border stays black to give a thick stroke on hover.
- **Outline buttons** (`Secondary`, brand-yellow fill in Light) hover to neutral light grey, with black text persisting.
- **Tags** lift by darkening the border one step (`Black 800` from `Black 950`).
- **Text links** keep colour but thicken the underline from `1.5px` to `3px` on hover.
- **Cards / teasers**: image slot brightens / scales subtly (`scale(1.02)`, `200ms`); title gets an underline appearing.

### Press states

- **Buttons** invert again (active = same as hover for most families, often the brand-accent fill takes over).
- **No shrink-on-press.** No `scale(0.98)`. The design is squared; press is colour-change only.

### Borders

- All buttons have a **2px solid black border** (`--pad-button-weight: 2px`). The border is the system's signature — visible on white *and* black surfaces (where it becomes white).
- **Cards rarely have borders** — they rely on background colour change to separate from the page.
- **Form fields** have a 2px black bottom border (not a full box). Hover: full 2px box.
- **Primary/Secondary border tokens** are very subtle — `White 100` on light, `Black 900` on dark — used for dividers and meta-information panels, not card outlines.

### Corner radii

- **Almost everything is square.** Buttons, cards, image slots, modals — no rounded corners by default.
- **Circular elements** (icon button, social icon button, "play" button, the speech-bubble badge above a primary button) are fully circular (`border-radius: 50%`).
- The yellow "A" badge that sits at the top-left of every primary CTA button is a `56px` white circle. This is a system signature — keep it.

### Shadows + elevation

- **No outer drop-shadows on cards.**
- A **20px dropshadow token** (`--pad-dropshadow: 20px`) exists, only used on the donate-amount selection inside the donate widget — to lift the active amount above the yellow surface.
- **Elevation is conveyed by colour and stroke**, not blur.

### Use of transparency + blur

- **Transparency is for image scrims.** A linear gradient over hero photography, `rgba(0,0,0,0.5) → rgba(0,0,0,0)` from top to bottom (or vice-versa) — enough to ensure caption + handwritten quote are legible.
- **No backdrop blur.** No frosted glass. No glassmorphism.

### Cards

- A typical card is **white surface, black 2px border on the image only**, image at the top, then category tag (small, bordered pill), then title (sentence-case bold), and ⚪ optionally a body line.
- Story cards (small portrait cards inside the "In their own words" grid) overlay a **gradient + name + arrow** on the image — no body text.
- The "How you can help" cards are illustration + heading + body, with the illustration sitting flush-left at the top.
- **No card has a coloured left-border accent.** This is *not* the visual language.

### Layout rules

- **Header is fixed at the top of the page** — black bar with logo at the very top-left in a `120×120` white box and Donate CTA in a yellow box at the top-right.
- **Footer is full-width black**, with the white circle "I feel like I belong" handwritten signature in the bottom-right corner.
- The hero always pushes through the header (the photo extends behind the header bar).

### What this system avoids

- ❌ Bluish-purple gradients
- ❌ Soft rounded "friendly" cards with shadows
- ❌ Emoji or unicode symbols
- ❌ Glassmorphism / blur
- ❌ Generic Inter / Roboto type. *(Note: `Inter` is named in the Figma file as a placeholder for `BentonSans` in environments where the production font can't load — when designing, prefer BentonSans.)*
- ❌ Bouncy / springy animations
- ❌ Multiple competing accent colours on the same page
- ❌ Dense data-vis with gradients and many colours — TCS prefers single big numerals with one supporting sentence

---

## ICONOGRAPHY — see `assets/README.md` for the full guide

In short:

- **Icons are sparse, square-cap line glyphs**, ~24px, drawn as inline SVG, all black (or white on dark surfaces). Stroke-only style, ~2px stroke.
- The Figma `Icon` set covers: Pause / Cost / Date / Time / Donate / Pin / Category tag / Pages / Search / Hamburger / Author / Give / End date / Download / Bullets / Twitter / Facebook / Bluesky / X / LinkedIn / Padlock / Chevron Right/Up/Left/Down (regular + sm).
- **Hand-drawn illustrations are not icons** — they are larger and emotional; they live in cards, not in lines of text.
- **No icon-font dependency.** Drop SVGs inline (`assets/icons/`) — substitutes from [Lucide](https://lucide.dev) (`stroke-width: 2`) are used as fall-backs and flagged.
- **Bluesky** is a TCS-specific addition (a TCS icon — Lucide doesn't have it natively).

See `assets/README.md`.

---

## Caveats + things to check

- **The Figma `Illustration` and `Brush` SVG exports are huge** — each illustration is 500 KB–900 KB of stacked sub-paths and chokes browser rendering when more than one is on a page. The system ships **PNG renders alongside** (`assets/illustrations/*.png`, `assets/decoration/*.png`, `assets/dividers/*.png`) at 360 × 360 / matched sizes — use those for production. SVG originals are kept for re-rendering at different sizes.
- **`Inter` is named in the Figma tokens** as a placeholder for `BentonSans` — when designing here, BentonSans is loaded directly (`fonts/`).
- **TCS Beta** (the handwritten font) is included; if it fails to load in any environment, fall back to `Caveat` or `Patrick Hand` from Google Fonts (already in the font stack).
- **Bluesky icon** is not in Lucide; ask the brand team for the SVG when needed.

---

## How to use this system

1. **Read `docs/architecture.md`** — the mental model of two-axis theming.
2. **Read `docs/usage.md`** — how to compose pages and choose tokens.
3. **Pull a UI kit from `ui_kits/website/`** — copy components, don't re-invent.
4. **Stay in the tokens.** When you need a one-off value, check `colors_and_type.css` first; the brand will almost always have an answer.
5. **Iterate with the user, frequently.** This system loves bold, considered editorial layouts — show small + early.
