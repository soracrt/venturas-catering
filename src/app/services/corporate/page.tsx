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
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
            For Businesses
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Corporate Catering
          </h1>
          <p className="text-[#6b6560] text-lg leading-relaxed">
            Elevate your business events with professional catering that reflects your brand&apos;s
            standards. From daily office lunches to high-profile product launches — we deliver
            consistency, quality, and reliability.
          </p>
        </div>

        {/* Packages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className="bg-white rounded-2xl border border-stone-200 p-7 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl font-bold text-[#1c1c1e]">{pkg.name}</h3>
                <div className="text-right">
                  <span className="text-[#b8932a] font-bold text-lg">From {pkg.priceFrom}</span>
                  {pkg.perPax && <span className="text-xs text-stone-500 block">/pax</span>}
                </div>
              </div>
              <p className="text-[#6b6560] text-sm mb-4">{pkg.description}</p>
              <ul className="space-y-2 mb-5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/quote?type=corporate&package=${pkg.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:gap-3 transition-all"
              >
                Get a Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1c1c1e] text-white rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl font-bold mb-3">Ready to Discuss Your Event?</h2>
          <p className="text-stone-400 mb-8 max-w-xl mx-auto">
            Our corporate events team will respond within 24 hours with a custom proposal tailored to
            your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?type=corporate"
              className="px-8 py-3.5 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
            >
              Get Instant Quote
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
