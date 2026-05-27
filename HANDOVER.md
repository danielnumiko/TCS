# Sitekit — Design system handover

Self-contained brief for a fresh Claude/Claude design session. Paste this whole thing in.

---

## Project context

You're working with **Sitekit**, Numiko's foundational Figma design system, currently being adapted as a base for **The Children's Society** (TCS). Built around fluid tokens that switch by mode. Figma file: `Sitekit with Claude` (file key `6IO6xPnCMYlUEidDteuVPX`). All component widths are built at **1280** as the master.

---

## Variable collections (6)

| Collection | Modes | Purpose |
|---|---|---|
| **Breakpoints** | 320 (sm) / 768 (md) / 1280 (xl) / 1600 (xxl) | Fluid values — spacing, padding, column layouts, text sizes per breakpoint |
| **Colours** | Light / Dark / Yellow / Resources Light / Resources Dark | Semantic colour tokens that reskin per theme |
| **Grid** | Width (single mode) | 1-12 column widths at each breakpoint (`Columns/N (320)` through `Columns/N (1600)`) |
| **Space scale** | Mode 1 (constants) | Raw spacing values: 3xs (4px), 2xs (8), xs (12), s (16), m (20), l (24), xl (28), 2xl (32), 3xl (36), 4xl (40), 5xl (44), 6xl (48), 7xl (56), 8xl (60), 9xl (64), 10xl (68), 11xl (72), 12xl (80), 13xl (100), 14xl (120), 15xl (140), 16xl (160), 17xl (200), 18xl (240), 19xl (300), 20xl (400), 21xl (500), 22xl (600), 23xl (700), 24xl (800) |
| **Tailwind colours** | Mode 1 (constants) | Brand palette primitives: Broom (yellow brand), Tangerine, Lightening yellow, Pixton blue, Breaker bay (teal brand), Wild watermelon, Cosmos pink, Navy + Black/White scales |
| **Typography** | Value (constants) | Font scale (12xl→xxs), Weights (Regular/Medium/Bold), Heading font (Brand font / Handwritten) |

---

## Colour architecture

Tokens cascade: **Primitive → Semantic → Component-level**.

### Top-level semantic tokens (resolve per mode)
- `Primary BG` — main themed surface (yellow in Yellow mode, teal in Resources Dark)
- `Secondary BG` — neutral surface (white-ish in light modes, dark grey in Dark)
- `Foreground` — opposite of bg (white on dark, black on light)
- `Type/Heading` — heading text
- `Type/Body` — body text
- `Primary Border` — border on themed surfaces
- `Secondary Border` — border on neutral surfaces
- `Brand accent` — currently the brand pivot. **All other "brand" tokens alias through this** (don't reference primitives like `Broom 500` or `Breaker bay 600` directly anywhere except on Accent itself)
- `Image overlay`, `Focus/Outline`
- `System colours/Focussed Blue`, `/Error Red`, `/Success Green`

### Button families (10) — each has Default/Hover/Active/Disabled states with BG/Border/Text/Icon slots
- `Button/Primary` — main CTA
- `Button/Secondary` — outline CTA
- `Button/Text input` — text fields, dropdowns, filters
- `Button/Text link primary` — inline links (Active state added: aliases to Accent)
- `Button/Text link secondary`
- `Button/Tags` — tag chips (Border only)
- `Button/Binary inputs` — checkboxes / radios
- `Button/Social` — social buttons
- `Button/List` — list-style buttons
- `Button/Tab` — tabs (Active/Inactive/Hover/Disabled)

### Theme mode pattern
Light + Dark are base. Yellow/Resources Dark are the brand-saturated themes (Primary BG = brand colour). Resources Light is a Light-but-teal variant (Light values everywhere except Broom→Breaker bay swaps).

To theme a page: set explicit Colours mode on the top-level frame. Children inherit.

---

## Spacing architecture (Breakpoints collection)

### `Spacing/Scale/X` — fluid spacing scale
Aliases to Space scale primitives. Each scale step can resolve differently per breakpoint. Naming: `xxs / xs / sm / m / lg / xl / 2xl / 3xl / 4xl / 5xl / 6xl / 7xl / 8xl / 9xl / 10xl / 11xl`.

### `Spacing/Padding/X` — purpose-named paddings
- `Spacing/Padding/Outer margin` — page edge padding
- `Spacing/Padding/Gutters` — column gutters
- `Spacing/Padding/Body width` — content max-width
- `Spacing/Padding/Logo width`
- `Spacing/Padding/Button height`
- `Spacing/Padding/Between slices (professional area)`

### `Spacing/Column layouts/N-N-N-N` — **THE KEY FLUID PATTERN**
Each is a float alias resolving to `Columns/N` per breakpoint. Bind a frame's width to this and it reflows across breakpoints automatically.

- `12-12-12-12` (full width all sizes)
- `12-6-6-6` (2-up: full at 320, 50% from 768)
- `12-6-4-4` (3-up: full→50%→33%)
- `12-6-3-3` (4-up: full→50%→25%)
- `12-12-3-6`, `8-9-6-6`, `12-12-4-4`, `4-3-2-2`, `6-3-2-2`

### `Spacing/Viewport %/N-N-N-N`
Same idea but as viewport-relative widths (e.g. `25-50-100-25`).

### `Font/Size/Header spacing/*`
- `H1 above` = Spacing/Scale/2xl, `H1 below` = Spacing/Scale/lg
- `H2 above` = xl, `H2 below` = m
- `H3 above` = lg, `H3 below` = sm
- `H4 above` = m, `H4 below` = xs
- `H5 above` = m, `H5 below` = xs
- `Paragraph spacing` = m

---

## Typography

Heading font: `Brand font` (TCS uses `BentonSans`) + `Handwritten` (TCS uses `TCS beta` brush script).
Weights: Regular / Medium / Bold.
Font scale: 12xl (120px) → 11xl (100) → 10xl (80) → 9xl (64) → 8xl (60) → 7xl (48) → 6xl (42) → 5xl (40) → 4xl (36) → 3xl (32) → 2xl (30) → xl (26) → lg (20) → md (18) → base (16) → sm (15) → xs (14) → xxs (13).

`Text/Headings/Body`, `Text/Headings/CTA`, `Text/Headings/Label`, `Text/Headings/Tags` — Breakpoint-fluid heading sizes for those use cases.

---

## Component architecture

### Master + breakpoint variants
Every Block / Slice / Organism is a single **COMPONENT_SET** built at **1280** width, with variants for breakpoints. Standard variant property names:
- `768+=True/False` — Sitekit canonical (default Sitekit components like Header, Jump links, Breadcrumb)
- `1024+=True/False` — Share block uses this
- `Breakpoint=320/480/768/1024/1400/1800` — Appeals components use this 6-step variant

### State variants on interactive atoms
- `State=Default / Hover / Active / Disabled` (Primary, Secondary, Accordion)
- `State=Default / Hover / Disabled` (Icon button, Social button, Text link, Tag, Nav item, etc.)
- `Selected=True/False, State=...` (Check box, Radio button)
- `Active=Monthly/One-off, State=...` (Donation Tabs)

### Breakpoints preview frame
Sibling to every component_set on its page:
- FRAME named `Breakpoints`, HORIZONTAL auto-layout, padding 50, itemSpacing 50, counterAxisAlignItems = MAX
- Children: instances at 320 / 768 / 1280 / 1600 widths
- Each instance has `setExplicitVariableModeForCollection(BreakpointCol, modeFor320|768|1280|1600)` set, optionally Colours mode too

---

## Atoms catalogue (📦 sections on Foundations/UI page)

| Section | Components |
|---|---|
| 📦 Icons | Icon (29 variants: Pause, Cost, Date, Time, Donate, Pin, Category tag, Pages, Search, Hamburger, Author, Give, End date, Download, Bullets, Twitter, Facebook, Bluesky, X, LinkedIn, Padlock, Chevron Right/Up/Left/Down + sm variants), UI/CTA, UI/Accordion button icon, Structured data icon |
| 📦 Buttons | Primary, Secondary, Icon button, Social button, Large play, List button, Accordion button, Dropdown |
| 📦 Links | Link underline, Hyperlink (both with Default/Hover/Disabled) |
| 📦 Navigation | Menu link, Menu, Nav item, Breadcrumb, Tabs |
| 📦 Form atoms | Text field (Variants: Text field / Text field with heading / Select / Text box × Default/Hover/Disabled), Check box, Check box field, Radio button, Radio field, Amounts/Tabs (donation) |
| 📦 Tags | Tag, Tags, Category tag |
| 📦 Bullets | Bullet (Variant=Bullet/Number), Bullets list |
| 📦 Notifications | Cookie banner |

---

## Page architecture (Blog / Content as reference)

A page is a single COMPONENT (e.g. `Blog page`, `Content page`) built at 1280, VERTICAL auto-layout, hug height. Children are instances of Blocks/Slices stacked top-to-bottom, with `Divider/1600` instances between major sections for visual rhythm.

Page-level Breakpoints preview frame sits alongside (4-instance HORIZONTAL layout at 320 / 768 / 1280 / 1600).

---

## Conventions and gotchas

1. **No primitive references for brand colours** — `Broom 500 (brand)` and `Breaker bay 600 (brand)` are aliased through `Brand accent`. Don't bind anything directly to those primitives except Brand accent itself.
2. **Theme modes attach to the outermost frame** — children inherit. To preview a component in a theme, set the Colours mode on the wrapping page/frame.
3. **`768+=True` means desktop, `768+=False` means mobile** (the breakpoint flag goes True at 768 and above).
4. **Components are built at 1280** but the variants exist to lock specific layouts at smaller breakpoints — fluid tokens handle the in-between.
5. **Variant property naming matters** — when swapping instances, mismatched property names lose state (e.g. Resources had `1280+=` while Sitekit uses `768+=`).
6. **Skip COMPONENT_SET, VECTOR, BOOLEAN_OPERATION when auditing fills/strokes** — they have intrinsic styling that shouldn't be tokenised.
7. **`figma.combineAsVariants(components, parent)` requires COMPONENTs** (not FRAMEs). Use `figma.createComponentFromNode(frame)` to convert.
8. **Font availability** — `BentonSans` and `TCS beta` may not be available in plugin environments; structural moves of nodes referencing them can fail with "unloaded font" errors. Fix by replacing offending text with Inter before moving, or work in Figma directly.
9. **`Brand accent` is the single brand pivot** — change Brand accent → all downstream brand-themed tokens follow.

---

## File structure (pages)

```
Cover
─────
🗂 Foundations
  ↪ 🛠️ UI            (the atoms catalogue — sections above)
  ↪ 🛠️ Style guide
  ↪ 🛠️ Graphic
🗂 Blocks
  ↪ 🧱 Header / Menu / Hero / Intro block / Share / Related / Newsletter / Footer
🗂 Slices             (the long list — Teasers, 50/50, CTA, Quote, Stats, etc.)
🗂 Resources          (📄 component-per-page, themed Resources Dark/Light)
🗂 Appeals            (🍕 component-per-page, themed Yellow)
📄 Blog               (example page composition)
📄 Content            (example page composition)
🗑️ Archive
```

---

If you need to inspect anything live: use the `mcp__c2a65257-...__use_figma` tool to run JS against the Plugin API. Query `figma.variables.getLocalVariableCollectionsAsync()` for collections, `figma.variables.getLocalVariablesAsync('COLOR')` for vars.

That should give you everything to start building a new feature on-system.
