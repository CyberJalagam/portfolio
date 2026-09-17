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

export function Hero({ portrait }: { portrait: ReactNode }) {
  return (
    <section id="top" className="relative pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        {/* Status strip */}
        <Rise delay={0}>
          <div className="flex flex-wrap items-center gap-3 border-b border-line pb-4">
            <span className="label-mono">{site.location}</span>
          </div>
        </Rise>

        {/* Text left, portrait right. On large screens the portrait column is
            pulled left so its feathered edge drifts in behind the copy: the
            two read as one field rather than two boxes side by side. The text
            sits above it, and the copy is capped short of the overlap so
            nothing is ever read against the photo. */}
        <div className="grid items-center gap-y-10 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-x-4">
          <div className="relative z-10 lg:col-span-7">
            <h1 aria-label={`${hero.greeting}. ${site.role}`}>
              <Rise delay={0.1}>
                <HoverLetters
                  text={hero.greeting}
                  className="display-tight block text-[clamp(2.25rem,7vw,4rem)]"
                />
              </Rise>
              <Rise delay={0.2}>
                <HoverLetters
                  text={site.role}
                  className="display-tight mt-1.5 block text-[clamp(1.4rem,4.4vw,2.5rem)] text-muted"
                />
              </Rise>
            </h1>

            <Rise delay={0.32}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-muted">
                {hero.body}{" "}
                <span className="font-serif text-cream italic">
                  {hero.serif}
                </span>
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

          <div className="relative z-0 lg:col-span-5 lg:-ml-24">
            <Rise delay={0.25}>
              <div className="mx-auto w-[74%] max-w-[360px] min-w-[200px] sm:w-[58%] lg:w-full lg:max-w-none">
                {portrait}
              </div>
            </Rise>
          </div>
        </div>
      </Container>
    </section>
  );
}
