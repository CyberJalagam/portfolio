import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import { Contributions } from "@/components/Contributions";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { OpenSource } from "@/components/OpenSource";
import { Portrait } from "@/components/Portrait";
import { Projects } from "@/components/Projects";
import { Section, SectionHeader } from "@/components/Section";
import { site } from "@/content/site";
import { getContributionYears } from "@/lib/github";

// Contribution data is refetched hourly; everything else is static.
export const revalidate = 3600;

export default async function Home() {
  const years = await getContributionYears();

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

          <div className="mt-16">
            <SectionHeader index="Activity" title={`@${site.github}`} />
            <Contributions years={years} />
          </div>
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
