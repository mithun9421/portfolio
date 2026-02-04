import Link from "next/link";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-2xl w-full text-center">
        <PageTitle>Page Not Found</PageTitle>

        <LeadParagraph className="mt-6 mx-auto max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </LeadParagraph>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base text-accent hover:text-accent-hover transition-colors duration-150"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M10 12L6 8l4-4" />
            </svg>
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
