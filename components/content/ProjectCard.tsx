"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  index?: number;
}

export function ProjectCard({
  title,
  description,
  href,
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
      <Link href={href} className="group block py-6">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-150">
            {title}
          </h3>
          <p className="text-base text-foreground-muted">{description}</p>
          <span className="text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            Read more →
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
