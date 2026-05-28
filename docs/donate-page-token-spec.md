# Donate page — full token-binding spec

Every bound variable on every component in the TCS Donate page (`Donate page` COMPONENT, node `4510:346711`, 1280×6782 — lives on the `📄 Donate process` page). Same format as `homepage-token-spec.md` and `content-page-token-spec.md`.

How to read: each section lists its elements with the tokens bound to **space** (width/height/padding/itemSpacing/radius/stroke weight), **type** (fontSize), and **colour** (fills/strokes). All resolve through Breakpoints + Colours collections — see `spacing.md`, `typography.md`, `colours.md` for resolved values.

**Rendered at Breakpoint=1280, Colours=Light.**

---

## Page order

1. **Frame 1** — Header + Donate slice (donation hero) + sticky Header
2. **1280px** — Intro block (Breadcrumb + H2 + body)
3. **Divider/1600**
4. **50/50** — Content + Video media
5. **Divider/1600**
6. **Rich text** — Full hierarchy (H2 → H5 + bullets + image caption + numbered list + Primary CTA)
7. **Stats** — 3-up stats row with brand-accent rules
8. **Donate slice** (second instance — same Donate widget reappearing)
9. **Accordion** — Crisis services
10. **Share block**
11. **Related content**
12. **Newsletter**
13. **Footer**

Common pattern across **all slices**: outer instance binds `width → Spacing/Padding/Width`, vertical padding → `Spacing/Padding/Vertical margin`, horizontal padding → `Spacing/Padding/Outer margin`, fill → `Primary BG`.

---

## 1. Frame 1 — Header + Donate slice (hero)

### Header (top + sticky)
| Element | Space | Type | Colour |
|---|---|---|---|
| Header (root) | `width: Spacing/Padding/Width`, `height: Spacing/Padding/Button height` | — | `fill: Primary BG`, `stroke: Primary Border` |
| Logo wrap (Frame 9) | `width: Spacing/Column layouts/12-6-4-4`; logo `width: Spacing/Padding/Logo width` | — | `fill: Primary BG` |
| Nav wrap (Frame 6) | `height: Spacing/Padding/Button height`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Menu items (×4) | `itemSpacing: Spacing/Scale/xs` | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/Default/Text` |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |
| Secondary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight (all): Spacing/Padding/Button weight` | text `Text/Headings/CTA` | `fill: Brand accent`, `stroke: Button/Secondary/Default/Border`, text `Button/Secondary/Default/Text` |

### Donate slice (hero)
| Element | Space | Type | Colour |
|---|---|---|---|
| Donate slice (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Scale/4xl`, `paddingLeft/Right: Spacing/Padding/Outer margin` | — | — |
| Inner card (1400) | `width: Spacing/Column layouts/12-6-4-4`, `paddingTop/Bottom/Left/Right: Spacing/Scale/lg`, `itemSpacing: Spacing/Scale/xl` | — | `fill: Primary BG` |
| Title block (Frame 52) | `itemSpacing: Spacing/Scale/xxs` | title `fontSize: Text/Headings/H4`, sub `Text/Headings/Label` | — |
| Top tab control (Frame 184) | `height: Spacing/Padding/Button height`, `paddingTop/Bottom/Left/Right: Spacing/Scale/xxs`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Primary BG`, `stroke: Button/Tab/Active/Border` |
| Tab — inactive | `paddingLeft/Right: Spacing/Scale/lg` | — | text `Button/Tab/Inactive/Text` |
| Tab — active | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/lg` | — | `fill: Button/Tab/Active/BG`, text `Button/Tab/Active/Text` |
| Amounts control (Frame 184 #2) | `height: Spacing/Padding/Button height`, `paddingTop/Bottom/Left/Right: Spacing/Scale/xxs`, `itemSpacing: Spacing/Scale/xs`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Primary BG`, `stroke: Button/Tab/Active/Border` |
| Amount option — selected | `paddingTop/Bottom: Spacing/Scale/xs`, `paddingLeft/Right: Spacing/Scale/xxs` | `fontSize: Text/Headings/CTA` | `fill: Button/Tab/Active/BG`, text `Button/Tab/Active/Text`, indicator polygon `Button/Tab/Active/BG` |
| Amount option — unselected (each) | `paddingTop/Bottom: Spacing/Scale/xs`, `paddingLeft/Right: Spacing/Scale/xxs` | `fontSize: Text/Headings/CTA` | `fill: Button/Tab/Inactive/BG`, text `Button/Tab/Inactive/Text` |
| Custom-amount label | — | `fontSize: Text/Headings/Label` | — |
| Cost summary row (Frame 184 final) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/lg`, `itemSpacing: Spacing/Scale/sm` | — | — |
| Cost text | — | `fontSize: Text/Headings/CTA` | — |
| Per-day breakdown (Frame 16) | `itemSpacing: Spacing/Scale/xxs` | `fontSize: Text/Headings/Label` (sub) | — |
| Outer card padding wrap | `paddingLeft/Right: Spacing/Scale/sm` | — | — |

---

## 2. Intro block (`1280px`)

| Element | Space | Type | Colour |
|---|---|---|---|
| Intro (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Between slices (Sitewide)`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/3xl` | — | `fill: Primary BG` |
| Inline share icons row | `itemSpacing: Spacing/Scale/lg` | — | Twitter/Facebook/Email icons `fill: Foreground` |
| Content column | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Padding/Slice title gap` | — | — |
| Content header | `itemSpacing: Spacing/Scale/m` | — | — |
| Breadcrumb hyperlinks | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/Default/Text` |
| Breadcrumb separators | — | `fontSize: Text/Headings/CTA` | text `Type/Heading` |
| Page heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Intro body | — | `fontSize: ?` *(stale binding — see notes)* | text `Type/Body` |

---

## 3. Divider/1600 (×2)

| Element | Space | Type | Colour |
|---|---|---|---|
| Divider (root) | `width: Spacing/Padding/Width`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Scale/m` | — | `fill: Primary BG` |
| Line 1 | Divider 2 binds `width: Spacing/Column layouts/3-3-3-3` (Divider 1 doesn't) | — | `stroke: Primary Border` |
| Arrow | `height: Spacing/Scale/6xl` | — | `fill: Primary BG`, arrow glyph `Lightening yellow 500 (brand)` |
| Line 2 | — | — | `stroke: Primary Border` |

---

## 4. 50/50

| Element | Space | Type | Colour |
|---|---|---|---|
| 50/50 (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/5xl` | — | `fill: Primary BG` |
| Content column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Text/Header spacing/H2 below` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Body stack | `itemSpacing: Text/Header spacing/Between paragraphs` | — | — |
| Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Brush quote | — | `fontSize: Text/Headings/H3` | text `Type/Body` |
| Media column (Frame 2) | `width: Spacing/Column layouts/12-6-6-6` | — | — |
| Decoration wrap | `width: Spacing/Scale/8xl` | — | `fill: Primary BG` |
| Video play button | `width/height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, icon `Button/Primary/Default/Icon` |

---

## 5. Rich text

Same component as on Content page — full hierarchy block.

| Element | Space | Type | Colour |
|---|---|---|---|
| Rich text (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin` | — | `fill: Primary BG` |
| Outer column | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/New paragraph` | — | — |
| H2 + body sub-block | `itemSpacing: Text/Header spacing/H2 below` | — | — |
|   H2 heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| H3 + body sub-block | `itemSpacing: Text/Header spacing/H3 below` | — | — |
|   H3 heading | — | `fontSize: Text/Headings/H3` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| H4 + body sub-block | `itemSpacing: ?` *(stale — see notes)* | — | — |
|   H4 heading | — | `fontSize: Text/Headings/H4` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| H3 callout | — | `fontSize: Text/Headings/H3` | text `Type/Body` |
| H5 + body sub-block | `itemSpacing: Text/Header spacing/H5 below` | — | — |
|   H5 heading | — | `fontSize: Text/Headings/H5` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |
| Bullets block | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/Between paragraphs` then `Spacing/Scale/m` | — | — |
|   Bullets heading | — | — | text `Type/Heading` |
|   Bullet (each) | — | `fontSize: Text/Headings/Body` | `fill: Primary BG`, text `Type/Heading` |
| Image caption (Frame 17) | `itemSpacing: Spacing/Scale/sm` | `fontSize: Text/Headings/Label` | text `Type/Heading` |
| Numbered list block | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/H2 below` | — | — |
|   Heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
|   List inner | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
|   Number marker | — | `fontSize: Text/Headings/H6` | text `Type/Heading`, marker glyph `Brand accent` |
|   List item text | — | `fontSize: Text/Headings/Body` | text `Type/Heading` |

---

## 6. Stats (3-up)

| Element | Space | Type | Colour |
|---|---|---|---|
| Stats (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin` | — | `fill: Primary BG` |
| Layout | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | — |
| Stats row | `itemSpacing: Spacing/Scale/m` | — | — |
| Stat block (each, ×3) | `itemSpacing: Spacing/Scale/sm` | — | — |
| Stat number | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Underline rule | `strokeWeight: Spacing/Padding/Line weight` | — | `stroke: Brand accent` |
| Stat description | — | `fontSize: Text/Headings/Body` | text `Type/Body` |

---

## 7. Donate slice (second instance)

Structurally identical to the Donate slice in Frame 1 (same `1400` master component, same internal bindings). See section 1 — Donate slice block for full breakdown. Both instances repeat the same donation widget tab/amounts structure.

---

## 8. Accordion — Crisis services

| Element | Space | Type | Colour |
|---|---|---|---|
| Accordion slice (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Section heading | `width: Spacing/Column layouts/12-12-9-9` | `fontSize: Text/Headings/H2` | — |
| Container | `width: Spacing/Column layouts/12-12-9-9`, `itemSpacing: Spacing/Scale/xl` | — | — |
| Accordion list | `width: Spacing/Column layouts/12-12-9-9`, `itemSpacing: Spacing/Scale/m` | — | — |
| Accordion item (each) | `itemSpacing: Spacing/Scale/m` | item header `Text/Headings/H5` (Option 3) | text `Button/Primary/Default/BG` (see notes — semantically off) |
| Chevron | `width: Spacing/Scale/sm` | — | — |

---

## 9. Share block

| Element | Space | Type | Colour |
|---|---|---|---|
| Share (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Heading | — | `fontSize: Text/Headings/H3` | text `Type/Heading` |
| Buttons row | `paddingTop: Spacing/Scale/sm`, `itemSpacing: Spacing/Scale/xs` | — | — |
| Social button (Twitter/Facebook/LinkedIn) | `height: Spacing/Padding/Button height`, `paddingTop/Bottom: Spacing/Scale/sm`, `paddingLeft/Right: Spacing/Scale/lg`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Social/Default/BG`, text `Button/Social/Default/Text` |

---

## 10. Related content

| Element | Space | Type | Colour |
|---|---|---|---|
| Related (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Heading | `width: Spacing/Column layouts/12-12-12-12` | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Teaser row container | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | — |
| Teaser row | `width: Spacing/Column layouts/12-12-4-4`, `itemSpacing: Spacing/Scale/m` | — | — |
| Teaser card (each, ×3) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/sm` | — | — |
| Category tag | — | `fontSize: Text/Headings/Tags` | text `Button/Tags/Default/Text` |
| Card title | — | `fontSize: Text/Headings/H5` | — |
| Card link | — | `fontSize: Text/Headings/CTA` | — |

---

## 11. Newsletter

| Element | Space | Type | Colour |
|---|---|---|---|
| Newsletter (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | `fill: Primary BG` |
| Inner | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/lg` then `Spacing/Scale/sm` | — | — |
| Title | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Subtitle | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Form | `itemSpacing: Spacing/Scale/m` | — | — |
| Inputs (First/Last/Email) | `height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Secondary BG`, `stroke: Button/Text input/Default/Border` |
| Privacy line | — | `fontSize: Text/Headings/Label` | text `Type/Body` |
| Submit (Primary) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## 12. Footer

| Element | Space | Type | Colour |
|---|---|---|---|
| Footer (root) | — | — | `fill: Secondary BG` |
| Layout (Frame 16) | `width: Spacing/Viewport %/66+100+100+66`, `paddingTop: Spacing/Scale/4xl`, `paddingBottom: Spacing/Scale/2xl`, `paddingLeft: Spacing/Padding/Outer margin`, `paddingRight: Spacing/Padding/Gutters`, `itemSpacing: Spacing/Scale/2xl` | — | — |
| Link columns (Frame 12) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/lg` | heading `Text/Headings/H5`, links `Text/Headings/CTA` | heading `Type/Heading`, links `Type/Body` |
| Logo/social row (Frame 15) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/m` | heading `Text/Headings/H5` | logo `Foreground`; social icons `Button/Text link primary/Default/Underline or icon` |
| Social row inner | `itemSpacing / counterAxisSpacing: Spacing/Scale/lg` | — | — |
| Copyright | — | `fontSize: Text/Headings/CTA` | text `Type/Body` |
| Quote panel (Frame 17) | `paddingLeft/Right: Spacing/Padding/Gutters` | quote `Text/Headings/H3` | text `Button/Primary/Default/Text` |
| Quote CTA (Primary) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## Token summary (everything used on the Donate page)

### Space — Padding
`Spacing/Padding/Width`, `Spacing/Padding/Outer margin`, `Spacing/Padding/Gutters`, `Spacing/Padding/Vertical margin`, `Spacing/Padding/Between slices (Sitewide)`, `Spacing/Padding/Slice title gap`, `Spacing/Padding/Body width`, `Spacing/Padding/Logo width`, `Spacing/Padding/Button height`, `Spacing/Padding/Button weight`, `Spacing/Padding/Line weight`

### Space — Scale
`Spacing/Scale/xxs`, `Spacing/Scale/xs`, `Spacing/Scale/sm`, `Spacing/Scale/m`, `Spacing/Scale/lg`, `Spacing/Scale/xl`, `Spacing/Scale/2xl`, `Spacing/Scale/3xl`, `Spacing/Scale/4xl`, `Spacing/Scale/5xl`, `Spacing/Scale/6xl`, `Spacing/Scale/8xl`

### Space — Column layouts
`12-12-12-12`, `12-12-9-9`, `12-12-4-4`, `12-6-6-6`, `12-6-4-4`, `3-3-3-3`

### Space — Viewport %
`Spacing/Viewport %/66+100+100+66` (Footer)

### Space — Header spacing
`Text/Header spacing/H2 below`, `H3 below`, `H5 below`, `New paragraph`, `Between paragraphs`

### Type
`Text/Headings/H2`, `H3`, `H4`, `H5`, `H6`, `Body`, `CTA`, `Label`, `Tags`

### Colour — semantic
`Primary BG`, `Secondary BG`, `Primary Border`, `Type/Heading`, `Type/Body`, `Foreground`, `Brand accent`

### Colour — button families
- `Button/Primary/Default/{BG, Border, Text, Icon}`
- `Button/Secondary/Default/{BG, Border, Text, Icon}`
- `Button/Tab/Active/{BG, Text, Border}`, `Button/Tab/Inactive/{BG, Text}`
- `Button/Tags/Default/Text`
- `Button/Social/Default/{BG, Text}`
- `Button/Text link primary/Default/{Text, Underline or icon}`
- `Button/Text input/Default/Border`

### Colour — primitives used directly (not via Brand accent)
`Lightening yellow 500 (brand)` — Divider arrow glyphs (consistent with Content page; inconsistent with Homepage)

---

## What's unique on this page

This page is the **only page in the file** that uses the **Donate slice** component, so it's the only place where these token families appear in production:

- `Button/Tab/Active/*` and `Button/Tab/Inactive/*` — drive the One-off / Monthly tab control + the £-amount selector
- `Spacing/Scale/xxs` — used heavily inside the tight Donate widget (4px paddings around tabs and amount cells)
- `Text/Headings/H4` + `Text/Headings/Label` — used on the donation title block

The donation widget gets nested padding tokens that don't appear elsewhere — worth understanding as a separate sub-system if you're rebuilding it.

---

## Notes & known gaps

1. **Two Donate slice instances on one page** — Frame 1 hero + section 7. Both render identically (same `1400` master) but serve different positions. If you're editing the widget design, edits propagate to both.

2. **Intro body `?`** — same stale binding as on Content page. Body text in the Intro block points to a removed variable. Worth re-binding to `Text/Headings/Body` (or letting it inherit from the master).

3. **Rich text H4 itemSpacing `?`** — identical issue to Content page (same component instance). Re-bind to `Text/Header spacing/H4 below`.

4. **Divider arrows bind to `Lightening yellow 500 (brand)` directly** — consistent with Content page, inconsistent with Homepage (which uses `Brand accent`). Pick one convention and align.

5. **Accordion item title fill is bound to `Button/Primary/Default/BG`** — semantically wrong (it's a fill colour pretending to be a text colour). Same issue as Content page. Should be `Type/Heading` or `Button/List/Default/Text`.

6. **Footer quote-CTA chevron `?`** — same unbound icon vector as on the other two pages.

7. **Stats brand accent rule under each number** — bound via `strokeWeight: Spacing/Padding/Line weight` and `stroke: Brand accent`. Clean. Worth noting: this is the only place on the Donate page where `Brand accent` is bound directly to a structural stroke (rather than through a button family).

8. **Donate widget uses tab tokens for the £-amount cells** — `Button/Tab/Active/BG` and `Button/Tab/Inactive/BG`. Conceptually these are amounts, not tabs, but reusing the tab tokens means the styling stays consistent with the One-off / Monthly tab above it. Reasonable reuse.
