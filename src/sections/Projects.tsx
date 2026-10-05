import { useState } from "react";
import { projects } from "../data/projects.ts";
import ProjectItem from "../components/ProjectItem.tsx";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <section id="projects" className="bg-off-white">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-reveal>
            <span className="font-mono text-[10px] tracking-[0.18em] text-forest uppercase sm:text-xs">
              03 — Selected work
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-near-black">
              Built with purpose.
              <br />
              <span className="text-forest">Made to matter.</span>
            </h2>
          </div>
          <div className="max-w-sm md:pb-1" data-reveal>
            <p className="text-sm leading-relaxed text-grey-600 sm:text-base">
              A selection of applied machine-learning projects, from medical
              imaging to tools that support everyday decisions.
            </p>
            <p className="mt-4 font-mono text-[10px] tracking-[0.14em] text-grey-500 uppercase">
              {String(projects.length).padStart(2, "0")} projects <span aria-hidden="true">·</span> AI &amp; software
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
