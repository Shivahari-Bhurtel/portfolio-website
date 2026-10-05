import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "bhurtelshivahari@gmail.com";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const senderEmail = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio message from ${senderEmail}`);
    const body = encodeURIComponent(`From: ${senderEmail}\n\n${message}`);

    setNotice("Your email app is opening with your message ready to send.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-forest text-white">
      <div className="section-panel mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6 md:px-10 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div className="flex flex-col gap-5" data-reveal>
            <span className="font-body text-sm font-semibold tracking-[0.12em] text-mint uppercase sm:text-base">
              Contact
            </span>
            <h2 className="font-display text-[clamp(2.4rem,8vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.05em] text-white">
              Have an idea?
              <br />
              Let’s make it real.
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              Tell me a little about what you’re working on. Add your email and
              message, and your email app will open with everything ready to send.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-fit font-mono text-xs tracking-[0.08em] text-mint underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            data-reveal
            className="flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-near-black/35 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="font-body text-sm font-semibold tracking-[0.01em] text-white/85">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 font-body text-base text-white placeholder:text-white/40 transition-colors focus:border-mint focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-body text-sm font-semibold tracking-[0.01em] text-white/85">
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What would you like to build together?"
                required
                className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 font-body text-base leading-relaxed text-white placeholder:text-white/40 transition-colors focus:border-mint focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 font-body text-sm font-bold tracking-[0.01em] text-near-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Prepare email <span aria-hidden="true">↗</span>
              </button>
              <span className="text-xs leading-relaxed text-white/45">
                No data is stored on this website.
              </span>
            </div>
            <p aria-live="polite" className="min-h-5 text-sm text-mint">
              {notice}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}