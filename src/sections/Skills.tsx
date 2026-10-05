import { skills } from "../data/skills.ts";
import SectionHeading from "../components/SectionHeading";
import SkillLogo from "../components/SkillLogo.tsx";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading
            label="04 — Skills"
            title={
              <>
                The tools
                <br />
                I work with.
              </>
            }
            description="A practical stack built around AI, product thinking, and hands-on experimentation."
          />

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <div
                key={category}
                data-reveal
                className="skill-card rounded-[1.5rem] border border-grey-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                style={{ animationDelay: `${categoryIndex * 90}ms` }}
              >
                <h3 className="mb-4 font-mono text-[10px] tracking-[0.16em] text-grey-600 uppercase">
                  {category}
                </h3>

                {items.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {items.map((skill) => (
                      <div
                        key={skill}
                        className="skill-item flex min-h-[4.25rem] min-w-0 items-center gap-2 rounded-xl border border-grey-200/80 bg-[#f8faf7] p-2"
                      >
                        <SkillLogo name={skill} />
                        <span className="line-clamp-2 text-[10px] font-medium leading-snug text-grey-700 sm:text-[11px]">
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
