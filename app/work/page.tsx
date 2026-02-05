import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { ProjectCard } from "@/components/content/ProjectCard";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Platform and system work from privacy engineering at scale. Details abstracted to respect confidentiality.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Works</PageTitle>

        <RevealOnScroll delay={0.2}>
          <LeadParagraph className="mt-4 max-w-lg">
            Platform and system work from privacy engineering at scale. Details
            abstracted to respect confidentiality.
          </LeadParagraph>
        </RevealOnScroll>

        <div className="mt-10 divide-y divide-border">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.shortDescription}
              href={`/work/${project.slug}`}
              icon={project.icon}
              tech={project.tech}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
