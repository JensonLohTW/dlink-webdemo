# bee031de-c8c6-4d6f-9877-da0cd6261746 implementation handoff

This archive is the source of truth for turning the design into production code. Start from `index.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of OpenDesign chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `index.html`
- HTML screens detected: 1
- Stylesheets detected: 1
- Script/component files detected: 1
- Supporting assets detected: 243

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or OpenDesign chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `index.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- A stylesheet or design/token file was detected; inspect it for canonical color variables before choosing framework theme tokens.

## Implementation sequence for AI coding tools
1. Open `index.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `index.html`

## Styles
- `css/style.css`

## Scripts/components
- `js/main.js`

## Assets and supporting files
- `assets/credits.json`
- `assets/fonts/work-sans-latin.woff2`
- `assets/icons/arrow_right.svg`
- `assets/icons/bag.svg`
- `assets/icons/chevron-down.svg`
- `assets/icons/home.png`
- `assets/icons/magnifier.svg`
- `assets/icons/user.svg`
- `assets/images/menu/4d.png`
- `assets/images/menu/a2.png`
- `assets/images/menu/b2_w.png`
- `assets/images/menu/b2.png`
- `assets/images/menu/desktop/digital/holo.png`
- `assets/images/menu/desktop/humanoid/g1.png`
- `assets/images/menu/desktop/humanoid/h1_h2.png`
- `assets/images/menu/desktop/humanoid/h2.png`
- `assets/images/menu/desktop/humanoid/r1.png`
- `assets/images/menu/desktop/quadruped/4d.png`
- `assets/images/menu/desktop/quadruped/a2.png`
- `assets/images/menu/desktop/quadruped/b2_w.png`
- `assets/images/menu/desktop/quadruped/b2.png`
- `assets/images/menu/desktop/quadruped/go2_w.png`
- `assets/images/menu/desktop/quadruped/go2.png`
- `assets/images/menu/desktop/quadruped/z1_d1.png`
- `assets/images/menu/digital.png`
- `assets/images/menu/g1.png`
- `assets/images/menu/go2_w.png`
- `assets/images/menu/go2.png`
- `assets/images/menu/h2.png`
- `assets/images/menu/r1.png`
- `assets/images/menu/z1_d1.png`
- `assets/img/book_bck.webp`
- `assets/img/go2_power.webp`
- `assets/img/hero_poster.avif`
- `assets/img/new_go2.webp`
- `assets/img/open_platform.webp`
- `assets/img/poster_2.webp`
- `assets/img/poster_3.webp`
- `assets/logos/ai_robots_logo.svg`
- `assets/seq/f000.avif`
- `assets/seq/f001.avif`
- `assets/seq/f002.avif`
- `assets/seq/f003.avif`
- `assets/seq/f004.avif`
- `assets/seq/f005.avif`
- `assets/seq/f006.avif`
- `assets/seq/f007.avif`
- `assets/seq/f008.avif`
- `assets/seq/f009.avif`
- `assets/seq/f010.avif`
- `assets/seq/f011.avif`
- `assets/seq/f012.avif`
- `assets/seq/f013.avif`
- `assets/seq/f014.avif`
- `assets/seq/f015.avif`
- `assets/seq/f016.avif`
- `assets/seq/f017.avif`
- `assets/seq/f018.avif`
- `assets/seq/f019.avif`
- `assets/seq/f020.avif`
- `assets/seq/f021.avif`
- `assets/seq/f022.avif`
- `assets/seq/f023.avif`
- `assets/seq/f024.avif`
- `assets/seq/f025.avif`
- `assets/seq/f026.avif`
- `assets/seq/f027.avif`
- `assets/seq/f028.avif`
- `assets/seq/f029.avif`
- `assets/seq/f030.avif`
- `assets/seq/f031.avif`
- `assets/seq/f032.avif`
- `assets/seq/f033.avif`
- `assets/seq/f034.avif`
- `assets/seq/f035.avif`
- `assets/seq/f036.avif`
- `assets/seq/f037.avif`
- `assets/seq/f038.avif`
- `assets/seq/f039.avif`
- `assets/seq/f040.avif`
- `assets/seq/f041.avif`
- `assets/seq/f042.avif`
- `assets/seq/f043.avif`
- `assets/seq/f044.avif`
- `assets/seq/f045.avif`
- `assets/seq/f046.avif`
- `assets/seq/f047.avif`
- `assets/seq/f048.avif`
- `assets/seq/f049.avif`
- `assets/seq/f050.avif`
- `assets/seq/f051.avif`
- `assets/seq/f052.avif`
- `assets/seq/f053.avif`
- `assets/seq/f054.avif`
- `assets/seq/f055.avif`
- `assets/seq/f056.avif`
- `assets/seq/f057.avif`
- `assets/seq/f058.avif`
- `assets/seq/f059.avif`
- `assets/seq/f060.avif`
- `assets/seq/f061.avif`
- `assets/seq/f062.avif`
- `assets/seq/f063.avif`
- `assets/seq/f064.avif`
- `assets/seq/f065.avif`
- `assets/seq/f066.avif`
- `assets/seq/f067.avif`
- `assets/seq/f068.avif`
- `assets/seq/f069.avif`
- `assets/seq/f070.avif`
- `assets/seq/f071.avif`
- `assets/seq/f072.avif`
- `assets/seq/f073.avif`
- `assets/seq/f074.avif`
- `assets/seq/f075.avif`
- `assets/seq/f076.avif`
- `assets/seq/f077.avif`
- `assets/seq/f078.avif`
- `assets/seq/f079.avif`
- `assets/seq/f080.avif`
- `assets/seq/f081.avif`
- `assets/seq/f082.avif`
- `assets/seq/f083.avif`
- `assets/seq/f084.avif`
- `assets/seq/f085.avif`
- `assets/seq/f086.avif`
- `assets/seq/f087.avif`
- `assets/seq/f088.avif`
- `assets/seq/f089.avif`
- `assets/seq/f090.avif`
- `assets/seq/f091.avif`
- `assets/seq/f092.avif`
- `assets/seq/f093.avif`
- `assets/seq/f094.avif`
- `assets/seq/f095.avif`
- `assets/seq/f096.avif`
- `assets/seq/f097.avif`
- `assets/seq/f098.avif`
- `assets/seq/f099.avif`
- `assets/seq/f100.avif`
- `assets/seq/f101.avif`
- `assets/seq/f102.avif`
- `assets/seq/f103.avif`
- `assets/seq/f104.avif`
- `assets/seq/f105.avif`
- `assets/seq/f106.avif`
- `assets/seq/f107.avif`
- `assets/seq/f108.avif`
- `assets/seq/f109.avif`
- `assets/seq/f110.avif`
- `assets/seq/f111.avif`
- `assets/seq/f112.avif`
- `assets/seq/f113.avif`
- `assets/seq/f114.avif`
- `assets/seq/f115.avif`
- `assets/seq/f116.avif`
- `assets/seq/f117.avif`
- `assets/seq/f118.avif`
- `assets/seq/f119.avif`
- `assets/seq/f120.avif`
- `assets/seq/f121.avif`
- `assets/seq/f122.avif`
- `assets/seq/f123.avif`
- `assets/seq/f124.avif`
- `assets/seq/f125.avif`
- `assets/seq/f126.avif`
- `assets/seq/f127.avif`
- `assets/seq/f128.avif`
- `assets/seq/f129.avif`
- `assets/seq/f130.avif`
- `assets/seq/f131.avif`
- `assets/seq/f132.avif`
- `assets/seq/f133.avif`
- `assets/seq/f134.avif`
- `assets/seq/f135.avif`
- `assets/seq/f136.avif`
- `assets/seq/f137.avif`
- `assets/seq/f138.avif`
- `assets/seq/f139.avif`
- `assets/seq/f140.avif`
- `assets/seq/f141.avif`
- `assets/seq/f142.avif`
- `assets/seq/f143.avif`
- `assets/seq/f144.avif`
- `assets/seq/f145.avif`
- `assets/seq/f146.avif`
- `assets/seq/f147.avif`
- `assets/seq/f148.avif`
- `assets/seq/f149.avif`
- `assets/seq/f150.avif`
- `assets/seq/f151.avif`
- `assets/seq/f152.avif`
- `assets/seq/f153.avif`
- `assets/seq/f154.avif`
- `assets/seq/f155.avif`
- `assets/seq/f156.avif`
- `assets/seq/f157.avif`
- `assets/seq/f158.avif`
- `assets/seq/f159.avif`
- `assets/seq/f160.avif`
- `assets/seq/f161.avif`
- `assets/seq/f162.avif`
- `assets/seq/f163.avif`
- `assets/seq/f164.avif`
- `assets/seq/f165.avif`
- `assets/seq/f166.avif`
- `assets/seq/f167.avif`
- `assets/seq/f168.avif`
- `assets/seq/f169.avif`
- `assets/seq/f170.avif`
- `assets/seq/f171.avif`
- `assets/seq/f172.avif`
- `assets/seq/f173.avif`
- `assets/seq/f174.avif`
- `assets/seq/f175.avif`
- `assets/seq/f176.avif`
- `assets/seq/f177.avif`
- `assets/seq/f178.avif`
- `assets/seq/f179.avif`
- `assets/seq/f180.avif`
- `assets/seq/f181.avif`
- `assets/seq/f182.avif`
- `assets/seq/f183.avif`
- `assets/seq/f184.avif`
- `assets/seq/f185.avif`
- `assets/seq/f186.avif`
- `assets/seq/f187.avif`
- `assets/seq/f188.avif`
- `assets/seq/f189.avif`
- `assets/seq/f190.avif`
- `assets/seq/f191.avif`
- `assets/seq/f192.avif`
- `assets/seq/f193.avif`
- `assets/seq/f194.avif`
- `assets/seq/f195.avif`
- `assets/seq/f196.avif`
- `assets/seq/f197.avif`
- `assets/seq/f198.avif`
- `assets/seq/f199.avif`
- `assets/seq/f200.avif`
- `assets/videos/go2/1.mp4`
- `assets/videos/go2/2.mp4`
- `assets/videos/go2/hero.mp4`

## Coding checklist for AI tools
1. Inspect `index.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
