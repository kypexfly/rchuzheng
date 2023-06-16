import { blogListMock } from "@/lib/constants";
import Link from "next/link";
import { Section } from "../section";
import { buttonVariants } from "../ui/button";

export function BlogSection() {
  return (
    <Section>
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "outline" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid">
        {blogListMock.slice(0, 7).map((project) => (
          <Link key={project.title} className="py-2 border-b last:border-b-0 flex gap-2" href="/">
            <h3 className="link">{project.title}</h3>
            <time className="ml-auto text-muted-foreground text-sm hidden md:block">{project.date}</time>
          </Link>
        ))}
      </div>
    </Section>
  );
}
