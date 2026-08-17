import type { Project } from "../types/project";

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  index?: number;
}

/** One row in the projects accordion. Click to expand for details, tags, links, and image. */
export default function ProjectItem({
  project,
  isExpanded,
  onToggle,
  index = 0,
}: ProjectItemProps) {
  return (
    <div
      className="project-item border-b border-grey-200"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        className="project-header group flex w-full cursor-pointer items-start gap-3 py-6 text-left transition-all duration-250 hover:bg-grey-100/80 sm:gap-6 sm:py-7 md:items-center md:py-8"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <span className="w-8 shrink-0 pt-1 font-mono text-[9px] tracking-[0.14em] text-grey-400 sm:w-10 sm:text-[10px] md:pt-0">
          {project.id}
        </span>
        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold tracking-[-0.03em] text-near-black transition-colors duration-200 group-hover:text-grey-700 sm:text-lg md:text-[1.6rem]">
              {project.name}
            </h3>
            <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-grey-600 sm:text-[10px]">
              {project.category}
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden flex-wrap gap-2 md:flex">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-grey-300 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-grey-500 transition-all duration-200 group-hover:border-grey-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span
              className={`project-plus inline-flex h-7 w-7 items-center justify-center rounded-full border border-grey-300 text-lg text-grey-500 transition-all duration-250 sm:h-8 sm:w-8 ${
                isExpanded ? "rotate-45 border-near-black text-near-black" : "rotate-0 group-hover:border-near-black group-hover:text-near-black"
              }`}
            >
              +
            </span>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="project-panel grid gap-6 pb-8 pl-0 md:grid-cols-[1.1fr_1fr] md:gap-12 md:pb-10 md:pl-[3.5rem]">
          <div className="project-copy flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-grey-600 md:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="project-tag rounded-full border border-grey-300 bg-white px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-grey-500 shadow-[0_8px_18px_rgba(0,0,0,0.02)]"
                  style={{ animationDelay: `${techIndex * 35}ms` }}
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

          <div className="project-media overflow-hidden rounded-[1.25rem] border border-grey-200 bg-grey-100 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
            <div className="project-media-frame relative overflow-hidden">
              <img
                src={`/images/projects/${project.image}`}
                alt={project.imageAlt}
                className="block h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5 opacity-90" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-white/10 px-2.5 py-1 font-mono text-[9px] tracking-[0.12em] text-white uppercase backdrop-blur-[2px]">
                Case study
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
