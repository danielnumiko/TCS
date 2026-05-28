# Typography

## Fonts

Two heading families in the `Typography` collection:

| Token | Value | Use |
|---|---|---|
| `Heading font/Brand font` | `Inter` | Default — body, all headings, UI |
| `Heading font/Handwritten` | `TCS beta` | Brush-script for emotional/decorative quotes |

In production for TCS, `Inter` is currently a placeholder for `BentonSans` (the TCS production font). When swapping, just change the value of `Heading font/Brand font`.

**Important:** `TCS beta` may not load in all environments (e.g. some plugin/automation environments). Structural changes to nodes using TCS beta can fail with "unloaded font" errors. If you hit that, replace text with Inter before moving, or work in Figma directly.

## Weights

| Token | Value |
|---|---|
| `Weights/Regular` | Regular |
| `Weights/Medium` | Medium |
| `Weights/Bold` | Bold |

## Font scale (primitive px values)

Constants — never change per theme or breakpoint.

| Token | px |
|---|---|
| `Font scale/xxs (13)` | 13 |
| `Font scale/xs (14)` | 14 |
| `Font scale/sm (15)` | 15 |
| `Font scale/base (16)` | 16 |
| `Font scale/md (18)` | 18 |
| `Font scale/lg (20)` | 20 |
| `Font scale/xl (26)` | 26 |
| `Font scale/2xl (30)` | 30 |
| `Font scale/3xl (32)` | 32 |
| `Font scale/4xl (36)` | 36 |
| `Font scale/5xl (40)` | 40 |
| `Font scale/6xl (42)` | 42 |
| `Font scale/7xl (48)` | 48 |
| `Font scale/8xl (60)` | 60 |
| `Font scale/9xl (64)` | 64 |
| `Font scale/10xl (80)` | 80 |
| `Font scale/11xl (100)` | 100 |
| `Font scale/12xl (120)` | 120 |

## Heading sizes per breakpoint (fluid)

Live in the `Breakpoints` collection, aliased to `Font scale` primitives.

| Token | 320 | 768 | 1280 | 1600 |
|---|---|---|---|---|
| `Text/Headings/H1` | 48 | 60 | 80 | 120 |
| `Text/Headings/H2` | 40 | 40 | 64 | 80 |
| `Text/Headings/H3` | 32 | 36 | 48 | 64 |
| `Text/Headings/H4` | 26 | 32 | 42 | 42 |
| `Text/Headings/H5` | 20 | 20 | 30 | 30 |
| `Text/Headings/H6` | 16 | 18 | 20 | 20 |
| `Text/Headings/Body` | 16 | 18 | 20 | 20 |
| `Text/Headings/CTA` | 16 | 16 | 18 | 18 |
| `Text/Headings/CTA sm` | 14 | 14 | 16 | 16 |
| `Text/Headings/Label` | 14 | 14 | 15 | 15 |
| `Text/Headings/Tags` | 14 | 14 | 14 | 14 |

## Header spacing (rhythm)

See [spacing.md](spacing.md#header--paragraph-spacing) for the `Text/Header spacing/*` tokens that handle vertical rhythm around headings.

## Usage in plugin API

```js
// Bind a text node's fontSize
const breakpointCol = collections.find(c => c.name === 'Breakpoints');
const h2Token = vars.find(v => v.name === 'Text/Headings/H2' && v.variableCollectionId === breakpointCol.id);
textNode.setBoundVariable('fontSize', h2Token);

// Set font family by string (bind variable not currently supported on fontName)
textNode.fontName = { family: 'Inter', style: 'Bold' };
```

## Type rules of thumb

- **H1**: page hero / article title (Bold, brand font)
- **H2**: major section headings — "Local services", "Related content"
- **H3**: subsections within a section
- **H4–H6**: card titles, smaller subheads
- **Body**: paragraph text (Regular, brand font)
- **CTA**: text inside buttons (Medium or Bold depending on button family)
- **Label**: form labels, captions, byline metadata
- **Tags**: tag pill text (Medium, smallest)
- **Handwritten**: emotional pull-quotes only — never for UI text or body
