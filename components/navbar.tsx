"use client";

import { socialList } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./navlink";

export function Navbar() {
  return (
    <header className="bg-slate-900/50 border-b backdrop-blur-md px-2 py-4 sticky top-0 z-10">
      <div className="container w-full flex flex-row justify-between">
        <nav>
          <ul className="flex gap-4 [&_a]:font-bold [&_a]:text-sm">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
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
