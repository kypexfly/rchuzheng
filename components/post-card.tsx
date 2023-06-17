"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/types";
import Link from "next/link";

interface ProjectCardProps extends Project {}

export default function PostCard({ title, description, date }: ProjectCardProps) {
  return (
    <Card className="flex flex-col relative overflow-hidden py-0 shadow-2xl border-0 rounded-none">
      <div className="flex flex-row">
        <div className="bg-slate-900 aspect-square rounded-lg"></div>

        <div>
          <CardHeader>
            <CardTitle className="text-2xl hover:text-white">
              <Link href="/blog">{title}</Link>
            </CardTitle>
            <time className="font-mono">{date}</time>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
