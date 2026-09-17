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
              "object-contain object-bottom [filter:grayscale(0.85)_contrast(1.05)]"
            : // No alpha channel, so the rectangle has to be hidden instead.
              // The mask fades only the left, right and top edges and leaves
              // the bottom solid, so the torso still occludes the wordmark
              // behind it. A radial fade would eat the body and break that.
              // Blacks are crushed just enough for the studio backdrop to
              // meet the page, without turning the subject to mud.
              "object-cover object-top [filter:grayscale(1)_brightness(0.86)_contrast(1.25)] [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,#000_34%,#000_66%,transparent),linear-gradient(to_bottom,transparent,#000_24%)] [-webkit-mask-composite:source-in]"
        }
      />
    </div>
  );
}
