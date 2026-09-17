import { experience } from "@/content/site";
import { HoverLetters } from "./HoverLetters";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <ul className="mt-10 border-t border-line">
      {experience.map((job, i) => (
        <Reveal as="li" key={`${job.org}-${job.role}`} delay={i * 0.06}>
          <div className="group grid gap-x-8 gap-y-3 border-b border-line py-7 transition-colors duration-500 hover:border-faint sm:grid-cols-12 sm:py-9">
            <div className="sm:col-span-3">
              <p className="label-mono transition-colors duration-500 group-hover:text-accent-dim">
                {job.period}
              </p>
            </div>

            <div className="sm:col-span-9">
              <h3
                aria-label={job.role}
                className="display-tight text-xl sm:text-2xl"
              >
                <HoverLetters text={job.role} />
              </h3>
              <p className="mt-1 font-mono text-xs tracking-wide text-accent-dim">
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-wipe transition-colors hover:text-accent"
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
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-line before:transition-all before:duration-500 group-hover:before:w-3 group-hover:before:bg-accent-dim"
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
