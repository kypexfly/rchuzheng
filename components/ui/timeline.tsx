import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

interface TimelineListProps extends React.OlHTMLAttributes<HTMLOListElement> {}

export const TimelineList = ({ children, className, ...props }: TimelineListProps) => {
  return (
    <ol className={cn("relative border-l ", className)} {...props}>
      {children}
    </ol>
  );
};

interface TimelineItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  date: string;
  title: string;
  description?: string;
  href: string;
}

export const TimelineItem = ({
  date,
  title,
  description,
  href,
  className,
  ...props
}: TimelineItemProps) => {
  return (
    <li className={cn("mb-5 ml-10", className)} {...props}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-primary"></div>
      <Link href={href}>
        <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-500">
          {format(parseISO(date), "LLLL d, yyyy")}
        </time>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        {description && (
          <p className="mb-4 max-w-prose font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </Link>
    </li>
  );
};
