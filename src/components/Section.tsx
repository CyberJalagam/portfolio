import type { ReactNode } from "react";
import { HoverLetters } from "./HoverLetters";
import { Reveal } from "./Reveal";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * A numbered section heading with a hairline rule, the recurring
 * structural motif of the page.
 */
export function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <Reveal>
      <div className="border-t border-line pt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-4">
            <span className="label-mono text-accent-dim">{index}</span>
            <h2
              aria-label={title}
              className="display-tight text-2xl sm:text-3xl"
            >
              <HoverLetters text={title} />
            </h2>
          </div>
          {/* ml-auto keeps the note right-aligned even when the row wraps. */}
          {note ? (
            <p className="label-mono max-w-xs leading-relaxed sm:ml-auto sm:text-right">
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
