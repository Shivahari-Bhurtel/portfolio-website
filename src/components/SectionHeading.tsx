import type { ReactNode } from "react";

interface SectionHeadingProps {
  /** Small mono label, e.g. "02 — Certificates" */
  label: string;
  /** Straight heading text without slanted accents. */
  title: ReactNode;
  /** Optional one-line description under the heading */
  description?: string;
}

/**
 * The recurring "01 — Label" + serif heading pattern used at the top of
 * every section (Certificates, Projects, Skills, About).
 */
export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-brown">
        {label}
      </span>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[1.1] text-near-black">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-grey-500">
          {description}
        </p>
      )}
    </div>
  );
}
