import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { Section } from "../section";
import { buttonVariants } from "../ui/button";

export function BlogSection() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Section>
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "outline" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid">
        {posts.slice(0, 7).map((post) => (
          <Link key={post.title} className="py-2 border-b last:border-b-0 flex gap-2" href={post.url}>
            <h3>{post.title}</h3>
            <time className="ml-auto text-muted-foreground text-sm hidden md:block">
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </Link>
        ))}
      </div>
    </Section>
  );
}
