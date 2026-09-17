import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/**
 * A background-free PNG is what the layered hero really wants: it sits over
 * the oversized name with nothing to give away a rectangle. Drop one in and
 * it is picked up automatically, no code change needed.
 */
const CUTOUTS = ["portrait-cutout.png", "portrait-cutout.webp"];

/** Fallback: the ordinary photo, blended so its dark studio backdrop dissolves. */
const PHOTOS = [
  "portrait.jpg",
  "portrait.jpeg",
  "portrait.png",
  "portrait.webp",
];

function findFirst(files: string[]): string | null {
  const dir = path.join(process.cwd(), "public");
  for (const file of files) {
    if (existsSync(path.join(dir, file))) return `/${file}`;
  }
  return null;
}

export function Portrait() {
  const cutout = findFirst(CUTOUTS);
  const src = cutout ?? findFirst(PHOTOS);

  if (!src) {
    return (
      <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 border border-line bg-surface">
        <span className="display-tight text-6xl text-line">
          {site.initials}
        </span>
        <span className="label-mono text-center">add public/portrait.jpg</span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={src}
        alt={`${site.name}, ${site.role}`}
        fill
        priority
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 55vw, 460px"
        className={
          cutout
            ? // Real alpha edges already, so nothing to hide.
              "object-contain object-bottom"
            : // No alpha channel, so the rectangle is dissolved with a soft
              // vignette: opaque across the subject, falling off to nothing
              // well before the frame edge. That is what lets the photo merge
              // into the page beside the copy instead of reading as a box.
              // Colour is left alone; only a slight contrast lift, to settle
              // the studio backdrop against the page.
              "object-cover object-top [filter:contrast(1.08)_saturate(1.05)] [mask-image:radial-gradient(60%_66%_at_52%_38%,#000_38%,rgba(0,0,0,0.42)_64%,transparent_84%)]"
        }
      />
    </div>
  );
}
