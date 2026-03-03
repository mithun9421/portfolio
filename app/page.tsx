"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animated/TextReveal";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-2xl w-full">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="space-y-8"
        >
          <h1 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            <TextReveal
              text="Architecting privacy platforms that power enterprise compliance at scale."
              delay={0.4}
              staggerDelay={0.04}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-foreground-muted max-w-md"
          >
            Senior Software Engineer at PayPal. Pioneered microfrontend architecture unifying 16 applications for 300+ stakeholders.
          </motion.p>
        </motion.div>
      </div>

      {/* Explore Link — CSS animation instead of framer-motion infinite loop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link href="/work" className="group">
          <div className="flex flex-col items-center gap-2 text-foreground-subtle group-hover:text-accent transition-colors duration-150 animate-bounce-slow">
            <span className="text-xs tracking-widest uppercase">Explore Work</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
