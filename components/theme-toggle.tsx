"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "tabler-icons-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => (currentTheme === "dark" ? setTheme("light") : setTheme("dark"));

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex justify-center"
    >
      <Sun className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" size={22} />
      <Moon
        className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        size={22}
      />
    </button>
  );
}
