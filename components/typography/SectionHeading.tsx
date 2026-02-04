interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-xl font-semibold leading-snug text-foreground ${className}`}
    >
      {children}
    </h2>
  );
}
