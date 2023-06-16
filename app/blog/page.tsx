import ProjectCard from "@/components/project-card";
import { siteConfig } from "@/config/site";
import { projectList } from "@/lib/constants";

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
};

export default function Blog() {
  return (
    <>
      <header className="text-center sm:text-left my-8">
        <h1 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          Personal articles where I share my insights and experiences on various topics, including web development and
          other interests.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </>
  );
}
