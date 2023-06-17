"use client";

import { routes, socialList } from "@/lib/constants";
import { NavLink } from "./navlink";
import { Menu2 } from "tabler-icons-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <header className="bg-slate-900/50 border-b backdrop-blur-md px-2 py-4 sticky top-0 z-10">
      <div className="flex flex-start sm:hidden container">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="flex justify-start items-start">
              <NavigationMenuTrigger>
                <Menu2 size={22} />
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid grid-cols-1 w-[320px] gap-3 p-2 md:w-[500px] lg:w-[600px] ">
                  {routes.map((route) => (
                    <li key={route.path} className="flex">
                      <Link href={route.path} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{route.name}</NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                  <li className="flex justify-between gap-3">
                    {socialList.map((s) => (
                      <Button variant="secondary" key={s.label} className="flex-1">
                        <a href={s.url} target="_blank" rel="noopener noreferrer">
                          <s.icon size={22} />
                        </a>
                      </Button>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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
