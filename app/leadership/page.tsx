import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { BodyText } from "@/components/typography/BodyText";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

export const metadata: Metadata = {
  title: "Leadership & Influence",
  description:
    "Technical leadership through mentorship, architectural decisions, and team guidance at PayPal and BNY Mellon.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Leadership & Influence</PageTitle>

        <RevealOnScroll delay={0.3}>
          <LeadParagraph className="mt-8 max-w-lg">
            Technical leadership through mentorship, architectural decisions,
            and creating conditions for teams to do their best work.
          </LeadParagraph>
        </RevealOnScroll>

        <BorderDraw className="my-16" delay={0.5} />

        {/* Team Leadership */}
        <RevealOnScroll delay={0.1}>
          <section className="mb-16">
            <SectionHeading className="mb-6">Building Teams</SectionHeading>
            <div className="space-y-4">
              <BodyText className="text-foreground-muted">
                Led a team of 5 contract workers to develop an application handling
                the discovery of PayPal data and management of data scans. This
                meant establishing clear technical direction, unblocking challenges,
                and ensuring every team member could contribute meaningfully.
              </BodyText>
              <BodyText className="text-foreground-muted">
                Groomed a Data Engineering team to adopt React and develop
                applications end-to-end—bridging the gap between data expertise
                and frontend development.
              </BodyText>
            </div>
          </section>
        </RevealOnScroll>

        {/* Architectural Leadership */}
        <RevealOnScroll delay={0.2}>
          <section className="mb-16">
            <SectionHeading className="mb-6">
              Architectural Decisions
            </SectionHeading>
            <div className="space-y-4">
              <BodyText className="text-foreground-muted">
                Introduced the Microfrontend approach at PayPal to modularize UI
                components from different tracks, building a single-stop application
                with common authentication. This architectural decision enabled
                independent team deployments while maintaining a unified user
                experience for 300+ stakeholders.
              </BodyText>
              <BodyText className="text-foreground-muted">
                Prepared detailed engineering plans and formulated engineering
                pathways for complex requirements—translating business needs into
                technical solutions that were both cost-effective and reduced
                developer effort.
              </BodyText>
            </div>
          </section>
        </RevealOnScroll>

        {/* UX Leadership at BNY */}
        <RevealOnScroll delay={0.3}>
          <section className="mb-16">
            <SectionHeading className="mb-6">UI/UX Leadership</SectionHeading>
            <div className="space-y-4">
              <BodyText className="text-foreground-muted">
                At BNY Mellon, served as UI Lead for Authentify—a fraud detection
                system that identified fraudulent business transactions based on
                user behavior patterns. Designed User Experience with prototyping
                tools and secured business approval before implementation.
              </BodyText>
              <BodyText className="text-foreground-muted">
                This experience shaped my approach to frontend development: design
                with user intent, prototype before building, and always bridge
                technical implementation with business objectives.
              </BodyText>
            </div>
          </section>
        </RevealOnScroll>

        {/* Impact */}
        <RevealOnScroll delay={0.4}>
          <section className="mb-16">
            <SectionHeading className="mb-6">Measurable Impact</SectionHeading>
            <div className="space-y-4">
              <BodyText className="text-foreground-muted">
                The platforms I&apos;ve helped build serve over 300 stakeholders
                across privacy operations, regulatory compliance, and audit
                functions. The microfrontend architecture now enables multiple
                teams to ship independently while users experience seamless
                integration.
              </BodyText>
              <BodyText className="text-foreground-muted">
                Performance optimizations—70% bundle size reduction, 20-second
                page load improvement—weren&apos;t just metrics. They represented
                respect for users&apos; time and the recognition that every second
                saved compounds across thousands of daily interactions.
              </BodyText>
            </div>
          </section>
        </RevealOnScroll>
      </div>
    </div>
  );
}
