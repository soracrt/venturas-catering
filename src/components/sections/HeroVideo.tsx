"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="section-dark relative bg-[#1B1F23] text-[#F9F7F2] overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* ── SPLIT LAYOUT ── */}
      <div className="grid md:grid-cols-2 min-h-screen md:min-h-0" style={{ minHeight: "100svh" }}>

        {/* LEFT — Editorial text panel */}
        <div className="relative z-10 flex flex-col justify-between px-8 sm:px-12 lg:px-16 py-10 md:py-16 bg-[#1B1F23]">

          {/* Top badge */}
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold border border-[#D4AF37]/30 px-3 py-1.5" style={{ fontFamily: "var(--font-montserrat)" }}>
              <ShieldCheck className="w-3 h-3" />
              Halal Certified · Shah Alam
            </span>
          </div>

          {/* Main editorial headline — Cormorant Garamond oversized */}
          <div className="py-12 md:py-0">
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#F9F7F2]/40 mb-6 font-medium" style={{ fontFamily: "var(--font-montserrat)" }}>
              Premium Event Catering
            </p>

            <h1 className="font-serif leading-[0.88] mb-8 not-italic">
              <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F9F7F2] tracking-tight">
                WHERE
              </span>
              <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <span className="text-[#D4AF37]">TASTE</span>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F9F7F2] tracking-tight">
                MEETS
              </span>
              <span className="block text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F9F7F2] tracking-tight italic">
                Elegance.
              </span>
            </h1>

            {/* Gold rule */}
            <div className="w-16 h-px bg-[#D4AF37] mb-6" />

            <p className="text-[#F9F7F2]/60 text-base md:text-lg leading-relaxed max-w-sm mb-2">
              11 years. 5,000+ events. Impeccable food and zero missed deliveries — for weddings,
              corporate galas, and every occasion in between.
            </p>
            <p lang="ms" className="text-[#F9F7F2]/30 text-sm italic mb-10">
              Katering premium untuk setiap majlis istimewa anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn-gold">
                Check Availability <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="https://wa.me/60123456789?text=Hi%20Venturas!%20I'd%20like%20to%20enquire%20about%20catering."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-7">
              {["No deposit to enquire", "Quote in 24 hours", "Free menu tasting"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-[#F9F7F2]/40">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom stats row */}
          <div className="grid grid-cols-3 gap-4 border-t border-[#F9F7F2]/10 pt-7">
            {[
              { value: "5,000+", label: "Events" },
              { value: "11 Yrs", label: "Experience" },
              { value: "4.9★",   label: "Rating" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif font-bold text-xl text-[#F9F7F2] not-italic">{s.value}</p>
                <p className="text-xs text-[#F9F7F2]/35 uppercase tracking-widest mt-0.5" style={{ fontFamily: "var(--font-montserrat)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Full-bleed food photo / video */}
        <div className="relative overflow-hidden hidden md:block" style={{ minHeight: "100svh" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
            poster="/images/hero-poster.jpg"
            aria-hidden="true"
          >
            <source src="/videos/hero-plating.webm" type="video/webm" />
            <source src="/videos/hero-plating.mp4" type="video/mp4" />
          </video>

          {/* Fallback gradient when no video */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-[#1B1F23] flex items-center justify-center">
            <div className="text-center opacity-30">
              <p className="text-[#F9F7F2]/40 text-sm">Add hero-plating.mp4 to /public/videos/</p>
            </div>
          </div>

          {/* Left shadow blend into text panel */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#1B1F23] to-transparent" />

          {/* Floating label */}
          <div className="absolute bottom-10 left-8 bg-[#1B1F23]/80 backdrop-blur-sm border border-[#F9F7F2]/10 px-5 py-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>Live Plating</p>
            <p className="text-[#F9F7F2] font-serif font-bold text-lg leading-tight">Every dish,<br />crafted to order.</p>
          </div>
        </div>
      </div>

      {/* Mobile: show photo below fold */}
      <div className="md:hidden relative h-64 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay muted loop playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-plating.webm" type="video/webm" />
          <source src="/videos/hero-plating.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F23] via-transparent to-transparent" />
      </div>

      {/* Gold top-line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37] via-[#E8CC6A] to-transparent pointer-events-none" />
    </section>
  );
}
