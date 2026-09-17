"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, site } from "@/content/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section currently owns the upper half of the screen.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock the page behind the mobile overlay, and let Escape dismiss it.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-cream transition-colors hover:text-accent"
          >
            {site.name.toLowerCase().replace(" ", " ")}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`link-wipe font-mono text-xs tracking-wide transition-colors ${
                    active === item.href
                      ? "text-accent"
                      : "text-muted hover:text-cream"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-1.5 font-mono text-xs tracking-wide text-cream transition-colors hover:border-accent hover:text-accent"
              >
                Résumé
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-cream transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-cream transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-ink md:hidden"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex h-full flex-col justify-between px-5 pt-24 pb-10">
              <ul className="space-y-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line-soft py-4"
                    >
                      <span className="label-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="display-tight text-3xl">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-4">
                <a
                  href={site.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full border border-line px-5 py-3 text-center font-mono text-xs tracking-wide"
                >
                  Résumé
                </a>
                <p className="label-mono text-center">{site.email}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
