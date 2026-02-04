"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Philosophy", href: "/philosophy" },
  { name: "Work", href: "/work" },
  { name: "Leadership", href: "/leadership" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 no-print"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <nav className="flex items-center justify-between py-6 border-b border-border bg-surface/80 backdrop-blur-md">
          <Link
            href="/"
            className="text-foreground font-medium text-sm tracking-wide hover:text-accent transition-colors duration-150"
          >
            Mithun M.
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`relative text-sm font-medium transition-colors duration-150 group ${
                        isActive ? "text-accent" : "text-foreground-muted hover:text-foreground"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-px bg-accent transition-transform duration-300 ${
                          isActive ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ transformOrigin: isActive ? "left" : "left" }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ThemeToggle />
            <MobileMenu pathname={pathname} />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground-muted hover:text-foreground transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {isOpen ? (
            <path d="M5 5L15 15M15 5L5 15" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-border py-4"
          >
            <ul className="flex flex-col px-6">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 text-base font-medium transition-colors ${
                        isActive ? "text-accent" : "text-foreground-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
