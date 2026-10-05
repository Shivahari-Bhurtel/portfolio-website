import type { Certificate } from "../types/certificate";

interface CertificateCardProps {
  certificate: Certificate;
}

/** Certificate preview card with a link to verify the credential. */
export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article data-reveal className="certificate-card group overflow-hidden rounded-2xl border border-grey-200 bg-white shadow-[0_12px_32px_rgba(11,21,16,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-grey-300 hover:shadow-[0_20px_44px_rgba(11,21,16,0.11)]">
      <div className="certificate-preview relative aspect-[1.35/1] overflow-hidden bg-grey-100 p-2 sm:p-3">
        {certificate.image ? (
          <iframe
            src={`${certificate.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title={`${certificate.name} certificate preview`}
            loading="lazy"
            className="h-full w-full rounded-lg border-0 bg-white"
          />
        ) : (
          <div className="flex h-full items-center justify-center rounded-lg bg-white px-5 text-center">
            <span className="font-mono text-xs tracking-[0.12em] text-grey-500 uppercase">Certificate preview unavailable</span>
          </div>
        )}
        <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-grey-200 bg-white/90 px-3 py-1 font-mono text-[9px] tracking-[0.12em] text-forest uppercase shadow-sm">
          {certificate.year} · Certificate
        </span>
      </div>

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div>
          <h3 className="text-base font-semibold leading-snug text-near-black sm:text-lg">{certificate.name}</h3>
          <p className="mt-1.5 text-sm text-grey-500">{certificate.organization}</p>
        </div>
        <a
          href={certificate.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-forest/20 px-4 py-2.5 font-mono text-[10px] font-medium tracking-[0.12em] text-forest uppercase transition-colors hover:border-forest hover:bg-forest hover:text-white"
        >
          Verify credential <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
