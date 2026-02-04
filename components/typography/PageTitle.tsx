"use client";

import { TextReveal } from "@/components/animated/TextReveal";

interface PageTitleProps {
  children: string;
  className?: string;
}

export function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
    <h1
      className={`font-display text-4xl leading-tight text-foreground ${className}`}
    >
      <TextReveal text={children} delay={0.2} staggerDelay={0.03} />
    </h1>
  );
}
