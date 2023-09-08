"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { Menu2 } from "tabler-icons-react";
import { NavLink } from "./navlink";
import { ThemeToggler } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="border-b-slate-300/20 border-b dark:border-b-slate-700/20 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-md px-2 py-4 sticky top-0 z-10">
      <div className="container flex justify-between items-center">
        <div className="hidden sm:block" />
        <MobileMenu />
        <DesktopMenu />
        <ThemeToggler />
      </div>
      <div />
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <NavigationMenu className="justify-start">
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger
              aria-label="Open navigation menu"
              className="bg-transparent p-1 h-auto"
            >
              <Menu2 size={20} />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid grid-cols-1 w-[300px] gap-3 p-2 md:w-[500px] lg:w-[600px] ">
                {routes.map((route) => (
                  <li key={route.path} className="flex p-2 border-b">
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink className="flex-1">{route.name}</NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden sm:flex flex-row justify-between">
      <nav>
        <ul className="flex gap-4 [&_a]:font-bold [&_a]:text-sm">
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink href={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
