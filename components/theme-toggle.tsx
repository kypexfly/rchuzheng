"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "tabler-icons-react";
import { Button } from "./ui/button";

export function ThemeToggler() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => (currentTheme === "dark" ? setTheme("light") : setTheme("dark"));

  return (
    <button className="py-0 flex justify-center w-8 border-l" onClick={toggleTheme}>
      <Sun className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" size={22} />
      <Moon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" size={22} />
    </button>
  );
}
