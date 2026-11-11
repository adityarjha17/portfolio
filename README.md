# Aditya Jha · Portfolio

Personal portfolio of **Aditya Jha**, cloud and AI solutions architect based in Bengaluru.
A fast, single-page static site with a light and dark theme, built with [Astro](https://astro.build) and hosted on Cloudflare.

## Features

- **Forest Terminal theme** in dark and light mode. It follows the visitor's system setting, remembers their choice, and never flashes the wrong colours on load.
- **Interactive touches:** cursor glow and ring (mouse devices only), card spotlight on hover, scroll reveal animations, a scroll progress bar, the nav highlighting the current section, a self-typing terminal card, and count-up stats.
- **Accessible by default:** semantic HTML, a skip link, keyboard focus styles, and all motion disabled for `prefers-reduced-motion`.
- **Mobile first:** fixed nav with a collapsible menu, and layouts that stack cleanly on phones.
- **SEO ready:** descriptive title and meta description, Open Graph and Twitter cards, JSON-LD `Person` schema, and a favicon.
- **Zero client-side framework:** plain Astro components with small inline scripts, so pages ship almost no JavaScript.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Astro (static output) |
| Styling | Plain CSS with design tokens (CSS custom properties) |
| Fonts | Manrope, JetBrains Mono (Google Fonts) |
| Hosting | Cloudflare (Workers static assets), custom domain, free tier |

## Project structure

```text
.
├── public/                    # Static files served as-is
│   ├── Aditya_Jha_Resume.pdf  # Downloadable resume
│   ├── aditya.jpg / .webp     # Portrait
│   ├── og.jpg                 # Social share image (1200x630)
│   ├── favicon.svg
│   └── logos/                 # Company, education, event and certification logos
├── src/
│   ├── data/site.ts           # ALL site content: roles, education, stats, skills, certifications, blogs, events
│   ├── layouts/Base.astro     # <head>, SEO tags, theme bootstrapping
│   ├── pages/index.astro      # Page composition (section order)
│   ├── components/            # One component per section, plus shared pieces
│   │   ├── Nav.astro          # Fixed nav, theme toggle, mobile menu
│   │   ├── Hero.astro         # Intro, photo, terminal card
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   ├── Education.astro
│   │   ├── Stats.astro        # Impact in numbers (count-up)
│   │   ├── Skills.astro       # Skills and certifications
│   │   ├── Work.astro         # Personal projects and blogs
│   │   ├── Highlights.astro   # Events
│   │   ├── Contact.astro      # Contact and footer
│   │   ├── Interactions.astro # Cursor, reveal, progress, active nav, typing, count-up
│   │   ├── Logo.astro         # Logo tile with initials fallback
│   │   └── SectionHeading.astro
│   └── styles/global.css      # Theme tokens and shared styles
├── astro.config.mjs
└── package.json
```

## Run locally

Requires Node.js 18.20+ (20 or 22 recommended).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build to ./dist
npm run preview   # serve the production build locally
```

## Updating content

Almost every change lives in **`src/data/site.ts`**:

- **New role or bullet:** edit `roles`.
- **New certificate:** add to `certifications` with its verification `url` and a logo in `public/logos/`.
- **New blog post or project:** add to `blogs`.
- **Logos:** drop a PNG or SVG into `public/logos/` and reference it as `logos/<file>`. Without a logo, an initials tile is shown.

Theme colours are CSS variables at the top of `src/styles/global.css`, one block for dark and one for light.

## Deployment (Cloudflare)

1. Connect this repository in the Cloudflare dashboard: **Workers & Pages → Create → Import a repository**.
2. Build command `npm run build`, output directory `dist`.
3. Add the custom domain under **Settings → Domains & Routes**. HTTPS is issued automatically.
4. Every push to `main` deploys to production, and pull requests get preview URLs.

## License

Code is MIT licensed. The content (text, photo, resume and logos) belongs to Aditya Jha or the respective trademark owners and is not covered by the license.
