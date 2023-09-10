"use client";

import { projectList } from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "../project-card";
import { Section } from "../section";
import { StaggerAnimateInView, cardAnimate } from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function ProjectSection() {
  return (
    <Section>
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Projects</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/projects">
          View all
        </Link>
      </h2>

      <StaggerAnimateInView className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList
          .filter((p) => p.highlight)
          .slice(0, 6)
          .map((project) => (
            <motion.div key={project.title} variants={cardAnimate} className="h-full flex">
              <ProjectCard showCover {...project} />
            </motion.div>
          ))}
      </StaggerAnimateInView>
    </Section>
  );
}
