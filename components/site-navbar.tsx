"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { socialList } from "@/data";
import Link from "next/link";
import { Menu2 } from "tabler-icons-react";
import { NavLink } from "./navlink";
import { buttonVariants } from "./ui/button";
import { routes } from "@/lib/routes";

export function Navbar() {
  return (
    <header className="bg-slate-900/50 backdrop-blur-md px-2 py-4 sticky top-0 z-10 border-b dark:border-b-slate-700/25">
      <MobileMenu />

      <div className="hidden sm:flex container w-full flex-row justify-between">
        <nav>
          <ul className="flex gap-4 [&_a]:font-bold [&_a]:text-sm">
            {routes.map((route) => (
              <li key={route.path}>
                <NavLink href={route.path}>{route.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-3 items-center">
          {socialList.map((s) => (
            <li key={s.label} className="hover:text-blue-600 text-muted-foreground">
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <s.icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="sm:hidden container">
      <NavigationMenu className="justify-start">
        <NavigationMenuList className="space-x-0">
          <NavigationMenuItem className="flex items-center">
            <NavigationMenuTrigger className="bg-transparent p-1 h-auto">
              <Menu2 size={20} />
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid grid-cols-1 w-[300px] gap-3 p-2 md:w-[500px] lg:w-[600px] ">
                {routes.map((route) => (
                  <li key={route.path} className="flex p-2 border-b last:border-0">
                    <Link href={route.path} legacyBehavior passHref>
                      <NavigationMenuLink className="flex-1">{route.name}</NavigationMenuLink>
                    </Link>
                  </li>
                ))}
                <li className="flex justify-between gap-3">
                  {socialList.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      className={buttonVariants({ variant: "secondary" })}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <s.icon size={22} />
                    </a>
                  ))}
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
