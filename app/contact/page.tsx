import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { BodyText } from "@/components/typography/BodyText";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mithun Muraleedharan for conversations about frontend architecture, privacy platforms, and scalable systems.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Contact</PageTitle>

        <RevealOnScroll delay={0.3}>
          <LeadParagraph className="mt-8 max-w-lg">
            Available for conversations about frontend architecture, privacy
            platforms, and scalable systems.
          </LeadParagraph>
        </RevealOnScroll>

        <BorderDraw className="my-16" delay={0.5} />

        <RevealOnScroll delay={0.1}>
          <div className="space-y-6">
            <ContactLink
              label="Email"
              href="mailto:mithunmuralee94@gmail.com"
              value="mithunmuralee94@gmail.com"
            />
            <ContactLink
              label="LinkedIn"
              href="https://www.linkedin.com/in/mithunmuraleedharan"
              value="linkedin.com/in/mithunmuraleedharan"
            />
            <ContactLink
              label="Portfolio"
              href="https://mithun-thedev.in/"
              value="mithun-thedev.in"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border">
            <BodyText className="text-foreground-subtle text-sm">
              Based in Chennai, India. I read everything and appreciate thoughtful
              messages. Response time varies with current commitments.
            </BodyText>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

function ContactLink({
  label,
  href,
  value,
}: {
  label: string;
  href: string;
  value: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <span className="text-sm text-foreground-subtle w-20">{label}</span>
      <a
        href={href}
        className="text-base text-foreground hover:text-accent transition-colors duration-150"
        target="_blank"
        rel="noopener noreferrer"
      >
        {value}
      </a>
    </div>
  );
}
