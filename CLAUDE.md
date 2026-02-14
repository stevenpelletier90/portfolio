# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start Vite dev server with hot reload
npm run build            # Production build to dist/
npm run preview          # Preview production build locally
npm run lint             # Run both ESLint and Stylelint
npm run lint:js          # ESLint only
npm run lint:js:fix      # ESLint with auto-fix
npm run lint:css         # Stylelint only
npm run lint:css:fix     # Stylelint with auto-fix
npm run format           # Prettier format all files
npm run format:check     # Prettier check without writing
npm run generate:favicons # Regenerate all favicon variants from logo-white.svg
```

## Architecture

Vanilla JavaScript static portfolio site — no framework, zero runtime dependencies.

- **Entry points:** Vite builds 6 HTML pages: `index.html`, `404.html`, and 4 project pages in `projects/`
- **HTML partials:** `partials/header.html` and `partials/footer.html` injected via custom Vite plugin (`vite.config.js`) using `{{> partialName}}` syntax. Variables like `{{scrolled}}` and `{{linkPrefix}}` are resolved per-page.
- **JavaScript:** Single ES module at `js/main.js` handles header scroll detection, testimonial rendering (3-row marquee with 15 cards), and testimonial modal
- **CSS:** Modular files in `css/` — `styles.css` is an `@import` manifest loading 11 modules: `base.css`, `buttons.css`, `header.css`, `footer.css`, `hero.css`, `tech-marquee.css`, `about.css`, `work.css`, `testimonials.css`, `project.css`, `not-found.css`
- **Static assets (`public/`):** Vite copies these to `dist/` as-is — fonts, favicons, `.htaccess`, `robots.txt`, `site.webmanifest`, `logo-white.svg`
- **Favicons:** Generated from `public/logo-white.svg` via `scripts/generate-favicons.js` (uses `sharp` + `png-to-ico`)
- **Icons:** Font Awesome via npm (`@fortawesome/fontawesome-free`), imported in `css/base.css`

## Deployment

Upload contents of `dist/` to SiteGround root. The `.htaccess` handles www-redirect, clean URLs (strips `.html`), caching, and security headers. Leave SiteGround's `.well-known/` folder alone.

## Conventions

- **Prettier:** Double quotes, semicolons, trailing commas (es5), 2-space indent
- **ESLint:** v10 flat config (`eslint.config.js`), browser globals, `prefer-const` and `no-unused-vars` as warnings. `scripts/` is ignored (Node utilities).
- **Stylelint:** Standard config with `stylelint-config-recess-order` for CSS property ordering. Imports use `url()` notation.
- **Design tokens:** Dark theme (`#000` background, `#fff` text), accent green `#74ff8b`, accent purple `#667eea`
