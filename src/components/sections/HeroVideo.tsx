"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  return (
    <section
      className="section-dark relative bg-[#1B1F23] overflow-hidden"
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

        {/* Directional overlay — darker on left, lighter on right to let visual breathe */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F23]/85 via-[#1B1F23]/65 to-[#1B1F23]/30" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#1B1F23] to-transparent" />
      </div>

      {/* ── Left-aligned content ── */}
      <div className="relative h-full flex items-center" style={{ minHeight: "100svh" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full py-28">
          <div className="max-w-2xl">

            {/* Halal badge */}
            <span
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] border border-[#D4AF37]/35 px-4 py-2 mb-10 font-semibold"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <ShieldCheck className="w-3 h-3" />
              Halal Certified · Shah Alam
            </span>

            {/* Headline — left-aligned, slightly smaller */}
            <h1
              className="font-serif text-[#F9F7F2] leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.75rem, 6.5vw, 6.5rem)" }}
            >
              Premium Halal<br />
              catering for events<br />
              <em className="text-[#D4AF37]">worth remembering.</em>
            </h1>

            {/* Gold rule */}
            <div className="w-12 h-px bg-[#D4AF37] mb-8" />

            <p className="text-[#F9F7F2]/60 text-lg leading-relaxed mb-12 max-w-sm">
              Shah Alam · Klang Valley · Selangor.
            </p>

            <Link href="/quote" className="btn-gold">
              Check Availability <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
