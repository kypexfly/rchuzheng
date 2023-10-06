import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";
import PostCard from "../post-card";
import { Section } from "../section";
import { StaggerAnimateInView, fadeInLeft } from "../stagger-animate";
import { buttonVariants } from "../ui/button";

export function BlogSection() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Section className="container">
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">
        <span>Latest Posts</span>
        <Link className={buttonVariants({ variant: "secondary" })} href="/blog">
          View all
        </Link>
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.slice(0, 4).map((post) => (
          <StaggerAnimateInView key={post.title} variants={fadeInLeft}>
            <PostCard {...post} />
          </StaggerAnimateInView>
        ))}
      </div>
    </Section>
  );
}
