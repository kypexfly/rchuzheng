import ProjectCard from "@/components/project-card";
import { siteConfig } from "@/config/site";
import { projectList } from "@/data";
import { Metadata } from "next";
import { Balancer } from "react-wrap-balancer";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.title}`,
};

export default function Projects() {
  return (
    <>
      <section className="my-16">
        <header className="text-center sm:text-left my-8">
          <h1 className="mb-6 text-gray-800 dark:text-white text-5xl font-bold tracking-tight">
            <span className="text-gradient-flame">Featured</span> Projects
          </h1>
          <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            <Balancer>
              Projects to showcase my experience in web development, utilizing frameworks and best practices to
              deliver scalable and responsive solutions.
            </Balancer>
          </p>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList
            .filter((p) => p.highlight)
            .map((project) => (
              <ProjectCard showCover key={project.title} {...project} />
            ))}
        </div>
      </section>

      <section className="my-16">
        <header className="text-center sm:text-left my-8">
          <h1 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-3xl">
            Other Projects
          </h1>
        </header>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectList
            .filter((p) => !p.highlight)
            .map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
        </div>
      </section>
    </>
  );
}
