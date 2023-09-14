import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";

import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import ButtonBack from "./button-back";
import { siteConfig } from "@/config/site";

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
    <>
      <div className="container sm:px-8 my-3">
        <ButtonBack  />
      </div>

      <article className="px-4 pb-6 sm:py-6 w-full mx-auto max-w-2xl">
        <header className="mb-8">
          <h1 className="scroll-m-20 text-5xl font-base tracking-tight">
            <Balancer>{post.title}</Balancer>
          </h1>

          <p className="my-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>{format(parseISO(post.date), "LLLL d, yyyy")}</time> •{" "}
            {siteConfig.title}
          </p>

          <div className="h-72 overflow-hidden my-3 bg-zinc-950">
            <Image
              src={post.src}
              width={700}
              height={300}
              alt={post.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </header>
        <Mdx code={post.body.code} />
      </article>
    </>
  );
};

export default PostLayout;
