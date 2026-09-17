"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { hero, site } from "@/content/site";
import { Container } from "./Section";
import { HoverLetters } from "./HoverLetters";

function Rise({ children, delay }: { children: ReactNode; delay: number }) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** The surname, oversized, sitting behind the portrait. */
const WORDMARK = "JAISHNAV";

export function Hero({ portrait }: { portrait: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <Container>
        {/* Status strip */}
        <Rise delay={0}>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
            <span className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="label-mono text-muted">{site.available}</span>
            </span>
            <span className="label-mono">{site.location}</span>
          </div>
        </Rise>

        <div className="pt-10 sm:pt-14">
          <h1 aria-label={`${hero.greeting}. ${site.role}`}>
            <Rise delay={0.1}>
              <HoverLetters
                text={hero.greeting}
                className="display-tight block text-[clamp(2rem,6.5vw,3.5rem)]"
              />
            </Rise>
            <Rise delay={0.2}>
              <HoverLetters
                text={site.role}
                className="display-tight mt-1.5 block text-[clamp(1.35rem,4.2vw,2.25rem)] text-muted"
              />
            </Rise>
          </h1>

          <Rise delay={0.32}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
              {hero.body}{" "}
              <span className="font-serif text-cream italic">{hero.serif}</span>
              .
            </p>
          </Rise>

          <Rise delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs tracking-wide text-ink transition-colors hover:bg-cream"
              >
                Get in touch
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs tracking-wide text-cream transition-colors hover:border-cream"
              >
                Résumé
              </a>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="link-wipe inline-flex items-center gap-2 px-2 py-3 font-mono text-xs tracking-wide text-muted transition-colors hover:text-cream"
              >
                GitHub ↗
              </a>
            </div>
          </Rise>
        </div>
      </Container>

      {/* ── Layered wordmark + portrait ──────────────────────────────────
          The name is laid out first and the portrait is stacked on top of
          it, so the type reads as passing behind the subject. Both are
          bottom-aligned; the type is sized to run wider than the portrait
          so the outer letters stay visible either side.
          ──────────────────────────────────────────────────────────────── */}
      <div className="relative mt-10 sm:mt-14">
        <Container className="relative">
          <div className="relative flex items-end justify-center">
            <motion.span
              aria-hidden="true"
              className="display-tight pointer-events-none absolute inset-x-0 bottom-0 z-0 text-center text-[clamp(2.75rem,15.5vw,12.5rem)] leading-[0.78] text-cream/90 select-none"
              initial={reduced ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {WORDMARK}
            </motion.span>

            <motion.div
              className="relative z-10 w-[62%] max-w-[420px] min-w-[210px]"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {portrait}
            </motion.div>
          </div>
        </Container>

        {/* Hairline the wordmark and portrait both sit on. */}
        <div className="mt-0 border-b border-line" />
      </div>
    </section>
  );
}
