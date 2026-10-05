import { certificates } from "../data/certificate";
import CertificateCard from "../components/CertificateCard.tsx";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-off-white min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-4" data-reveal>
            <h2 className="font-display text-[clamp(2.1rem,8vw,3rem)] leading-[1.1] font-black text-near-black">
              Certificates.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-grey-500">
              Selected credentials in AI, programming, and developer tools.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
