import { skills } from "../data/skills.ts";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-off-white min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
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
                className="skill-card rounded-[1.5rem] border border-grey-200 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                style={{ animationDelay: `${categoryIndex * 90}ms` }}
              >
                <h3 className="mb-4 font-mono text-[10px] tracking-[0.16em] text-grey-600 uppercase">
                  {category}
                </h3>

                {items.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill rounded-full border border-grey-200 bg-grey-100 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.12em] text-grey-600 uppercase transition-all duration-200"
                      >
                        {skill}
                      </span>
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
