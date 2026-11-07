# TravelVista Ltd website (Next.js)

The TravelVista website built with Next.js 16 (App Router). It exports as a fully static site,
so it runs on any host: Hostinger, Cloudflare Pages, Netlify or Vercel.

## Requirements
- Node.js 20.9 or newer

## Commands
```bash
npm install        # install once
npm run dev        # local preview at http://localhost:3000
npm run build      # builds the live website into the "out" folder
```

## Putting it live
- **Hostinger / any file hosting:** run `npm run build`, then upload everything inside the `out` folder to `public_html`.
- **Vercel, Netlify or Cloudflare Pages:** connect the project. Build command `npm run build`, output folder `out`.

## Where things are
| What | File |
|---|---|
| Homepage | `app/page.jsx` |
| Every other page | `app/<page-name>/page.jsx` (for example `app/france-visa-from-uk/page.jsx`) |
| Page title, description and Google data | the `metadata` and `structuredData` at the top of each page file |
| Header and menu | `components/Header.jsx` |
| Footer and WhatsApp button | `components/Footer.jsx` |
| Fonts, icons, page shell | `app/layout.jsx` |
| Design, colours, dark mode, animations | `public/assets/styles.css` |
| Globe, menus, scroll effects, enquiry form | `public/assets/site.js` |
| Logos and images | `public/assets/` |
| Sitemap and robots | `public/sitemap.xml`, `public/robots.txt` |

Page addresses stay the same as before, for example `https://www.travelvista.uk/france-visa-from-uk.html`.
When you add a new page, also add it to `public/sitemap.xml`.
