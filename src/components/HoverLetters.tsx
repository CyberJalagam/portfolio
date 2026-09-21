import { Fragment } from "react";

/**
 * Per-letter hover, so the cursor ripples across a headline instead of
 * flipping it as one block. CSS only.
 *
 * The letters are aria-hidden, so whatever element wraps this needs its own
 * aria-label. A bare <span> cannot be named; headings can.
 */
export function HoverLetters({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span aria-hidden="true" className={className}>
      {words.map((word, w) => (
        <Fragment key={`${word}-${w}`}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, i) => (
              <span
                key={i}
                className="inline-block transition-[transform,color] duration-200 ease-out hover:-translate-y-[0.08em] hover:text-accent motion-reduce:transform-none motion-reduce:transition-none"
              >
                {char}
              </span>
            ))}
          </span>
          {/* A plain space between the word wrappers, not &nbsp; inside one.
              It has to be an ordinary U+0020 or Ctrl+F and copied text carry
              a non-breaking space instead, and it has to sit outside the
              nowrap wrappers so lines can still break between words. */}
          {w < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}
