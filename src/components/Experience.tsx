import { experience } from "@/content/site";
import { HoverLetters } from "./HoverLetters";
import { Reveal } from "./Reveal";

/**
 * Grouped by employer rather than by posting, so the four Seneca roles and
 * the two Shake Shack ones read as progression at one place instead of as
 * six unrelated entries. Employers with a single role render identically,
 * just without the combined span.
 */
export function Experience() {
  return (
    <ul className="mt-10 border-t border-line">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.org} delay={Math.min(i, 3) * 0.06}>
          <div className="group grid gap-x-8 gap-y-4 border-b border-line py-7 transition-colors duration-500 hover:border-faint sm:grid-cols-12 sm:py-9">
            <div className="sm:col-span-4">
              <h3
                aria-label={job.org}
                className="display-tight text-lg sm:text-xl"
              >
                {job.href ? (
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-wipe transition-colors hover:text-accent"
                  >
                    <HoverLetters text={job.org} />
                  </a>
                ) : (
                  <HoverLetters text={job.org} />
                )}
              </h3>
              <p className="label-mono mt-2 leading-relaxed">
                {job.span ? `${job.span} · ` : ""}
                {job.location}
              </p>
            </div>

            <div className="space-y-6 sm:col-span-8">
              {job.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <p className="text-[0.95rem] font-semibold text-cream">
                      {role.title}
                    </p>
                    <p className="label-mono shrink-0 transition-colors duration-500 group-hover:text-accent-dim">
                      {role.period}
                    </p>
                  </div>

                  {role.meta ? (
                    <p className="label-mono mt-1 text-faint">{role.meta}</p>
                  ) : null}

                  {role.points.length > 0 ? (
                    <ul className="mt-3 max-w-2xl space-y-2">
                      {role.points.map((p) => (
                        <li
                          key={p}
                          className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:top-2.5 before:left-0 before:h-px before:w-2 before:bg-line before:transition-all before:duration-500 group-hover:before:w-3 group-hover:before:bg-accent-dim"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
