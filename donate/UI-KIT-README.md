# UI Kit — Marketing site

A pixel-recreation of the **TCS marketing website** — the primary public product of The Children's Society. It's a content-led, multi-template site that the rest of the brand's online presence flows from.

This kit covers the **website**. There is no separate mobile-app product (TCS is mostly a charity working in the real world; the app surface is the marketing site + microsites + intranet donation paths).

## Try it

Open `index.html`. It's a small interactive click-thru that demonstrates:

1. **Home** — hero, "Making a difference" intro, story teasers, "In their own words" 4-up, How-you-can-help cards, newsletter, footer.
2. **Donate** — yellow donate widget with monthly / one-off / £5 / £25 / £50 / Other tabs, stat block, FAQ accordion.
3. **Story** — article layout with intro paragraph, handwritten pull-quote, body, yellow report-promo CTA, share row, related content.

Navigate via the nav bar and any of the CTA buttons. All forms are fake.

## What's in here

| File | What |
|---|---|
| `index.html` | Loader. Pulls React, Babel and the kit JSX. |
| `app.jsx` | Top-level `<App/>` — owns route state, renders the current page. |
| `components.jsx` | Header, Hero, Button, Section, Cards (story/teaser/help), StatBlock, Newsletter, Footer, Icon |
| `pages.jsx` | HomePage, DonatePage, StoryPage |
| `styles.css` | Layout + small site-specific tweaks that aren't part of the token system. |

Tokens come from the root design system: `../../colors_and_type.css` and `../../fonts/` are loaded directly.

## What's deliberately rough

- **Hand-drawn illustrations and brushstrokes** are CSS approximations. The real PNG/SVG exports live in the Figma file and should be requested from the brand team before production use.
- **The TCS logo** is a typographic placeholder (see `assets/README.md` in project root).
- **Photography** is represented by warm radial-gradient placeholders. Drop in real images.
- **The "Donate" flow** stops at the amount-selection — there's no real payment integration.
- **The site is single-page only** — real TCS has a CMS-driven sitemap of dozens of templates. This kit shows the three most representative ones.

## How to extend it

The components are small, cosmetic and reusable. Pick any one, copy it into a new project file, and feed it new content. They all consume the same root-level CSS tokens, so the colour mode and breakpoint of the host page determine how they look.
