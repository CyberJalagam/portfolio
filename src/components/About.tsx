import { about, skills } from "@/content/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <div className="mt-10 grid gap-x-12 gap-y-14 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-2xl leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {about.facts.map((f) => (
              <div
                key={f.k}
                className="group bg-ink px-5 py-4 transition-colors duration-500 hover:bg-ink-2"
              >
                <dt className="label-mono">{f.k}</dt>
                <dd className="mt-1 text-sm text-cream transition-colors duration-500 group-hover:text-accent">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="lg:col-span-5">
        <Reveal delay={0.08}>
          <h3 className="label-mono">Stack</h3>
          <div className="mt-5 space-y-6">
            {skills.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-xs tracking-wide text-accent-dim">
                  {group.group}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted transition-colors duration-300 hover:text-cream"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <h3 className="label-mono mt-12">Education</h3>
          <ul className="mt-5 space-y-5">
            {about.education.map((e) => (
              <li key={e.program}>
                <p className="text-sm text-cream">{e.school}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted">
                  {e.program}
                </p>
                <p className="label-mono mt-1">{e.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.24}>
          <h3 className="label-mono mt-12">Awards &amp; certifications</h3>
          <ul className="mt-5 space-y-2">
            {about.awards.map((a) => (
              <li key={a} className="text-sm text-muted">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
