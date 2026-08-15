import type { Project } from "../types/project";

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

/** One row in the projects accordion. Click to expand for details, tags, links, and image. */
export default function ProjectItem({
  project,
  isExpanded,
  onToggle,
}: ProjectItemProps) {
  return (
    <div className="border-b border-grey-200">
      {/* Row header — always visible */}
      <button
        type="button"
        className="flex w-full cursor-pointer items-start gap-6 py-8 text-left md:items-center"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span className="w-10 shrink-0 pt-1 font-mono text-[10px] tracking-[0.14em] text-grey-400 md:pt-0">
          {project.id}
        </span>
        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-near-black md:text-[1.6rem]">
              {project.name}
            </h3>
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-grey-600">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden flex-wrap gap-2 md:flex">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-grey-300 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-grey-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-grey-300 text-lg text-grey-500 transition-all duration-200 ${
                isExpanded ? "rotate-45 border-near-black text-near-black" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      {/* Expanded detail */}
      {isExpanded && (
        <div className="animate-[fadeIn_0.25s_ease] grid gap-8 pb-10 pl-[3.5rem] md:grid-cols-[1.1fr_1fr] md:gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-grey-600 md:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-grey-300 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-grey-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-near-black bg-near-black px-4 py-2 font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-near-black"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-grey-300 bg-white px-4 py-2 font-mono text-[10px] font-medium tracking-[0.14em] uppercase text-near-black transition-all duration-200 hover:-translate-y-0.5 hover:border-near-black"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-grey-200 bg-grey-100">
            <img
              src={`/images/projects/${project.image}`}
              alt={project.imageAlt}
              className="block h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
