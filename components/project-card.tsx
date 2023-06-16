"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCardSpotlight from "@/hooks/useCardSpotlight";
import { Project } from "@/types";
import Link from "next/link";
import { ExternalLink } from "tabler-icons-react";
import { buttonVariants } from "./ui/button";

interface ProjectCardProps extends Project {}

export default function ProjectCard({ title, description, article, date, demo, source, tech }: ProjectCardProps) {
  const { divRef, handleMouseMove, handleFocus, handleBlur, handleMouseEnter, handleMouseLeave, opacity, position } =
    useCardSpotlight();

  return (
    <Card
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/25 py-3 shadow-2xl"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      <CardHeader>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent className="mb-auto"><p>Card Content</p></CardContent> */}
      <CardFooter className="mt-auto flex gap-6 flex-wrap [&_.icon]:ml-1 [&>a]:px-0">
        {article && (
          <Link href={article} className={buttonVariants({ variant: "link", size: "sm" })}>
            Article
          </Link>
        )}
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            Source <ExternalLink size={18} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            Demo <ExternalLink size={18} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
