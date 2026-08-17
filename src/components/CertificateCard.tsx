import { useState } from "react";
import type { Certificate } from "../types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
}

/** One row in the certificates list. Links out to the verification URL. */
export default function CertificateCard({ certificate }: CertificateCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={certificate.link}
      target="_blank"
      rel="noreferrer"
      className={`certificate-row group grid w-full cursor-pointer gap-2 rounded-[1.25rem] border-b border-grey-200 px-3 py-4 transition-all duration-250 ease-out sm:gap-3 sm:px-4 sm:py-5 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center md:gap-8 ${
        hovered
          ? "-translate-y-[2px] border-grey-300 bg-grey-100 shadow-[0_10px_24px_rgba(0,0,0,0.03)]"
          : "bg-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="min-w-0">
        <h3 className="truncate text-sm font-medium leading-snug text-near-black transition-colors duration-200 group-hover:text-grey-700 sm:text-base md:text-lg">
          {certificate.name}
        </h3>
        <p className="mt-1 text-xs text-grey-500 transition-colors duration-200 group-hover:text-grey-600 sm:text-sm">
          {certificate.organization}
        </p>
      </div>

      <span className="font-mono text-[9px] tracking-[0.14em] text-grey-400 uppercase transition-colors duration-200 group-hover:text-grey-500 sm:text-[10px] md:justify-self-end">
        {certificate.year}
      </span>

      <span
        className={`inline-flex items-center justify-center font-mono text-[9px] tracking-[0.14em] uppercase transition-all duration-200 sm:text-[10px] md:justify-self-end ${
          hovered ? "translate-x-1 text-grey-700" : "translate-x-0 text-grey-400"
        }`}
      >
        View <span aria-hidden="true" className="ml-1">→</span>
      </span>
    </a>
  );
}
