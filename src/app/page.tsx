import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChefHat, ShieldCheck } from "lucide-react";
import HeroVideo from "@/components/sections/HeroVideo";

export const metadata: Metadata = {
  title: "Venturas Catering | Premium Halal Event Catering Shah Alam & Selangor",
  description:
    "Premium Halal-certified catering for weddings, corporate events, and private occasions in Shah Alam, Selangor & KL. 11 years, 5,000+ events. Get an instant quote.",
};

const serviceRows = [
  {
    n: "01",
    title: "Corporate Events",
    ms: "Majlis Korporat",
    desc: "Boardroom lunches, conferences, product launches, office catering.",
    from: "RM 22/pax",
    href: "/services/corporate",
  },
  {
    n: "02",
    title: "Wedding Receptions",
    ms: "Majlis Perkahwinan",
    desc: "Grand receptions and intimate ceremonies for 30–500+ guests.",
    from: "RM 88/pax",
    href: "/services/private",
  },
  {
    n: "03",
    title: "Private Occasions",
    ms: "Majlis Peribadi",
    desc: "Birthdays, anniversaries, Hari Raya open houses, themed celebrations.",
    from: "RM 35/pax",
    href: "/services/private#birthdays",
  },
  {
    n: "04",
    title: "Bento & Buffet",
    ms: "Bento & Bufet",
    desc: "Individual bento boxes to grand buffet spreads — all Halal certified.",
    from: "RM 18/pax",
    href: "/menu",
  },
];

const clients = [
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <HeroVideo />

      {/* ── 2. SERVICE ROWS ── */}
      <section className="bg-[#F9F7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="pt-20 pb-8 border-b border-[#1B1F23]/8">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#1B1F23]/35"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What Are You Planning?
            </p>
          </div>

          {/* Rows */}
          {serviceRows.map((row) => (
            <Link
              key={row.href}
              href={row.href}
              className="group flex items-center justify-between py-8 sm:py-10 border-b border-[#1B1F23]/8 hover:bg-white transition-colors -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
            >
              <div className="flex items-baseline gap-5 sm:gap-8 min-w-0">
                <span
                  className="font-serif not-italic text-3xl sm:text-5xl font-light text-[#1B1F23]/10 flex-shrink-0 select-none leading-none"
                >
                  {row.n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1B1F23] group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {row.title}
                  </h3>
                  <p lang="ms" className="text-[11px] text-[#1B1F23]/30 italic mt-0.5">
                    {row.ms}
                  </p>
                  <p className="text-[#1B1F23]/40 text-xs sm:text-sm mt-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    {row.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-8 flex-shrink-0 ml-4">
                <span
                  className="hidden sm:block text-[#1B1F23]/30 text-sm"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  From {row.from}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1B1F23]/20 group-hover:text-[#D4AF37] group-hover:translate-x-1.5 transition-all" />
              </div>
            </Link>
          ))}

          <div className="pt-8 pb-20">
            <Link
              href="/services"
              className="text-xs text-[#1B1F23]/35 hover:text-[#1B1F23] transition-colors uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. PROOF — dark editorial ── */}
      <section className="bg-[#1B1F23] section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2">

            {/* Left — chef photo */}
            <div className="relative" style={{ minHeight: "520px" }}>
              <div className="absolute inset-0 bg-[#252a2f] flex items-center justify-center overflow-hidden">
                <ChefHat className="w-24 h-24 text-[#F9F7F2]/5" />
                {/* Replace with: <Image src="/images/chef.jpg" alt="Chef Hafizuddin Razak" fill className="object-cover" /> */}
              </div>

              {/* Credential badge */}
              <div className="absolute bottom-8 left-8 bg-[#D4AF37] text-[#1B1F23] px-5 py-4 shadow-xl shadow-[#D4AF37]/20 z-10">
                <p className="font-serif font-bold text-3xl not-italic leading-none">11+</p>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Years Mastery
                </p>
              </div>

              {/* Halal badge */}
              <div className="absolute top-8 left-8 z-10">
                <span
                  className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold border border-[#D4AF37]/30 px-3 py-1.5"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  <ShieldCheck className="w-3 h-3" />
                  JAKIM Certified
                </span>
              </div>
            </div>

            {/* Right — proof */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 md:py-20">
              <p
                className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37]/60 font-medium mb-10"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                What clients say
              </p>

              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F9F7F2] leading-[1.15] mb-4 italic">
                &ldquo;350 guests at our nikah.<br />
                Every single person asked<br />
                for the caterer&apos;s number.&rdquo;
              </blockquote>
              <p className="text-[#F9F7F2]/35 text-sm mb-14">
                — Ahmad Razif · Wedding, September 2024
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-[#F9F7F2]/8 pt-10 mb-14">
                {[
                  { value: "5,000+", label: "Events delivered" },
                  { value: "11 yrs", label: "In the business" },
                  { value: "4.9★",   label: "Google rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-serif font-bold text-2xl sm:text-3xl text-[#D4AF37] not-italic leading-none">{s.value}</p>
                    <p
                      className="text-[#F9F7F2]/30 text-[10px] uppercase tracking-wider mt-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-gold self-start">
                  Check Availability <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/about"
                  className="self-start text-xs text-[#F9F7F2]/35 hover:text-[#F9F7F2] transition-colors uppercase tracking-widest flex items-center gap-2 mt-auto"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Meet the team →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. MARQUEE + CTA ── */}
      <section className="bg-[#F9F7F2]">

        {/* Client marquee */}
        <div className="border-y border-[#1B1F23]/8 py-5 overflow-hidden">
          <p
            className="text-center text-[9px] tracking-[0.4em] uppercase text-[#1B1F23]/30 font-medium mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Trusted by Malaysia&apos;s leading organisations
          </p>
          <div className="flex overflow-hidden">
            <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
              {clients.map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="text-[#1B1F23]/25 font-semibold text-xs tracking-widest uppercase flex-shrink-0"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Availability CTA */}
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Limited Availability
          </p>
          <h2
            className="font-serif leading-[0.9] text-[#1B1F23] mb-10"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Is your date<br />available?
          </h2>
          <p className="text-[#1B1F23]/45 text-lg max-w-md mx-auto mb-12 leading-relaxed">
            We cap monthly bookings to maintain quality.
            Secure your event date before it&apos;s gone.
          </p>
          <Link href="/quote" className="btn-gold">
            Check Availability <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>
    </>
  );
}
