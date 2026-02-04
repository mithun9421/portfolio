"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/animated/TextReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
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
              text="Building privacy platforms and scalable frontend systems that serve millions."
              delay={0.4}
              staggerDelay={0.04}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-foreground-muted max-w-md"
          >
            Senior Software Engineer at PayPal. 7+ years crafting microfrontend architectures and compliance-critical systems.
          </motion.p>
        </motion.div>

        {/* Explore Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="mt-24"
        >
          <Link href="/work" className="group">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2 text-foreground-subtle group-hover:text-accent transition-colors duration-150"
            >
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
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
