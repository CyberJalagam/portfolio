"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Seconds of stagger, for sequencing siblings. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
};

/**
 * Scroll-triggered fade-and-rise. Fires once, and collapses to a plain
 * wrapper when the visitor has asked for reduced motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
