"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  return (
    <section
      className="section-dark relative bg-[#1B1F23] overflow-hidden flex flex-col"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Full-bleed background video / photo ── */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-plating.webm" type="video/webm" />
          <source src="/videos/hero-plating.mp4"  type="video/mp4" />
        </video>

        {/* Dark overlay — keeps text legible over any photo/video */}
        <div className="absolute inset-0 bg-[#1B1F23]/72" />

        {/* Bottom vignette so stats bar reads cleanly */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1B1F23] to-transparent" />
      </div>

      {/* Gold top-line */}
      <div className="relative h-px bg-gradient-to-r from-[#D4AF37] via-[#E8CC6A] to-transparent flex-shrink-0" />

      {/* ── Centered content ── */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-24">

        {/* Halal badge */}
        <span
          className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] border border-[#D4AF37]/35 px-4 py-2 mb-12 font-semibold"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          <ShieldCheck className="w-3 h-3" />
          Halal Certified · Shah Alam
        </span>

        {/* Headline */}
        <h1
          className="font-serif text-[#F9F7F2] leading-[0.9] mb-8 max-w-4xl"
          style={{ fontSize: "clamp(3rem, 8vw, 8.5rem)" }}
        >
          Premium Halal<br />
          catering for events<br />
          <em className="text-[#D4AF37]">worth remembering.</em>
        </h1>

        {/* Gold rule */}
        <div className="w-12 h-px bg-[#D4AF37] mb-8" />

        <p className="text-[#F9F7F2]/50 text-lg max-w-sm leading-relaxed mb-12">
          11 years · 5,000+ events · Zero missed deliveries.
        </p>

        <Link href="/quote" className="btn-gold">
          Check Availability <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── Stats bar — pinned to bottom ── */}
      <div className="relative border-t border-[#F9F7F2]/8 flex-shrink-0">
        <div className="max-w-3xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-[#F9F7F2]/8">
          {[
            { value: "5,000+", label: "Events Delivered" },
            { value: "11 Yrs", label: "In Business"      },
            { value: "4.9★",   label: "Google Rating"    },
          ].map((s) => (
            <div key={s.label} className="px-4 sm:px-8 text-center first:pl-0 last:pr-0">
              <p className="font-serif font-bold text-xl sm:text-2xl text-[#F9F7F2] not-italic leading-none">{s.value}</p>
              <p
                className="text-[10px] text-[#F9F7F2]/35 uppercase tracking-widest mt-1.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
