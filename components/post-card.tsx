"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends Post {}

export default function PostCard({ title, description, date, src, url }: PostCardProps) {
  return (
    <Card className="flex flex-row items-center flex-wrap relative overflow-hidden py-0 border-0 shadow-none rounded-none">
      <Link href={url} className="hidden sm:flex w-full sm:h-36 xs:basis-56 overflow-hidden rounded">
        <Image className="object-center object-cover w-full h-full" src={src} width="250" height="250" alt={title} />
      </Link>

      <div className="flex-1">
        <CardHeader className="p-0 sm:p-6">
          <time dateTime={date} className="font-mono">
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
          <CardTitle className="hover:text-slate-800 text-2xl dark:hover:text-white">
            <Link href={url}>{title}</Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-0 sm:p-6">
          <p>{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
