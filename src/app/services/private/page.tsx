import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Private Event Catering",
  description:
    "Wedding catering, birthday parties, anniversaries, and social gatherings in Malaysia. Personal, elegant, and unforgettable.",
};

const packages = [
  {
    id: "weddings",
    name: "Wedding Receptions",
    description: "From intimate garden ceremonies to grand ballroom receptions for 500+ guests.",
    priceFrom: "RM 88",
    perPax: true,
    features: ["Menu tasting included", "Dedicated wedding coordinator", "Setup & floral arrangement", "Halal & non-Halal options"],
  },
  {
    id: "birthdays",
    name: "Birthdays & Anniversaries",
    description: "Celebration packages with custom cakes, themed decor, and curated menus.",
    priceFrom: "RM 45",
    perPax: true,
    features: ["Custom cake included (50+ pax)", "Themed setup options", "Children-friendly menus", "Minimum 30 pax"],
  },
  {
    id: "social",
    name: "Social Gatherings",
    description: "House parties, family reunions, and casual get-togethers made effortless.",
    priceFrom: "RM 35",
    perPax: true,
    features: ["Minimum 20 pax", "Indoor & outdoor setup", "Flexible timing", "Cleanup service"],
  },
  {
    id: "themed",
    name: "Themed & Custom Events",
    description: "Fully customized experiences — from Hari Raya open houses to black-tie dinners.",
    priceFrom: "RM 120",
    perPax: true,
    features: ["Full concept design", "Custom menu creation", "Prop & decor rental", "Photography coordination"],
  },
];

export default function PrivatePage() {
  return (
    <div data-theme="wedding" className="py-16 md:py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#B5838D] font-semibold bg-[#B5838D]/8 px-3 py-1.5" style={{ fontFamily: "var(--font-montserrat)" }}>
            For Individuals &amp; Families
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1B1F23] mb-4">
            Private Event Catering
          </h1>
          <div className="w-12 h-0.5 bg-[#B5838D] mb-5" />
          <p className="text-[#1B1F23]/60 text-lg leading-relaxed">
            Your celebrations deserve more than just food — they deserve an experience. Our private
            events team brings warmth, creativity, and meticulous attention to every gathering, big
            or small.
          </p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className="card-glass p-7 hover:border-[#B5838D]/40 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl font-bold text-[#1B1F23]">{pkg.name}</h3>
                <div className="text-right">
                  <span className="text-[#D4AF37] font-bold text-lg not-italic">From {pkg.priceFrom}</span>
                  {pkg.perPax && <span className="text-xs text-[#1B1F23]/40 block">/pax</span>}
                </div>
              </div>
              <p className="text-[#1B1F23]/55 text-sm mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1B1F23]/65">
                    <CheckCircle2 className="w-4 h-4 text-[#B5838D] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/quote?type=private&package=${pkg.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#B5838D] hover:gap-3 transition-all uppercase tracking-wider"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA — dusty rose warmth */}
        <div className="bg-[#B5838D]/10 border border-[#B5838D]/20 p-10 md:p-14 text-center">
          <div className="w-12 h-0.5 bg-[#B5838D] mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-[#1B1F23] mb-3">
            Let&apos;s Plan Your Perfect Event
          </h2>
          <p className="text-[#1B1F23]/55 mb-8 max-w-xl mx-auto">
            Tell us about your dream event and we&apos;ll craft a personalised proposal just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?type=private" className="btn-gold">
              Get Instant Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
