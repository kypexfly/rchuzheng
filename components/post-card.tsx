"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends Post {}

export default function PostCard({ title, description, date, src, url }: PostCardProps) {
  return (
    <Card className="flex flex-row flex-wrap relative overflow-hidden py-0 shadow-2xl border-0 rounded-none">
      <Link href={url} className="bg-slate-900 aspect-square rounded-lg w-full xs:basis-44 overflow-hidden">
        <Image className="object-center object-cover w-full h-full" src={src} width="250" height="250" alt={title} />
      </Link>

      <div className="flex-1">
        <CardHeader>
          <CardTitle className="text-2xl hover:text-white">
            <Link href={url}>{title}</Link>
          </CardTitle>
          <time dateTime={date} className="font-mono">
            {format(parseISO(date), "LLLL d, yyyy")}
          </time>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </div>
    </Card>
  );
}
