# Content page — full token-binding spec

Every bound variable on every component in the TCS Content page (`Content page` COMPONENT, node `4495:90`, 1280×6990 — lives on the page `📄 Content` at node id `4474:61021`). Same format as `homepage-token-spec.md`.

How to read: each section lists its elements with the tokens bound to **space** (width/height/padding/itemSpacing/radius/stroke weight), **type** (fontSize), and **colour** (fills/strokes). All resolve through Breakpoints + Colours collections — see `spacing.md`, `typography.md`, `colours.md` for resolved values.

**Rendered at Breakpoint=1280, Colours=Light.** Page has a Breakpoints preview frame alongside (instances at 320 / 768 / 1280 / 1600).

---

## Page order

1. Frame 1 — Header + Hero with quote overlay
2. 1280px — Intro block with Breadcrumb + heading + body + structured data row + CTA
3. Large promo slice — "Emotional health and wellbeing" CTA
4. 50/50 — "Local services" with image + brush quote
5. Divider/1600
6. Rich text — "Find support" content block (heading hierarchy + bullets + button)
7. Large promo slice — "Advice hub" CTA
8. Rich text — "Need urgent support?" content
9. Divider/1600
10. Accordion — Crisis support services
11. Share block
12. Related content (3 teasers)
13. Footer

Common pattern across **all slices**: outer instance binds `width → Spacing/Padding/Width`, vertical padding → `Spacing/Padding/Vertical margin`, horizontal padding → `Spacing/Padding/Outer margin`, fill → `Primary BG`.

---

## 1. Frame 1 — Header + Hero with quote overlay

### Header
| Element | Space | Type | Colour |
|---|---|---|---|
| Header (root) | `width: Spacing/Padding/Width`, `height: Spacing/Padding/Button height` | — | `fill: Primary BG`, `stroke: Primary Border` |
| Logo wrap (Frame 9) | `width: Spacing/Column layouts/12-6-4-4` | — | — |
| Logo | `width: Spacing/Padding/Logo width` | — | `fill: Primary BG` |
| Nav wrap (Frame 6) | `height: Spacing/Padding/Button height`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Menu items (×4) | `itemSpacing: Spacing/Scale/xs` | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/Default/Text` |
| Button wrap (Frame 8) | — | — | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |
| Secondary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight (all): Spacing/Padding/Button weight` | text `Text/Headings/CTA` | `fill: Brand accent`, `stroke: Button/Secondary/Default/Border`, text `Button/Secondary/Default/Text` |

### Hero (with quote overlay)
| Element | Space | Type | Colour |
|---|---|---|---|
| Hero (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin` | — | — |
| Heading container (Frame 12) | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/2xl` | — | — |
| Quote heading | — | `fontSize: Text/Headings/H1` | text `Type/Heading` |
| Secondary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight (all): Spacing/Padding/Button weight` | text `Text/Headings/CTA` | `fill: Button/Secondary/Default/BG`, `stroke: Button/Secondary/Default/Border`, text `Button/Secondary/Default/Text` |
| Scroll-arrow row | `width: Spacing/Padding/Width`, `height: Spacing/Scale/3xl`, `paddingLeft/Right: Spacing/Padding/Gutters` | — | — |
| Scroll arrow | `height: Spacing/Scale/6xl` | — | `fill: Primary BG`, arrow glyph `Lightening yellow 500 (brand)` |

> **Note:** the scroll-arrow uses the `Lightening yellow 500 (brand)` primitive directly, not `Brand accent`. Same on the Divider arrows below. The homepage uses `Brand accent` for the same glyph — minor inconsistency worth flagging if you're auditing.

---

## 2. Intro block (`1280px`)

| Element | Space | Type | Colour |
|---|---|---|---|
| Intro (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Between slices (Sitewide)`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/3xl` | — | `fill: Primary BG` |
| Inline share icons row | `itemSpacing: Spacing/Scale/lg` | — | — |
| Share/Twitter, Facebook, Email icons | — | — | `fill: Foreground` |
| Content column | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Padding/Slice title gap` | — | — |
| Content header (with breadcrumb) | `itemSpacing: Spacing/Scale/m` | — | — |
| Breadcrumb hyperlinks | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/Default/Text` |
| Breadcrumb separators | — | `fontSize: Text/Headings/CTA` | text `Type/Heading` |
| Page heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` *(implicit)* |
| Intro body | — | `fontSize: ?` *(inherited from master)* | — |
| Structured data row | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/lg` | — | — |
| Structured data card (each) | `width: Spacing/Column layouts/6-4-4-3`, `itemSpacing: Spacing/Scale/xs` | data label `fontSize: Text/Headings/CTA` | `fill: Primary BG`, label `Type/Heading`, icon `Button/Secondary/Default/Icon` |
| Primary button row | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/xl` | — | — |
| Primary button | `width: Spacing/Column layouts/12-12-4-3`, `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## 3. Large promo slice — "Emotional health and wellbeing" CTA

| Element | Space | Type | Colour |
|---|---|---|---|
| Promo (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters` | — | — |
| Image column | `width: Spacing/Column layouts/12-6-6-6` | — | — |
| Video play overlay container | — | — | `fill: Primary BG` |
| Video play button | `width/height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, icon `Button/Primary/Default/Icon` |
| Content column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` | — |
| Body | — | `fontSize: Text/Headings/Body` | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## 4. 50/50 — "Local services"

| Element | Space | Type | Colour |
|---|---|---|---|
| 50/50 (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/5xl` | — | `fill: Primary BG` |
| Content column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Text/Header spacing/H2 below` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Body paragraph stack | `itemSpacing: Text/Header spacing/Between paragraphs` | — | — |
| Body text | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Brush quote (H3 emphasis) | — | `fontSize: Text/Headings/H3` | text `Type/Body` |
| Image column | `width: Spacing/Column layouts/12-6-6-6` | — | — |
| Decoration (Frame 2) | `width: Spacing/Scale/8xl` | — | — |

---

## 5. Divider/1600 (appears 2×)

| Element | Space | Type | Colour |
|---|---|---|---|
| Divider (root) | `width: Spacing/Padding/Width`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Scale/m` | — | `fill: Primary BG` |
| Line | — | — | `stroke: Primary Border` |
| Arrow | `height: Spacing/Scale/6xl` | — | `fill: Primary BG`, arrow glyph `Lightening yellow 500 (brand)` |

---

## 6. Rich text 1 — "Find support" content block

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
| H4 + body sub-block | `itemSpacing: ?` *(unbound — likely a stale binding)* | — | — |
|   H4 heading | — | `fontSize: Text/Headings/H4` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| H3 callout text | — | `fontSize: Text/Headings/H3` | text `Type/Body` |
| H5 + body sub-block | `itemSpacing: Text/Header spacing/H5 below` | — | — |
|   H5 heading | — | `fontSize: Text/Headings/H5` | text `Type/Heading` |
|   Body | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |
| Bullets block | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/Between paragraphs` then `Spacing/Scale/m` | — | — |
| Bullets heading | — | — | text `Type/Heading` |
| Bullet (each) | — | `fontSize: Text/Headings/Body` | `fill: Primary BG`, text `Type/Heading` |
| Image caption (Frame 17) | `itemSpacing: Spacing/Scale/sm` | `fontSize: Text/Headings/Label` | text `Type/Heading` |
| Numbered list block (Frame 12) | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/H2 below` | — | — |
|   Section heading | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
|   Numbered list inner | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
|   Number marker | — | `fontSize: Text/Headings/H6` | text `Type/Heading`, marker glyph `Brand accent` |
|   List item text | — | `fontSize: Text/Headings/Body` | text `Type/Heading` |

---

## 7. Large promo slice — "Advice hub"

Structurally identical to section 3 (same component, just different content). All bindings repeat. See section 3.

---

## 8. Rich text 2 — "Need urgent support?"

Structurally identical to section 6 (same component, just different content). All bindings repeat. See section 6.

---

## 9. Accordion — Crisis support services

| Element | Space | Type | Colour |
|---|---|---|---|
| Accordion slice (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Section heading | `width: Spacing/Column layouts/12-12-9-9` | `fontSize: Text/Headings/H2` | — |
| Accordion container | `width: Spacing/Column layouts/12-12-9-9`, `itemSpacing: Spacing/Scale/xl` | — | — |
| Accordion list | `width: Spacing/Column layouts/12-12-9-9`, `itemSpacing: Spacing/Scale/m` | — | — |
| Accordion item (each) | `itemSpacing: Spacing/Scale/m` | item header `Text/Headings/H5` (Option 3) | text `Button/Primary/Default/BG` |
| Chevron | `width: Spacing/Scale/sm` | — | — |

> **Note:** Accordion item title text is bound to `Button/Primary/Default/BG` for its fill colour — that's wrong semantically (should be `Type/Heading` or `Button/List/Default/Text`). Looks like a leftover from when the accordion's design used a black/inverted header. Worth a fix pass.

---

## 10. Share block

| Element | Space | Type | Colour |
|---|---|---|---|
| Share block (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Heading | — | `fontSize: Text/Headings/H3` | text `Type/Heading` |
| Buttons row | `paddingTop: Spacing/Scale/sm`, `itemSpacing: Spacing/Scale/xs` | — | — |
| Social button (Twitter / Facebook / LinkedIn) | `height: Spacing/Padding/Button height`, `paddingTop/Bottom: Spacing/Scale/sm`, `paddingLeft/Right: Spacing/Scale/lg`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Social/Default/BG`, text `Button/Social/Default/Text` |

---

## 11. Related content

| Element | Space | Type | Colour |
|---|---|---|---|
| Related (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Section heading | `width: Spacing/Column layouts/12-12-12-12` | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Teaser row container | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | — |
| Teaser row | `width: Spacing/Column layouts/12-12-4-4`, `itemSpacing: Spacing/Scale/m` | — | — |
| Teaser card (each, ×3) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/sm` | — | — |
| Category tag | — | `fontSize: Text/Headings/Tags` | text `Button/Tags/Default/Text` |
| Card title | — | `fontSize: Text/Headings/H5` | — |
| Card link | — | `fontSize: Text/Headings/CTA` | — |

---

## 12. Footer

| Element | Space | Type | Colour |
|---|---|---|---|
| Footer (root) | — | — | `fill: Secondary BG` |
| Layout (Frame 16) | `width: Spacing/Viewport %/66+100+100+66`, `paddingTop: Spacing/Scale/4xl`, `paddingBottom: Spacing/Scale/2xl`, `paddingLeft: Spacing/Padding/Outer margin`, `paddingRight: Spacing/Padding/Gutters`, `itemSpacing: Spacing/Scale/2xl` | — | — |
| Link columns (Frame 12) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/lg` | column heading `Text/Headings/H5`, links `Text/Headings/CTA` | heading `Type/Heading`, links `Type/Body` |
| Logo/social row (Frame 15) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/m` | heading `Text/Headings/H5` | logo `Foreground`; social icons `Button/Text link primary/Default/Underline or icon` |
| Social row inner | `itemSpacing / counterAxisSpacing: Spacing/Scale/lg` | — | — |
| Copyright | — | `fontSize: Text/Headings/CTA` | text `Type/Body` |
| Quote panel (Frame 17) | `paddingLeft/Right: Spacing/Padding/Gutters` | quote `Text/Headings/H3` | text `Button/Primary/Default/Text` |
| Quote CTA (Primary) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## Token summary (everything used on the Content page)

### Space — Padding tokens
`Spacing/Padding/Width`, `Spacing/Padding/Outer margin`, `Spacing/Padding/Gutters`, `Spacing/Padding/Vertical margin`, `Spacing/Padding/Between slices (Sitewide)`, `Spacing/Padding/Slice title gap`, `Spacing/Padding/Body width`, `Spacing/Padding/Logo width`, `Spacing/Padding/Button height`, `Spacing/Padding/Button weight`

### Space — Scale tokens
`Spacing/Scale/xs`, `Spacing/Scale/sm`, `Spacing/Scale/m`, `Spacing/Scale/lg`, `Spacing/Scale/xl`, `Spacing/Scale/2xl`, `Spacing/Scale/3xl`, `Spacing/Scale/4xl`, `Spacing/Scale/5xl`, `Spacing/Scale/6xl`, `Spacing/Scale/8xl`

### Space — Column layouts
`12-12-12-12`, `12-12-9-9`, `12-12-4-4`, `12-12-4-3`, `12-6-6-6`, `12-6-4-4`, `6-4-4-3`

### Space — Viewport %
`Spacing/Viewport %/66+100+100+66` (Footer width)

### Space — Header spacing
`Text/Header spacing/H2 below`, `H3 below`, `H5 below`, `New paragraph`, `Between paragraphs`

### Type
`Text/Headings/H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `Body`, `CTA`, `Label`, `Tags`

### Colour — semantic
`Primary BG`, `Secondary BG`, `Primary Border`, `Type/Heading`, `Type/Body`, `Foreground`, `Brand accent`

### Colour — button families
`Button/Primary/Default/{BG,Border,Text,Icon}`, `Button/Secondary/Default/{BG,Border,Text,Icon}`, `Button/Text link primary/Default/{Text,Underline or icon}`, `Button/Tags/Default/Text`, `Button/Social/Default/{BG,Text}`

### Colour — primitives used directly (not via Brand accent)
`Lightening yellow 500 (brand)` — used for Hero scroll-arrow + Divider arrows

---

## Notes & known gaps

1. **Hero quote uses `Type/Heading`, not `Type/Body`**, even though it's a quote — consistent with how the Homepage hero text is bound.

2. **Hero scroll-arrow + Divider arrows bind to `Lightening yellow 500 (brand)` directly**, NOT through `Brand accent`. The Homepage uses `Brand accent` for the same elements. This is an inconsistency — if you re-theme, the arrows on the Content page won't follow the brand swap. Worth fixing to `Brand accent`.

3. **Accordion item title fill is bound to `Button/Primary/Default/BG`** (which resolves to Black 950 in Light mode, so visually it looks like a heading) — but semantically wrong. Should be `Type/Heading` or `Button/List/Default/Text`.

4. **Rich text H4 itemSpacing reads `?`** — the binding points to a variable that's not in the local Variables panel anymore. Likely a stale ref from a deleted token. Worth re-binding to `Text/Header spacing/H4 below`.

5. **Footer quote CTA chevron `?`** — same issue as homepage Footer. Icon-internal vector lost its binding.

6. **Two Rich text instances are structurally identical** (sections 6 + 8) — same Rich text master, same internal bindings. Both contain a full hierarchy (H2/H3/H4/H5 + body) plus Primary button, Bullets, image caption, and a numbered list. Wholesale content swap; structure shared.

7. **Two Large promo slice instances are structurally identical** (sections 3 + 7) — same master, same bindings, different content.

8. **Inline share icons in the Intro block** bind to `Foreground` rather than to `Button/Text link primary/Default/Underline or icon` (which is what the Footer uses for social icons). Minor inconsistency.
