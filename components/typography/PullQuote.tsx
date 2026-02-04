interface PullQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export function PullQuote({ children, className = "" }: PullQuoteProps) {
  return (
    <blockquote
      className={`font-display text-2xl leading-snug text-foreground-muted border-l-2 border-accent pl-6 my-12 ${className}`}
    >
      {children}
    </blockquote>
  );
}
