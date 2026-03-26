import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Venturas Catering services for corporate and private events across Malaysia.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our Services
          </h1>
          <p className="text-[#6b6560] max-w-2xl mx-auto text-lg">
            Two tailored pathways designed to meet the distinct needs of businesses and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            href="/services/corporate"
            className="group p-10 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
          >
            <Building2 className="w-10 h-10 text-blue-600 mb-5" />
            <h2 className="font-serif text-3xl font-bold text-[#1c1c1e] mb-3 group-hover:text-blue-700 transition-colors">
              Corporate Catering
            </h2>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Boardroom lunches, full-day conferences, product launches, and recurring office catering
              — designed to reflect your company&apos;s standards.
            </p>
            <ul className="text-sm text-stone-600 space-y-1.5 mb-6">
              <li>✓ Corporate lunch packages</li>
              <li>✓ Conference & seminar catering</li>
              <li>✓ Product launch events</li>
              <li>✓ Recurring office catering</li>
            </ul>
            <span className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              View Corporate Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/services/private"
            className="group p-10 bg-gradient-to-br from-stone-50 to-rose-50 rounded-3xl border border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-10 h-10 text-rose-500 mb-5" />
            <h2 className="font-serif text-3xl font-bold text-[#1c1c1e] mb-3 group-hover:text-rose-600 transition-colors">
              Private Events
            </h2>
            <p className="text-[#6b6560] leading-relaxed mb-6">
              Weddings, milestone birthdays, anniversaries, and intimate dinner parties — made
              memorable with our personal touch.
            </p>
            <ul className="text-sm text-stone-600 space-y-1.5 mb-6">
              <li>✓ Wedding receptions</li>
              <li>✓ Birthday & anniversary parties</li>
              <li>✓ Social gatherings</li>
              <li>✓ Themed & custom events</li>
            </ul>
            <span className="flex items-center gap-2 text-rose-500 font-semibold text-sm">
              View Private Packages <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
