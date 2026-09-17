import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Portrait } from "@/components/Portrait";
import { Projects } from "@/components/Projects";
import { Section, SectionHeader } from "@/components/Section";

/**
 * The GitHub contribution graph is shelved, not deleted. To bring it back,
 * restore these four things:
 *
 *   import { Contributions } from "@/components/Contributions";
 *   import { getContributionYears } from "@/lib/github";
 *   export const revalidate = 3600;   // the graph is the only live data
 *   const years = await getContributionYears();
 *
 * then drop this back inside the open-source section:
 *
 *   <div className="mt-16">
 *     <SectionHeader index="Activity" title={`@${site.github}`} />
 *     <Contributions years={years} />
 *   </div>
 *
 * Contributions.tsx and lib/github.ts are both untouched and still work.
 * With the graph out, nothing on the page fetches, so it is fully static
 * and needs no revalidate window.
 */
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

        <Section id="about">
          <SectionHeader
            index="04 / About"
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
