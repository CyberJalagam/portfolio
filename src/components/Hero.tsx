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
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
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

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 pt-10 sm:pt-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 aria-label={`${hero.greeting}. ${site.role}`}>
              <Rise delay={0.1}>
                <HoverLetters
                  text={hero.greeting}
                  className="display-tight block text-[clamp(2.5rem,10vw,5.25rem)]"
                />
              </Rise>
              <Rise delay={0.2}>
                <HoverLetters
                  text={site.role}
                  className="display-tight mt-2 block text-[clamp(1.6rem,6vw,3.25rem)] text-muted sm:mt-3"
                />
              </Rise>
            </h1>

            <Rise delay={0.34}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {hero.body}{" "}
                <span className="font-serif text-cream italic">
                  {hero.serif}
                </span>
                .
              </p>
            </Rise>

            <Rise delay={0.42}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
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
                  className="inline-flex items-center gap-2 px-2 py-3 font-mono text-xs tracking-wide text-muted transition-colors hover:text-cream"
                >
                  GitHub ↗
                </a>
              </div>
            </Rise>
          </div>

          <div className="lg:col-span-4 lg:pl-4">
            <Rise delay={0.3}>
              <div className="mx-auto max-w-[280px] sm:max-w-[320px] lg:mx-0 lg:max-w-none">
                {portrait}
              </div>
            </Rise>
          </div>
        </div>
      </Container>
    </section>
  );
}
