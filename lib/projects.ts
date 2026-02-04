export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  context: string;
  constraints: string[];
  decisions: string[];
  outcomes: string[];
  quote?: string;
}

export const projects: Project[] = [
  {
    slug: "privacy-pro-platform",
    title: "Privacy Pro Platform",
    shortDescription:
      "Micro-frontend architecture serving 300+ stakeholders across privacy operations",
    context: `Privacy operations in a global fintech organization involves multiple specialized applications: data scanning, cookie management, consent workflows, regulatory reporting. Each had evolved independently, creating fragmented experiences for the 300+ stakeholders who needed to work across them.`,
    constraints: [
      "Scale: Multiple applications, independent teams, existing user bases that couldn't tolerate disruption",
      "Regulation: Privacy-critical systems with strict compliance requirements",
      "Organization: Teams needed deployment autonomy without sacrificing user experience coherence",
    ],
    decisions: [
      "Evaluated multiple micro-frontend architectures and drove adoption of Webpack Module Federation as the standard unification strategy across Privacy applications.",
      "Implemented dynamic build and release pipelines, enabling team autonomy with zero impact on existing applications.",
      "Designed and delivered a dynamic role-based user management system, reducing manual backend dependency for access provisioning.",
      "Standardized Module Federation configurations across applications using lazy loading, shared dependencies, and performance best practices.",
    ],
    outcomes: [
      "Platform is actively used by 300+ stakeholders including Privacy Officers, Regulators, Cookie Owners, and Privacy Audit teams.",
      "Teams deploy independently while users experience a unified interface.",
      "OpenTelemetry tracing and Datadog RUM provide deep visibility into application metrics and user journeys.",
    ],
    quote:
      "The best platform disappears—users accomplish their goals without thinking about the system boundaries.",
  },
  {
    slug: "data-lifecycle-platform",
    title: "Data Lifecycle Platform",
    shortDescription:
      "Governance dashboards for cross-system data mapping and compliance visibility",
    context: `Understanding where personal data lives across multiple systems is a foundational requirement for privacy compliance. Without clear visibility, governance becomes guesswork and audit preparation becomes fire drills.`,
    constraints: [
      "Timeline: Aggressive delivery schedule spanning multiple dependent systems",
      "Team: Led a 5-member team with varied experience levels",
      "Scope: Dashboards needed to present complex data relationships to non-technical stakeholders clearly",
    ],
    decisions: [
      "Led the UI team to deliver comprehensive governance dashboards covering scan progress, PII vs Sensitive PII distribution, and cross-system data mapping.",
      "Built a centralized Scan Administration module to configure, manage, and monitor scans, significantly improving privacy operations efficiency.",
      "Aggressive frontend optimization strategy—introduced lazy loading, code splitting, and Webpack compression.",
    ],
    outcomes: [
      "Reduced bundle size by 70% and page load time by 20 seconds.",
      "Platform provides real-time visibility into data governance across systems.",
      "Audit readiness shifted from reactive to continuous.",
    ],
  },
  {
    slug: "privacy-dashboards",
    title: "Privacy Analytics Dashboards",
    shortDescription:
      "Self-intuitive dashboards for privacy anomaly discovery and tracking",
    context: `Privacy teams needed clear visibility into anomalies, request patterns, and compliance status. Existing tools required technical expertise to interpret, creating bottlenecks.`,
    constraints: [
      "Users: Non-technical privacy officers needed to self-serve insights",
      "Data: Complex relationships between DSR, DAR, and general privacy requests",
      "Integration: Multiple data sources with different schemas and update frequencies",
    ],
    decisions: [
      "Developed numerous dashboards and charts that are self-intuitive for Privacy Users to view and discover anomalies.",
      "Implemented ticketing system to consolidate Privacy Requests from Privacy Users & Customers, tracking DSR and DAR requests from a single point.",
      "Focused on visualization clarity over feature complexity.",
    ],
    outcomes: [
      "Privacy teams can independently discover and track anomalies without engineering support.",
      "Consolidated view reduced context-switching between multiple tools.",
      "Request tracking improved response times for compliance workflows.",
    ],
  },
  {
    slug: "organizational-visualization",
    title: "Organizational Visualization",
    shortDescription:
      "Interactive hierarchy visualization using D3.js for ownership clarity",
    context: `Large organizations struggle with clarity around data ownership. Who owns which system? Which business unit is responsible for which data? Without visualization, these questions require institutional knowledge that doesn't scale.`,
    constraints: [
      "Complexity: Organizational hierarchies are deeply nested and constantly changing",
      "Usability: Non-technical stakeholders needed to navigate complex relationships",
      "Performance: Large hierarchies can't be rendered naively",
    ],
    decisions: [
      "Developed an interactive organizational hierarchy visualization using D3.js Radial Tidy Tree, providing clear ownership and business-unit mapping across teams.",
      "Optimized for performance with virtualized rendering for large datasets.",
    ],
    outcomes: [
      "Clear ownership mapping reduced confusion and improved accountability.",
      "Rapid delivery—completed end-to-end in 5 days.",
      "Unlocked multiple new operational and reporting capabilities for privacy teams.",
    ],
  },
  {
    slug: "consumer-privacy-center",
    title: "Consumer Privacy Center",
    shortDescription:
      "Feedback integration reaching 100K+ global users",
    context: `Consumer-facing privacy settings need continuous improvement based on real user feedback. Without systematic feedback collection, product decisions rely on assumptions.`,
    constraints: [
      "Scale: 100K+ global user interactions",
      "Signal: High-volume feedback requires filtering for actionable insights",
      "Integration: Feedback must connect to product improvement workflows",
    ],
    decisions: [
      "Integrated Sprig feedback collection into Privacy Settings, enabling user sentiment analysis.",
      "Platform designed to surface patterns from high-volume feedback, converting insights into actionable product improvements.",
    ],
    outcomes: [
      "Platform has recorded 100K+ global user interactions.",
      "Provides high-signal data to inform privacy experience and compliance-driven enhancements at scale.",
    ],
  },
  {
    slug: "authentify-fraud-detection",
    title: "Authentify Fraud Detection",
    shortDescription:
      "UI lead for fraud detection system at BNY Mellon",
    context: `Financial transactions require robust fraud detection. The challenge was building a system that could identify fraudulent business transactions based on user behavior patterns, while remaining usable for investigation teams.`,
    constraints: [
      "Accuracy: False positives create operational burden; false negatives create risk",
      "Complexity: Multiple data signals needed to be presented coherently",
      "Urgency: Investigation teams needed quick access to relevant information",
    ],
    decisions: [
      "Designed User Experience with prototyping tools, securing business approval before implementation.",
      "Built UI optimized for investigation workflows, not just data display.",
      "Dockerized independent workflow engine to BNY Mellon's Extreme Cloud platform for scalability.",
    ],
    outcomes: [
      "System enabled identification of fraudulent transactions based on user behavior.",
      "UX design process established prototype-first approach that influenced subsequent projects.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
