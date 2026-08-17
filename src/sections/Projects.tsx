import { useState } from "react";
import { projects } from "../data/projects.ts";
import ProjectItem from "../components/ProjectItem.tsx";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <section id="projects" className="bg-warm-white min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="mb-12 sm:mb-16">
          <SectionHeading
            label="03 — Projects"
            title={
              <>
                Built to
                <br />
                solve real problems.
              </>
            }
          />
        </div>

        <div className="flex flex-col border-t border-grey-200">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isExpanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
