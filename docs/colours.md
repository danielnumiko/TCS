# Colours

Five modes in the `Colours` collection. Every semantic token resolves differently per mode.

| Mode | Use |
|---|---|
| `Light` | Default web theme — black on white |
| `Dark` | Inverted — white on black |
| `Yellow` | Brand-themed (Broom yellow surfaces) |
| `Resources Light` | Light theme but brand accents swap from Broom → Breaker bay teal (for Resources articles) |
| `Resources Dark` | Brand-themed teal (Resources brand variant) |

## Primitive palette (Tailwind colours)

Constants — these never change per theme. All hex values are exact.

### Greyscale
| Name | Hex |
|---|---|
| `Black 950` | `#000000` |
| `Black 900` | `#3D3D3D` |
| `Black 800` | `#454545` |
| `Black 700` | `#4F4F4F` |
| `Black 600` | `#5D5D5D` |
| `Black 500` | `#6D6D6D` |
| `White 500` | `#7C7C7C` |
| `White 400` | `#989898` |
| `White 300` | `#BDBDBD` |
| `White 200` | `#DCDCDC` |
| `White 100` | `#EFEFEF` |
| `White 50` | `#FFFFFF` |

### Brand colours
| Name | Hex | Notes |
|---|---|---|
| `Broom 500 (brand)` | `#FFEB00` | TCS yellow — primary brand |
| `Broom 600` | `#D1AE00` | Darker yellow for borders |
| `Broom 400` | `#FFF90D` | Light yellow tint |
| `Breaker bay 600 (brand)` | `#029E9C` | Resources teal — secondary brand |
| `Breaker bay 700` | `#077E7E` | Darker teal |
| `Breaker bay 500` | `#4DC2C0` | Mid teal |
| `Breaker bay 400` | `#B3E5E4` | Pale teal (disabled states) |

### Secondary / system
| Name | Hex |
|---|---|
| `Tangerine 600 (brand)` | `#F28500` |
| `Tangerine 500` | `#FFA40A` |
| `Tangerine 700` | `#CC6702` |
| `Lightening yellow 500 (brand)` | `#F0B700` |
| `Lightening yellow 400` | `#FFD20D` |
| `Lightening yellow 600` | `#D18D00` |
| `Pixton blue 500` | `#36A7E9` |
| `Pixton blue 600` | `#1076B9` |
| `Wild watermelon 400` | `#FF5177` |
| `Cosmos pink 400` | `#F578B5` |
| `Navy 600` | `#134493` |
| `System/Red 500` | `#FF3931` |

## The semantic pivot: `Brand accent`

| Mode | Brand accent → |
|---|---|
| Light | `Broom 500 (brand)` |
| Dark | `Broom 500 (brand)` |
| Yellow | `Broom 500 (brand)` |
| Resources Light | `Breaker bay 600 (brand)` |
| Resources Dark | `Breaker bay 600 (brand)` |

**Important convention**: every other brand-coloured token aliases through `Brand accent` — don't bind to `Broom 500` or `Breaker bay 600` directly anywhere except on `Brand accent` itself. Change Brand accent once, downstream tokens follow.

## Top-level semantic tokens

| Token | Light | Dark | Yellow | Resources Light | Resources Dark |
|---|---|---|---|---|---|
| `Primary BG` | White 50 | Black 950 | Brand accent | White 50 | Brand accent |
| `Secondary BG` | White 100 | Black 900 | White 100 | White 100 | White 100 |
| `Foreground` | Black 950 | White 50 | Black 950 | Black 950 | White 50 |
| `Type/Heading` | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| `Type/Body` | Black 950 | White 100 | Black 950 | Black 950 | Black 950 |
| `Primary Border` | White 100 | Black 900 | Broom 600 | White 100 | Breaker bay 700 |
| `Secondary Border` | White 200 | Black 800 | White 200 | White 200 | White 200 |
| `Image overlay` | #000000 | #000000 | #000000 | #000000 | #000000 |
| `Focus/Outline` | Pixton blue 600 | Pixton blue 500 | Pixton blue 600 | Pixton blue 600 | Pixton blue 500 |
| `System colours/Focussed Blue` | Pixton blue 500 (all modes) | | | | |
| `System colours/Error Red` | System/Red 500 (all modes) | | | | |
| `System colours/Success Green` | Breaker bay 600 (all modes — kept independent of Brand accent) | | | | |

## Button token families

10 families, each with `Default`/`Hover`/`Active`/`Disabled` states (most) and `BG`/`Border`/`Text`/`Icon` slots:

- `Button/Primary` — main CTA (full Default/Hover/Active/Disabled × BG/Border/Text/Icon)
- `Button/Secondary` — outline CTA
- `Button/Text input` — text fields, dropdowns, filters
- `Button/Text link primary` — inline links (Default/Hover/Active/Disabled × Text/Underline-or-icon)
- `Button/Text link secondary` — less prominent inline links
- `Button/Tags` — tag chips (Default/Hover/Disabled × BG/Border/Text/Icon)
- `Button/Binary inputs` — checkboxes / radios (Default/Hover/Disabled × BG/Border/Icon/Text)
- `Button/Social` — social buttons
- `Button/List` — list-style buttons
- `Button/Tab` — tabs (Active/Inactive/Hover/Disabled)

### Worked example: Button/Primary across modes

| Slot | Light | Dark | Yellow | Resources Light | Resources Dark |
|---|---|---|---|---|---|
| Default/BG | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| Default/Border | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| Default/Text | White 50 | Black 950 | White 50 | White 50 | White 50 |
| Default/Icon | Brand accent | Black 950 | Brand accent | Brand accent | White 50 |
| Hover/BG | White 50 | Black 950 | Brand accent | White 50 | Brand accent |
| Hover/Border | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| Hover/Text | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| Active/BG | White 50 | Black 950 | Brand accent | White 50 | Brand accent |
| Disabled/BG | White 300 | Black 700 | White 300 | White 300 | White 300 |
| Disabled/Text | White 200 | Black 600 | White 200 | White 200 | White 200 |

### Worked example: Button/Text input (the "always white card" surface)

| Slot | Light | Dark | Yellow | Resources Light | Resources Dark |
|---|---|---|---|---|---|
| Default/BG | White 50 | Black 950 | White 50 | White 50 | White 50 |
| Default/Border | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |
| Default/Text | Black 950 | White 50 | Black 950 | Black 950 | Black 950 |

Used for: text fields, dropdowns/filters, white pill controls on a brand-coloured background. Resolves to white in every mode except Dark (where it's black).

## Full token table

For the complete 129-token × 5-mode matrix, see `docs/tokens.json` (`colours.semantic` key) — machine-readable, sorted by token name.

## Gotchas

1. **Don't reference primitives for brand colours** — only `Brand accent` itself touches `Broom 500` / `Breaker bay 600`.
2. **`Brand accent` value differs per mode** — Broom in Light/Dark/Yellow, Breaker bay in Resources modes.
3. **`Foreground` and `Type/Heading` are similar but distinct** — Foreground flips bg/fg, Type/Heading is specifically for heading text.
4. **No "Surface" token** for "always-white card" — use `Button/Text input/Default/BG` (white in every mode except Dark).
5. **System colours are mode-independent** — Success Green stays Breaker bay 600 in every mode, intentionally NOT aliased through Brand accent.
