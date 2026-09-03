# DESIGN.md — Immersed in Code

<!-- impeccable:design-schema 1 -->

A printed technical quarterly's plate section on uncoated stock.
Replaces the Docusaurus banner-hero + card-grid default (seed 8cfdbbde,
challenger `design-annual-s-plate-section`).

## Palette & material

Restrained (Read mode). Paper ground drifting warm/cool at the edges,
ink never pure black, 1px hairlines, dot-matrix voids, one periwinkle seal.

- Light: paper `#F4F2EE` (warm `#FAF6EF`, cool `#EDF1EA`), surface `#EBE8E1`,
  ink `#17191C`, soft `#2B2E33`, mute `#5C6067`, hairline `#C8C4B9`,
  seal `#3A3FC0`, seal-deep `#2B2F96`, seal-wash `#DCDCF3`.
- Dark (engineer's desk at night): ground `#14161A`, ink-text `#ECE9E1`,
  hairline `#2E333B`, seal `#B7BCFF`.
- Flat fields only: no decorative gradients, no glass, no shadows-as-chrome.
  Depth comes from hairlines and the single inversion, not elevation.

## Type

- Display/UI grotesque: **Archivo** (400–800, −0.02em display, Google Fonts,
  Vietnamese subset). Workhorse voice for a Read surface.
- Prose: **Source Serif 4** (1.075rem/1.78, 68ch measure) for article and
  plate descriptions; drop cap on the opening paragraph.
- Labels/meta: `ui-monospace` stack, 11–12px, uppercase, +0.12–0.14em
  tracking — folio lines, Fig. numerals, durations, token counts, buttons.

## Composition & topology

One continuous sheet, max-width 1200px. Sticky 72px mono token bar
(navbar) with hairline underline. Homepage order: folio rule (quarterly /
plate count / year) → display title (≤6rem) → serif-italic standfirst →
lead plate (the one dark-on-pale inversion, `Read the plate` action) →
`Recent plates` hairline grid (Fig. numerals, registration `+` corners,
untinted thumbnails in hairline frames) → dot-matrix band → ledger
(`My Journey` timeline + `What I Built`, square nodes, hairline entries) →
`Index of subjects` mono tokens with `[counts]` → ink colophon footer.
Blog list/post/about inherit the same sheet: hairline article separators,
ink headlines, serif measure, h2 ruled sections, mono table heads and tags.

## Controls & state

Primary = filled ink rect, 0 radius, mono caps; secondary = 1px outline
rect; hover inverts to seal. Tags = 1px outline tokens, invert on hover.
Timeline cards expand in place (framer-motion, once, exponential ease-out).
Focus-visible: 2px seal outline + 2px offset. Text selection, caret,
scrollbar and underline offset themed from the palette.

## Signature interaction

Rotating attribution stamp (SVG textPath, 25s linear infinite, lifts 4px
on hover), set half off the lead plate's corner. Honors
`prefers-reduced-motion`.

## Don'ts carried from the build

Never restore the banner-photo hero or icon-plus-text card grids; never
tint photography; never set headlines in seal color; never add kickers,
gradient text, glass, rounded cards, or emoji-as-icons (react-icons only).
Content, URLs, tags, search and zoom stay untouched — only the shell changed.
