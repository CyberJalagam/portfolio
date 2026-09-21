# jaishnav.dev

Personal site. Single page, Next.js 16 (App Router), Tailwind v4, Motion.

```bash
npm run dev      # localhost:3100
npm run build
npm run lint
```

## Content

All copy and links live in [`src/content/site.ts`](src/content/site.ts).
Components read from it, so editing the site means editing that one file.

`href: null` renders a muted, non-clickable label instead of a link, which
is what private repos and client work use. Fill it in and it becomes a
link.

In `impact.highlights`, `**wrapped**` text renders emphasised.

## public/

- `portrait.jpg`: hero photo. `.jpg/.jpeg/.png/.webp` all work, and a
  `portrait-cutout.*` takes precedence if a transparent version exists.
  With none present the hero falls back to a monogram.
- `Jaishnav_Prasad_Resume.pdf`: overwrite in place to update.

The 19 MB original lives in `assets/` (gitignored). The shipped copy is
1400px wide, ~67 KB. To regenerate:

```bash
node -e "require('sharp')('assets/portrait-original.jpg').rotate().resize({width:1400}).jpeg({quality:82,mozjpeg:true}).toFile('public/portrait.jpg')"
```

## Contribution graph

Off. `Contributions.tsx` and `lib/github.ts` still work; putting them back
also means restoring `export const revalidate = 3600` in `page.tsx`, since
the graph is the only data fetch on the site. It reads from the public
jogruber proxy, needs no token, and degrades to a plain link if that is
down.

## Before going live

Set the real domain in `site.url`. It backs `metadataBase` and the
canonical and OG URLs. `opengraph-image.tsx` builds the 1200x630 preview
card from the same data; `icon.svg` is the favicon.
