"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "tabler-icons-react";
import { Button } from "./ui/button";

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
