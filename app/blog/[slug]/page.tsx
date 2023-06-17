import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

import { Mdx } from "@/components/mdx-components";
import "@/styles/mdx.css";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // TODO: Post not found is not being returned
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return notFound();

  return (
    <article className="py-8 mx-auto w-full max-w-2xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">{post.title}</h1>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
