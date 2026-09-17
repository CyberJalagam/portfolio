# jaishnav.dev

Personal portfolio — a single scrolling page, dark editorial, built with
Next.js 16 (App Router), Tailwind v4 and Motion.

```bash
npm run dev      # http://localhost:3100
npm run build    # production build
npm run lint
```

## Editing content

**Everything you will want to change lives in [`src/content/site.ts`](src/content/site.ts).**
Copy, links, projects, jobs, skills, education — all of it. The components
read from that file and nothing else hardcodes content, so you should
never need to open a `.tsx` file to update the site.

A link with `href: null` renders as a muted, non-clickable label (used for
private repos and client work). Fill the `href` in and it becomes a real
link automatically.

## Assets in `public/`

| File | Notes |
| --- | --- |
| `portrait.jpg` | Hero photo. Any of `.jpg/.jpeg/.png/.webp` is picked up automatically; with none present the hero shows a monogram placeholder instead of breaking. |
| `Jaishnav_Prasad_Resume.pdf` | Linked from the nav, hero and mobile menu. Overwrite in place to update. |

The full-resolution original photo is kept in `assets/` (gitignored — it is
19 MB). The shipped copy is resized to 1400px wide and compressed to ~67 KB.
To regenerate after replacing the original:

```bash
node -e "const s=require('sharp');s('assets/portrait-original.jpg').rotate().resize({width:1400}).jpeg({quality:82,mozjpeg:true,progressive:true}).toFile('public/portrait.jpg')"
```

## GitHub contribution graph

`src/lib/github.ts` pulls the contribution calendar from the public
`github-contributions-api.jogruber.de` proxy — no token, nothing to rotate.
It fetches every year from 2020 to the current one, drops the empty ones,
and renders a year picker. If the upstream is down the section degrades to
a plain link rather than erroring.

The page is statically prerendered and revalidates hourly
(`export const revalidate = 3600` in `src/app/page.tsx`).

## Social preview

`src/app/opengraph-image.tsx` generates the 1200×630 link-preview card at
build time from the same `site.ts` data, so it can't drift out of sync.
`src/app/icon.svg` is the favicon.

Before going live, set the real domain in `site.url` — it backs
`metadataBase` and the canonical/OG URLs.

## Deploying

Import the repo on Vercel; the defaults are correct. Set the custom domain,
then update `site.url` to match.
