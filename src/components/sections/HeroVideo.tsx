import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="bg-[#F9F7F2] flex flex-col overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* Gold top-line */}
      <div className="h-px bg-gradient-to-r from-[#D4AF37] via-[#E8CC6A] to-transparent flex-shrink-0" />

      {/* ── TEXT PANEL ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-12 pt-16 pb-14 text-center">

        {/* Halal badge */}
        <span
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold border border-[#D4AF37]/35 px-4 py-2 mb-12 sm:mb-16"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <ShieldCheck className="w-3 h-3" />
          Halal Certified · Shah Alam · Est. 2013
        </span>

        {/* Headline — Cormorant Garamond oversized */}
        <h1
          className="font-serif leading-[0.88] text-[#1B1F23] mb-10"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 9rem)" }}
        >
          Halal catering<br />
          for the moments<br />
          <em className="text-[#D4AF37]">that matter.</em>
        </h1>

        {/* Gold rule */}
        <div className="w-14 h-px bg-[#D4AF37] mb-10" />

        <p className="text-[#1B1F23]/50 text-lg sm:text-xl max-w-md leading-relaxed mb-12">
          11 years. 5,000+ events. Weddings,
          corporate galas, and every occasion in between.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/quote" className="btn-gold">
            Check Availability <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://wa.me/60123456789?text=Hi%20Venturas!%20I'd%20like%20to%20enquire%20about%20catering."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* ── PHOTO / VIDEO PANEL ── full-bleed at bottom, bleeds below fold ── */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "clamp(280px, 48vh, 620px)" }}>
        {/* Ivory-to-transparent fade at top so it blends into text panel */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F9F7F2] to-transparent z-10 pointer-events-none" />

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-plating.webm" type="video/webm" />
          <source src="/videos/hero-plating.mp4" type="video/mp4" />
        </video>

        {/* Fallback when no video */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-300 to-stone-400 flex items-end justify-start p-8">
          <p className="text-stone-500 text-xs" style={{ fontFamily: "var(--font-montserrat)" }}>
            Add hero-plating.mp4 to /public/videos/
          </p>
        </div>

        {/* Bottom stats bar — floats over the photo */}
        <div className="absolute bottom-0 inset-x-0 bg-[#1B1F23]/75 backdrop-blur-sm z-10">
          <div className="max-w-5xl mx-auto px-6 sm:px-12 py-4 grid grid-cols-3 divide-x divide-[#F9F7F2]/10">
            {[
              { value: "5,000+", label: "Events" },
              { value: "11 Yrs", label: "Experience" },
              { value: "4.9★",   label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="px-4 sm:px-8 first:pl-0 last:pr-0">
                <p className="font-serif font-bold text-lg sm:text-xl text-[#F9F7F2] not-italic leading-none">{s.value}</p>
                <p
                  className="text-[10px] text-[#F9F7F2]/40 uppercase tracking-widest mt-1"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
