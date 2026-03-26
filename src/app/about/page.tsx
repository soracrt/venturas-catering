import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Our Heritage",
  description:
    "Since 2017, Venturas Catering has delivered Zero-Friction Hospitality across Klang Valley. 9 years of culinary precision, Halal-certified, GPS-tracked, bespoke.",
};

const philosophy = [
  {
    Icon: ShieldCheck,
    title: "Halal Integrity",
    titleMs: "Integriti Halal",
    body: "Every grain of rice, every drop of sauce is JAKIM-certified Halal. No shortcuts, no compromises — our kitchen runs on trust as much as technique.",
  },
  {
    Icon: Truck,
    title: "Zero-Friction Hospitality",
    titleMs: "Hospitaliti Tanpa Hambatan",
    body: "GPS-tracked logistics, dedicated on-site coordinators, and obsessive pre-event planning mean you are never a caterer's client — you are a guest at your own event.",
  },
  {
    Icon: MapPin,
    title: "Rooted in Selangor",
    titleMs: "Berakar di Selangor",
    body: "Born in Shah Alam, refined across the Klang Valley. We source local, we hire local, and we understand the cultural texture of every celebration we serve.",
  },
];

const stats = [
  { value: "9",    suffix: "+", label: "Years of Mastery",    labelMs: "Tahun Kepakaran"    },
  { value: "5,000",suffix: "+", label: "Events Delivered",    labelMs: "Majlis Diselesaikan" },
  { value: "4.9",  suffix: "★", label: "Google Rating",       labelMs: "Penilaian Google"   },
  { value: "98",   suffix: "%", label: "Client Satisfaction", labelMs: "Kepuasan Klien"     },
];

export default function AboutPage() {
  return (
    <div>

      {/* ── HERO HEADER ── */}
      <section className="py-20 md:py-28 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span
              className="inline-block mb-4 text-xs tracking-[0.25em] uppercase text-[#D4AF37] font-semibold bg-[#D4AF37]/8 px-3 py-1.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Heritage · Since 2017
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-[#1B1F23] mb-4 leading-[1.05]">
              Crafting Moments,<br />
              <em className="text-[#D4AF37]">Not Just Menus.</em>
            </h1>
            <div className="w-14 h-0.5 bg-[#D4AF37] mb-6" />
            <p className="text-[#1B1F23]/70 text-xl leading-relaxed font-light">
              9 Years of Culinary Precision in the Heart of Selangor.
            </p>
          </div>
        </div>
      </section>

      {/* ── HERITAGE SCROLL BLOCK — dark narrative ── */}
      <section className="relative bg-[#1B1F23] section-dark py-24 md:py-36 overflow-hidden">

        {/* Decorative watermark quotation mark */}
        <div
          className="absolute top-0 left-4 md:left-12 font-serif leading-none select-none pointer-events-none"
          style={{
            fontSize: "clamp(5rem, 22vw, 22rem)",
            color: "rgba(212,175,55,0.05)",
            lineHeight: 0.85,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Decorative vertical line */}
        <div className="absolute left-0 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent hidden md:block" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <p
            className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-semibold mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The Venturas Philosophy
          </p>

          {/* Pull quote */}
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-[2.2rem] text-[#F9F7F2] leading-[1.45] mb-10 max-w-3xl">
            We didn&apos;t start just to cook; we started to solve the{" "}
            <em className="text-[#D4AF37]">logistical puzzle</em>{" "}
            of the perfect event.
          </blockquote>

          <div className="w-14 h-px bg-[#D4AF37] mb-10" />

          {/* Narrative body */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-[#F9F7F2]/70 text-lg leading-[1.85]">
              Since 2017, Venturas has sat at the intersection of tradition and
              innovation. For nearly a decade, we&apos;ve served Malaysia&apos;s
              most prestigious corporate giants and intimate private gatherings
              with a single guiding principle:{" "}
              <span className="text-[#F9F7F2] font-semibold">
                Zero-Friction Hospitality.
              </span>
            </p>
            <p className="text-[#F9F7F2]/70 text-lg leading-[1.85]">
              Every grain of rice is Halal-certified; every delivery is
              GPS-tracked; every menu is a bespoke blueprint of your vision.
              From our home in Shah Alam to the far reaches of Klang Valley, we
              don&apos;t just deliver food — we deliver the peace of mind that
              allows you to{" "}
              <em className="text-[#D4AF37]">be a guest at your own event.</em>
            </p>
          </div>

          {/* Founder attribution */}
          <div className="mt-14 flex items-center gap-5">
            <div className="w-12 h-px bg-[#D4AF37]/40" />
            <div>
              <p className="font-serif text-[#F9F7F2] font-bold text-lg not-italic">
                Chef Hafizuddin Razak
              </p>
              <p
                lang="ms"
                className="text-[10px] text-[#F9F7F2]/40 uppercase tracking-widest mt-0.5"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Pengasas &amp; Ketua Chef, Venturas Catering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY PILLARS ── */}
      <section className="py-20 md:py-28 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-xl mb-14">
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              What We Stand For
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1F23]">
              Three Promises.<br />
              <em>Every Single Event.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {philosophy.map((p) => (
              <div key={p.title} className="card-glass p-8">
                <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <p.Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B1F23] mb-1">
                  {p.title}
                </h3>
                <p
                  lang="ms"
                  className="text-xs text-[#1B1F23]/55 italic mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {p.titleMs}
                </p>
                <div className="w-8 h-px bg-[#D4AF37] mb-4" />
                <p className="text-[#1B1F23]/70 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-[#1B1F23] section-dark py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#F9F7F2]/8">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1B1F23] px-6 py-10 text-center">
                <p
                  className="font-serif font-bold text-[#D4AF37] not-italic leading-none"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
                >
                  {s.value}
                  <span className="text-xl ml-0.5">{s.suffix}</span>
                </p>
                <p
                  className="text-[10px] text-[#F9F7F2]/55 uppercase tracking-widest mt-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {s.label}
                </p>
                <p
                  lang="ms"
                  className="text-[9px] text-[#F9F7F2]/30 italic mt-0.5"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {s.labelMs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-20 md:py-28 bg-[#F9F7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Est. Shah Alam, 2017
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1F23] mb-6">
            From a Single Corporate Lunch<br />
            <em className="text-[#D4AF37]">to 5,000 Unforgettable Events.</em>
          </h2>
          <div className="w-14 h-0.5 bg-[#D4AF37] mx-auto mb-8" />
          <p className="text-[#1B1F23]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            What started as a two-chef operation in a Shah Alam commissary kitchen has
            grown into Selangor&apos;s most trusted culinary event partner. The menus
            change with every season. The standards never do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-gold">
              Plan Your Event <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
