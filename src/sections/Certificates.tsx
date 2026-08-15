import { certificates } from "../data/certificate";
import CertificateCard from "../components/CertificateCard.tsx";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-off-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-20">
          <SectionHeading
            label="02 — Learning"
            title={
              <>
                Skills I
                <br />
                keep building.
              </>
            }
            description="Milestones that sharpened my foundation in software, tools, and problem-solving."
          />

          <div className="flex flex-col border-t border-grey-200">
            {certificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
