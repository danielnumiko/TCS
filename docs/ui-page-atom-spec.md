# UI page — full atom & token spec

The complete token-binding spec for every atom on the **Foundations → UI** page. This is what Claude Design (or any agent / human) needs to (a) match designs to the system and (b) build a detailed style guide.

For each atom: **ID**, **type** (COMPONENT or COMPONENT_SET), **variants**, **anatomy** (what's inside), and the **full token table** — every variable bound to space (width/height/padding/itemSpacing/strokeWeight), type (fontSize), and colour (fills/strokes).

## How to read

- Each atom's bindings come in **Space / Type / Colour** columns. The values are token names — look up actual px/hex in `docs/spacing.md`, `docs/typography.md`, `docs/colours.md`.
- For a COMPONENT_SET, every state variant is listed separately because they bind to different state-tagged tokens (e.g. `Default/BG` vs `Hover/BG`).
- "Stale" entries (`?`) mark bindings to tokens that were imported from external libraries or have been deleted — minor maintenance items, called out in the **Known issues** at the end.

---

## 📦 Icons

### Icon (COMPONENT_SET, `3893:34624`, 1412×68)

The full icon catalogue. 29 variants — pure vector glyphs.

| Variants |
|---|
| `Variant=Pause`, `Cost`, `Date`, `Time`, `Donate`, `Pin`, `Category tag`, `Pages`, `Search`, `Hamburger`, `Author`, `Give`, `End date`, `Download`, `Bullets`, `Twitter`, `Facebook`, `Bluesky`, `X`, `LinkedIn`, `Padlock`, `Chevron Right/Up/Left/Down`, `Chevron right sm`, `Chevron up sm`, `Chevron left sm`, `Chevron down sm` |

Each variant is a 28×28 BOOLEAN_OPERATION / VECTOR. Icon glyph fills are bound at the **consumer level** (e.g. button's `*/Icon` token) not on the icon itself — the icon is colourless / inherits its parent button's icon-fill.

### UI/CTA (COMPONENT, `0:304482`, 20×20)

Small CTA arrow used in compact contexts.

| Element | Space | Type | Colour |
|---|---|---|---|
| CTA (root) | — | — | `fill: Button/Primary/Default/BG` |
| Icon wrap | `width: Spacing/Scale/xs` | — | — |
| Icon glyph | — | — | `fill: Button/Primary/Default/Icon` |

### UI/Accordion button — icon variant (COMPONENT, `0:293872`, 30×30)

Chevron used by the accordion + dropdown atoms.

| Element | Space | Type | Colour |
|---|---|---|---|
| Dropdown (root) | — | — | `fill: Button/Primary/Default/BG` |
| Icon wrap | `width: Spacing/Scale/sm` | — | — |
| Icon glyph | — | — | `fill: Button/Primary/Default/Icon` |

---

## 📦 Buttons

### Primary (COMPONENT_SET, `3961:38`, 187×340)

**4 state variants**: Default / Hover / Active / Disabled.

Common structure per variant — Frame (height 60, paddingLeft/Right 16px @ 1280, itemSpacing sm) containing label TEXT + Icon INSTANCE.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm` | — | `fill: Button/Primary/{State}/BG`, `stroke: Button/Primary/{State}/Border` |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Primary/{State}/Text` |
| Icon glyph | — | — | `fill: Button/Primary/{State}/Icon` |

Where `{State}` ∈ `Default / Hover / Active / Disabled`.

### Secondary (COMPONENT_SET, `3961:39`, 205×340)

Same shape as Primary but bound through the `Button/Secondary/*` family. Inherits the `Spacing/Padding/Button weight` stroke weight on all 4 sides because Secondary uses an outline.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/m`, `itemSpacing: Spacing/Scale/sm`, `stroke weight (all sides): Spacing/Padding/Button weight` | — | `fill: Button/Secondary/{State}/BG`, `stroke: Button/Secondary/{State}/Border` |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Secondary/{State}/Text` |
| Icon | — | — | `fill: Button/Secondary/{State}/Icon` |

### Icon button (COMPONENT_SET, `3533:84510`, 100×260)

Square 60×60 button — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `width/height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/Primary/{State}/BG`, `stroke: Button/Primary/{State}/Border` |
| Icon glyph | — | — | `fill: Button/Primary/{State}/Icon` |

### Social button (COMPONENT_SET, `3958:127`, 181×260)

Wider button with text + brand icon — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingTop/Bottom: Spacing/Scale/sm`, `paddingLeft/Right: Spacing/Scale/lg`, `itemSpacing: Spacing/Scale/sm` | — | `fill: Button/Social/{State}/BG` |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Social/{State}/Text` |
| Icon (brand glyph) | — | — | `fill: Button/Secondary/Default/Icon` *(constant across states)* |

### Large play / Desktop/UI/Video/Large (COMPONENT_SET, `3527:577`, 158×296)

Video play button — Outline=True / Outline2.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | — | — | `fill: Primary BG` |
| Inner Icon button | `width/height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/Primary/{Default|Hover}/BG`, `stroke: Button/Primary/{Default|Hover}/Border` |
| Play glyph | — | — | `fill: Button/Primary/{Default|Hover}/Icon` |

### Dropdown (COMPONENT_SET, `3973:51`, 224×260)

Form-style dropdown bound to `Button/List/*` family — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/sm`, `itemSpacing: Spacing/Scale/lg`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/List/{State}/BG`, `stroke: Button/List/{State}/Border` |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/List/{State}/Text` |
| Chevron | — | — | `fill: Button/List/{State}/Icon` |

### List button (COMPONENT_SET, `4162:13266`, 236×260)

Similar to Dropdown but used in list-context — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/sm`, `itemSpacing: Spacing/Scale/lg`, `stroke weight (all): Spacing/Padding/Button weight` | — | `stroke: Button/Text input/{State}/Border` (Default) / `Button/List/{State}/Border` (Hover/Disabled) |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Text input/{State}/Text` |
| Chevron | — | — | `fill: Button/Text input/{State}/Text` |

### Accordion (COMPONENT_SET, `3996:47`, 258×260)

Accordion-trigger button — Default / Hover / Active / Disabled. `itemSpacing: Spacing/Scale/m`.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `itemSpacing: Spacing/Scale/m` | — | — |
| Label | — | `fontSize: Text/Headings/H5` | text **`Button/Primary/{State}/BG`** *(semantically off — see Known Issues)* |
| Chevron wrap | `width: Spacing/Scale/sm` | — | — |
| Chevron glyph | — | — | `fill: Button/Primary/Default/Icon` *(stuck on Default across states — see Known Issues)* |

---

## 📦 Links

### Hyperlink (COMPONENT_SET, `3893:35277`, 99×146)

Inline text link — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/{State}/Text` |

---

## 📦 Navigation

### Nav item (COMPONENT_SET, `4419:92`, 169×154)

Header/breadcrumb nav item with chevron — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `paddingTop/Bottom: Spacing/Scale/xs`, `itemSpacing: Spacing/Scale/xs` | — | — |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/{State}/Text` |
| Chevron wrap | `width/height: Spacing/Scale/m` | — | — |
| Chevron glyph | — | — | `fill: Button/Text link primary/{State}/Underline or icon` |

### Menu link (COMPONENT_SET, `3857:2659`, 192×263)

6 variants: State (Default / Hover / Disabled) × Primary (True / False).

| Variant | Type | Colour |
|---|---|---|
| Primary=True (any state) | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/{State}/Text` |
| Primary=False (any state) | `fontSize: Text/Headings/CTA sm` | text `Button/Text link secondary/{State}/Text` |

### Menu (COMPONENT_SET, `2890:212927`, 157×205)

Mega-menu / nav drilldown items — 4 variants: State (Default / Active) × Iconleft (True / False).

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `itemSpacing: Spacing/Scale/xs` | — | — |
| Label | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/{Default or Active}/Text` |
| Icon glyph (when Iconleft=True) | — | — | `fill: Button/Secondary/Default/Icon` (Default) / `Button/Text link primary/Active/Underline or icon` (Active) |

### Breadcrumb (COMPONENT_SET, `3893:35289`, 223×104)

Breadcrumb row — 2 variants: `768+=True` / `768+=False`.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `itemSpacing: Spacing/Scale/m` | — | — |
| Hyperlink instances | — | `fontSize: Text/Headings/CTA` | text `Button/Text link primary/Default/Text` |
| Separator (›) | — | `fontSize: Text/Headings/CTA` | text `Type/Heading` |

### Tabs (COMPONENT_SET, `4097:475`, 328×500)

Donation Monthly / One-off tab control. 6 variants: Active (Monthly / One-off) × State (Default / Hover / Disabled).

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `height: Spacing/Padding/Button height`, `paddingTop/Bottom/Left/Right: Spacing/Scale/xxs`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Primary BG`, `stroke: Button/Tab/Active/Border` |
| Tab cells (each) | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/lg` | — | active cell → `fill: Button/Tab/Active/BG`; inactive → no fill; hover → `Button/Tab/Hover/BG`; disabled → `Button/Tab/Disabled/BG` |
| Cell label | — | — | text `Button/Tab/{Active|Inactive|Hover|Disabled}/Text` |

### Amounts/Tabs (COMPONENT_SET, `684:3887`, 71×252)

£-amount selector. 4 variants: Default / Selected / Hover / Disabled. Tokens follow the `Button/Tab/*` family same as Tabs above.

---

## 📦 Form atoms

### Text field (COMPONENT_SET, `3157:42957`, 744×1460)

The big input atom. 12 variants — 4 input variants × 3 states.

Variants:
- `Variant=Text field, State=Default/Hover/Disabled`
- `Variant=Text field with heading, State=Default/Hover/Disabled`
- `Variant=Select, State=Default/Hover/Disabled`
- `Variant=Text box, State=Default/Hover/Disabled`

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
| Heading label (when variant has heading) | — | `fontSize: Text/Headings/H6` | text `Button/Text input/{State}/Text` |
| Input rectangle | `height: Spacing/Padding/Button height`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Secondary BG`, `stroke: Button/Text input/{State}/Border` |
| Select inner row | `height: Spacing/Padding/Button height`, `paddingLeft/Right: Spacing/Scale/xl`, `itemSpacing: Spacing/Scale/m`, `stroke weight (all): Spacing/Padding/Button weight` | placeholder `fontSize: Text/Headings/CTA` | `fill: Button/Text input/Default/BG` (Default) / `Secondary BG` (Hover/Disabled); `stroke: Button/Text input/Default/Border` (Default) / `Type/Heading` (Hover/Disabled); text `Button/Text input/{State}/Text`; icon `Button/Text input/Default/Text` (Default) / `Button/Secondary/Default/Icon` (Hover/Disabled) |
| Text box rectangle | (multi-line text input — same border binding pattern as Text field) |

### Check box (COMPONENT_SET, `3157:42820`, 58×248)

Selected (True/False) × State (Default/Hover/Disabled) — 6 variants. Tokens follow `Button/Binary inputs/*` family.

| Element | Space | Type | Colour |
|---|---|---|---|
| Box rectangle | `width/height: Spacing/Padding/Button height` (or similar 18×18 for the actual check), `stroke weight: ` (binary input weight) | — | `fill: Button/Binary inputs/{State}/BG`, `stroke: Button/Binary inputs/{State}/Border` |
| Check glyph (when Selected=True) | — | — | `fill: Button/Binary inputs/{State}/Icon` |

### Check box field (COMPONENT, `3157:42825`, 138×24)

Composition: a Check box instance + a label TEXT. Inherits the Check box's state through its instance.

### Radio button (COMPONENT_SET, `3653:608`, 58×248)

Same shape as Check box but circular. Selected × State (6 variants). Tokens identical to Check box (`Button/Binary inputs/*`).

### Radio field (COMPONENT, `3654:606`, 160×24)

Composition: a Radio button instance + a label TEXT. Inherits state.

---

## 📦 Tags

### Tag (COMPONENT_SET, `4418:42`, 77×115)

Bordered tag chip — Default / Hover / Disabled.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `paddingTop/Bottom: Spacing/Scale/xxs`, `paddingLeft/Right: Spacing/Scale/xs`, `itemSpacing: Spacing/Scale/xs`, `stroke weight (all): Spacing/Padding/Button weight` | — | `fill: Button/Tags/{State}/BG`, `stroke: Button/Tags/{State}/Border` |
| Label | — | `fontSize: Text/Headings/Tags` | text `Button/Tags/{State}/Text` |

### Tags (COMPONENT, `2531:343592`, 453×25)

A row of Tag instances. itemSpacing `Spacing/Scale/xxs`. Each inner Tag binds as above.

### Structured data (COMPONENT, `3893:34231`, 148×28)

Icon + label inline component (e.g. "£20"). 

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `itemSpacing: Spacing/Scale/xs` | — | `fill: Primary BG` |
| Icon glyph | — | — | `fill: Button/Secondary/Default/Icon` |
| Label | — | `fontSize: Text/Headings/CTA` | text `Type/Heading` |

---

## 📦 Bullets

### Bullet (COMPONENT_SET, `2708:457971`, 712×240)

Single bullet — Variant=Bullet / Variant=Number.

| Variant | Element | Space | Type | Colour |
|---|---|---|---|---|
| Bullet | Root | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
| Bullet | Marker (icon) | — | — | `fill: Type/Heading` + `Button/Secondary/Default/Icon` |
| Bullet | Text | — | `fontSize: Text/Headings/Body` | text `Type/Body` |
| Number | Root | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
| Number | Marker (number) | — | `fontSize: Text/Headings/H6` | text `Type/Heading`, marker glyph `Brand accent` |
| Number | Text | — | `fontSize: Text/Headings/Body` | text `Type/Body` |

### Bullets (COMPONENT, `2529:311562`, 704×560)

Composition: Heading + multiple Bullet instances.

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | `width: Spacing/Padding/Body width`, `itemSpacing: Text/Header spacing/Between paragraphs` | — | — |
| Heading | — | — | text `Type/Heading` |
| Inner list wrapper | `width: Spacing/Padding/Body width`, `itemSpacing: Spacing/Scale/m` | — | — |
| Bullet item (each) | — | `fontSize: Text/Headings/Body` | text `Type/Heading` |

---

## 📦 Notifications

### Cookie banner (COMPONENT, `2613:16650`, 40×40)

Compact cookie indicator (the small icon; full banner is composed externally).

| Element | Space | Type | Colour |
|---|---|---|---|
| Root | — | — | `fill: Primary BG`, `stroke: Foreground` |

---

## Token reference (every token used in the UI page atoms)

### Space — Padding
`Spacing/Padding/Body width`, `Spacing/Padding/Button height`, `Spacing/Padding/Button weight`

### Space — Scale (fluid)
`Spacing/Scale/xxs`, `xs`, `sm`, `m`, `lg`, `xl`

### Space — Header spacing
`Text/Header spacing/Between paragraphs`

### Type
`Text/Headings/H5`, `H6`, `Body`, `CTA`, `CTA sm`, `Tags`

### Colour — semantic top-level
`Primary BG`, `Secondary BG`, `Brand accent`, `Type/Heading`, `Type/Body`, `Foreground`

### Colour — button families (every state slot)
- `Button/Primary/{Default|Hover|Active|Disabled}/{BG|Border|Text|Icon}`
- `Button/Secondary/{Default|Hover|Active|Disabled}/{BG|Border|Text|Icon}`
- `Button/Text input/{Default|Hover|Disabled}/{BG|Border|Text|Icon}`
- `Button/Text link primary/{Default|Hover|Active|Disabled}/{Text|Underline or icon}`
- `Button/Text link secondary/{Default|Hover|Disabled}/{Text|Underline or icon}`
- `Button/Tags/{Default|Hover|Disabled}/{BG|Border|Text}`
- `Button/Binary inputs/{Default|Hover|Disabled}/{BG|Border|Icon|Text}`
- `Button/Social/{Default|Hover|Disabled}/{BG|Border|Text|Icon}`
- `Button/List/{Default|Hover|Disabled}/{BG|Border|Text|Icon}`
- `Button/Tab/{Active|Inactive|Hover|Disabled}/{BG|Border|Text}`

---

## How an agent should USE this

When building a screen / matching a design:
1. **Identify the atom needed** by visual match against the sections above. If it's a button, what kind? Primary / Secondary / Social / Icon / List / Dropdown / Large play / Accordion?
2. **Drop in an instance of the atom**, set the `State=...` variant property
3. **Tokens self-apply** — never set a hardcoded colour or pixel value. Inherit through the atom's instance.
4. **For text content**, set the visible label via the atom's text-instance override
5. **For spacing between atoms**, use `Spacing/Scale/X` or `Spacing/Padding/X` tokens — never raw px

When generating a **style guide**:
- Build a page with each section above as its own panel
- Per section, lay out every variant in a horizontal row labelled with its variant name
- Below each variant, show its binding table (Space / Type / Colour)
- Group the buttons together, links together, etc — matching the 📦 sections

---

## Known issues (still in the file)

1. **Accordion title text** binds to `Button/Primary/{State}/BG` instead of a text token. Renders correctly in Light (BG = black, same as a text heading would be) but breaks in Dark mode. Should be `Type/Heading` or `Button/List/{State}/Text`. Active state has a stale (`?`) binding.
2. **Accordion chevron glyph** binds to `Button/Primary/Default/Icon` across ALL states (Default/Hover/Active/Disabled). Active state needs its own `/Active/Icon` and Disabled needs `/Disabled/Icon` for a properly themed chevron.
3. **Icon button Disabled** has a `?` stale binding on its icon vector — should be `Button/Primary/Disabled/Icon`.
4. **Select State=Hover / Disabled** binds the inner row's stroke to `Type/Heading` instead of `Button/Text input/{State}/Border` — wrong family.
5. **Cookie banner** is just an icon (40×40) — not a full banner component. Full implementation would need a separate composed component.

These are minor — most consumers of the atoms won't hit them, and the file renders correctly in Light mode. Worth a pass to clean up before promoting the system further.
