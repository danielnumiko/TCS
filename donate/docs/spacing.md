# Spacing & grid

Three concepts collaborate:
1. **Space scale** — raw px constants (4, 8, 12, 16, 20, 24…)
2. **Spacing/Scale/X** — fluid tokens in Breakpoints collection, aliased to Space scale primitives, resolve to different px per breakpoint
3. **Spacing/Column layouts/N-N-N-N** — fluid widths aliased to `Columns/N` per breakpoint — bind a frame width to one and it reflows automatically

## Space scale (primitive values, never change)

| Step | px |
|---|---|
| `3xs (4px)` | 4 |
| `2xs (8px)` | 8 |
| `xs (12px)` | 12 |
| `s (16px)` | 16 |
| `m (20px)` | 20 |
| `l (24px)` | 24 |
| `xl (28px)` | 28 |
| `2xl (32px)` | 32 |
| `3xl (36px)` | 36 |
| `4xl (40px)` | 40 |
| `5xl (44px)` | 44 |
| `6xl (48px)` | 48 |
| `7xl (56px)` | 56 |
| `8xl (60px)` | 60 |
| `9xl (64px)` | 64 |
| `10xl (68px)` | 68 |
| `11xl (72px)` | 72 |
| `12xl (80px)` | 80 |
| `13xl (100px)` | 100 |
| `14xl (120px)` | 120 |
| `15xl (140px)` | 140 |
| `16xl (160px)` | 160 |
| `17xl (200px)` | 200 |
| `18xl (240px)` | 240 |
| `19xl (300px)` | 300 |
| `20xl (400px)` | 400 |
| `21xl (500px)` | 500 |
| `22xl (600px)` | 700 |
| `23xl (700px)` | 800 |
| `24xl (800px)` | 900 |

## Spacing/Scale (fluid)

Use these tokens for `itemSpacing`, `padding`, etc. — they resolve to different px at each breakpoint.

| Token | 320 | 768 | 1280 | 1600 |
|---|---|---|---|---|
| `Spacing/Scale/xxs` | 4 | 4 | 4 | 4 |
| `Spacing/Scale/xs` | 4 | 4 | 8 | 8 |
| `Spacing/Scale/sm` | 8 | 8 | 12 | 12 |
| `Spacing/Scale/m` | 12 | 12 | 16 | 20 |
| `Spacing/Scale/lg` | 16 | 16 | 20 | 28 |
| `Spacing/Scale/xl` | 20 | 20 | 28 | 36 |
| `Spacing/Scale/2xl` | 24 | 28 | 40 | 48 |
| `Spacing/Scale/3xl` | 32 | 40 | 60 | 68 |
| `Spacing/Scale/4xl` | 48 | 60 | 80 | 100 |
| `Spacing/Scale/5xl` | 56 | 68 | 100 | 120 |
| `Spacing/Scale/6xl` | 80 | 100 | 140 | 160 |
| `Spacing/Scale/7xl` | 120 | 160 | 200 | 240 |
| `Spacing/Scale/8xl` | 160 | 240 | 300 | 400 |
| `Spacing/Scale/9xl` | 200 | 300 | 400 | 500 |
| `Spacing/Scale/10xl` | 300 | 400 | 500 | 800 |
| `Spacing/Scale/11xl` | 400 | 500 | 800 | 900 |

## Spacing/Padding (purpose-named)

| Token | 320 | 768 | 1280 | 1600 |
|---|---|---|---|---|
| `Spacing/Padding/Outer margin` (page edges) | 20 | 20 | 100 | 100 |
| `Spacing/Padding/Gutters` (column gutters) | 8 | 40 | 48 | 56 |
| `Spacing/Padding/Body width` (content max) | 280 | 472 | 704 | 672 |
| `Spacing/Padding/Body width +1` | 280 | 728 | 892 | 1153 |
| `Spacing/Padding/Logo width` | 80 | 80 | 120 | 120 |
| `Spacing/Padding/Button height` | 60 | 60 | 60 | 60 |
| `Spacing/Padding/Button weight` (border) | 2 | 2 | 2 | 2 |
| `Spacing/Padding/Slice title gap` | 20 | 32 | 40 | 40 |
| `Spacing/Padding/Vertical margin` | 60 | 80 | 120 | 140 |
| `Spacing/Padding/Between slices (Sitewide)` | 60 | 80 | 120 | 140 |
| `Spacing/Padding/Between slices (professional area)` | 40 | 48 | 56 | 60 |
| `Spacing/Padding/Hero data` | 100 | 120 | 120 | 140 |
| `Spacing/Padding/Hero height` | 700 | 500 | 800 | 800 |
| `Spacing/Padding/Divider line` | 3 | 4 | 5 | 5 |
| `Spacing/Padding/Line weight` | 6 | 8 | 8 | 8 |
| `Spacing/Padding/Dropshadow` | 20 | 20 | 20 | 20 |
| `Spacing/Padding/Width` (canvas width per breakpoint) | 320 | 768 | 1280 | 1600 |

## Grid (Columns/N at each breakpoint)

The grid: at each breakpoint, the canvas has 12 columns. `Columns/N (BREAKPOINT)` = the px width of N columns at that breakpoint width.

| N | 320 | 768 | 1280 | 1600 |
|---|---|---|---|---|
| 1 | 16 | 24 | 48 | 73 |
| 2 | 40 | 88 | 140 | 193 |
| 3 | 64 | 152 | 234 | 308 |
| 4 | 88 | 216 | 328 | 429 |
| 5 | 112 | 280 | 422 | 553 |
| 6 | 136 | 344 | 516 | 672 |
| 7 | 160 | 408 | 610 | 793 |
| 8 | 184 | 472 | 704 | 913 |
| 9 | 208 | 536 | 798 | 1033 |
| 10 | 232 | 600 | 892 | 1153 |
| 11 | 256 | 664 | 986 | 1273 |
| 12 | 280 | 728 | 1080 | 1393 |

## Spacing/Column layouts — THE fluid widths

This is the key innovation: each `Column layouts/N-N-N-N` is a float alias resolving to `Columns/N` at each breakpoint mode.

The naming is `width@320 - width@768 - width@1280 - width@1600` in column counts.

Examples:
- `12-6-3-3` means: take 12 cols at 320 (full width on mobile), 6 cols at 768 (50% on tablet), 3 cols at 1280 and 1600 (25% on desktop and wide desktop)
- That makes a 4-up grid item that goes full-width on mobile, half on tablet, quarter on desktop+

**Bind a frame's width to one of these and it reflows automatically.** No need to write multiple variants for column widths.

### Common layouts

| Token | 320 | 768 | 1280 | 1600 | Use |
|---|---|---|---|---|---|
| `12-12-12-12` | 280 | 728 | 1080 | 1393 | Full width |
| `12-12-6-6` | 280 | 728 | 516 | 672 | 2-up on desktop |
| `12-6-6-6` | 280 | 344 | 516 | 672 | 2-up on tablet+ |
| `12-12-4-4` | 280 | 728 | 328 | 429 | 3-up on desktop |
| `12-6-4-4` | 280 | 344 | 328 | 429 | 3-up on tablet+ |
| `12-12-3-3` | 280 | 728 | 234 | 308 | 4-up on desktop |
| `12-6-3-3` | 280 | 344 | 234 | 308 | 4-up on tablet+ |
| `12-12-8-8` | 280 | 728 | 704 | 913 | Article body width |
| `12-12-9-9` | 280 | 728 | 798 | 1033 | Wide article body |
| `12-12-10-10` | 280 | 728 | 892 | 1153 | Very wide content |

The full list (50+ layouts) is in `docs/tokens.json`. Use `xN-yN-zN-aN` where x/y/z/a are the column counts at each breakpoint.

## Header / paragraph spacing

`Text/Header spacing/*` tokens — aliased to Spacing/Scale tokens, sized appropriately for vertical rhythm around headings.

| Token | 320 | 768 | 1280 | 1600 | Alias |
|---|---|---|---|---|---|
| `H1 below` | 24 | 28 | 40 | 48 | Spacing/Scale/2xl |
| `H2 below` | 20 | 20 | 28 | 36 | Spacing/Scale/xl |
| `H3 below` | 16 | 16 | 20 | 28 | Spacing/Scale/lg |
| `H4 below` | 12 | 12 | 16 | 20 | Spacing/Scale/m |
| `H5 below` | 12 | 12 | 16 | 20 | Spacing/Scale/m |
| `New paragraph` | 48 | 60 | 80 | 100 | Spacing/Scale/4xl |
| `Between paragraphs` | 12 | 12 | 16 | 100 | Spacing/Scale/m |

## How to bind

In Figma plugin API:

```js
// Bind a frame's width to a fluid column layout
const col = collections.find(c => c.name === 'Breakpoints');
const layoutToken = vars.find(v => v.name === 'Spacing/Column layouts/12-6-4-4' && v.variableCollectionId === col.id);
frame.setBoundVariable('width', layoutToken);

// Bind itemSpacing
const spacingToken = vars.find(v => v.name === 'Spacing/Scale/m' && v.variableCollectionId === col.id);
frame.setBoundVariable('itemSpacing', spacingToken);

// Bind padding
frame.setBoundVariable('paddingTop', spacingToken);
```
