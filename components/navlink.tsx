import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  children?: ReactNode;
  href: Url;
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link className={cn("text-muted-foreground px-2 py-2", pathname === href && "text-violet-600")} href={href}>
      {children}
    </Link>
  );
}
