import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

// A transparent PNG is used when present, otherwise the plain photo.
const CUTOUTS = ["portrait-cutout.png", "portrait-cutout.webp"];

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
            ? "object-contain object-bottom"
            : // Two masks, intersected: the radial fades the sides, the
              // linear holds the bottom opaque so the torso is not cropped.
              // One radial tight enough to clear the sides ate the body.
              "object-cover object-top [filter:contrast(1.08)_saturate(1.05)] [mask-composite:intersect] [mask-image:radial-gradient(58%_96%_at_52%_44%,#000_54%,rgba(0,0,0,0.45)_78%,transparent_97%),linear-gradient(to_bottom,transparent,#000_13%,#000_86%,transparent)] [-webkit-mask-composite:source-in]"
        }
      />
    </div>
  );
}
