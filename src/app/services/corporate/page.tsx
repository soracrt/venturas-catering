import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Catering",
  description:
    "Professional corporate catering in Malaysia — boardroom lunches, conferences, seminars, product launches, and recurring office catering packages.",
};

const packages = [
  {
    id: "lunch",
    name: "Corporate Lunch",
    description: "Buffet or set-menu lunches for team meetings and in-office dining.",
    priceFrom: "RM 28",
    perPax: true,
    features: ["Minimum 20 pax", "Choice of 3 cuisines", "Setup & teardown included", "Halal certified"],
  },
  {
    id: "conference",
    name: "Conference & Seminar",
    description: "Full-day or half-day packages with refreshment breaks and plated meals.",
    priceFrom: "RM 65",
    perPax: true,
    features: ["Morning & afternoon breaks", "Lunch included", "Coffee & tea station", "Dietary accommodations"],
  },
  {
    id: "launches",
    name: "Product Launches & Galas",
    description: "Cocktail receptions, canape service, and sit-down dinners for brand events.",
    priceFrom: "RM 150",
    perPax: true,
    features: ["Cocktail & canape options", "Branded setup available", "Dedicated event manager", "Up to 1,000 pax"],
  },
  {
    id: "office",
    name: "Recurring Office Catering",
    description: "Weekly or monthly catering plans for corporate offices and co-working spaces.",
    priceFrom: "RM 22",
    perPax: true,
    features: ["Flexible scheduling", "Rotating menus", "Volume discounts", "Dedicated account manager"],
  },
];

export default function CorporatePage() {
  return (
    <div data-theme="corporate" className="py-16 md:py-24 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#4A6076] font-semibold bg-[#4A6076]/8 px-3 py-1.5" style={{ fontFamily: "var(--font-montserrat)" }}>
            For Businesses
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1B1F23] mb-4">
            Corporate Catering
          </h1>
          <div className="w-12 h-0.5 bg-[#4A6076] mb-5" />
          <p className="text-[#1B1F23]/60 text-lg leading-relaxed">
            Elevate your business events with professional catering that reflects your brand&apos;s
            standards. From daily office lunches to high-profile product launches — we deliver
            consistency, quality, and reliability.
          </p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className="card-glass p-7 hover:border-[#4A6076]/40 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl font-bold text-[#1B1F23]">{pkg.name}</h3>
                <div className="text-right">
                  <span className="text-[#D4AF37] font-bold text-lg not-italic">From {pkg.priceFrom}</span>
                  {pkg.perPax && <span className="text-xs text-[#1B1F23]/60 block">/pax</span>}
                </div>
              </div>
              <p className="text-[#1B1F23]/55 text-sm mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1B1F23]/65">
                    <CheckCircle2 className="w-4 h-4 text-[#4A6076] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/quote?type=corporate&package=${pkg.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A6076] hover:gap-3 transition-all uppercase tracking-wider"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA — dark basalt with slate blue accent */}
        <div className="bg-[#1B1F23] section-dark p-10 md:p-14 text-center">
          <div className="w-12 h-0.5 bg-[#4A6076] mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-[#F9F7F2] mb-3">Ready to Discuss Your Event?</h2>
          <p className="text-[#F9F7F2]/50 mb-8 max-w-xl mx-auto">
            Our corporate events team will respond within 24 hours with a custom proposal tailored to
            your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?type=corporate" className="btn-gold">
              Get Instant Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
