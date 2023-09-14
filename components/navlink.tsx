import { cn, isCurrentPathOrChild } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children?: React.ReactNode;
  href: Url;
}

export function NavLink({ children, href }: NavLinkProps) {
  const currentPath = usePathname();

  return (
    <Link
      className={cn(
        "text-muted-foreground hover:text-foreground  px-2 py-2 transition-colors",
        isCurrentPathOrChild(currentPath, href.toString()) && "text-bg"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
