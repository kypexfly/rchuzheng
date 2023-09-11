import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  const linkStyle = cn(buttonVariants({ variant: "link" }), "p-0 h-auto");

  return (
    <footer className="bg-slate-100/25 border-t-slate-300/25 dark:bg-slate-900/25 px-2 py-4 border-t dark:border-t-slate-700/25">
      <div className="flex flex-col container w-full text-center">
        <p className="text-muted-foreground text-sm">Ricardo Chu • Ecuador • {year}</p>
        <p className="text-muted-foreground text-sm">
          Illustrations by{" "}
          <a className={linkStyle} href="https://icons8.com/illustrations/author/wsla8vwyVKgS">
            OlFi
          </a>{" "}
          from{" "}
          <a className={linkStyle} href="https://icons8.com/illustrations">
            Ouch!
          </a>
        </p>
      </div>
    </footer>
  );
}
