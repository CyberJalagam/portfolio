"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { hero, site } from "@/content/site";
import { Container } from "./Section";

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
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="label-mono text-muted">{site.available}</span>
            </span>
            <span className="label-mono">{site.location}</span>
          </div>
        </Rise>

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 pt-10 sm:pt-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1>
              <Rise delay={0.08}>
                <span className="label-mono block text-muted">{site.name}</span>
              </Rise>
              <Rise delay={0.16}>
                <span className="display-tight mt-4 block text-[clamp(2.75rem,12.5vw,7.5rem)] uppercase">
                  Software
                </span>
              </Rise>
              <Rise delay={0.24}>
                <span className="display-tight block text-[clamp(2.75rem,12.5vw,7.5rem)] uppercase text-muted">
                  Engineer
                </span>
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
