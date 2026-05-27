# Homepage — full token-binding spec

Every bound variable on every component in the TCS homepage (`Home page` COMPONENT, node `4514:73062`, 1280×6617). Use this to understand exactly which token drives each property.

How to read: each section lists its elements with the tokens bound to **space** (width/height/padding/itemSpacing/radius/stroke weight), **type** (fontSize), and **colour** (fills/strokes). All values resolve through the Breakpoints + Colours collections — see `spacing.md`, `typography.md`, `colours.md` for resolved values.

**The page is rendered at Breakpoint=1280, Colours=Light** (default). Token names are mode/breakpoint-independent — the binding is what matters.

---

## Page order

1. Frame 1 — Header + Hero + (sticky Header)
2. Intro block (`1280px`)
3. Divider/1600
4. Teaser slice (3-up)
5. Divider/1600
6. Home Story slice
7. Large promo slice
8. Teaser slice (2-up)
9. Divider/1600
10. How you can help slice
11. Newsletter
12. Footer

Common pattern across **all slices**: outer instance binds `width → Spacing/Padding/Width`, vertical padding → `Spacing/Padding/Vertical margin` (or `Between slices (Sitewide)`), horizontal padding → `Spacing/Padding/Outer margin`, fill → `Primary BG`.

---

## 1. Header

| Element | Space | Type | Colour |
|---|---|---|---|
| Header (root) | `width: Spacing/Padding/Width`, `height: Spacing/Padding/Button height` | — | `fill: Primary BG`, `stroke: Primary Border` |
| Logo wrap (Frame 9) | `width: Spacing/Column layouts/12-6-4-4` | — | — |
| Logo | `width: Spacing/Padding/Logo width` | — | `fill: Primary BG` (background); glyph fills `Type/Body` |
| Nav wrap (Frame 6) | `height: Spacing/Padding/Button height`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Menu item (×4) | `itemSpacing: Spacing/Scale/xs` | label `fontSize: ` *(inherits Menu link)* | text `Button/Text link primary/Default/Text`; chevron `Button/Secondary/Default/Icon` |
| Button wrap (Frame 8) | `width: Spacing/Column layouts/12-6-4-4` | — | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text`, icon `Button/Primary/Default/Icon` |
| Secondary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight (all sides): Spacing/Padding/Button weight` | text `Text/Headings/CTA` | `fill: Brand accent`, `stroke: Button/Secondary/Default/Border`, text `Button/Secondary/Default/Text` |

---

## 2. Hero

| Element | Space | Type | Colour |
|---|---|---|---|
| Hero (root) | `width: Spacing/Padding/Width` | — | `fill: Image overlay` (image scrim) |
| Inner (Frame 11) | `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin` | — | — |
| Heading box | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/2xl` | — | — |
| Hero heading | — | `fontSize: Text/Headings/H1` | text `Type/Heading` |
| Secondary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight: Spacing/Padding/Button weight` | text `Text/Headings/CTA` | `fill: Button/Secondary/Default/BG`, `stroke: Button/Secondary/Default/Border`, text `Button/Secondary/Default/Text` |
| Brush edge (mask) | — | — | `fill: Secondary BG` / `Type/Heading`, `stroke: Secondary Border`, brush `White 50` |
| Scroll-arrow row (Frame 2) | `width: Spacing/Padding/Width`, `height: Spacing/Scale/3xl`, `paddingLeft/Right: Spacing/Padding/Gutters` | — | — |
| Scroll arrow | `height: Spacing/Scale/6xl` | — | `fill: Primary BG` (bg), arrow glyph `Brand accent` |

---

## 3. Intro block (`1280px`)

| Element | Space | Type | Colour |
|---|---|---|---|
| Intro (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Between slices (Sitewide)`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/3xl` | — | `fill: Primary BG` |
| Decorative illustration wrap | `width: Spacing/Column layouts/12-4-4-4` | — | illustration fill `White 50` |
| Content column | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Padding/Slice title gap` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` *(implicit)* | text `Type/Heading` *(implicit)* |
| Body row (2-col) | `itemSpacing: Spacing/Padding/Gutters` | body `fontSize: Text/Headings/Body` *(implicit)* | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text`, icon `Button/Primary/Default/Icon` |

---

## 4. Divider/1600 (appears 3×)

| Element | Space | Type | Colour |
|---|---|---|---|
| Divider (root) | `width: Spacing/Padding/Width`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Scale/m` | — | `fill: Primary BG` |
| Line 1 | `width: Spacing/Column layouts/3-3-3-3` | — | `stroke: Primary Border` |
| Arrow | `height: Spacing/Scale/6xl` | — | `fill: Primary BG` (bg), arrow `Brand accent` |
| Line 2 | *(fills remaining width)* | — | `stroke: Primary Border` |

---

## 5. Teaser slice (3-up and 2-up)

| Element | Space | Type | Colour |
|---|---|---|---|
| Teaser slice (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Slice heading | `width: Spacing/Column layouts/12-12-12-12` | `fontSize: Text/Headings/H2` | — |
| Teaser row | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | — |
| Row inner | `width: Spacing/Column layouts/12-12-4-4`, `itemSpacing: Spacing/Scale/m` | — | — |
| Teaser card (each) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/sm` | — | — |
| Category tag | — | `fontSize: Text/Headings/Tags` | text `Button/Tags/Default/Text` |
| Card title | — | `fontSize: Text/Headings/H5` | — |
| Card link/CTA | — | `fontSize: Text/Headings/CTA` | — |

*(The 2-up variant is identical but row inner binds `12-12-6-6` and cards `12-6-6-6`.)*

---

## 6. Home Story slice

| Element | Space | Type | Colour |
|---|---|---|---|
| Home Story (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/3xl` | — | `fill: Primary BG` |
| Content column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` | — |
| Body | `width: Spacing/Column layouts/12-6-6-4` | `fontSize: Text/Headings/Body` | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |
| Stories grid | `width/height: Spacing/Scale/8xl` (image tiles) | — | — |
| Story card (each) | `itemSpacing: Spacing/Scale/m` | footer `fontSize: Text/Headings/H6` | chevron icon (unbound — see note) |

---

## 7. Large promo slice

| Element | Space | Type | Colour |
|---|---|---|---|
| Large promo (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters` | — | — |
| Image+content column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/lg` | — | — |
| Heading | — | `fontSize: Text/Headings/H2` | — |
| Body | — | `fontSize: Text/Headings/Body` | — |
| Primary button | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

*(Top & bottom brush strokes are graphic components — no token bindings.)*

---

## 8. How you can help slice

| Element | Space | Type | Colour |
|---|---|---|---|
| Help slice (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Slice title gap` | — | `fill: Primary BG` |
| Slice heading | — | `fontSize: Text/Headings/H2` | — |
| Cards container | `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/3xl` | — | — |
| Cards grid | `width: Spacing/Column layouts/12-6-6-3`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/xl` | — | — |
| Help card (each) | `width: Spacing/Column layouts/2-2-2-3`, `itemSpacing: Spacing/Scale/m` | — | — |
| Card illustration wrap | `width: Spacing/Column layouts/2-2-2-2` | — | bg `White 50`; illustration uses **primitives** `Lightening yellow 500 (brand)`, `Tangerine 600 (brand)`, `Black 950` (see note) |
| Card title | — | `fontSize: Text/Headings/H5` | — |
| Card body | — | `fontSize: Text/Headings/Body` | — |

---

## 9. Newsletter

| Element | Space | Type | Colour |
|---|---|---|---|
| Newsletter (root) | `width: Spacing/Padding/Width`, `paddingTop/Bottom: Spacing/Padding/Vertical margin`, `paddingLeft/Right: Spacing/Padding/Outer margin`, `itemSpacing: Spacing/Padding/Gutters`, `counterAxisSpacing: Spacing/Scale/2xl` | — | `fill: Primary BG` |
| Inner column | `width: Spacing/Column layouts/12-6-6-6`, `itemSpacing: Spacing/Scale/lg` then `Spacing/Scale/sm` | — | — |
| Title | — | `fontSize: Text/Headings/H2` | text `Type/Heading` |
| Subtitle | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Form | `itemSpacing: Spacing/Scale/m` | — | — |
| Input field (×3: First/Last/Email) | `height: Spacing/Padding/Button height`, `stroke weight (all sides): Spacing/Padding/Button weight` | — | `fill: Secondary BG`, `stroke: Button/Text input/Default/Border` |
| Privacy line | — | `fontSize: Text/Headings/Label` | text `Type/Body` |
| Submit (Primary) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

*(Top brush stroke is a graphic component — no token bindings.)*

---

## 10. Footer

| Element | Space | Type | Colour |
|---|---|---|---|
| Footer (root) | — | — | `fill: Secondary BG` |
| Layout (Frame 16) | `width: Spacing/Viewport %/66+100+100+66`, `paddingTop: Spacing/Scale/4xl`, `paddingBottom: Spacing/Scale/2xl`, `paddingLeft: Spacing/Padding/Outer margin`, `paddingRight: Spacing/Padding/Gutters`, `itemSpacing: Spacing/Scale/2xl` | — | — |
| Link columns (Frame 12) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/lg` | column heading `Text/Headings/H5`, links `Text/Headings/CTA` | heading `Type/Heading`, links `Type/Body` |
| Logo/social row (Frame 15) | `width: Spacing/Column layouts/12-6-4-4`, `itemSpacing: Spacing/Scale/m` | heading `Text/Headings/H5` | logo `Foreground`; social icons `Button/Text link primary/Default/Underline or icon` |
| Social row inner (Frame 14) | `itemSpacing / counterAxisSpacing: Spacing/Scale/lg` | — | — |
| Copyright | — | `fontSize: Text/Headings/CTA` | text `Type/Body` |
| Quote panel (Frame 17) | `paddingLeft/Right: Spacing/Padding/Gutters` | quote `Text/Headings/H3` | text `Button/Primary/Default/Text` (white on brand) |
| Quote CTA (Primary) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | text `Text/Headings/CTA` | `fill: Button/Primary/Default/BG`, `stroke: Button/Primary/Default/Border`, text `Button/Primary/Default/Text` |

---

## Token summary (everything used on the homepage)

### Space — Padding tokens
`Spacing/Padding/Width`, `Spacing/Padding/Outer margin`, `Spacing/Padding/Gutters`, `Spacing/Padding/Vertical margin`, `Spacing/Padding/Between slices (Sitewide)`, `Spacing/Padding/Slice title gap`, `Spacing/Padding/Body width`, `Spacing/Padding/Logo width`, `Spacing/Padding/Button height`, `Spacing/Padding/Button weight`

### Space — Scale tokens
`Spacing/Scale/sm`, `Spacing/Scale/m`, `Spacing/Scale/lg`, `Spacing/Scale/xl`, `Spacing/Scale/2xl`, `Spacing/Scale/3xl`, `Spacing/Scale/4xl`, `Spacing/Scale/6xl`, `Spacing/Scale/8xl`

### Space — Column layouts (fluid widths)
`12-12-12-12`, `12-12-4-4`, `12-6-6-6`, `12-6-6-4`, `12-6-6-3`, `12-6-4-4`, `12-4-4-4`, `3-3-3-3`, `2-2-2-3`, `2-2-2-2`

### Space — Viewport %
`Spacing/Viewport %/66+100+100+66` (Footer width)

### Type
`Text/Headings/H1`, `H2`, `H3`, `H5`, `H6`, `Body`, `CTA`, `Label`, `Tags`

### Colour — semantic
`Primary BG`, `Secondary BG`, `Primary Border`, `Secondary Border`, `Type/Heading`, `Type/Body`, `Foreground`, `Brand accent`, `Image overlay`

### Colour — button families
`Button/Primary/Default/{BG,Border,Text,Icon}`, `Button/Secondary/Default/{BG,Border,Text,Icon}`, `Button/Text input/Default/Border`, `Button/Text link primary/Default/{Text,Underline or icon}`, `Button/Tags/Default/Text`

---

## Notes & known gaps

1. **Illustrations use primitives, not semantic tokens.** The "How you can help" card illustrations bind to `Lightening yellow 500 (brand)`, `Tangerine 600 (brand)`, `Black 950` directly. That's intentional — illustration art has fixed brand colours that don't reskin per theme. Don't "fix" these to semantic tokens.

2. **A couple of chevron glyphs show unbound (`?`)** — e.g. the chevron in Home Story footer and Footer quote CTA. These are icon-internal vectors that lost their binding. Minor — worth rebinding to `Button/Primary/Default/Icon` or the relevant link-icon token.

3. **Some Intro-block text bindings are inherited not explicit** — the heading/body fontSize reads through the component's internal definition rather than an override on the instance. Marked "implicit" above. The master Intro block (`4486:61750`) carries them.

4. **Header appears twice** in Frame 1 (a normal + a sticky/scrolled copy) — both have identical bindings.

5. **All fills/strokes are bound** except: raw image fills (photos), brush-stroke graphic components, and the illustration primitives noted above. Everything structural (surfaces, borders, text, buttons) is fully tokenised.
