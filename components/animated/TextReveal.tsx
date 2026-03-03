"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  mode?: "word" | "line";
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.05,
  mode = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (mode === "word") {
    const words = text.split(" ");
    // Batch words into groups of 3 to reduce concurrent animations
    const BATCH = 3;
    const batches: string[][] = [];
    for (let i = 0; i < words.length; i += BATCH) {
      batches.push(words.slice(i, i + BATCH));
    }

    return (
      <span ref={ref} className={className}>
        {batches.map((group, batchIndex) => (
          <span key={batchIndex} className="inline overflow-hidden">
            <motion.span
              initial={{ opacity: 0, y: "30%" }}
              animate={
                isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "30%" }
              }
              transition={{
                duration: 0.45,
                delay: delay + batchIndex * staggerDelay * BATCH,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {group.join(" ")}
            </motion.span>
            {batchIndex < batches.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    );
  }

  const lines = text.split("\n");

  return (
    <span ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: "30%" }}
            animate={
              isInView ? { opacity: 1, y: "0%" } : { opacity: 0, y: "30%" }
            }
            transition={{
              duration: 0.45,
              delay: delay + index * staggerDelay * 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
