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
            ? // Clean alpha edges, so it can simply sit on top of the type.
              "object-contain object-bottom"
            : // No alpha channel, so the rectangle has to be hidden instead:
              // the mask fades the left, right and top edges into the page.
              // The bottom edge fades too, so where the body meets the
              // wordmark it veils the letters rather than cutting them off.
              // Colour is left alone; only a slight contrast lift, to settle
              // the studio backdrop against the page.
              "object-cover object-top [filter:contrast(1.08)_saturate(1.05)] [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_30%,#000_70%,transparent),linear-gradient(to_bottom,transparent,#000_22%,#000_82%,transparent)] [-webkit-mask-composite:source-in]"
        }
      />
    </div>
  );
}
