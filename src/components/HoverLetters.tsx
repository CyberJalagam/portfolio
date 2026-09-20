import { Fragment } from "react";

/**
 * Splits text so each letter reacts to the cursor on its own, which makes
 * sweeping across a headline feel like a wave rather than one block flipping
 * state. Pure CSS, so this stays a server component.
 *
 * Words are kept whole and wrapping happens at spaces only, otherwise the
 * inline-block letters would break mid-word on narrow screens.
 *
 * Accessibility: the split letters are hidden from assistive tech, so the
 * SEMANTIC ELEMENT AROUND THIS MUST CARRY aria-label with the same string.
 * Headings support naming via aria-label; a bare <span> does not, which is
 * why the name lives on the heading rather than in here. Duplicating the
 * text in a visually hidden span would work too, but it would then appear
 * twice in the DOM and in anything the visitor copies.
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
