import { certificates } from "../data/certificate";
import CertificateCard from "../components/CertificateCard.tsx";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-off-white min-h-screen">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading
            label="02 — Learning"
            title={
              <>
                Skills I
                <br />
                keep building.
              </>
            }
            description="A few milestones from my ongoing learning in AI, programming, and developer tools."
          />

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
