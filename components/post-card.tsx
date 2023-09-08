"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps extends Post {}

export default function PostCard({ title, description, date, src, url }: PostCardProps) {
  return (
    <Link href={url}>
      <Card className="bg-card dark:hover:bg-secondary hover:bg-secondary dark:bg-slate-900/25 border dark:border-slate-800 group p-3 rounded flex flex-row items-start flex-wrap relative overflow-hidden h-full transition-colors hover:transition-colors">
        <div className="hidden sm:flex w-full sm:h-36 xs:basis-56 overflow-hidden rounded">
          <Image
            className="object-center object-cover w-full h-full"
            src={src}
            width="250"
            height="250"
            alt={title}
          />
        </div>

        <div className="flex-1">
          <CardHeader className="p-0 sm:px-6">
            <time dateTime={date} className="font-mono text-muted-foreground">
              {format(parseISO(date), "LLLL d, yyyy")}
            </time>
            <CardTitle className="md:text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardDescription className="px-0 sm:pt-0 sm:px-6 text-muted-foreground">
            {description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
