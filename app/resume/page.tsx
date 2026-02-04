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
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        {/* Header with Print Button */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
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

        <BorderDraw className="mb-12" delay={0.3} />

        {/* Resume Content */}
        <div className="space-y-12">
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
                Chennai, Tamil Nadu, India · mithunmuralee94@gmail.com
              </p>
            </header>
          </RevealOnScroll>

          {/* Summary */}
          <RevealOnScroll delay={0.15}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
                Summary
              </h3>
              <p className="text-base text-foreground-muted leading-relaxed">
                Senior Software Engineer with 7+ years of experience building privacy
                and compliance platforms at scale. Specialized in microfrontend
                architecture, React ecosystem, and scalable web applications.
                Track record of leading teams, introducing architectural improvements,
                and delivering complex systems serving hundreds of stakeholders.
              </p>
            </section>
          </RevealOnScroll>

          {/* Experience */}
          <RevealOnScroll delay={0.2}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-6">
                Experience
              </h3>

              <div className="space-y-10">
                <ExperienceBlock
                  company="PayPal"
                  duration="7 years 2 months"
                  roles={[
                    {
                      title: "Senior Software Engineer",
                      period: "February 2025 - Present",
                      points: [],
                    },
                    {
                      title: "Software Engineer 3",
                      period: "March 2024 - June 2025",
                      points: [
                        "Led micro-frontend unification using Webpack Module Federation, enabling independent team deployments while maintaining unified UX for 300+ stakeholders",
                        "Implemented OpenTelemetry tracing and Datadog RUM for end-to-end observability",
                        "Reduced bundle size by 70% and page load time by 20 seconds through code splitting and Webpack compression strategies",
                      ],
                    },
                    {
                      title: "Software Engineer 2",
                      period: "January 2022 - March 2024",
                      points: [
                        "Introduced Microfrontend approach to modularize UI components from different tracks into a single stop application with common authentication",
                        "Prepared detailed engineering plans and formulated engineering pathways for complex requirements",
                        "Designed and developed cost-effective, effort-reducing solutions for the privacy platform",
                      ],
                    },
                    {
                      title: "Software Engineer 1",
                      period: "January 2019 - December 2021",
                      points: [
                        "Implemented ticketing system to consolidate Privacy Requests, DSR, and DAR requests from single point",
                        "Groomed a Data Engineering team to adapt React and develop applications end to end",
                        "Developed numerous self-intuitive dashboards and charts for Privacy anomaly discovery",
                        "Led team of 5 to develop application handling PayPal data discovery and scan management",
                      ],
                    },
                  ]}
                />

                <ExperienceBlock
                  company="BNY Mellon Wealth Management"
                  duration="1 year 8 months"
                  roles={[
                    {
                      title: "Application Developer",
                      period: "June 2017 - January 2019",
                      points: [
                        "Designed User Experience with prototyping tools and secured business approval",
                        "Worked as UI/API developer on Escrow agreements management project",
                        "Served as UI Lead for Authentify—fraud detection system based on user transactions",
                        "Dockerized independent workflow engine to BNY Mellon's Extreme Cloud platform",
                      ],
                    },
                  ]}
                />
              </div>
            </section>
          </RevealOnScroll>

          {/* Technical Context */}
          <RevealOnScroll delay={0.25}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
                Technical Skills
              </h3>
              <p className="text-base text-foreground-muted font-mono">
                React.js · Node.js · TypeScript · Microfrontends · Webpack Module
                Federation · D3.js · OpenTelemetry · Datadog RUM · Framer Motion ·
                Docker · AngularJS · Spring
              </p>
            </section>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={0.28}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
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

          {/* Certifications */}
          <RevealOnScroll delay={0.3}>
            <section>
              <h3 className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4">
                Certifications
              </h3>
              <ul className="space-y-1 text-sm text-foreground-muted">
                <li>Microfrontends with ReactJS</li>
                <li>Node.js (Basic) Certificate</li>
                <li>C/C++ Intermediate Certificate</li>
                <li>AMCAT Certified Software Development Trainee</li>
              </ul>
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
      <div className="space-y-6">
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
                    className="text-sm text-foreground-muted leading-relaxed pl-4 border-l border-border"
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
