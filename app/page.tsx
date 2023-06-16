import { BlogSection } from "@/components/home/blog-section";
import { HeaderSection } from "@/components/home/header-section";
import { ProjectSection } from "@/components/home/project-section";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <ProjectSection />
      <BlogSection />
    </>
  );
}
