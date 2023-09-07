import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ children, className }: SectionProps) {
  return <section className={cn("my-16", className)}>{children}</section>;
}
