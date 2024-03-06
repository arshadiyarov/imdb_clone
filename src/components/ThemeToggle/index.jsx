"use client";

import { GoSun, GoMoon } from "react-icons/go";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={
        "rounded-full p-2 hover:bg-secondLight md:dark:hover:bg-dark md:hover:bg-white dark:hover:bg-thirdDark"
      }
    >
      {mounted &&
        (currentTheme === "dark" ? (
          <GoSun
            className={"text-2xl cursor-pointer md:hover:text-amber-500"}
            onClick={() => setTheme("light")}
          />
        ) : (
          <GoMoon
            className={"text-2xl cursor-pointer md:hover:text-amber-500"}
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default ThemeToggle;
