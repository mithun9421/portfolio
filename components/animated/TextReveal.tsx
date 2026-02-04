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

    return (
      <span ref={ref} className={className}>
        {words.map((word, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={
                isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: delay + index * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
            {index < words.length - 1 && <span>&nbsp;</span>}
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
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.5,
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
