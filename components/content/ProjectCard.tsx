"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectIcon } from "@/components/ui/ProjectIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  tech: string[];
  index?: number;
}

export function ProjectCard({
  title,
  description,
  href,
  icon,
  tech,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={href} className="group block py-5">
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start gap-4"
        >
          <div className="flex-shrink-0 mt-1 p-2 rounded-lg bg-accent-subtle text-accent group-hover:bg-accent group-hover:text-surface transition-colors duration-200">
            <ProjectIcon name={icon} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors duration-150">
                {title}
              </h3>
              <svg
                className="w-4 h-4 text-foreground-subtle opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 4l4 4-4 4" />
              </svg>
            </div>
            <p className="mt-1 text-sm text-foreground-muted line-clamp-2">
              {description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="inline-block px-2 py-0.5 text-xs font-medium text-foreground-subtle bg-surface-muted rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
