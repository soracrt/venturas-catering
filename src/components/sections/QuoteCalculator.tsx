"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  eventType: z.enum(["corporate-lunch", "conference", "product-launch", "office", "wedding", "birthday", "social", "themed"]).refine(Boolean, { message: "Please select an event type" }),
  guestCount: z
    .number({ error: "Enter a valid number" })
    .min(10, "Minimum 10 guests")
    .max(2000, "For 2000+ guests, please contact us directly"),
  packageTier: z.enum(["standard", "premium", "luxury"]),
  eventDate: z.string().min(1, "Please select a date"),
  name: z.string().min(2, "Name required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(9, "Enter a valid phone number"),
});

type QuoteFormData = z.infer<typeof schema>;

const eventTypes = [
  { value: "corporate-lunch", label: "Corporate Lunch", category: "corporate", baseRate: 28 },
  { value: "conference", label: "Conference / Seminar", category: "corporate", baseRate: 65 },
  { value: "product-launch", label: "Product Launch / Gala", category: "corporate", baseRate: 150 },
  { value: "office", label: "Recurring Office Catering", category: "corporate", baseRate: 22 },
  { value: "wedding", label: "Wedding Reception", category: "private", baseRate: 88 },
  { value: "birthday", label: "Birthday / Anniversary", category: "private", baseRate: 45 },
  { value: "social", label: "Social Gathering", category: "private", baseRate: 35 },
  { value: "themed", label: "Themed / Custom Event", category: "private", baseRate: 120 },
];

const tiers = [
  { value: "standard", label: "Standard", multiplier: 1, description: "Quality essentials" },
  { value: "premium", label: "Premium", multiplier: 1.4, description: "Enhanced presentation" },
  { value: "luxury", label: "Luxury", multiplier: 2, description: "Full white-glove service" },
];

function computeEstimate(type: string, guests: number, tier: string): { min: number; max: number } | null {
  const event = eventTypes.find((e) => e.value === type);
  const tierData = tiers.find((t) => t.value === tier);
  if (!event || !tierData || !guests) return null;
  const base = event.baseRate * tierData.multiplier * guests;
  return { min: Math.round(base * 0.9), max: Math.round(base * 1.1) };
}

function formatMYR(amount: number) {
  return new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }).format(amount);
}

export default function QuoteCalculator() {
  const [submitted, setSubmitted] = useState(false);
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(schema),
    defaultValues: { packageTier: "standard" },
  });

  const watchedType = watch("eventType");
  const watchedGuests = watch("guestCount");
  const watchedTier = watch("packageTier");

  // Live estimate
  const liveEstimate =
    watchedType && watchedGuests >= 10
      ? computeEstimate(watchedType, watchedGuests, watchedTier)
      : null;

  async function onSubmit(data: QuoteFormData) {
    // In production: send to API route / CRM
    await new Promise((r) => setTimeout(r, 800));
    setEstimate(computeEstimate(data.eventType, data.guestCount, data.packageTier));
    setSubmitted(true);
  }

  if (submitted && estimate) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-8 md:p-10 text-center">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-5" />
        <h2 className="font-serif text-2xl font-bold text-[#1c1c1e] mb-2">
          Your Estimate is Ready!
        </h2>
        <p className="text-[#6b6560] mb-6">
          Based on your event details, here&apos;s your indicative quote:
        </p>
        <div className="bg-[#faf8f4] rounded-2xl p-6 mb-6">
          <p className="text-sm text-[#6b6560] mb-1">Estimated Total</p>
          <p className="font-serif text-4xl font-bold text-[#b8932a]">
            {formatMYR(estimate.min)} – {formatMYR(estimate.max)}
          </p>
          <p className="text-xs text-stone-500 mt-2">
            Final pricing subject to menu selection and site assessment
          </p>
        </div>
        <p className="text-sm text-[#6b6560] mb-6">
          Our team will reach out within 24 hours with a full personalised proposal.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-sm border border-stone-200 p-7 md:p-10 space-y-7"
    >
      {/* Live Estimate Banner */}
      {liveEstimate && (
        <div className="bg-[#faf8f4] border border-[#b8932a]/30 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-[#b8932a]" />
            <span className="text-sm text-[#6b6560]">Live estimate:</span>
          </div>
          <span className="font-serif font-bold text-lg text-[#b8932a]">
            {formatMYR(liveEstimate.min)} – {formatMYR(liveEstimate.max)}
          </span>
        </div>
      )}

      {/* Event Type */}
      <div>
        <label className="block text-sm font-semibold text-[#1c1c1e] mb-3">
          Event Type <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {eventTypes.map((type) => (
            <label
              key={type.value}
              className={cn(
                "flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all text-sm",
                watchedType === type.value
                  ? "border-[#b8932a] bg-[#b8932a]/5 text-[#1c1c1e] font-medium"
                  : "border-stone-200 text-stone-600 hover:border-stone-300"
              )}
            >
              <input
                type="radio"
                value={type.value}
                {...register("eventType")}
                className="sr-only"
              />
              <span
                className={cn(
                  "w-2.5 h-2.5 rounded-full flex-shrink-0 border",
                  watchedType === type.value
                    ? "bg-[#b8932a] border-[#b8932a]"
                    : "border-stone-300"
                )}
              />
              {type.label}
            </label>
          ))}
        </div>
        {errors.eventType && (
          <p className="text-rose-500 text-xs mt-1">{errors.eventType.message}</p>
        )}
      </div>

      {/* Guest Count */}
      <div>
        <label htmlFor="guestCount" className="block text-sm font-semibold text-[#1c1c1e] mb-2">
          Number of Guests <span className="text-rose-500">*</span>
        </label>
        <input
          id="guestCount"
          type="number"
          min={10}
          max={2000}
          placeholder="e.g. 100"
          {...register("guestCount", { valueAsNumber: true })}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e]"
        />
        {errors.guestCount && (
          <p className="text-rose-500 text-xs mt-1">{errors.guestCount.message}</p>
        )}
      </div>

      {/* Package Tier */}
      <div>
        <label className="block text-sm font-semibold text-[#1c1c1e] mb-3">
          Package Tier <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {tiers.map((tier) => (
            <label
              key={tier.value}
              className={cn(
                "p-4 rounded-xl border cursor-pointer text-center transition-all",
                watchedTier === tier.value
                  ? "border-[#b8932a] bg-[#b8932a]/5"
                  : "border-stone-200 hover:border-stone-300"
              )}
            >
              <input
                type="radio"
                value={tier.value}
                {...register("packageTier")}
                className="sr-only"
              />
              <p className={cn("font-semibold text-sm", watchedTier === tier.value ? "text-[#b8932a]" : "text-[#1c1c1e]")}>
                {tier.label}
              </p>
              <p className="text-xs text-stone-500 mt-0.5">{tier.description}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor="eventDate" className="block text-sm font-semibold text-[#1c1c1e] mb-2">
          Event Date <span className="text-rose-500">*</span>
        </label>
        <input
          id="eventDate"
          type="date"
          {...register("eventDate")}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e]"
        />
        {errors.eventDate && (
          <p className="text-rose-500 text-xs mt-1">{errors.eventDate.message}</p>
        )}
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-[#1c1c1e]">Your Contact Details</p>
        <input
          type="text"
          placeholder="Full Name *"
          {...register("name")}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e] placeholder:text-stone-400"
        />
        {errors.name && <p className="text-rose-500 text-xs -mt-2">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email Address *"
          {...register("email")}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e] placeholder:text-stone-400"
        />
        {errors.email && <p className="text-rose-500 text-xs -mt-2">{errors.email.message}</p>}

        <input
          type="tel"
          placeholder="Phone Number (e.g. 012-345 6789) *"
          {...register("phone")}
          className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e] placeholder:text-stone-400"
        />
        {errors.phone && <p className="text-rose-500 text-xs -mt-2">{errors.phone.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {isSubmitting ? "Calculating..." : "Get My Quote"}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>

      <p className="text-center text-xs text-stone-400">
        No payment required. Our team will follow up within 24 hours.
      </p>
    </form>
  );
}
