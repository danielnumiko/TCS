# Usage — composing pages and creating new components

## Composing a new page

1. **Create a FRAME** at 1280 wide, VERTICAL auto-layout, hug height, fixed width
2. **Set Colours mode** on the frame (Light / Dark / Yellow / Resources Light / Resources Dark)
3. **Set Breakpoint mode** to 1280 (the design master)
4. **Drop in instances** of canonical Blocks and Slices from Foundations/Blocks/Slices
5. **Add Divider/1600 instances** between major sections for visual rhythm (matches the `Divider/1600` component on Foundations/Graphic)
6. **Convert the FRAME to a COMPONENT** (`figma.createComponentFromNode(frame)`) — gives the page itself a master
7. **Add a `Breakpoints` preview frame** alongside with 4 instances at 320/768/1280/1600 widths, each with the matching Breakpoint mode set

```js
// Plugin-API skeleton
const page = figma.createFrame();
page.layoutMode = 'VERTICAL';
page.primaryAxisSizingMode = 'AUTO';
page.counterAxisSizingMode = 'FIXED';
page.resize(1280, page.height);

// Set Resources Light mode
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const coloursCol = cols.find(c => c.name === 'Colours');
const mode = coloursCol.modes.find(m => m.name === 'Resources Light');
page.setExplicitVariableModeForCollection(coloursCol, mode.modeId);

// Drop in a Header instance
const headerComp = await figma.getNodeByIdAsync('2890:212935'); // Header COMPONENT_SET
const desktopVariant = headerComp.children.find(c => c.name === '768+=True');
page.appendChild(desktopVariant.createInstance());

// …continue with Hero, content, Footer
// Then componentise
const pageComp = figma.createComponentFromNode(page);
pageComp.name = 'My new page';
```

## Creating a new Slice / Block

1. Build the layout at 1280 width with auto-layout containers (VERTICAL for stacked, HORIZONTAL for rows)
2. Bind dimensions to fluid tokens:
   - Outer container width = `Spacing/Padding/Body width` or `Spacing/Padding/Width`
   - Grid item widths = `Spacing/Column layouts/N-N-N-N` matching the desired reflow
   - Padding = `Spacing/Padding/*` purpose tokens or `Spacing/Scale/*` for one-offs
   - itemSpacing = `Spacing/Scale/*`
3. Bind colours:
   - Section bg → `Primary BG` (themed) or `Secondary BG` (neutral) or `Button/Text input/Default/BG` (always white card)
   - Borders → `Primary Border` / `Secondary Border`
   - Text → `Type/Heading` (headings) / `Type/Body` (body)
4. Bind text sizes → `Text/Headings/H1` … `H6` / `Body` / `CTA` / `Label` / `Tags`
5. Convert to COMPONENT
6. If responsive: duplicate the COMPONENT, name with `768+=True` then `768+=False` (or other axis), combine with `figma.combineAsVariants([...components], parent)`
7. Add a Breakpoints preview frame

## Choosing the right token

### "I need a heading colour"
- `Type/Heading` — always use this. Resolves to Black 950 / White 50 per mode.

### "I need a body text colour"
- `Type/Body` — almost identical to Heading. Resolves to Black 950 in most modes, White 100 in Dark.

### "I need a button"
- Use the `Primary` COMPONENT_SET (3961:38) — drop an instance, set the `State` variant property. Done.
- Need an outline button? `Secondary` (3961:39).
- Need a text-only link? `Hyperlink` (3893:35277).
- Need a tab? `Tabs` (4097:475).

### "I need a card / panel surface that's white in all themes"
- Bind fill to `Button/Text input/Default/BG`. Yes, the name is for text inputs, but it's the only "always white" semantic token (becomes Black in Dark mode).

### "I need a brand-coloured surface"
- Bind to `Primary BG`. Yellow in Yellow mode, teal in Resources Dark, otherwise white. This is what you want for "themed surfaces".

### "I need a generic muted surface"
- `Secondary BG`. Light grey in most modes (White 100), dark grey in Dark.

### "I need the brand accent colour directly"
- Bind to `Brand accent`. Swaps Broom 500 ↔ Breaker bay 600 between non-Resources / Resources modes.

### "I need a column-of-Y reflowing layout"
- Pick a `Spacing/Column layouts/N-N-N-N` matching your reflow.
- `12-6-3-3` = mobile full / tablet half / desktop quarter (4-up grid).
- `12-12-6-6` = mobile full / desktop half (2-up).
- `12-12-12-12` = full width everywhere.

### "I need to space items vertically inside a stack"
- itemSpacing → `Spacing/Scale/m` (16-20px range), `lg` (16-28), `xl` (20-36), `2xl` (24-48)…

### "I need padding around a section"
- Top/bottom → `Spacing/Padding/Vertical margin` (60-140) or `Between slices (Sitewide)` (60-140)
- Left/right → `Spacing/Padding/Outer margin` (20-100)

## Theme switching (live preview)

Want to see a page in another theme? Set the Colours mode on the outermost frame:

```js
// On the page's master frame:
frame.setExplicitVariableModeForCollection(coloursCol, modeFor('Yellow'));
// or
frame.setExplicitVariableModeForCollection(coloursCol, modeFor('Resources Dark'));
```

All children inherit unless they override with their own explicit mode.

## Building atom states correctly

When creating a new interactive atom with states:

1. Build the **Default** state first, fully tokenised
2. Duplicate → rename to `State=Hover`
3. Rebind any colours that should change to the matching **Hover** state token (e.g. `Button/Primary/Hover/BG`)
4. Duplicate → rename to `State=Disabled`, rebind to Disabled state tokens
5. Add Active state if relevant
6. `figma.combineAsVariants([default, hover, active, disabled], parent)`
7. Rename the resulting COMPONENT_SET to the atom name

Use the existing `Button/Primary` family as the canonical pattern.

## Don'ts

- ❌ Don't bind to primitive Tailwind colours (`Broom 500`, `Black 950`) directly on components — go through semantic tokens
- ❌ Don't reference `Brand accent` for text (it's brand-coloured — text needs `Type/Heading`/`Type/Body`)
- ❌ Don't hardcode pixel values for spacing or font size — use the fluid tokens
- ❌ Don't create separate components for each breakpoint — use ONE component with variants or with fluid tokens
- ❌ Don't use `Foreground` and `Type/Heading` interchangeably — Foreground is "the opposite of bg", Type/Heading is specifically for headings
- ❌ Don't use the `TCS beta` handwritten font for UI / body — only emotional pull-quotes
- ❌ Don't skip the Breakpoints preview frame — every component-page needs one

## Inspecting things programmatically

```js
// All collections
const collections = await figma.variables.getLocalVariableCollectionsAsync();

// All colour variables
const colourVars = (await figma.variables.getLocalVariablesAsync('COLOR'))
  .filter(v => v.variableCollectionId === collections.find(c => c.name === 'Colours').id);

// Resolve a variable's value at a specific mode
function resolve(v, modeId, depth=0) {
  if (depth > 5) return null;
  const val = v.valuesByMode[modeId];
  if (val?.type === 'VARIABLE_ALIAS') {
    const target = (await figma.variables.getVariableByIdAsync(val.id));
    return resolve(target, modeId, depth+1);
  }
  return val;
}

// Set a variable mode on a node
node.setExplicitVariableModeForCollection(collection, modeId);

// Bind a fill / dimension / itemSpacing to a token
const tok = vars.find(v => v.name === 'Type/Heading');
const fill = figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r: 0, g: 0, b: 0 } },
  'color', tok
);
textNode.fills = [fill];

node.setBoundVariable('width', spacingToken);
```
