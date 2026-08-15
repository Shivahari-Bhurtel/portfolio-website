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
        <span className="w-10 shrink-0 pt-1 font-mono text-xs text-grey-400 md:pt-0">
          {project.id}
        </span>
        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium text-near-black md:text-xl">
              {project.name}
            </h3>
            <span className="font-mono text-xs tracking-[0.1em] text-brown">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden flex-wrap gap-2 md:flex">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="border border-grey-300 px-2 py-1 font-mono text-xs text-grey-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span
              className={`inline-block shrink-0 font-mono text-sm text-grey-300 transition-transform duration-200 ${
                isExpanded ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      {/* Expanded detail */}
      {isExpanded && (
        <div className="animate-[fadeIn_0.25s_ease] grid gap-8 pb-10 pl-[3.5rem] md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-grey-600">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-grey-300 px-2 py-1 font-mono text-xs text-grey-500"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-6 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 font-mono text-xs tracking-wider text-near-black uppercase"
              >
                <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 font-mono text-xs tracking-wider text-brown uppercase"
                >
                  <span className="inline-block h-px w-4 bg-current transition-all duration-300 group-hover:w-6" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="aspect-16/10 overflow-hidden border border-grey-200">
            <img
              src={`/images/projects/${project.image}`}
              alt={project.imageAlt}
              className="block h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
}
