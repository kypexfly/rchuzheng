import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";
import { Section } from "../section";
import { buttonVariants } from "../ui/button";
import PostCard from "../post-card";

export function BlogSection() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Section>
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.slice(0, 7).map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}
