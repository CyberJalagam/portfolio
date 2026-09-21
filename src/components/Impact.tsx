import { Fragment } from "react";
import { impact } from "@/content/site";
import { Reveal } from "./Reveal";

/** Renders `**marked**` runs from the content file as emphasis. */
function Emphasize({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-medium text-cream">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export function Impact() {
  return (
    <div className="mt-10">
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {impact.stats.map((s) => (
            <div
              key={s.label}
              className="group bg-ink px-5 py-6 transition-colors duration-500 hover:bg-ink-2 sm:px-6 sm:py-8"
            >
              <dt className="display-tight text-3xl transition-colors duration-500 group-hover:text-accent sm:text-4xl">
                {s.value}
              </dt>
              <dd className="label-mono mt-2 leading-relaxed normal-case tracking-normal">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal delay={0.06}>
            <h3 className="label-mono">Selected highlights</h3>
            <ul className="mt-5 space-y-3">
              {impact.highlights.map((h) => (
                <li
                  key={h}
                  className="group relative max-w-2xl pl-5 text-sm leading-relaxed text-muted transition-colors duration-300 hover:text-cream"
                >
                  <span
                    aria-hidden
                    className="absolute top-2.5 left-0 h-px w-2.5 bg-line transition-all duration-300 group-hover:w-3.5 group-hover:bg-accent-dim"
                  />
                  <Emphasize text={h} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.12}>
            <h3 className="label-mono">Awards &amp; certifications</h3>
            <ul className="mt-5 space-y-3">
              {impact.awards.map((a) => (
                <li
                  key={a}
                  className="border-l border-line pl-4 text-sm leading-relaxed text-muted transition-colors duration-300 hover:border-accent-dim hover:text-cream"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
