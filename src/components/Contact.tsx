import { site } from "@/content/site";
import { Container } from "./Section";
import { HoverLetters } from "./HoverLetters";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "in/jaishnav-p", href: site.linkedinUrl },
  { label: "GitHub", value: `@${site.github}`, href: site.githubUrl },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="border-t border-line pt-5">
            <span className="label-mono text-accent-dim">05 / Contact</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            aria-label="Let's build something."
            className="display-tight mt-8 text-[clamp(2.25rem,9vw,5.5rem)] uppercase"
          >
            <HoverLetters text="Let's build" className="block" />
            <HoverLetters text="something." className="block text-muted" />
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-lg leading-relaxed text-muted">
            Always happy to talk about backend work, build systems, or anything
            running on Linux.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-xs tracking-wide text-ink transition-colors hover:bg-cream"
          >
            {site.email}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            {channels.map((c) => (
              <li key={c.label} className="bg-ink">
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-5 transition-colors hover:bg-ink-2"
                >
                  <span>
                    <span className="label-mono block">{c.label}</span>
                    <span className="mt-1 block text-sm text-cream transition-colors group-hover:text-accent">
                      {c.value}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="label-mono">
            © {new Date().getUTCFullYear()} {site.name}
          </p>
          <p className="label-mono">Built with Next.js · Deployed on Vercel</p>
          <a
            href="#top"
            className="link-wipe label-mono transition-colors hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
