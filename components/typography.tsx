import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

const typoVariants = cva({
  variants: {
    variant: {
      default: "scroll-m-20 text-xl font-semibold tracking-tight",
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "scroll-m-20 text-xl font-semibold tracking-tight",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      inlinecode: "mt-6 border-l-2 pl-6 italic",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TypographyProps extends VariantProps<typeof typoVariants> {
  children: ReactNode;
  className: string | undefined;
  variant: string;
}

// export const Typography = ({ children, className, variant }: TypographyProps) => {
//   return <div className={cn(typoVariants({ variant, className }))}>{children}</div>;
// };
