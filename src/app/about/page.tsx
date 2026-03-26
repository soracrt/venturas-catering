import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Venturas Catering — 12 years of delivering exceptional food and event experiences across Malaysia.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-6">
            Catering with Heart,
            <br />
            <span className="text-[#b8932a]">Excellence in Every Plate</span>
          </h1>
          <p className="text-[#6b6560] text-lg leading-relaxed mb-5">
            Founded over a decade ago in Kuala Lumpur, Venturas Catering was born from a simple
            belief: great food has the power to bring people together and make moments last.
          </p>
          <p className="text-[#6b6560] leading-relaxed mb-5">
            From our first corporate luncheon to our 5,000th event, we&apos;ve stayed true to that
            mission — sourcing the freshest local ingredients, employing skilled chefs trained in
            both local and international cuisines, and treating every event as if it were our own.
          </p>
          <p className="text-[#6b6560] leading-relaxed">
            Today, Venturas is Malaysia&apos;s trusted catering partner for Fortune 500 companies,
            government agencies, and families celebrating life&apos;s biggest milestones.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {[
            { value: "12+", label: "Years in Business" },
            { value: "5,000+", label: "Events Delivered" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="bg-[#faf8f4] rounded-2xl p-6 text-center">
              <p className="font-serif text-4xl font-bold text-[#b8932a]">{s.value}</p>
              <p className="text-[#6b6560] text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/quote"
            className="inline-block px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
          >
            Work With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
