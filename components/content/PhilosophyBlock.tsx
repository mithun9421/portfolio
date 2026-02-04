"use client";

import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

interface PhilosophyBlockProps {
  title: string;
  children: React.ReactNode;
  index?: number;
}

export function PhilosophyBlock({
  title,
  children,
  index = 0,
}: PhilosophyBlockProps) {
  return (
    <RevealOnScroll delay={index * 0.1}>
      <div className="py-10">
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
        <div className="text-base leading-relaxed text-foreground-muted space-y-4">
          {children}
        </div>
      </div>
    </RevealOnScroll>
  );
}
