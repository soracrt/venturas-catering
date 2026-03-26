"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative bg-[#1c1c1e] text-white overflow-hidden min-h-[95vh] flex items-center">
      {/* Background video — replace src with real footage */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/hero-plating.webm" type="video/webm" />
        <source src="/videos/hero-plating.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1e]/95 via-[#1c1c1e]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/80 via-transparent to-transparent" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b8932a] via-[#d4a843] to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="max-w-2xl">
          {/* Bilingual badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold bg-[#b8932a]/10 border border-[#b8932a]/30 px-4 py-2 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Halal Certified · Shah Alam & Selangor
            </span>
          </div>

          {/* Headline — English primary, Malay secondary */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] mb-3">
            Food That Makes
            <br />
            <span className="text-[#b8932a]">Every Moment</span>
            <br />
            Unforgettable.
          </h1>
          <p lang="ms" className="text-sm text-stone-400 mb-5 tracking-wide italic">
            Katering premium untuk majlis korporat &amp; peribadi anda.
          </p>

          <p className="text-lg text-stone-300 mb-8 max-w-lg leading-relaxed">
            11 years. 5,000+ events. Zero missed deliveries. From intimate dinners to 500-pax
            weddings — we bring the kitchen to you.
          </p>

          {/* CTAs — WhatsApp is secondary, doesn't overlap Check Availability */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-all text-base shadow-lg shadow-[#b8932a]/25"
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/60123456789?text=Hi%20Venturas!%20I'd%20like%20to%20enquire%20about%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all text-base"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {[
              "No deposit to enquire",
              "Quote in 24 hours",
              "Free menu tasting",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-stone-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b8932a]" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent" />
        <span className="text-xs tracking-widest uppercase text-white">Scroll</span>
      </div>
    </section>
  );
}
