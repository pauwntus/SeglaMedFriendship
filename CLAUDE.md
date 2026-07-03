# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # local dev server at localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Deploy happens automatically on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`). The site is hosted at `https://pauwntus.github.io/SeglaMedFriendship/`. Bump `version` in `package.json` when deploying so the footer version number confirms the deploy is live.

## Architecture

**Single content source:** All site text lives in `src/data/content.ts` as named TypeScript exports — one per section. This is the only file that needs editing for copy changes.

**Design tokens:** All colors, fonts, and spacing are CSS custom properties in `src/styles/tokens.css`. Two fonts only: `--font-serif` (Young Serif, for headings) and `--font-sans` (Schibsted Grotesk, for everything else); both are self-hosted woff2 files in `src/assets/fonts/`, declared via `@font-face` in `tokens.css`. Never add `font-family` declarations in components — use the tokens.

**Section order:** Controlled entirely by `src/pages/index.astro`. Reorder the component imports there to reorder sections on the page.

**Component structure:**
- `src/layouts/Layout.astro` — HTML shell, loads fonts, Nav, Footer, and the IntersectionObserver reveal script
- `src/components/sections/` — one `.astro` file per page section; each imports its own data slice from `content.ts`
- `src/components/Nav.astro` and `Footer.astro` — shared chrome

**Scoped styles:** Each section component uses Astro's scoped `<style>` block. The Gallery section has a dark background (`--color-ink`) and overrides `.section-title` color with a direct class selector inside the component, not `:global()`. The emergency box in Rules uses `--color-sea`.

**Icons:** Packing list icons are inline SVGs rendered conditionally based on the `icon` string field in `content.ts` (`'clothes'`, `'bag'`, `'star'`). Adding a new icon requires both a new identifier in `content.ts` and a new SVG branch in `PackingList.astro`.

**Scroll reveal:** Elements with class `reveal` animate in via IntersectionObserver defined in `Layout.astro`. Add `class="reveal"` to any element that should fade up on scroll.
