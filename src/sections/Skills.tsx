import { skills } from "../data/skills.ts";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-off-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading
            label="04 — Skills"
            title={
              <>
                Tools &amp;
                <br />
                <em>craft.</em>
              </>
            }
            description="Technologies I can genuinely use and explain."
          />

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="flex flex-col gap-4">
                <h3 className="font-mono text-xs tracking-[0.15em] text-brown uppercase">
                  {category}
                </h3>
                {items.length > 0 ? (
                  <ul className="flex flex-col gap-2">
                    {items.map((skill) => (
                      <li key={skill} className="text-sm text-grey-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
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
