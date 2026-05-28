# Iconography + brand assets

## Logo

| File | Use |
|---|---|
| `logo-black.svg` | Black square with white wordmark. For light surfaces (default header treatment is a black bar with this stamped on the left). |
| `logo-white.svg` | White square with black wordmark. The inverse — use on dark surfaces. |
| `logo-transparent.svg` | Wordmark only, no background. For brand-coloured (yellow / teal) and photographic surfaces. |

The mark is the BentonSans-stack wordmark "The Children's Society" in three stacked rows, sized inside a 120 × 120 square. Always preserved as a square — never cropped, rotated, or recoloured.

Recommended size: **120 × 120 px** in the header at 1280, **80 × 80** at smaller breakpoints.

## Icons — usage

Icons in TCS are **stroke-only black line glyphs at ~24 px**, drawn from the Figma `Icon` set. The set covers:

```
Pause · Cost · Date · Time · Donate · Pin · Category tag · Pages
Search · Hamburger · Author · Give · End date · Download
Bullets · Twitter · Facebook · Bluesky · X · LinkedIn · Padlock
Chevron-Right / Up / Left / Down (regular + sm)
```

Stroke weight ~2 px, **square line caps**, **no internal fill**. Sized at 16, 20 or 24.

### How to use them

1. **Production-attached SVG.** `icons/download.svg` is the original Figma export. Drop the rest in here and they'll be `currentColor`-aware.
2. **Fallback: Lucide.** When you need an icon that hasn't been exported yet:

   ```html
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script>
   <i data-lucide="search"></i>
   <script>lucide.createIcons();</script>
   ```

   Set the global style:

   ```css
   .tcs-icon, [data-lucide] {
     stroke-width: 2;
     stroke-linecap: square;
     stroke-linejoin: miter;
   }
   ```

   Flag any non-`download.svg` Lucide substitute in your PR description so the brand team can prioritise an authoritative export.

### Mapping to Lucide

| TCS icon | Lucide equivalent | Notes |
|---|---|---|
| Search | `search` | match |
| Hamburger | `menu` | match |
| Donate (heart) | `heart` | match |
| Date | `calendar` | match |
| Time | `clock` | match |
| Pin | `map-pin` | match |
| Download | (use `icons/download.svg`) | **authoritative export available** |
| Author | `user` | match |
| Cost | `pound-sterling` | TCS-specific (UK charity) |
| Bullets | `list` | match |
| Chevron-Right / Up / Left / Down | `chevron-right` / `up` / `left` / `down` | match |
| Padlock | `lock` | match |
| Twitter / X | `twitter` / `x` | both exist |
| Facebook | `facebook` | match |
| LinkedIn | `linkedin` | match |
| Bluesky | `cloud` (closest) | Lucide doesn't ship Bluesky — ask brand for the SVG |
| Pages | `file-text` | approximation |
| Category tag | `tag` | match |
| Give | `gift` | approximation — "Give" is a TCS donate variant |
| End date | `calendar-x` | match |

## Hand-drawn illustrations

Six brushy yellow + orange illustrations with a black brush outline, ~180 × 180 px native:

| File | Variant | Use |
|---|---|---|
| `illustrations/campaign.svg` (+`.png`) | Campaign | Placard with an exclamation mark — advocacy / petitions |
| `illustrations/donate.svg` (+`.png`) | Donate | Yellow heart cradled by a hand — donation CTAs |
| `illustrations/volunteer.svg` (+`.png`) | Volunteer | Open palm with a star — volunteer programmes |
| `illustrations/fundraising.svg` (+`.png`) | Fundraising | Two overlapping hearts — fundraising prompts |
| `illustrations/heart.svg` (+`.png`) | Heart | Running figure on a brushy ribbon — events / Heart appeal |
| `illustrations/rainbow.svg` (+`.png`) | Rainbow | Three-arc rainbow — hope, wellbeing, intro moments |

> **Use the PNGs for production.** The originals are vector exports from the
> Figma file, but they're made of thousands of stacked sub-paths and each is
> 500 KB–900 KB; loading more than one or two on a single page hangs the
> browser at parse time. The PNG versions (360 × 360, ~25–35 KB each) are
> rendered from the SVGs once and look identical at any size up to ~400 px.

## Decorative elements

| File | Use |
|---|---|
| `decoration/brush-top.png` (+`.svg`) | Top edge of hero sections (1280 × 20) — solid black brush stroke |
| `decoration/brush-bottom.png` (+`.svg`) | Bottom edge of hero sections (1280 × 20) |
| `decoration/brush-left.png` / `brush-right.png` (+`.svg`) | Vertical brushes for side gutters (20 × 800) |
| `decoration/brush.png` (+`.svg`) | Standalone brushy splash (1280 × 200) — for decorative panels |
| `decoration/blob.png` (+`.svg`) | Yellow background blob behind headline boxes (Appeals) |
| `decoration/pink-curl.png` (+`.svg`) | Small pink curl flourish — Appeals decoration |
| `dividers/arrow-centred.png` (+`.svg`) | Section transition (1280 × 140) — horizontal rule + centred hand-painted arrow |
| `dividers/arrow-left.png` / `arrow-right.png` (+`.svg`) | Same rule with the arrow offset left or right |
| `dividers/no-arrow.png` (+`.svg`) | Same rule with no arrow — when the previous slice doesn't need a "keep scrolling" cue |

Same SVG/PNG story as the illustrations — the **PNGs are the right thing to use for production**. Originals are kept alongside as the source of truth in case the brand team needs to re-export at a different size.

## Photography

Real TCS photographs in `photos/`. All compressed to 80–230 KB JPEGs at up to 1600 px wide / quality 0.82. Aspect ratios preserved.

Hero / wide landscape:
- `hero-headphones.jpg` (1592×912) — boy with headphones at a fence (the "It helped me become more confident" hero)
- `hero-looking-up.jpg` (1592×912) — young woman with braids in a park, looking up
- `group-laughing.jpg` (1600×875) — three young people laughing, arms around each other
- `three-girls.jpg` (1592×912) — three girls piggybacking in a sunny field
- `yellow-sneaker.jpg` (1600×875) — yellow Converse with a runner's shadow
- `girl-red-coat.jpg` (1600×800) — girl in red coat smiling on a sofa, the donate-page hero

Portrait crops (3:4):
- `portrait-1.jpg`…`portrait-4.jpg` — story-card portraits

Group / scene crops:
- `group-1.jpg`…`group-4.jpg` — group shots
- `scene-1.jpg`…`scene-4.jpg` — Christingle / café / context shots
