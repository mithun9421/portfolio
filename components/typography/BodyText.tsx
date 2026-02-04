interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function BodyText({ children, className = "" }: BodyTextProps) {
  return (
    <p className={`text-base leading-relaxed text-foreground ${className}`}>
      {children}
    </p>
  );
}
