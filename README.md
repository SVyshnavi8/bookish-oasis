# LibraryOne Website

Marketing site for LibraryOne digital library services (Boundless, ePopUp, TS360, Content Café, Bibliostat). Built with Vite + React + TypeScript + Tailwind + shadcn/ui and react-helmet-async.

## Quick start

```sh
# prerequisites: Node 18+ and npm
npm install
npm run dev
# app runs at http://localhost:5173/
```

## Build & preview

```sh
npm run build
npm run preview   # serves the production build locally
```

## Project structure

- `src/` React app source
  - `pages/` route views (Home, Solutions, Boundless, TS360, ePopUp, Content Café, Bibliostat, Contact, Request Demo, Privacy, 404)
  - `components/` shared UI (Header, Footer, Hero, CTA, Carousel, SEO helper)
  - `layouts/` layout wrappers
  - `assets/` images and logos
- `public/` static assets (`robots.txt`, `sitemap.xml`, `404.html`)
- `index.html` Vite entry

## Routing

- Uses `react-router-dom` with `BrowserRouter` (clean URLs).
- Main routes: `/`, `/solutions`, `/libraries`, `/about`, `/resources`, `/ts360`, `/products/boundless`, `/products/epopup`, `/products/content-cafe`, `/products/bibliostat`, `/contact`, `/request-demo`, `/privacy-policy`, `*` (404).
- SPA rewrites handled by `vercel.json` if deployed to Vercel.

## SEO & accessibility

- `react-helmet-async` for per-page title/description/meta.
- `public/sitemap.xml` and `robots.txt` included.
- Skip-link, main landmarks, focus-visible styles, reduced-motion support.
- Footer and header links use clean routes; request demo lives at `/request-demo`.

## Styling & UI

- Tailwind CSS with custom tokens; global font: Inter.
- shadcn/ui components with Embla-based carousels.
- AOS animations respecting `prefers-reduced-motion`.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – serve built assets locally
- `npm run lint` – run ESLint

## Deployment

- Any static host works (Vercel recommended). Ensure SPA rewrite to `index.html` (already configured via `vercel.json`).

## Notes

- Request Demo route is `/request-demo`.
- Removed legacy auth/browse pages (`login`, `register`, `forgot-password`, `browse`).
- Keep `robots.txt` and `sitemap.xml` in `public/` for crawlers.***
