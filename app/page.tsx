import { BlogSection, ContactSection, HeaderSection, ProjectSection } from "@/components/home";
import { SkillsSection } from "@/components/home/skills-section";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
