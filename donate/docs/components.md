# Component catalogue

Every component built into Sitekit, organised by the page it lives on. Each row gives the component name, type, master width × height, and variant axis.

## 🛠️ Foundations / UI (atoms)

### Icons

| Component | ID | Variants |
|---|---|---|
| `Icon` (COMPONENT_SET, 1412×68) | `3893:34624` | Variant=Pause / Cost / Date / Time / Donate / Pin / Category tag / Pages / Search / Hamburger / Author / Give / End date / Download / Bullets / Twitter / Facebook / Bluesky / X / LinkedIn / Padlock / Chevron Right/Up/Left/Down (regular + sm) |
| `CTA` (COMPONENT, 20×20) | `0:304482` | Small CTA arrow glyph |
| `Dropdown` (COMPONENT, 30×30) | `0:293872` | Chevron-style dropdown indicator |

### Buttons

| Component | ID | Variants |
|---|---|---|
| `Primary` (187×340) | `3961:38` | State=Default / Hover / Active / Disabled |
| `Secondary` (205×340) | `3961:39` | State=Default / Hover / Active / Disabled |
| `Icon button` (100×260) | `3533:84510` | State=Default / Hover / Disabled |
| `Social button` (181×260) | `3958:127` | State=Default / Hover / Disabled |
| `Desktop/UI/Video/Large` (158×296) | `3527:577` | Outline=True / Outline2 — large play button for video |
| `Dropdown` (224×260) | `3973:51` | State=Default / Hover / Disabled |
| `List button` (236×260) | `4162:13266` | State=Default / Hover / Disabled |
| `Accordion` (258×260) | `3996:47` | State=Default / Hover / Active / Disabled |

### Links

| Component | ID | Variants |
|---|---|---|
| `Hyperlink` (99×146) | `3893:35277` | State=Default / Hover / Disabled |
| `Nav item` (169×154) | `4419:92` | State=Default / Hover / Disabled |
| `Menu link` (192×263) | `3857:2659` | State × Primary=True/False (6 variants) |
| `Menu` (157×205) | `2890:212927` | State=Default/Active × Iconleft=True/False |
| `Breadcrumb` (223×104) | `3893:35289` | 768+=True / False |
| `Tabs` (328×500) | `4097:475` | Active=One-off/Monthly × State=Default/Hover/Disabled |
| `Amounts` (361×60) | `684:3900` | Donation amount selector |

### Form atoms

| Component | ID | Variants |
|---|---|---|
| `Text field` (744×1460) | `3157:42957` | Variant=Text field / Text field with heading / Select / Text box × State=Default/Hover/Disabled (12 variants) |
| `Check box` (58×248) | `3157:42820` | Selected=True/False × State=Default/Hover/Disabled |
| `Check box field` (138×24) | `3157:42825` | Composition: Check box + label |
| `Radio button` (58×248) | `3653:608` | Selected × State |
| `Radio field` (160×24) | `3654:606` | Composition: Radio + label |
| `Amounts/Tabs` (71×252) | `684:3887` | State=Default / Selected / Hover / Disabled |

### Tags & lists

| Component | ID | Variants |
|---|---|---|
| `Tag` (41×115) | `4418:42` | State=Default / Hover / Disabled |
| `Tags` (453×25) | `2531:343592` | Wrapper holding multiple Tag instances |
| `Bullet` (712×240) | `2708:457971` | Variant=Bullet / Number |
| `Bullets` (704×560) | `2529:311562` | Wrapper holding multiple Bullet instances |

### Other atoms

| Component | ID | Notes |
|---|---|---|
| `Structured data` (148×28) | `3893:34231` | Inline data display |
| `Cookie banner` (40×40) | `2613:16650` | Small icon — full banner is composed |

## 🛠️ Foundations / Graphic

Decorative and graphic elements:

| Component | ID | Variants |
|---|---|---|
| `Brush` (1381×190) | `3533:78326` | Variant=Top / Bottom — full-width brush strokes |
| `Brush` (340×661) | `4486:122414` | Variant=Left / Right — vertical brush strokes |
| `Desktop/1680/Top` | `0:293996` | Top brush at 1280w |
| `Brush/1680/Bottom` | `0:293956` | Bottom brush at 1280w |
| `Brush/768/Top` `/Bottom` | `0:294116`, `0:294076` | 768 width brushes |
| `Brush/375/Top` `/Bottom` | `0:293916`, `0:293876` | Mobile brushes |
| `Divider/1600` (1320×760) | `252:140383` | Arrow=arrow centred / arrow right / Arrow left / No arrow / Professional area |
| `Mobile/Divider/Orange` (326×100) | `0:282183` | |
| `Mobile/Divider/No arrow` (335×12) | `0:282396` | |
| `Illustration` (796×500) | `3753:113985` | Variant=Campaign / Donate / Volunteer / Heart / fundraising / Rainbow |
| `Illustration/Document` (275×231) | `3619:76515` | |
| `Blob` (100×101) | `3788:29022` | Background decorative blob |
| `Decoration/Pink curl` (86×163) | `3522:976` | |
| `Arrow` (109×340) | `3537:1346` | Variant=Right / Left |
| `Placeholder image/Publication` (201×290) | `0:288136` | |
| `Placeholder image/Resource` (182×290) | `0:290749` | |
| `Logo` (120×460) | `4064:92` | Variant=White / Black / Transparent — TCS logo |

## 🧱 Blocks

| Block | ID | Variants | Notes |
|---|---|---|---|
| `Header` (1320×300) | `2890:212935` | 768+=True / False | Top page header with logo + nav |
| `Menu` (1360×1836) | `4147:1493` | 768+=True/False × Variant=Level 1/Level 2 | Mega-menu drilldown |
| `Hero` (1320×2500) | `3537:739` | Alignment=True/False × Video=True/False | Main hero block |
| `Topic hero` (1280×500) | `4501:74903` | (single) | Themed page hero |
| `Heading box` (556×731) | `4501:95516` | Variant=Quote / heading | Reusable heading container |
| `Intro block` (1380×5575) | `4486:61750` | Variant=Home page / Content page / Structured data × 768+=True/False | Intro section under hero |
| `Share block` (1320×744) | `3910:42510` | 1024+=True / False | Inline social-share row |
| `Related block` (1280×765) | `3153:79688` | (single) | "Related content" teaser grid |
| `Newsletter` (1360×1151) | `3909:788` | State=Default / Completed | Signup form |
| `Footer` (1320×1565) | `2615:17607` | 1280+=True / False | Site footer |

## 🍕 Slices

### Content-driven slices

| Slice | ID | Variants | Notes |
|---|---|---|---|
| `Rich text` (1280×4841) | `4483:41601` | (single) | Composable rich content with bullets, images, buttons |
| `Teaser slice` (1360×2399) | `3643:993` | Columns=2/3/4 | Multi-column teaser grid |
| `Teaser cards` (556×1308) | `4501:104413` | Variant=x4 / x3 / x2 | Individual teaser cards |
| `50/50` (1360×4296) | `3876:50` | Alignment=True/False × Variant=Image/Video/Quote | Two-column content + media |
| `Media` (556×2424) | `3890:95452` | Variant=Image right/left, Video right/left, Quote | Inner media component of 50/50 |
| `Home Story slice` (1280×840) | `3772:937` | (single) | Featured story on home page |
| `Story card` (234×300) | `3772:802` | (single) | Inner story card |
| `Story slice` (1320×1438) | `3782:50149` | 768+=True/False | Article story slice |
| `Stories slice` (1280×657) | `3778:1345` | (single) | Multi-story container |
| `Timeline slice` (1280×2256) | `3786:148` | (single) | Vertical timeline |
| `Timeline entry` (1280×592) | `3786:125` | (single) | Single timeline item |
| `People slice` (1280×940) | `3740:143` | (single) | Team grid |
| `Person — Paul Maher` (516×330) | `3743:17723` | (single) | Person card |

### CTAs and form

| Slice | ID | Variants | Notes |
|---|---|---|---|
| `CTA` (1280×640) | `3615:165` | (single) | Yellow CTA banner |
| `Box out` (1280×414) | `3700:303` | (single) | Highlighted box-out |
| `Quote` (1280×500) | `3578:196` | (single) | Standalone quote |
| `Media slice` (1280×675) | `3634:213` | (single) | Full-width media |
| `Large promo slice` (1320×4354) | `3763:57934` | 480+=True/False × Alignment × Video | Promo / hero-style slice |
| `Donate slice` (1360×2845) | `3692:4122` | 768+=True/False × Christingle=True/False | Donation form |
| `Donate 1400` (408×1103) | `667:3321` | 768+=True/False | Smaller donation widget |
| `Home Story slice` `Help card` (516×232) | `3750:24752` | (single) | "How you can help" card |
| `How you can help slice` (1280×881) | `3750:35594` | (single) | "How to help" composition |
| `Invest` (1320×2394) | `3718:12995` | 768+=True/False | Investment / purpose slice |
| `Form` (1280×1119) | `3654:803` | (single) | Form slice |
| `Data report` (1360×1332) | `3806:382` | State=Default / Results | Data report slice |
| `Download report card` (1200×102) | `3806:283` | (single) | Inner download CTA |

### Navigation

| Slice | ID | Variants | Notes |
|---|---|---|---|
| `Jump links` (1320×718) | `3824:2101` | Open=True/False × 768+=True/False | In-page jump nav |
| `Accordion item` (878×280) | `3602:541` | State=Closed / Open | |
| `Accordion 1280px` (1280×649) | `3603:628` | (single) | Multi-item accordion |

### Stats

| Slice | ID | Variants | Notes |
|---|---|---|---|
| `Stats` (1360×2006) | `3594:1956` | Columns=1/2/3/4 | Stat grid |
| `Stat block` (234×225) | `3593:157` | (single) | Single stat card |

## 🍕 Appeals (themed Yellow)

Campaign-specific layouts:

| Component | ID | Variants |
|---|---|---|
| `Timeline carousel` (1320×2217) | `4471:33306` | 768+=True / False |
| `Carousel controls` (514×220) | `4471:41699` | 768+=True / False |
| `State` (120×340) | `2887:25197` | State=Default / Hover / Active — for carousel controls |
| `Quote & CTA` (1280×604) | `4463:95` | (single) — uses brush quote text |
| `Quiz` (1320×2690) | `4473:9883` | Variant=x2 / x3 / x4 |
| `Button` (274×488) | `4473:9865` | State=Default / Hover / Active — quiz buttons |
| `Text & image` (6792×1547) | `4464:96` | Breakpoint=320 / 480 / 768 / 1024 / 1400 / 1800 |
| `RISE` (1280×1814) | `4473:85705` | (single) — RISE appeal layout |

## Page composition examples

Two example pages live at the root of the file:

- `📄 Blog` — `Blog page` COMPONENT (1280×7054)
- `📄 Content` — `Content page` COMPONENT (1280×6620)

Both follow this pattern:
```
Header (instance)
1280px Hero / Topic hero (instance, with breadcrumb + heading + body)
[Divider/1600]
Major section (50/50 / Rich text / 1280px CTA etc.)
[Divider/1600]
…more sections…
Share block
Related block
Newsletter
Footer
```

Stacked with VERTICAL auto-layout, hug height, fixed 1280 width. Each gets a sibling `Breakpoints` preview frame with instances at 320 / 768 / 1280 / 1600.

## Naming conventions for new components

- Single component: `MyComponentName` (PascalCase or Sentence case fine)
- Variant property: `Property=Value` exactly — Figma reads `=` to identify props
- Multiple props: `Prop1=Value, Prop2=Value` separated by commas
- Use semantic property names: `State`, `Variant`, `Columns`, `768+`, `1024+`, `1280+`, `Selected`, `Active`, `Alignment`
- State values: `Default`, `Hover`, `Active`, `Disabled`, `Selected` (consistent across the system)
