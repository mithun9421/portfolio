interface LeadParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function LeadParagraph({
  children,
  className = "",
}: LeadParagraphProps) {
  return (
    <p className={`text-lg leading-relaxed text-foreground-muted ${className}`}>
      {children}
    </p>
  );
}
