import { openSource } from "@/content/site";
import { Reveal } from "./Reveal";

export function OpenSource() {
  return (
    <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {openSource.map((entry, i) => (
        <Reveal key={entry.title} delay={i * 0.08} className="bg-ink">
          <article className="group flex h-full flex-col p-6 transition-colors duration-500 hover:bg-ink-2 sm:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display-tight text-2xl transition-colors group-hover:text-accent">
                {entry.title}
              </h3>
              <span className="label-mono shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-1 font-mono text-xs tracking-wide text-accent-dim">
              {entry.role}
            </p>
            <p className="label-mono mt-1">{entry.period}</p>

            <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
              {entry.blurb}
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1">
              {entry.stack.map((s) => (
                <li
                  key={s}
                  className="font-mono text-[11px] text-faint transition-colors duration-300 hover:text-cream"
                >
                  {s}
                </li>
              ))}
            </ul>

            {entry.href ? (
              <a
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                className="link-wipe mt-6 inline-flex w-fit font-mono text-xs tracking-wide text-cream transition-colors hover:text-accent"
              >
                Source ↗
              </a>
            ) : (
              <span className="mt-6 font-mono text-xs tracking-wide text-faint">
                Archived
              </span>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}
