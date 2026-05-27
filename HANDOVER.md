# Sitekit — Design system handover

A self-contained brief for any Claude / Claude Design session needing to **create or use** Numiko's Sitekit design system. Paste this in, then reference the deeper docs under `docs/` as needed.

## What this is

**Sitekit** is Numiko's foundational Figma design system, being adapted as a base for **The Children's Society** (TCS). The architecture is fluid — design tokens swap by mode for theming, by breakpoint for responsive behaviour. Every component is built at **1280px** as the master and has breakpoint variants.

Figma file: `Sitekit with Claude`, file key `6IO6xPnCMYlUEidDteuVPX`.

Repo: https://github.com/danielnumiko/TCS

## Where to look

| For | Read |
|---|---|
| Theming mental model + first principles | `docs/architecture.md` |
| Colour tokens (semantic → primitive, all modes) | `docs/colours.md` |
| Spacing + grid (Spacing scale, Column layouts, paddings) | `docs/spacing.md` |
| Typography (font scale, heading sizes per breakpoint, header spacing) | `docs/typography.md` |
| Component catalogue (every Block / Slice / Atom with variants) | `docs/components.md` |
| How to compose pages, name new components, bind tokens | `docs/usage.md` |
| Machine-readable token dump | `docs/tokens.json` |

## TL;DR

1. **5 colour modes**: `Light`, `Dark`, `Yellow`, `Resources Light`, `Resources Dark`. Set on the outermost frame, children inherit.
2. **4 breakpoints**: `320 (sm)`, `768 (md)`, `1280 (xl)`, `1600 (xxl)`. Set on the outermost frame.
3. **Components are built at 1280**. Variants exist for `768+=True/False` (standard) or `Breakpoint=320/480/768/1024/1400/1800` (Appeals pattern).
4. **Brand pivot is `Brand accent`** — everything brand-coloured aliases through it. Don't bind to primitives like `Broom 500` or `Breaker bay 600` directly.
5. **Auto-layout everywhere**, dimensions bound to `Spacing/Column layouts/N-N-N-N` tokens for fluid widths.
6. **Component pages** follow the pattern: master COMPONENT_SET + `Breakpoints` preview frame (instances at 320/768/1280/1600 with breakpoint modes set).

## Inspecting the file live

Use the Figma plugin API via MCP. Examples:

```js
// All collections
const collections = await figma.variables.getLocalVariableCollectionsAsync();

// All variables
const vars = await figma.variables.getLocalVariablesAsync('COLOR');

// Set a mode on a frame
node.setExplicitVariableModeForCollection(collection, modeId);
```

Skip `COMPONENT_SET`, `VECTOR`, `BOOLEAN_OPERATION` when auditing fills/strokes — they have intrinsic styling that shouldn't be tokenised.
