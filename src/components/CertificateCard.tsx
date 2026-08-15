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
      className={`group -mx-4 flex cursor-pointer items-start justify-between gap-6 border-b border-grey-200 px-4 py-6 transition-colors ${
        hovered ? "bg-grey-100" : "bg-transparent"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-base leading-snug font-medium text-near-black">
          {certificate.name}
        </h3>
        <p className="text-sm text-grey-500">{certificate.organization}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2 pt-0.5">
        <span className="font-mono text-xs text-grey-400">
          {certificate.year}
        </span>
        <span
          className={`font-mono text-xs tracking-wider transition-colors ${
            hovered ? "text-brown" : "text-grey-300"
          }`}
        >
          Verify →
        </span>
      </div>
    </a>
  );
}
