import { skills } from "../data/skills.ts";
import SkillLogo from "../components/SkillLogo.tsx";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-4" data-reveal>
            <span className="font-mono text-xs font-semibold tracking-[0.18em] text-grey-600 uppercase sm:text-sm">
              04 — Skills
            </span>
            <h2 className="font-display text-[clamp(2.5rem,8vw,3.75rem)] leading-[1.05] font-black text-near-black">
              Skills I keep building.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-grey-500">
              A practical stack built around AI, product thinking, and hands-on experimentation.
            </p>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div
                key={category}
                data-reveal
                className={`skill-card skill-card--${categoryIndex} rounded-[1.5rem] border p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)]`}
                style={{ animationDelay: `${categoryIndex * 90}ms` }}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="font-mono text-sm font-bold tracking-[0.1em] text-grey-700 uppercase sm:text-base">
                    {category}
                  </h3>
                  <span className="skill-category-index" aria-hidden="true">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                {items.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className="skill-item flex min-h-[4.5rem] min-w-0 items-center gap-2 rounded-xl border p-2.5"
                      >
                        <SkillLogo name={skill} />
                        <span className="line-clamp-2 text-xs font-bold leading-snug text-grey-700 sm:text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-grey-400 italic">
                    Add skills in src/data/skills.ts
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
