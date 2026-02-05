import { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { BodyText } from "@/components/typography/BodyText";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mithun Muraleedharan — Senior Software Engineer at PayPal with 7+ years building privacy platforms and scalable frontend systems.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>About</PageTitle>

        <RevealOnScroll delay={0.2}>
          <LeadParagraph className="mt-4 max-w-lg">
            Frontend architect specializing in microfrontends, privacy platforms,
            and systems that make complex workflows feel simple.
          </LeadParagraph>
        </RevealOnScroll>

        <div className="mt-10 space-y-10">
          <RevealOnScroll delay={0.1}>
            <section>
              <BodyText className="text-foreground-muted">
                My journey in tech has been marked by a commitment to adaptability
                and a thirst for knowledge. As an adaptive learner, I thrive on
                the challenge of staying ahead in the ever-evolving landscape of
                web development, constantly exploring new technologies to elevate
                my skill set. Currently ranked #7320 on cssbattle.dev.
              </BodyText>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                The Journey
              </h2>
              <BodyText className="text-foreground-muted">
                Seven years building at scale—from BNY Mellon where I led UI
                development for fraud detection systems, to PayPal where I
                introduced microfrontend architecture to unify privacy applications.
                The progression from Application Developer to Senior Software
                Engineer has been driven by a consistent focus on solving complex
                problems with elegant, maintainable solutions.
              </BodyText>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Current Focus
              </h2>
              <BodyText className="text-foreground-muted">
                Exploring how LLM-powered tools can accelerate development workflows
                without compromising code quality. The intersection of AI assistance
                and software engineering is where I&apos;m investing my learning energy
                right now.
              </BodyText>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                Beyond Code
              </h2>
              <BodyText className="text-foreground-muted">
                Beyond the lines of code, I find joy in the culinary world—experimenting
                with flavors and techniques to create delightful dishes. The precision
                and creativity I bring to cooking mirrors my approach to development.
                Gaming serves as both relaxation and inspiration, contributing
                innovative problem-solving strategies to my work. And when I need
                to clear my head, you&apos;ll find me on the open road, indulging in
                long drives that fuel creativity and new perspectives.
              </BodyText>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                This Site
              </h2>
              <BodyText className="text-foreground-muted">
                Built with Next.js and TypeScript. Designed from first principles
                rather than existing systems. Motion is intentional. Typography
                does the work. Everything earns its place.
              </BodyText>
            </section>
          </RevealOnScroll>

          <RevealOnScroll delay={0.6}>
            <div className="pt-4">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 text-base text-accent hover:text-accent-hover transition-colors duration-150"
              >
                View full resume
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
