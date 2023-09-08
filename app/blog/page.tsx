import PostCard from "@/components/post-card";
import { TimelineItem, TimelineList } from "@/components/ui/timeline";
import { siteConfig } from "@/config/site";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Balancer } from "react-wrap-balancer";

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
};

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <section className="my-16">
      <header className="text-center sm:text-left my-8">
        <h1 className="mb-6 text-gray-800 dark:text-white text-5xl font-bold tracking-tight">
          <span className="text-gradient-flame">Blog</span> Posts
        </h1>
        <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          <Balancer>
            Sharing insights and experiences on various topics like software development, machine
            learning and engineering.
          </Balancer>
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <TimelineList>
          {posts.map((post) => (
            <TimelineItem key={post.title} href={post.url} title={post.title} date={post.date} />
          ))}
        </TimelineList>
      </div>
    </section>
  );
}
