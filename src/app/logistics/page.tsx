import type { Metadata } from "next";
import ServiceAreaMap from "@/components/map/ServiceAreaMap";
import LiveTracker from "@/components/map/LiveTracker";
import Link from "next/link";
import { Truck, MapPin, Navigation, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Live Logistics Hub — Service Area & Event Tracker",
  description:
    "See every area we've catered in the Klang Valley. View our service area map with real event pins. Clients: track your delivery live on event day.",
};

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">
            Logistics Transparency
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            The Most Transparent<br />Caterer in Malaysia.
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            See exactly where we've worked, check if we cover your area, and on event day —
            track your delivery van in real-time. No more "where is the food?" anxiety.
          </p>
        </div>

        {/* 3 feature cards */}
        <div className="grid sm:grid-cols-3 gap-px bg-white/5 mb-14">
          {[
            { icon: MapPin,     title: "Impact Map",         body: "Every event pin on the map is a real delivery we completed — click to see photos and details." },
            { icon: Truck,      title: "Live Tracker",       body: "On event day, clients get a private link to see their delivery van's real-time GPS location." },
            { icon: Navigation, title: "Distance Pricing",   body: "Transport fees auto-calculated based on your venue address — no surprises on the invoice." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-[#080808] p-7 hover:bg-[#0d0d0d] transition-colors">
              <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center mb-5">
                <Icon className="w-4.5 h-4.5 text-[#c9a84c]" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* ── SERVICE AREA MAP ── */}
        <div className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-2">
                Interactive
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                Venturas Impact Map
              </h2>
            </div>
            <p className="text-xs text-stone-600 hidden sm:block">
              Click any pin to see event details
            </p>
          </div>
          <ServiceAreaMap />
        </div>

        {/* ── LIVE TRACKER DEMO ── */}
        <div className="mb-16">
          <div className="mb-6">
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-2">
              Client Feature
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              Your Private Live Tracker
            </h2>
            <p className="text-stone-500 text-sm max-w-xl">
              On event day, we send you a private link. Open it on any device to see your
              delivery van live on the map. Below is a demo — real data connects via the driver app.
            </p>
          </div>
          <LiveTracker />
        </div>

        {/* ── DISTANCE PRICING EXPLAINER ── */}
        <div className="bg-[#0d0d0d] border border-white/8 p-8 mb-14">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-3">
                Distance-Based Pricing
              </p>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Transport Fees Calculated<br />from Your Venue Address.
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Enter your venue in the quote calculator and our Distance Matrix API
                calculates the exact transport fee based on distance from our Shah Alam kitchen.
                No hidden charges.
              </p>
              <Link href="/quote" className="btn-gold text-xs py-3 px-6">
                Try It in the Calculator <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { zone: "Shah Alam / Subang",   km: "0–15 km",    fee: "RM 80" },
                { zone: "Petaling Jaya / KL",   km: "15–30 km",   fee: "RM 80–155" },
                { zone: "Cyberjaya / Putrajaya", km: "30–45 km",   fee: "RM 155–230" },
                { zone: "Puchong / Klang",       km: "15–30 km",   fee: "RM 80–155" },
                { zone: "Outside 50km",          km: "50km+",      fee: "Quote on request" },
              ].map((row) => (
                <div key={row.zone} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0 text-sm">
                  <div>
                    <span className="text-white">{row.zone}</span>
                    <span className="text-stone-600 text-xs ml-2">({row.km})</span>
                  </div>
                  <span className="font-semibold text-[#c9a84c]">{row.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/quote" className="btn-gold">
            Get Your Quote with Transport Included <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
