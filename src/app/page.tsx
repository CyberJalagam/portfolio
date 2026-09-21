import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Portrait } from "@/components/Portrait";
import { Projects } from "@/components/Projects";
import { Section, SectionHeader } from "@/components/Section";

// Contributions.tsx and lib/github.ts are kept but unused. Re-adding them
// means restoring `export const revalidate = 3600`, since the graph is the
// only data fetch on the page.
export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Hero portrait={<Portrait />} />

        <Section id="work">
          <SectionHeader
            index="01 / Work"
            title="Projects"
            note="Backend systems, build automation and full-stack applications."
          />
          <Projects />
        </Section>

        <Section id="open-source" className="bg-ink-2">
          <SectionHeader
            index="02 / Open source"
            title="Four years in AOSP"
            note="Custom Android distributions and kernels, built in public since 2020."
          />
          <OpenSource />
        </Section>

        <Section id="experience">
          <SectionHeader
            index="03 / Experience"
            title="Where I have worked"
            note="Engineering, governance and student services."
          />
          <Experience />
        </Section>

        <Section id="impact" className="bg-ink-2">
          <SectionHeader
            index="04 / Impact"
            title="Beyond the code"
            note="Student services, mentoring and governance at Seneca."
          />
          <Impact />
        </Section>

        <Section id="about">
          <SectionHeader
            index="05 / About"
            title="A bit more"
            note="Education, stack and the rest of it."
          />
          <About />
        </Section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
