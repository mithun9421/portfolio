import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { BodyText } from "@/components/typography/BodyText";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mithun Muraleedharan for conversations about frontend architecture, privacy platforms, and scalable systems.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Contact</PageTitle>

        <RevealOnScroll delay={0.2}>
          <LeadParagraph className="mt-4 max-w-lg">
            Available for conversations about frontend architecture, privacy
            platforms, and scalable systems.
          </LeadParagraph>
        </RevealOnScroll>

        <div className="mt-10">
          <RevealOnScroll delay={0.1}>
            <div className="space-y-5">
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
                label="GitHub"
                href="https://github.com/mithun9421"
                value="github.com/mithun9421"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mt-10 p-4 rounded-lg bg-accent-subtle border border-accent/20">
              <p className="text-sm text-foreground">
                <span className="font-medium">Open to freelance</span>
                <span className="text-foreground-muted"> — Available for consulting on microfrontend architecture, React performance optimization, and privacy platform development.</span>
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-10 pt-6 border-t border-border">
              <BodyText className="text-foreground-subtle text-sm">
                Based in Chennai, India. I read everything and appreciate thoughtful
                messages. Response time varies with current commitments.
              </BodyText>
            </div>
          </RevealOnScroll>
        </div>
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
