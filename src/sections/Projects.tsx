import { useState } from "react";
import { projects } from "../data/projects.ts";
import ProjectItem from "../components/ProjectItem.tsx";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="bg-warm-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16">
          <SectionHeading
            label="03 — Projects"
            title={
              <>
                Selected
                <br />
                <em>work.</em>
              </>
            }
          />
        </div>

        <div className="flex flex-col border-t border-grey-200">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
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
