"use client";

import { PageTitle } from "@/components/typography/PageTitle";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";
import { motion } from "framer-motion";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        {/* Header with Print Button */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <PageTitle>Resume</PageTitle>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePrint}
            className="no-print inline-flex items-center gap-2 px-4 py-2 text-sm text-foreground-muted border border-border rounded hover:border-accent hover:text-accent transition-colors duration-150"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 6V2h8v4M4 12H2V8h12v4h-2M4 10h8v4H4v-4z" />
            </svg>
            Print / Download
          </motion.button>
        </div>

        <BorderDraw className="mb-10" delay={0.3} />

        {/* Resume Content */}
        <div className="space-y-10">
          {/* Title & Contact */}
          <RevealOnScroll delay={0.1}>
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Mithun Muraleedharan
              </h2>
              <p className="text-base text-foreground-muted">
                Senior Software Engineer · Privacy & Platform Engineering
              </p>
              <p className="text-sm text-foreground-subtle">
                Chennai, India · mithunmuralee94@gmail.com · linkedin.com/in/mithunmuraleedharan
              </p>
            </header>
          </RevealOnScroll>

          {/* Summary */}
          <RevealOnScroll delay={0.15}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                Summary
              </h3>
              <p className="text-base text-foreground-muted leading-relaxed">
                Architect of PayPal&apos;s unified privacy platform serving 300+ stakeholders.
                Pioneered microfrontend adoption using Webpack Module Federation, unifying 16
                applications with 6 teams deploying independently. 7+ years building
                privacy-critical systems, from fraud detection at BNY Mellon to data governance
                platforms at PayPal.
              </p>
            </section>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll delay={0.2}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-5">
                Experience
              </h3>

              <div className="space-y-8">
                <ExperienceBlock
                  company="PayPal"
                  duration="7+ years"
                  roles={[
                    {
                      title: "Senior Software Engineer",
                      period: "February 2025 - Present",
                      points: [
                        "Leading development of Data Erasure & Retention platform to ensure regulatory compliance and eliminate residual data risks across PayPal systems",
                        "Owning end-to-end delivery from Java API development to UI design and implementation",
                      ],
                    },
                    {
                      title: "Software Engineer 3",
                      period: "March 2024 - February 2025",
                      points: [
                        "Unified 16 separate applications into Privacy Pro platform using Webpack Module Federation, enabling 6 teams to deploy independently with zero cross-team friction",
                        "Reduced bundle size from 11MB to 3.3MB (70%) and page load time from 25s to 5s through code splitting, lazy loading, and compression strategies",
                        "Delivered internal tech talk on Module Federation architecture to 500+ engineers",
                        "Integrated OpenTelemetry tracing and Datadog RUM for end-to-end observability across federated modules",
                      ],
                    },
                    {
                      title: "Software Engineer 2",
                      period: "January 2022 - March 2024",
                      points: [
                        "Pioneered microfrontend architecture at PayPal Privacy org—first implementation of Module Federation enabling unified authentication across independently deployed modules",
                        "Designed dynamic role-based access management system serving 300+ stakeholders including Privacy Officers, Regulators, and Audit teams",
                        "Authored technical blog post on Module Federation implementation patterns",
                      ],
                    },
                    {
                      title: "Software Engineer 1",
                      period: "January 2019 - December 2021",
                      points: [
                        "Led team of 5 engineers to deliver Data Lifecycle Platform in 3 months—5 core modules now used by 20+ privacy operations staff daily",
                        "Built 5+ self-service dashboards for anomaly detection, actively used by 20 privacy analysts to discover and track compliance issues",
                        "Mentored 4 Data Engineers in React development, enabling them to independently deliver 2 production applications",
                        "Developed interactive organizational hierarchy visualization using D3.js for clear data ownership mapping across business units",
                      ],
                    },
                  ]}
                />

                <ExperienceBlock
                  company="BNY Mellon"
                  duration="1 year 8 months"
                  roles={[
                    {
                      title: "Application Developer",
                      period: "June 2017 - January 2019",
                      points: [
                        "Served as UI Lead for Authentify—fraud detection system identifying suspicious business transactions based on user behavior patterns",
                        "Designed UX prototypes and secured business stakeholder approval before implementation, establishing prototype-first development process",
                        "Dockerized workflow engine and deployed to BNY Mellon's Extreme Cloud platform for scalable fraud analysis",
                      ],
                    },
                  ]}
                />
              </div>
            </section>
          </RevealOnScroll>

          {/* Recognition */}
          <RevealOnScroll delay={0.22}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                Recognition
              </h3>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Spot Award</strong> — Recognized for exceptional delivery on Compleye platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Community Champion</strong> — Led Tech for Good initiative at PayPal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-foreground">Tech Talk Speaker</strong> — Module Federation architecture, 500+ attendees</span>
                </li>
              </ul>
            </section>
          </RevealOnScroll>

          {/* Technical Skills */}
          <RevealOnScroll delay={0.25}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                Technical Skills
              </h3>
              <div className="space-y-2 text-sm text-foreground-muted">
                <p><span className="text-foreground font-medium">Frontend:</span> React, TypeScript, Webpack Module Federation, D3.js, Framer Motion</p>
                <p><span className="text-foreground font-medium">Backend:</span> Node.js, Java, Spring</p>
                <p><span className="text-foreground font-medium">Observability:</span> OpenTelemetry, Datadog RUM</p>
                <p><span className="text-foreground font-medium">Infrastructure:</span> Docker, Microfrontend Architecture</p>
              </div>
            </section>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={0.28}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-3">
                Education
              </h3>
              <div>
                <p className="text-base font-medium text-foreground">
                  M. Kumarasamy College of Engineering
                </p>
                <p className="text-sm text-foreground-muted">
                  Bachelor&apos;s degree, Computer Science · 2013 - 2017
                </p>
              </div>
            </section>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}

interface Role {
  title: string;
  period: string;
  points: string[];
}

function ExperienceBlock({
  company,
  duration,
  roles,
}: {
  company: string;
  duration: string;
  roles: Role[];
}) {
  return (
    <div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-foreground">{company}</h4>
        <p className="text-sm text-foreground-subtle">{duration}</p>
      </div>
      <div className="space-y-5">
        {roles.map((role, index) => (
          <div key={index}>
            <div className="mb-2">
              <p className="text-base font-medium text-foreground">
                {role.title}
              </p>
              <p className="text-sm text-foreground-subtle">{role.period}</p>
            </div>
            {role.points.length > 0 && (
              <ul className="space-y-2">
                {role.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-foreground-muted leading-relaxed pl-4 border-l-2 border-accent/30"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
