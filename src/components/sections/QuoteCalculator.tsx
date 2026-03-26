"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Calculator,
  ArrowRight,
  CheckCircle,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  Users,
  Utensils,
  Sparkles,
  MapPin,
  Navigation,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── PRICING DATA ────────────────────────────────────────────────────────────

export const EVENT_TYPES = [
  { value: "corporate-lunch",   label: "Corporate Lunch",            labelMs: "Makan Tengahari Korporat", baseRate: 28, category: "corporate" },
  { value: "conference",        label: "Conference / Seminar",        labelMs: "Persidangan / Seminar",    baseRate: 65, category: "corporate" },
  { value: "product-launch",    label: "Product Launch / Gala",       labelMs: "Pelancaran Produk / Gala", baseRate: 150, category: "corporate" },
  { value: "office-recurring",  label: "Recurring Office Catering",   labelMs: "Katering Pejabat Tetap",  baseRate: 22, category: "corporate" },
  { value: "wedding",           label: "Wedding Reception",           labelMs: "Resepsi Perkahwinan",     baseRate: 88, category: "private" },
  { value: "birthday",          label: "Birthday / Anniversary",      labelMs: "Hari Jadi / Ulangtahun",  baseRate: 45, category: "private" },
  { value: "social",            label: "Social Gathering",            labelMs: "Majlis Keluarga/Rakan",   baseRate: 35, category: "private" },
  { value: "themed",            label: "Themed / Custom Event",       labelMs: "Majlis Tema / Khas",      baseRate: 120, category: "private" },
] as const;

export const PACKAGE_TIERS = [
  { value: "standard", label: "Standard",  labelMs: "Standard",   multiplier: 1.0, description: "Quality essentials, full setup" },
  { value: "premium",  label: "Premium",   labelMs: "Premium",    multiplier: 1.45, description: "Enhanced presentation, live stations" },
  { value: "luxury",   label: "Luxury",    labelMs: "Mewah",      multiplier: 2.1,  description: "White-glove, custom décor, chef table" },
] as const;

export const ADD_ONS = [
  { id: "waiters",       label: "Uniformed Waitstaff",   labelMs: "Pelayan Berpakaian Seragam", pricePerPax: 8,   priceFixed: undefined, icon: Users,   description: "1 server per 25 guests" },
  { id: "decor",         label: "Table Décor & Linen",   labelMs: "Hiasan Meja & Linen",       pricePerPax: undefined, priceFixed: 650,   icon: Sparkles,description: "Centrepieces, tablecloths, napkins" },
  { id: "floral",        label: "Floral Arrangements",   labelMs: "Hiasan Bunga Segar",        pricePerPax: undefined, priceFixed: 950,   icon: Sparkles,description: "Fresh floral for all tables" },
  { id: "sound",         label: "PA / Sound System",     labelMs: "Sistem PA / Bunyi",         pricePerPax: undefined, priceFixed: 380,   icon: Utensils,description: "Mic, speakers, for speeches" },
  { id: "photography",   label: "Event Photography",     labelMs: "Fotografi Acara",           pricePerPax: undefined, priceFixed: 1200,  icon: Sparkles,description: "3-hour professional coverage" },
  { id: "live-station",  label: "Extra Live Station",    labelMs: "Stesen Memasak Langsung",   pricePerPax: 6,   priceFixed: 400,   icon: Utensils,description: "Additional live cooking station" },
] as const;

type AddOnId = typeof ADD_ONS[number]["id"];

// ── ZOD SCHEMA ───────────────────────────────────────────────────────────────

const contactSchema = z.object({
  name:  z.string().min(2, "Name required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(9, "Enter a valid phone number"),
});
type ContactData = z.infer<typeof contactSchema>;

// ── UTILS ─────────────────────────────────────────────────────────────────

function computeEstimate(
  eventType: string,
  guests: number,
  tier: string,
  addOns: AddOnId[]
): { min: number; max: number; breakdown: { label: string; amount: number }[] } | null {
  const event = EVENT_TYPES.find((e) => e.value === eventType);
  const tierData = PACKAGE_TIERS.find((t) => t.value === tier);
  if (!event || !tierData || !guests || guests < 10) return null;

  const baseTotal = event.baseRate * tierData.multiplier * guests;
  const breakdown: { label: string; amount: number }[] = [
    { label: `${event.label} × ${guests} pax (${tierData.label})`, amount: Math.round(baseTotal) },
  ];

  let addOnTotal = 0;
  for (const id of addOns) {
    const ao = ADD_ONS.find((a) => a.id === id);
    if (!ao) continue;
    const amount =
      (ao.pricePerPax ? ao.pricePerPax * guests : 0) +
      (ao.priceFixed ?? 0);
    addOnTotal += amount;
    breakdown.push({ label: ao.label, amount });
  }

  const subtotal = baseTotal + addOnTotal;
  return {
    min: Math.round(subtotal * 0.92),
    max: Math.round(subtotal * 1.1),
    breakdown,
  };
}

function formatMYR(n: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency", currency: "MYR", maximumFractionDigits: 0,
  }).format(n);
}

type TransportData = { distanceKm: number | null; durationMin: number | null; transportFee: number; breakdown: string };

// ── COMPONENT ─────────────────────────────────────────────────────────────

export default function QuoteCalculator() {
  const [eventType, setEventType]       = useState<string>("");
  const [guests, setGuests]             = useState<number>(50);
  const [tier, setTier]                 = useState<string>("standard");
  const [addOns, setAddOns]             = useState<AddOnId[]>([]);
  const [unlocked, setUnlocked]         = useState(false);
  const [submitted, setSubmitted]       = useState(false);
  const [showAddOns, setShowAddOns]     = useState(false);
  const [venueAddress, setVenueAddress] = useState("");
  const [transport, setTransport]       = useState<TransportData | null>(null);
  const [distLoading, setDistLoading]   = useState(false);
  const distDebounce                    = useRef<ReturnType<typeof setTimeout> | null>(null);

  const estimate = eventType ? computeEstimate(eventType, guests, tier, addOns) : null;
  const totalWithTransport = estimate && transport
    ? { ...estimate, min: estimate.min + transport.transportFee, max: estimate.max + transport.transportFee }
    : estimate;

  async function lookupDistance(address: string) {
    if (!address || address.length < 5) return;
    setDistLoading(true);
    try {
      const res  = await fetch(`/api/distance?destination=${encodeURIComponent(address + ", Malaysia")}`);
      const data = await res.json();
      if (!data.error) setTransport(data);
    } catch { /* silent */ }
    setDistLoading(false);
  }

  function handleVenueChange(v: string) {
    setVenueAddress(v);
    setTransport(null);
    if (distDebounce.current) clearTimeout(distDebounce.current);
    distDebounce.current = setTimeout(() => lookupDistance(v), 800);
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  function toggleAddOn(id: AddOnId) {
    setAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  async function onUnlock(data: ContactData) {
    // In production: POST to /api/quote-lead with data + estimate
    await new Promise((r) => setTimeout(r, 700));
    console.log("Lead captured:", data);
    setUnlocked(true);
    setSubmitted(true);
  }

  const corporateTypes = EVENT_TYPES.filter((e) => e.category === "corporate");
  const privateTypes   = EVENT_TYPES.filter((e) => e.category === "private");

  return (
    <div className="space-y-6">
      {/* Live estimate banner */}
      {estimate && (
        <div className="bg-[#1c1c1e] rounded-2xl p-5 flex items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <Calculator className="w-5 h-5 text-[#b8932a] flex-shrink-0" />
            <div>
              <p className="text-white text-sm font-semibold">Live Estimate</p>
              <p className="text-stone-400 text-xs">Updates as you choose</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-serif font-bold text-xl md:text-2xl text-[#D4AF37]">
              {formatMYR((totalWithTransport || estimate).min)} – {formatMYR((totalWithTransport || estimate).max)}
            </p>
            <p className="text-[10px] text-stone-500">
              {transport ? "Incl. transport fee · " : ""}Unlock for itemised breakdown.
            </p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
        {/* Step 1 — Event Type */}
        <div className="p-7 border-b border-stone-100">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 rounded-full bg-[#b8932a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
            <h3 className="font-semibold text-[#1c1c1e]">Event Type</h3>
            <span lang="ms" className="text-xs text-stone-400 italic">Jenis Acara</span>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Corporate</p>
              <div className="grid grid-cols-2 gap-2">
                {corporateTypes.map((t) => (
                  <label key={t.value} className={cn(
                    "flex flex-col p-3 rounded-xl border cursor-pointer transition-all",
                    eventType === t.value
                      ? "border-[#b8932a] bg-[#b8932a]/5"
                      : "border-stone-200 hover:border-stone-300"
                  )}>
                    <input type="radio" name="eventType" value={t.value}
                      checked={eventType === t.value}
                      onChange={() => setEventType(t.value)}
                      className="sr-only"
                    />
                    <span className={cn("text-sm font-medium leading-tight", eventType === t.value ? "text-[#b8932a]" : "text-[#1c1c1e]")}>
                      {t.label}
                    </span>
                    <span lang="ms" className="text-[10px] text-stone-400 italic mt-0.5">{t.labelMs}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-2">Private</p>
              <div className="grid grid-cols-2 gap-2">
                {privateTypes.map((t) => (
                  <label key={t.value} className={cn(
                    "flex flex-col p-3 rounded-xl border cursor-pointer transition-all",
                    eventType === t.value
                      ? "border-[#b8932a] bg-[#b8932a]/5"
                      : "border-stone-200 hover:border-stone-300"
                  )}>
                    <input type="radio" name="eventType" value={t.value}
                      checked={eventType === t.value}
                      onChange={() => setEventType(t.value)}
                      className="sr-only"
                    />
                    <span className={cn("text-sm font-medium leading-tight", eventType === t.value ? "text-[#b8932a]" : "text-[#1c1c1e]")}>
                      {t.label}
                    </span>
                    <span lang="ms" className="text-[10px] text-stone-400 italic mt-0.5">{t.labelMs}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 — Guests */}
        <div className="p-7 border-b border-stone-100">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 rounded-full bg-[#b8932a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
            <h3 className="font-semibold text-[#1c1c1e]">Number of Guests</h3>
            <span lang="ms" className="text-xs text-stone-400 italic">Bilangan Tetamu</span>
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-serif font-bold text-[#b8932a]">{guests}</span>
              <span className="text-sm text-stone-500">pax</span>
            </div>
            <input
              type="range"
              min={20}
              max={1000}
              step={10}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-full appearance-none cursor-pointer accent-[#b8932a]"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-2">
              <span>20</span><span>500</span><span>1,000+</span>
            </div>
            <p className="text-xs text-stone-400 mt-2">Need 1,000+ pax? <a href="/contact" className="text-[#b8932a] underline-offset-2 hover:underline">Contact us directly</a>.</p>
          </div>
        </div>

        {/* Step 3 — Package Tier */}
        <div className="p-7 border-b border-stone-100">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 rounded-full bg-[#b8932a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
            <h3 className="font-semibold text-[#1c1c1e]">Package Tier</h3>
            <span lang="ms" className="text-xs text-stone-400 italic">Peringkat Pakej</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {PACKAGE_TIERS.map((t) => (
              <label key={t.value} className={cn(
                "p-4 rounded-xl border cursor-pointer text-center transition-all",
                tier === t.value ? "border-[#b8932a] bg-[#b8932a]/5" : "border-stone-200 hover:border-stone-300"
              )}>
                <input type="radio" name="tier" value={t.value}
                  checked={tier === t.value}
                  onChange={() => setTier(t.value)}
                  className="sr-only"
                />
                <p className={cn("font-bold text-sm", tier === t.value ? "text-[#b8932a]" : "text-[#1c1c1e]")}>
                  {t.label}
                </p>
                <p lang="ms" className="text-[10px] text-stone-400 italic">{t.labelMs}</p>
                <p className="text-[10px] text-stone-500 mt-1 leading-tight">{t.description}</p>
              </label>
            ))}
          </div>
        </div>

        {/* Step 4 — Add-ons */}
        <div className="p-7 border-b border-stone-100">
          <button
            type="button"
            onClick={() => setShowAddOns(!showAddOns)}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#b8932a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
              <h3 className="font-semibold text-[#1c1c1e]">Add-ons</h3>
              <span lang="ms" className="text-xs text-stone-400 italic">Tambahan</span>
              {addOns.length > 0 && (
                <span className="text-xs bg-[#b8932a] text-white px-2 py-0.5 rounded-full font-semibold">
                  {addOns.length} selected
                </span>
              )}
            </div>
            {showAddOns ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
          </button>

          {showAddOns && (
            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {ADD_ONS.map((ao) => {
                const isSelected = addOns.includes(ao.id as AddOnId);
                const price = ao.priceFixed
                  ? `+${formatMYR(ao.priceFixed)}${ao.pricePerPax ? ` + ${formatMYR(ao.pricePerPax)}/pax` : ""}`
                  : ao.pricePerPax ? `+${formatMYR(ao.pricePerPax)}/pax` : "";
                return (
                  <label key={ao.id} className={cn(
                    "flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all",
                    isSelected ? "border-[#b8932a] bg-[#b8932a]/5" : "border-stone-200 hover:border-stone-300"
                  )}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleAddOn(ao.id as AddOnId)}
                      className="mt-0.5 accent-[#b8932a] w-4 h-4 flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className={cn("text-sm font-medium leading-tight", isSelected ? "text-[#b8932a]" : "text-[#1c1c1e]")}>
                        {ao.label}
                      </p>
                      <p lang="ms" className="text-[10px] text-stone-400 italic">{ao.labelMs}</p>
                      <p className="text-[10px] text-stone-500 mt-0.5">{ao.description}</p>
                      <p className="text-xs font-semibold text-[#b8932a] mt-1">{price}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* Step 5 — Venue Address (Distance Pricing) */}
        <div className="p-7 border-b border-stone-100">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-7 rounded-full bg-[#D4AF37] text-[#080808] text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
            <h3 className="font-semibold text-[#1c1c1e]">Event Venue</h3>
            <span lang="ms" className="text-xs text-stone-400 italic">Lokasi Acara</span>
            <span className="text-[10px] text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Auto transport fee</span>
          </div>
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="e.g. Shah Alam Convention Centre, Subang Jaya..."
              value={venueAddress}
              onChange={(e) => handleVenueChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 outline-none text-sm text-[#1c1c1e] placeholder:text-stone-400"
            />
            {distLoading && (
              <div className="absolute right-4 top-3.5 w-4 h-4 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
            )}
          </div>
          {transport && (
            <div className="mt-3 bg-[#D4AF37]/8 border border-[#D4AF37]/20 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <p className="text-sm font-semibold text-[#1c1c1e]">
                    {transport.distanceKm ? `${transport.distanceKm} km` : "Distance calculated"}
                    {transport.durationMin ? ` · ~${transport.durationMin} min drive` : ""}
                  </p>
                  <p className="text-xs text-stone-500">{transport.breakdown}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#D4AF37]">+RM {transport.transportFee}</p>
                <p className="text-[10px] text-stone-500">transport</p>
              </div>
            </div>
          )}
        </div>

        {/* Unlock Gate */}
        <div className="p-7">
          {!submitted ? (
            <>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-7 rounded-full bg-stone-200 text-stone-500 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1c1c1e]">Unlock Detailed Proposal</h3>
                  <p className="text-xs text-stone-500">Enter your details to see the full cost breakdown and receive a proposal within 24hrs.</p>
                </div>
              </div>

              {!estimate && (
                <div className="bg-stone-50 border border-dashed border-stone-300 rounded-xl p-4 text-center mb-4">
                  <p className="text-sm text-stone-500">Select an event type above to see your live estimate</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onUnlock)} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/15 outline-none text-sm text-[#1c1c1e] placeholder:text-stone-400"
                />
                {errors.name && <p className="text-rose-500 text-xs">{errors.name.message}</p>}

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/15 outline-none text-sm text-[#1c1c1e] placeholder:text-stone-400"
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp *"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/15 outline-none text-sm text-[#1c1c1e] placeholder:text-stone-400"
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !eventType}
                  className="w-full py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                >
                  {isSubmitting ? (
                    "Preparing your proposal..."
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      Unlock My Detailed Proposal
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-stone-400">
                  No spam. We'll contact you within 24 hours.
                </p>
              </form>
            </>
          ) : (
            /* ── UNLOCKED STATE ── */
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-emerald-600">
                <CheckCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Proposal Unlocked!</p>
                  <p className="text-sm text-stone-500">Our team will reach out within 24 hours.</p>
                </div>
              </div>

              {estimate && (
                <div className="bg-[#faf8f4] rounded-2xl p-5 border border-stone-200">
                  <p className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    Your Detailed Breakdown
                  </p>
                  {estimate.breakdown.map((line) => (
                    <div key={line.label} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0 text-sm">
                      <span className="text-stone-600">{line.label}</span>
                      <span className="font-semibold text-[#1c1c1e]">{formatMYR(line.amount)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 mt-1">
                    <span className="font-bold text-[#1c1c1e]">Estimated Total</span>
                    <span className="font-serif font-bold text-[#b8932a] text-lg">
                      {formatMYR(estimate.min)} – {formatMYR(estimate.max)}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-400 mt-2">
                    Final pricing subject to menu selection and site visit. Inclusive of setup & teardown.
                  </p>
                </div>
              )}

              <a
                href="/thank-you"
                className="block w-full py-3.5 text-center border border-[#b8932a] text-[#b8932a] font-semibold rounded-full hover:bg-[#b8932a]/5 transition-colors"
              >
                What happens next? <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
