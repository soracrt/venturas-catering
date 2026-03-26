"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Clock, Truck, ChefHat, MapPin, Phone, AlertCircle } from "lucide-react";

type DeliveryStatus = "preparing" | "loaded" | "en-route" | "arriving" | "arrived";

type TrackerData = {
  orderId: string;
  clientName: string;
  eventDate: string;
  eventVenue: string;
  eta: string;
  distanceLeft: string;
  driverName: string;
  driverPhone: string;
  status: DeliveryStatus;
  lastUpdate: string;
};

// Demo data — in production this comes from a WebSocket / Supabase real-time subscription
const DEMO_DATA: TrackerData = {
  orderId:      "VC-2026-0342",
  clientName:   "Ahmad Razif",
  eventDate:    "Today, 12:00 PM",
  eventVenue:   "Shah Alam Convention Centre",
  eta:          "11:15 AM",
  distanceLeft: "8.2 km",
  driverName:   "Radzif Hamdan",
  driverPhone:  "+60 12-789 0123",
  status:       "en-route",
  lastUpdate:   "2 min ago",
};

const STEPS: { key: DeliveryStatus; icon: typeof ChefHat; label: string; ms: string }[] = [
  { key: "preparing",  icon: ChefHat,       label: "Preparing",     ms: "Sedang Disediakan" },
  { key: "loaded",     icon: CheckCircle,   label: "Loaded",        ms: "Dimuat" },
  { key: "en-route",   icon: Truck,         label: "En Route",      ms: "Dalam Perjalanan" },
  { key: "arriving",   icon: MapPin,        label: "Arriving Soon", ms: "Hampir Tiba" },
  { key: "arrived",    icon: CheckCircle,   label: "Arrived",       ms: "Telah Tiba" },
];

const STATUS_ORDER: DeliveryStatus[] = ["preparing", "loaded", "en-route", "arriving", "arrived"];

export default function LiveTracker({ token }: { token?: string }) {
  const [data, setData] = useState<TrackerData>(DEMO_DATA);
  const [pulse, setPulse] = useState(false);

  // Simulate live updates — replace with:
  // const supabase = createClient(); supabase.channel('tracker').on('broadcast'...) subscribe()
  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const currentStep = STATUS_ORDER.indexOf(data.status);
  const isLive = data.status === "en-route" || data.status === "arriving";

  return (
    <div className="bg-[#080808] border border-white/8">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
            Live Logistics Tracker
          </p>
          <p className="text-white font-semibold text-sm mt-0.5">Order {data.orderId}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isLive ? "bg-green-400" : "bg-stone-600"} ${pulse ? "scale-150" : ""} transition-transform`} />
          <span className="text-xs text-stone-500">{isLive ? "Live" : "Standby"}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-0">
        {/* Map placeholder / real map */}
        <div className="relative bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-white/5" style={{ minHeight: "320px" }}>
          {/* In production: mount a Google Map here with the driver's real-time lat/lng */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
              <Truck className={`w-6 h-6 text-[#D4AF37] ${isLive ? "animate-bounce" : ""}`} />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">{data.distanceLeft} away</p>
              <p className="text-stone-500 text-xs">ETA {data.eta}</p>
            </div>

            {/* Animated route line placeholder */}
            <div className="w-40 h-px relative overflow-hidden bg-stone-800 mt-2">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#e2c175]"
                style={{ width: "65%", transition: "width 2s ease" }}
              />
            </div>
            <div className="flex justify-between w-40 text-[10px] text-stone-600">
              <span>Venturas HQ</span>
              <span>{data.eventVenue.split(" ")[0]}…</span>
            </div>
          </div>

          {/* Live indicator */}
          {isLive && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400 font-semibold uppercase tracking-wider">GPS Live</span>
            </div>
          )}

          <div className="absolute bottom-3 right-3 text-[10px] text-stone-700 italic">
            Connect driver app to activate GPS
          </div>
        </div>

        {/* Details panel */}
        <div className="p-6 flex flex-col gap-5">
          {/* Event info */}
          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-3">Your Event</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Client</span>
                <span className="text-white font-medium">{data.clientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Time</span>
                <span className="text-white font-medium">{data.eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Venue</span>
                <span className="text-white font-medium text-right">{data.eventVenue}</span>
              </div>
            </div>
          </div>

          {/* Driver info */}
          <div className="border-t border-white/5 pt-5">
            <p className="text-[9px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-3">Your Driver</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">{data.driverName}</p>
                <p className="text-stone-500 text-xs mt-0.5">{data.driverPhone}</p>
              </div>
              <a
                href={`tel:${data.driverPhone.replace(/\s/g, "")}`}
                className="w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37]/20 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              </a>
            </div>
          </div>

          {/* ETA */}
          <div className="bg-[#D4AF37]/8 border border-[#D4AF37]/20 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-sm text-stone-300">Estimated Arrival</span>
            </div>
            <span className="font-serif font-bold text-[#D4AF37] text-lg">{data.eta}</span>
          </div>

          <p className="text-[10px] text-stone-700">Last updated {data.lastUpdate}</p>
        </div>
      </div>

      {/* Progress steps */}
      <div className="border-t border-white/5 px-6 py-5">
        <div className="flex items-center justify-between">
          {STEPS.map((step, i) => {
            const done    = i < currentStep;
            const active  = i === currentStep;
            const Icon    = step.icon;
            return (
              <div key={step.key} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    active  ? "bg-[#D4AF37] border-[#D4AF37]" :
                    done    ? "bg-[#D4AF37]/20 border-[#D4AF37]/50" :
                              "bg-[#141414] border-white/10"
                  }`}>
                    <Icon className={`w-3.5 h-3.5 ${active || done ? "text-[#D4AF37]" : "text-stone-600"}`} />
                  </div>
                  <p className={`text-[9px] text-center hidden sm:block ${active ? "text-[#D4AF37] font-semibold" : "text-stone-600"}`}>
                    {step.label}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px mx-1 ${i < currentStep ? "bg-[#D4AF37]/40" : "bg-white/5"}`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Backend note */}
      <div className="border-t border-white/5 px-6 py-3 flex items-start gap-2">
        <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-[10px] text-stone-700">
          Real-time GPS requires a driver mobile app (React Native / Flutter) sending lat/lng to a
          WebSocket server (Supabase Realtime recommended). This UI is ready to connect — see <code className="text-stone-600">LiveTracker.tsx</code>.
        </p>
      </div>
    </div>
  );
}
