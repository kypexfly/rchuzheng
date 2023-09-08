import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return notFound();

  return { title: post.title };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) return notFound();

  return (
    <article className="py-8 mx-auto w-full max-w-2xl">
      <header className="mb-8">
        <time dateTime={post.date} className="mb-1 text-sm text-muted-foreground">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
          <Balancer>{post.title}</Balancer>
        </h1>

        <div className="h-72 overflow-hidden rounded my-3 bg-zinc-950">
          <Image
            src={post.src}
            width={700}
            height={300}
            alt={post.title}
            className="object-fit object-center"
          />
        </div>
      </header>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
