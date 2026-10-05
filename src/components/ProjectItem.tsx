import type { Project } from "../types/project";

interface ProjectItemProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

/** A project card with expandable implementation details and links. */
export default function ProjectItem({
  project,
  isExpanded,
  onToggle,
}: ProjectItemProps) {
  const detailsId = `project-details-${project.id}`;

  return (
    <article data-reveal className="project-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-grey-200 bg-white">
      <div className="project-media relative aspect-[16/10] overflow-hidden bg-grey-200">
        <img
          src={`/images/projects/${project.image}`}
          alt={project.imageAlt}
          loading="lazy"
          className="project-image h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-near-black/70 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-white uppercase backdrop-blur-sm">
          Project {project.id}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[9px] tracking-[0.15em] text-forest uppercase">
          {project.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.04em] text-near-black sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-grey-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-grey-100 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.08em] text-grey-600 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

      <div id={detailsId} hidden={!isExpanded} className="project-details mt-5 border-t border-grey-200 pt-5">
          <h4 className="font-mono text-[9px] tracking-[0.14em] text-grey-500 uppercase">
            Built with
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-grey-200 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.08em] text-grey-600 uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-near-black px-4 py-2 font-mono text-[9px] font-medium tracking-[0.12em] text-white uppercase transition-colors hover:bg-forest"
            >
              View source <span className="ml-2" aria-hidden="true">↗</span>
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-grey-300 px-4 py-2 font-mono text-[9px] font-medium tracking-[0.12em] text-near-black uppercase transition-colors hover:border-forest hover:text-forest"
              >
                Live demo <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            )}
          </div>
      </div>

        <button
          type="button"
          className="project-toggle mt-6 flex w-full items-center justify-between border-t border-grey-200 pt-4 text-left font-mono text-[9px] font-medium tracking-[0.12em] text-grey-600 uppercase transition-colors hover:text-forest"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
        >
          <span>{isExpanded ? "Hide details" : "Explore project"}</span>
          <span
            className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-grey-100 text-base transition-transform duration-200 ${
              isExpanded ? "rotate-45" : "rotate-0 group-hover:translate-x-0.5"
            }`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </div>
    </article>
  );
}
