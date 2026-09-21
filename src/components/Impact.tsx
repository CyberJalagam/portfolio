import { impact } from "@/content/site";
import { Reveal } from "./Reveal";

export function Impact() {
  return (
    <div className="mt-10">
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
          {impact.stats.map((s) => (
            <div
              key={s.lead}
              className="group bg-ink px-5 py-6 transition-colors duration-500 hover:bg-ink-2 sm:px-6 sm:py-8"
            >
              <dt className="display-tight text-3xl transition-colors duration-500 group-hover:text-accent sm:text-4xl">
                {s.value}
              </dt>
              {/* The noun carries the accent and the qualifier stays quiet,
                  so a glance down the row reads as the four things counted. */}
              <dd className="label-mono mt-2 leading-relaxed normal-case tracking-normal">
                <span className="text-accent-dim transition-colors duration-500 group-hover:text-accent">
                  {s.lead}
                </span>{" "}
                {s.rest}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div className="mt-12 grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Reveal delay={0.06}>
            <h3 className="label-mono">Selected highlights</h3>

            {/* Three themed groups rather than one run of nine bullets. The
                group name gives the eye somewhere to land, and each theme is
                short enough to take in without scanning back. */}
            <div className="mt-6 space-y-8">
              {impact.highlights.map((section) => (
                <div key={section.group}>
                  <p className="font-mono text-xs tracking-wide text-accent-dim">
                    {section.group}
                  </p>
                  <ul className="mt-3 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="group relative max-w-2xl pl-5 text-sm leading-relaxed text-muted transition-colors duration-300 hover:text-cream"
                      >
                        <span
                          aria-hidden
                          className="absolute top-2.5 left-0 h-px w-2.5 bg-line transition-all duration-300 group-hover:w-3.5 group-hover:bg-accent-dim"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
