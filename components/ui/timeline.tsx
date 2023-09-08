import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";

interface TimelineListProps extends React.OlHTMLAttributes<HTMLOListElement> {}

export const TimelineList = ({ children, className, ...props }: TimelineListProps) => {
  return (
    <ol
      className={cn("relative border-l ", className)}
      {...props}
    >
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
  children,
  className,
  ...props
}: TimelineItemProps) => {
  return (
    <li className={cn("mb-10 ml-10", className)} {...props}>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 bg-primary"></div>
      <time className="mb-1 text-sm font-normal leading-none dark:text-gray-400 text-gray-500">
        {format(parseISO(date), "LLLL d, yyyy")}
      </time>
      <Link href={href}>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
      </Link>
      {description && (
        <p className="mb-4 max-w-prose font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      )}
    </li>
  );
};
