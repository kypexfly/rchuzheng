import ProjectCard from "@/components/project-card";
import { siteConfig } from "@/config/site";
import { projectList } from "@/lib/constants";

export const metadata = {
  title: `Projects | ${siteConfig.title}`,
};

export default function Projects() {
  return (
    <>
      <header className="text-center sm:text-left my-8">
        <h1 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-5xl">
          Featured Projects
        </h1>
        <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          Projects that showcase my expertise in frontend web development, utilizing frameworks and best practices to
          deliver scalable and responsive solutions that meet client needs.
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList
          .filter((p) => p.highlight)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>

      <div className="grid gap-6 grid-cols-1 mt-6">
        {projectList
          .filter((p) => !p.highlight)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </>
  );
}
