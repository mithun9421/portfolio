import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto py-12 border-t border-border no-print">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-foreground-subtle">
              Mithun Muraleedharan
            </p>
            <p className="text-xs text-foreground-subtle">
              Senior Software Engineer · Privacy & Platform Engineering
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/resume"
              className="text-sm text-foreground-muted hover:text-accent transition-colors duration-150"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground-muted hover:text-accent transition-colors duration-150"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-xs text-foreground-subtle">
            Built with Next.js and TypeScript. Designed from first principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
