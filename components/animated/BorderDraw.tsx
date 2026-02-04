"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BorderDrawProps {
  className?: string;
  delay?: number;
}

export function BorderDraw({ className = "", delay = 0 }: BorderDrawProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="h-px bg-border"
      />
    </div>
  );
}
