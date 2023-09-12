"use client";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCardSpotlight from "@/hooks/useCardSpotlight";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { AspectRatio } from "./ui/aspect-ratio";
import { buttonVariants } from "./ui/button";

interface ProjectCardProps extends Project {
  showCover?: boolean;
  index?: number;
}

export default function ProjectCard({
  showCover,
  title,
  description,
  article,
  date,
  cover,
  demo,
  source,
  tech,
  index,
}: ProjectCardProps) {
  const {
    divRef,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
    opacity,
    position,
  } = useCardSpotlight();

  return (
    <Card
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col relative overflow-hidden rounded-lg border dark:border-slate-800 dark:bg-slate-900/25 shadow-lg h-full"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
        }}
      />
      {showCover && (
        <AspectRatio ratio={1800 / 900}>
          <Image
            fill
            className="object-cover"
            alt={`${title} image preview`}
            src={cover!}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            priority={index === 0} // only show the first card as priority
          />
        </AspectRatio>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <ul className="flex gap-2 flex-wrap text-[0.75rem] w-full">
          {tech?.map((item) => (
            <li className="rounded bg-slate-100 dark:bg-slate-800 px-2" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </CardHeader>
      <CardFooter className="mt-auto flex gap-6 flex-wrap [&_.icon]:ml-1 [&>a]:px-0 py-2">
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
            Source <Icons.extlink size={18} />
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link", size: "sm" })}
          >
            Demo <Icons.extlink size={18} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
