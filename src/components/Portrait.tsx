import Image from "next/image";
import { existsSync } from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/** Drop a file at any of these paths and the hero picks it up. */
const CANDIDATES = ["portrait.jpg", "portrait.jpeg", "portrait.png", "portrait.webp"];

function findPortrait(): string | null {
  const dir = path.join(process.cwd(), "public");
  for (const file of CANDIDATES) {
    if (existsSync(path.join(dir, file))) return `/${file}`;
  }
  return null;
}

/**
 * The hero photo, or a monogram placeholder until one is added to
 * `public/`. Resolved at render time so no code change is needed.
 */
export function Portrait() {
  const src = findPortrait();

  return (
    <div className="relative">
      {/* Offset rule behind the frame, for a little editorial depth. */}
      <div
        aria-hidden
        className="absolute -inset-x-3 -inset-y-3 border border-line-soft"
      />
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface">
        {src ? (
          <Image
            src={src}
            alt={`${site.name}, ${site.role}`}
            fill
            priority
            sizes="(max-width: 1024px) 70vw, 360px"
            className="object-cover object-top grayscale-[35%] transition-[filter,transform] duration-700 hover:scale-[1.02] hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <span className="display-tight text-6xl text-line">
              {site.initials}
            </span>
            <span className="label-mono text-center leading-relaxed">
              add public/portrait.jpg
            </span>
          </div>
        )}
      </div>
      <p className="label-mono mt-4">
        {site.location} · {new Date().getUTCFullYear()}
      </p>
    </div>
  );
}
