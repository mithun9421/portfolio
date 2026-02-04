"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 text-foreground-muted hover:text-foreground transition-colors duration-150"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun */}
        <motion.svg
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -90,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10" cy="10" r="3" />
          <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
        </motion.svg>

        {/* Moon */}
        <motion.svg
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 90,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </motion.svg>
      </div>
    </button>
  );
}
