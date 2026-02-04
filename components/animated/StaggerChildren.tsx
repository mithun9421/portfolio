"use client";

import { motion, useInView } from "framer-motion";
import { useRef, Children } from "react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = "",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const childArray = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
