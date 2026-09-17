import { experience } from "@/content/site";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <ul className="mt-10 border-t border-line">
      {experience.map((job, i) => (
        <Reveal as="li" key={`${job.org}-${job.role}`} delay={i * 0.06}>
          <div className="grid gap-x-8 gap-y-3 border-b border-line py-7 sm:grid-cols-12 sm:py-9">
            <div className="sm:col-span-3">
              <p className="label-mono">{job.period}</p>
            </div>

            <div className="sm:col-span-9">
              <h3 className="display-tight text-xl sm:text-2xl">{job.role}</h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-accent-dim">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-line underline-offset-4 hover:text-accent"
                  >
                    {job.org} ↗
                  </a>
                ) : (
                  job.org
                )}
              </p>

              <ul className="mt-4 max-w-2xl space-y-2">
                {job.points.map((p) => (
                  <li
                    key={p}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-line"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
