import { Metadata } from "next";
import { PageTitle } from "@/components/typography/PageTitle";
import { LeadParagraph } from "@/components/typography/LeadParagraph";
import { ProjectCard } from "@/components/content/ProjectCard";
import { BorderDraw } from "@/components/animated/BorderDraw";
import { RevealOnScroll } from "@/components/animated/RevealOnScroll";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Platform and system work from privacy engineering at scale. Details abstracted to respect confidentiality.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <PageTitle>Selected Work</PageTitle>

        <RevealOnScroll delay={0.3}>
          <LeadParagraph className="mt-8 max-w-lg">
            Platform and system work from privacy engineering at scale. Details
            abstracted to respect confidentiality.
          </LeadParagraph>
        </RevealOnScroll>

        <BorderDraw className="my-16" delay={0.5} />

        <div className="divide-y divide-border">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.shortDescription}
              href={`/work/${project.slug}`}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
