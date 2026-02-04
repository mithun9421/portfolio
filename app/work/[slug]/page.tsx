import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { BodyText } from "@/components/typography/BodyText";
import { PullQuote } from "@/components/typography/PullQuote";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";
import { projects, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        {/* Back Link */}
        <RevealOnScroll>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors duration-150 mb-8"
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
            Work
          </Link>
        </RevealOnScroll>

        <PageTitle>{project.title}</PageTitle>

        <RevealOnScroll delay={0.3}>
          <LeadParagraph className="mt-8 max-w-lg">
            {project.shortDescription}
          </LeadParagraph>
        </RevealOnScroll>

        <BorderDraw className="my-16" delay={0.5} />

        {/* Context Section */}
        <RevealOnScroll delay={0.1}>
          <section className="mb-16">
            <SectionHeading className="mb-6">The Problem Space</SectionHeading>
            <BodyText className="text-foreground-muted">{project.context}</BodyText>
          </section>
        </RevealOnScroll>

        {/* Constraints Section */}
        <RevealOnScroll delay={0.2}>
          <section className="mb-16">
            <SectionHeading className="mb-6">Working Conditions</SectionHeading>
            <ul className="space-y-4">
              {project.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="text-base text-foreground-muted leading-relaxed pl-4 border-l border-border"
                >
                  {constraint}
                </li>
              ))}
            </ul>
          </section>
        </RevealOnScroll>

        {/* Decisions Section */}
        <RevealOnScroll delay={0.3}>
          <section className="mb-16">
            <SectionHeading className="mb-6">
              Architectural Choices
            </SectionHeading>
            <div className="space-y-6">
              {project.decisions.map((decision, index) => (
                <BodyText key={index} className="text-foreground-muted">
                  {decision}
                </BodyText>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* Outcomes Section */}
        <RevealOnScroll delay={0.4}>
          <section className="mb-16">
            <SectionHeading className="mb-6">Results</SectionHeading>
            <div className="space-y-4">
              {project.outcomes.map((outcome, index) => (
                <BodyText key={index} className="text-foreground-muted">
                  {outcome}
                </BodyText>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* Quote */}
        {project.quote && (
          <>
            <BorderDraw className="my-12" delay={0.5} />
            <RevealOnScroll delay={0.5}>
              <PullQuote>&ldquo;{project.quote}&rdquo;</PullQuote>
            </RevealOnScroll>
          </>
        )}
      </div>
    </div>
  );
}
