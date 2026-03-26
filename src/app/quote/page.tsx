import type { Metadata } from "next";
import QuoteCalculator from "@/components/sections/QuoteCalculator";

export const metadata: Metadata = {
  title: "Quick Quote",
  description:
    "Get an instant catering quote for your event. Tell us your guest count, event type, and date — we'll give you a live estimate in seconds.",
};

export default function QuotePage() {
  return (
    <div className="py-16 md:py-24 bg-[#faf8f4] min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold">
            No commitment required
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
            Quick Quote Calculator
          </h1>
          <p className="text-[#6b6560]">
            Fill in the details below and get an instant estimate for your event.
          </p>
        </div>
        <QuoteCalculator />
      </div>
    </div>
  );
}
