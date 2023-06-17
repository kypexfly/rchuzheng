import PostCard from "@/components/post-card";
import { siteConfig } from "@/config/site";
import { blogListMock } from "@/lib/constants";

export const metadata = {
  title: `Blog | ${siteConfig.title}`,
};

export default function Blog() {
  return (
    <>
      <header className="text-center sm:text-left my-8">
        <h1 className="mb-6 text-gray-800 dark:text-white text-3xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient-flame">Blog</span> Posts
        </h1>
        <p className="max-w-prose mb-10 font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          Sharing insights and experiences on various topics like software development, machine learning and
          engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogListMock.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </>
  );
}
