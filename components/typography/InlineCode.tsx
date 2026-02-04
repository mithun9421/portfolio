interface InlineCodeProps {
  children: React.ReactNode;
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="font-mono text-sm bg-surface-muted px-2 py-1 rounded">
      {children}
    </code>
  );
}
