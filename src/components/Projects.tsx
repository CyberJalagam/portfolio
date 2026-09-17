"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/content/site";
import { Reveal } from "./Reveal";

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted">
      {children}
    </span>
  );
}

function Row({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const reduced = useReducedMotion();
  const panelId = `project-panel-${index}`;

  return (
    <li className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-start gap-4 py-6 text-left sm:gap-8 sm:py-8"
      >
        <span
          className={`label-mono mt-2 shrink-0 transition-colors ${
            open ? "text-accent" : "group-hover:text-muted"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <span
              className={`display-tight text-2xl transition-colors sm:text-[2rem] ${
                open ? "text-accent" : "group-hover:text-accent"
              }`}
            >
              {project.title}
            </span>
            <span className="label-mono shrink-0">{project.year}</span>
          </span>
          <span className="label-mono mt-2 block normal-case tracking-normal text-faint">
            {project.kind}
          </span>
          <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted">
            {project.blurb}
          </span>
        </span>

        <span
          aria-hidden
          className={`mt-2 shrink-0 text-lg leading-none text-faint transition-transform duration-300 ${
            open ? "rotate-45 text-accent" : "group-hover:text-cream"
          }`}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 sm:pl-14">
              <ul className="max-w-2xl space-y-2.5 border-l border-line pl-5">
                {project.detail.map((d) => (
                  <li key={d} className="text-sm leading-relaxed text-muted">
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) =>
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs tracking-wide text-cream underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="font-mono text-xs tracking-wide text-faint"
                    >
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

export function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Reveal>
      <ul className="mt-10 border-t border-line">
        {projects.map((project, i) => (
          <Row
            key={project.title}
            project={project}
            index={i}
            open={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </ul>
    </Reveal>
  );
}
