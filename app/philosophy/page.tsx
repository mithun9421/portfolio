import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { PhilosophyBlock } from "@/components/content/PhilosophyBlock";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

export const metadata: Metadata = {
  title: "Engineering Philosophy",
  description:
    "Principles that guide frontend architecture—from microfrontends to privacy platforms at scale.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Engineering Philosophy</PageTitle>

        <RevealOnScroll delay={0.3}>
          <LeadParagraph className="mt-8 max-w-lg">
            These principles have emerged from 7+ years of building frontend
            systems—from fraud detection at BNY Mellon to privacy platforms
            at PayPal.
          </LeadParagraph>
        </RevealOnScroll>

        <BorderDraw className="my-16" delay={0.5} />

        <div className="space-y-4">
          <PhilosophyBlock title="Modular by Design" index={0}>
            <p>
              Microfrontends aren&apos;t just an architecture pattern—they&apos;re
              a philosophy of enabling teams to move independently while users
              experience coherence. The best frontend systems let multiple teams
              ship without stepping on each other.
            </p>
            <p>
              When I introduced Webpack Module Federation at PayPal, the goal
              wasn&apos;t technical novelty. It was giving teams autonomy while
              preserving the unified experience that 300+ stakeholders depended on.
            </p>
          </PhilosophyBlock>

          <PhilosophyBlock title="Seamlessness as a Goal" index={1}>
            <p>
              The best systems are invisible. Users shouldn&apos;t think about
              which team built which feature, or where one application ends and
              another begins. They should accomplish their goals without friction.
            </p>
            <p>
              This means common authentication, consistent design language, and
              shared state management across independently deployed modules. The
              complexity is absorbed by the architecture, not passed to the user.
            </p>
          </PhilosophyBlock>

          <PhilosophyBlock title="Performance is Respect" index={2}>
            <p>
              A 20-second page load isn&apos;t acceptable. When we reduced bundle
              size by 70% through code splitting and compression, it wasn&apos;t
              about hitting metrics—it was about acknowledging that the privacy
              officers, auditors, and compliance teams using these tools have
              urgent work to do.
            </p>
            <p>
              Every second matters when multiplied across hundreds of daily users
              and thousands of interactions.
            </p>
          </PhilosophyBlock>

          <PhilosophyBlock title="Design Before Code" index={3}>
            <p>
              My time at BNY Mellon reinforced this: prototype first, secure
              business approval, then build. The friction of rework is far greater
              than the investment in upfront design.
            </p>
            <p>
              This extends to technical decisions too. Detailed engineering plans
              and clear pathways prevent costly pivots later. Architecture
              decisions made hastily become constraints that persist for years.
            </p>
          </PhilosophyBlock>

          <PhilosophyBlock title="Observability Drives Improvement" index={4}>
            <p>
              You can&apos;t improve what you can&apos;t see. Implementing
              OpenTelemetry tracing and Datadog RUM wasn&apos;t about adding
              dashboards—it was about understanding how real users interact
              with systems under real conditions.
            </p>
            <p>
              When you can trace a request through federated modules and correlate
              it with user experience metrics, you can make informed decisions
              about where to invest optimization effort.
            </p>
          </PhilosophyBlock>

          <PhilosophyBlock title="Adaptive Learning" index={5}>
            <p>
              The frontend landscape evolves constantly. What worked two years
              ago may be obsolete today. Thriving in this environment requires
              staying curious—from competing in CSS battles to exploring new
              frameworks.
            </p>
            <p>
              This isn&apos;t about chasing trends. It&apos;s about maintaining
              the knowledge to make informed architectural decisions when new
              tools or patterns emerge.
            </p>
          </PhilosophyBlock>
        </div>
      </div>
    </div>
  );
}
