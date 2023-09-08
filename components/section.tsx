import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("my-16 sm:py-8", className)} {...props}>
      {children}
    </section>
  );
}
