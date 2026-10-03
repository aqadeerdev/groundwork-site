# Groundwork

A static marketing site for a fictional neighbourhood cafe and bakery in Karachi. Built with a warm and botanical design direction, SEO fundamentals, and a working contact form. It is a front-end and performance focused build and has no backend.

URL: https://groundwork.aqadeer.dev

## Pages
Home, Menu, About, Gallery, and Contact. See the live site by clicking the URL above or check out `src/*.njk` for the templates. Also includes `sitemap.xml`, `robots.txt`, and a full favicon/web manifest set.

## Tech Stack
* **Static site generator**: Eleventy 3 (Nunjucks templates)
* **CSS**: processed with PostCSS - no framework
* **JS**: vanilla for nav, back-to-top, and form handling; GLightbox for the gallery
* **Images**: `@11ty/eleventy-img` generates WebP + JPEG at multiple widths, lazy-loaded by default
* **Forms**: Web3Forms
* **Runtime**: Node ≥ 22


## Notable Implementation Details
* **Shared base layout** handles SEO title/description, canonical URLs, Open Graph tags, and a skip-to-content link across every page.
* **Design tokens** are defined as CSS variables, keeping the warm/botanical theme consistent without repeating values across stylesheets.
* **Accessibility basics** are implemeneted in the form of skip link, labelled form fields, and visible focus states.
* **Image pipeline** generates responsive, lazy-loaded images automatically from source assets. Built with Lighthouse performance scores in mind.
* **Sticky/transparent nav** with a mobile overlay menu and a back-to-top control.

## Project Structure
```
src/
  _includes/     # base layout, nav, footer
  css/           # variables, reset, global styles, components, page-specific styles
  js/            # nav, main, form handling, gallery
  images/        # source images (hero, menu, about, gallery, contact)
  assets/        # favicons, web manifest
  *.njk          # page templates + sitemap
_site/           # build output
```

## Setup
Requires Node 22 (see .nvmrc).
```bash
npm install
npm start        # PostCSS build + Eleventy dev server (localhost:8080) with CSS watch
```
For a production build:
```bash
npm run build     # production CSS, Eleventy build, Terser-minified JS in _site/
```

## Contact form
The contact form uses Web3Forms and requires an access key to function. Add your own key to the form markup in src/contact.njk before deploying your own copy.

## Deployment
Hosted on Netlify and connected directly to this GitHub repo, every push to the main branch triggers an automatic build (npm run build) and deploy. Any static host would work equally well (Vercel, Cloudflare Pages, GitHub Pages), since the site has no server-side dependencies.

## License
MIT