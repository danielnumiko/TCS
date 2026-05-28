# Architecture

## The mental model

Sitekit is a **two-axis system**:

```
                Breakpoint mode
                (320 / 768 / 1280 / 1600)
                       │
                       ▼
    ─── Spacing/* tokens resolve to different px ───
    ─── Text/Headings/* resolve to different px ────
                       │
                       │
Colours mode ──────► Component renders
(Light/Dark/Yellow/                ▲
Resources Light/                   │
Resources Dark)                    │
    ─── Primary BG, Type/Heading, Button/Primary/* ───
        all resolve to different hex per mode
```

Two collections drive everything:
- **Breakpoints** sets sizes (spacing, text, column widths) per device width
- **Colours** sets the visual theme

Set the right mode on the outermost frame of a screen / component instance. Everything inside inherits.

## How tokens cascade

```
Primitive layer        Tailwind colours: Black 950, White 50, Broom 500 (brand)…
                       Space scale:      4px, 8px, 12px… 800px
                       Typography:       12, 14, 16, 18… 120
                                ▼
Semantic layer         Brand accent → Broom 500 (Light/Dark/Yellow), Breaker bay 600 (Resources)
                       Type/Heading → Black 950 (light modes), White 50 (Dark)
                       Spacing/Scale/m → 12px @ 320, 16px @ 1280
                                ▼
Component layer        Button/Primary/Default/BG → aliases Black 950 in Light, White 50 in Dark
                       Text/Headings/H1 → 48 @ 320, 80 @ 1280
```

Bind component fills/strokes/dimensions to the **semantic** layer, not primitives. Brand colours go through `Brand accent`, so swapping a brand only requires changing one alias.

## File structure (Figma pages)

```
Cover
─────
🗂 Foundations
  ↪ 🛠️ UI               atoms catalogue: Icons / Buttons / Links / Navigation / Form atoms / Tags / Bullets / Notifications
  ↪ 🛠️ Style guide
  ↪ 🛠️ Graphic         Brush strokes, dividers, illustrations, decorative shapes, logo, placeholders
🗂 Blocks
  ↪ 🧱 Header / Menu / Hero / Intro block / Share / Related / Newsletter / Footer
🗂 Slices
  ↪ 🍕 Teasers / 50/50 / Donation / Stories / Stats / Quote / Box out / CTA / Form / etc.
🗂 Resources              📄 component-per-page, themed Resources Dark/Light
🗂 Appeals                🍕 component-per-page, themed Yellow
📄 Blog                   example page composition
📄 Content                example page composition
```

Atoms live in `🛠️ UI` — every page of a real screen uses **instances** of these.

## Component conventions

### One master per breakpoint family

Every Block / Slice is a single **COMPONENT_SET** built at 1280 width:
- Variants for breakpoints (responsive)
- Variants for state (interactive — Default/Hover/Active/Disabled)
- Sometimes nested compound variants (e.g. `Variant=Image, State=Default`)

### Variant naming

- `768+=True/False` — Sitekit canonical: the responsive flag is True at 768 and above
- `1024+=True/False` — Share block uses a higher breakpoint flag
- `1280+=True/False` — Footer uses 1280 cutoff
- `Breakpoint=320/480/768/1024/1400/1800` — Appeals uses a 6-step granular variant
- `Columns=2/3/4` — for grid-based slices (Teaser, Stats)
- `State=Default/Hover/Active/Disabled` — interactive states
- `Variant=...` — design variation axis (e.g. Image / Video / Quote on 50/50)

### Breakpoints preview frame

Sibling to every master component_set on its page:
- FRAME named `Breakpoints`
- HORIZONTAL auto-layout, padding 50, itemSpacing 50, counterAxisAlignItems = MAX
- Children: instances at 320 / 768 / 1280 / 1600 widths
- Each instance has `setExplicitVariableModeForCollection(BreakpointCol, modeFor320|768|1280|1600)` set, often Colours mode too

This gives an at-a-glance check that the responsive behaviour works.

## Page composition

A real screen ("Blog page", "Content page") is itself a COMPONENT — VERTICAL auto-layout, hug height, fixed 1280 width. Children are instances of Blocks and Slices stacked top-to-bottom, with `Divider/1600` instances between major sections for visual rhythm.

A page also gets its own Breakpoints preview (4 instances at 320/768/1280/1600).

## Theming a section

```js
// In a plugin, to theme a frame:
const collections = await figma.variables.getLocalVariableCollectionsAsync();
const coloursCol = collections.find(c => c.name === 'Colours');
const yellowMode = coloursCol.modes.find(m => m.name === 'Yellow');

frame.setExplicitVariableModeForCollection(coloursCol, yellowMode.modeId);
// All children inherit unless they override.
```

Switching the mode on the root re-renders everything in the new palette automatically.

## Why no Light "Surface" / "Card BG" token

There isn't a generic always-white surface token. The closest is `Button/Text input/Default/BG` which is white in every colour mode — that's what we use for cards on themed bg (e.g. white filter pill on a teal Resources Dark page). Worth knowing if you're binding a card surface.
