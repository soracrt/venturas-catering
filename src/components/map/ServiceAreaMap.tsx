"use client";

import { useEffect, useRef, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import { EVENT_PINS, VENUE_GUIDES, VENTURAS_MAP_STYLE, VENTURAS_HQ, type EventPin, type VenueGuide } from "@/lib/map-data";
import { MapPin, Building2, Users, ArrowRight } from "lucide-react";

const PIN_COLORS = {
  corporate: "#3b82f6",
  wedding:   "#c9a84c",
  private:   "#e879a0",
};

const TYPE_LABELS = {
  corporate: "Corporate",
  wedding:   "Wedding",
  private:   "Private",
};

export default function ServiceAreaMap() {
  const mapRef        = useRef<HTMLDivElement>(null);
  const mapInstance   = useRef<google.maps.Map | null>(null);
  const [selected, setSelected]     = useState<EventPin | null>(null);
  const [activeVenue, setActiveVenue] = useState<VenueGuide | null>(null);
  const [tab, setTab]               = useState<"events" | "venues">("events");
  const [loaded, setLoaded]         = useState(false);
  const [error, setError]           = useState<string | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey || apiKey === "your_key_here") {
      setError("no-key");
      return;
    }

    setOptions({
      key: apiKey,
      v: "weekly",
      libraries: ["places", "geometry"],
    });

    importLibrary("maps").then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: VENTURAS_HQ,
        zoom: 11,
        styles: VENTURAS_MAP_STYLE,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
      });

      mapInstance.current = map;

      // ── HQ marker ──
      new google.maps.Marker({
        position: VENTURAS_HQ,
        map,
        title: "Venturas Catering HQ — Shah Alam",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#c9a84c",
          fillOpacity: 1,
          strokeColor: "#fff",
          strokeWeight: 2,
        },
        zIndex: 100,
      });

      // ── Event pins ──
      EVENT_PINS.forEach((pin) => {
        const marker = new google.maps.Marker({
          position: { lat: pin.lat, lng: pin.lng },
          map,
          title: pin.area,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: PIN_COLORS[pin.type],
            fillOpacity: 0.9,
            strokeColor: "#fff",
            strokeWeight: 1.5,
          },
        });

        marker.addListener("click", () => {
          setSelected(pin);
          setActiveVenue(null);
          map.panTo({ lat: pin.lat, lng: pin.lng });
        });

        // Pulse ring on hover
        marker.addListener("mouseover", () => {
          marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: 11,
            fillColor: PIN_COLORS[pin.type],
            fillOpacity: 1,
            strokeColor: "#c9a84c",
            strokeWeight: 2,
          });
        });
        marker.addListener("mouseout", () => {
          marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: PIN_COLORS[pin.type],
            fillOpacity: 0.9,
            strokeColor: "#fff",
            strokeWeight: 1.5,
          });
        });
      });

      // ── Venue guide pins ──
      VENUE_GUIDES.forEach((venue) => {
        const marker = new google.maps.Marker({
          position: { lat: venue.lat, lng: venue.lng },
          map,
          title: venue.name,
          icon: {
            path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
            scale: 5,
            fillColor: "#7c3aed",
            fillOpacity: 0.9,
            strokeColor: "#fff",
            strokeWeight: 1,
            rotation: 0,
          },
          visible: tab === "venues",
        });

        marker.addListener("click", () => {
          setActiveVenue(venue);
          setSelected(null);
          map.panTo({ lat: venue.lat, lng: venue.lng });
        });
      });

      setLoaded(true);
    }).catch(() => setError("load-failed"));
  }, [apiKey]);

  if (error === "no-key") {
    return <MapFallback />;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-0 bg-[#080808] border border-white/8 overflow-hidden">
      {/* ── MAP ── */}
      <div className="lg:col-span-2 relative" style={{ minHeight: "520px" }}>
        <div ref={mapRef} className="absolute inset-0" />

        {!loaded && !error && (
          <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-[#c9a84c] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-stone-500 text-sm">Loading Venturas Impact Map…</p>
            </div>
          </div>
        )}

        {/* Tab switcher overlay */}
        <div className="absolute top-4 left-4 flex gap-1 z-10">
          {(["events", "venues"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                tab === t
                  ? "bg-[#c9a84c] text-[#080808]"
                  : "bg-[#080808]/80 text-stone-400 hover:text-white backdrop-blur-sm border border-white/10"
              }`}
            >
              {t === "events" ? "Event Map" : "Venue Guides"}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-[#080808]/90 backdrop-blur-sm border border-white/8 px-4 py-3 z-10">
          <p className="text-[9px] tracking-[0.25em] uppercase text-stone-600 font-semibold mb-2">Legend</p>
          <div className="space-y-1.5">
            {(Object.entries(PIN_COLORS) as [keyof typeof PIN_COLORS, string][]).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
                <span className="text-xs text-stone-400">{TYPE_LABELS[type]}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-[#c9a84c]" />
              <span className="text-xs text-stone-400">Venturas HQ</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SIDEBAR ── */}
      <div className="border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col" style={{ minHeight: "520px" }}>
        {selected ? (
          <EventDetail pin={selected} onClose={() => setSelected(null)} />
        ) : activeVenue ? (
          <VenueDetail venue={activeVenue} onClose={() => setActiveVenue(null)} />
        ) : (
          <DefaultPanel eventCount={EVENT_PINS.length} />
        )}
      </div>
    </div>
  );
}

function DefaultPanel({ eventCount }: { eventCount: number }) {
  return (
    <div className="p-7 flex flex-col h-full">
      <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-4">
        Impact Map
      </p>
      <h3 className="font-serif text-xl font-bold text-white mb-2">
        Venturas Across<br />the Klang Valley
      </h3>
      <div className="w-8 h-px bg-[#c9a84c] mb-5" />
      <p className="text-stone-500 text-sm leading-relaxed mb-6">
        Click any pin to see the event we delivered there — photos, pax count, and what made it special.
      </p>
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between py-2 border-b border-white/5 text-sm">
          <span className="text-stone-500">Events on map</span>
          <span className="font-semibold text-white">{eventCount}</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-white/5 text-sm">
          <span className="text-stone-500">Service radius</span>
          <span className="font-semibold text-white">60 km</span>
        </div>
        <div className="flex items-center justify-between py-2 text-sm">
          <span className="text-stone-500">Venues pre-loaded</span>
          <span className="font-semibold text-white">3 guides</span>
        </div>
      </div>
      <div className="mt-auto">
        <a href="/quote" className="btn-gold w-full justify-center text-xs py-3">
          Check Your Area <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function EventDetail({ pin, onClose }: { pin: EventPin; onClose: () => void }) {
  return (
    <div className="p-7 flex flex-col h-full overflow-y-auto">
      <button onClick={onClose} className="text-[10px] text-stone-600 uppercase tracking-wider hover:text-[#c9a84c] transition-colors mb-5 text-left">
        ← Back to map
      </button>

      {/* Event type badge */}
      <span
        className="self-start text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 mb-3"
        style={{ background: `${PIN_COLORS[pin.type]}20`, color: PIN_COLORS[pin.type] }}
      >
        {TYPE_LABELS[pin.type]} Event
      </span>

      <h3 className="font-serif text-lg font-bold text-white mb-1">{pin.recentEvent}</h3>
      <p className="text-stone-500 text-xs mb-4">{pin.venue}</p>

      {/* Photo placeholder */}
      <div className="aspect-video bg-[#141414] border border-white/5 flex items-center justify-center mb-5 relative overflow-hidden">
        <MapPin className="w-6 h-6 text-stone-700" />
        <div className="absolute bottom-2 left-2 right-2 text-center">
          <p className="text-stone-600 text-[10px]">Add event photo: /public/images/events/{pin.id}.jpg</p>
        </div>
        {/* Replace with: <Image src={`/images/events/${pin.id}.jpg`} alt={`${pin.recentEvent} catering Shah Alam`} fill className="object-cover" /> */}
      </div>

      <div className="space-y-2.5 text-sm">
        <div className="flex items-center gap-2 text-stone-400">
          <Building2 className="w-3.5 h-3.5 text-[#c9a84c]" />
          <span>{pin.client}</span>
        </div>
        <div className="flex items-center gap-2 text-stone-400">
          <Users className="w-3.5 h-3.5 text-[#c9a84c]" />
          <span>{pin.pax} pax</span>
        </div>
        <div className="flex items-center gap-2 text-stone-400">
          <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
          <span>{pin.area}</span>
        </div>
      </div>

      <div className="mt-4 bg-[#c9a84c]/8 border border-[#c9a84c]/20 p-4">
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold mb-1">What made it special</p>
        <p className="text-stone-300 text-sm">{pin.highlight}</p>
      </div>

      <div className="mt-auto pt-5">
        <a href={`/quote?area=${encodeURIComponent(pin.area)}`} className="btn-gold w-full justify-center text-xs py-3">
          Book for {pin.area} <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function VenueDetail({ venue, onClose }: { venue: VenueGuide; onClose: () => void }) {
  return (
    <div className="p-7 flex flex-col h-full overflow-y-auto">
      <button onClick={onClose} className="text-[10px] text-stone-600 uppercase tracking-wider hover:text-[#c9a84c] transition-colors mb-5 text-left">
        ← Back to map
      </button>

      <span className="self-start text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 mb-3 bg-purple-500/10 text-purple-400">
        Venue Guide
      </span>

      <h3 className="font-serif text-base font-bold text-white mb-1">{venue.name}</h3>
      <p className="text-stone-500 text-xs mb-5">{venue.capacity}</p>

      <div className="space-y-4">
        {[
          { label: "Logistics Note",  value: venue.notes },
          { label: "Buffet Zone",     value: venue.buffetZone },
          { label: "Parking & Access",value: venue.parkingNote },
        ].map((item) => (
          <div key={item.label} className="border-l-2 border-[#c9a84c]/30 pl-4">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold mb-1">{item.label}</p>
            <p className="text-stone-400 text-xs leading-relaxed">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <a href={`/quote?venue=${encodeURIComponent(venue.name)}`} className="btn-gold w-full justify-center text-xs py-3">
          Quote for this Venue <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

// Shown when no API key is configured
function MapFallback() {
  return (
    <div className="bg-[#0d0d0d] border border-white/8 p-8">
      <p className="text-[9px] tracking-[0.3em] uppercase text-[#c9a84c] font-semibold mb-4">Impact Map</p>
      <h3 className="font-serif text-xl font-bold text-white mb-4">Venturas Across the Klang Valley</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {EVENT_PINS.map((pin) => (
          <div key={pin.id} className="bg-[#141414] border border-white/5 p-3 hover:border-[#c9a84c]/30 transition-colors">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full" style={{ background: PIN_COLORS[pin.type] }} />
              <span className="text-[10px] text-stone-400 font-medium">{pin.area}</span>
            </div>
            <p className="text-[10px] text-stone-600">{pin.pax} pax · {TYPE_LABELS[pin.type]}</p>
          </div>
        ))}
      </div>

      <div className="bg-amber-900/20 border border-amber-500/20 p-4 text-sm text-amber-400">
        <p className="font-semibold mb-1">To activate the interactive map:</p>
        <ol className="text-xs space-y-1 text-amber-500/80 list-decimal list-inside">
          <li>Get a key at console.cloud.google.com</li>
          <li>Enable: Maps JavaScript API, Distance Matrix API</li>
          <li>Add <code className="bg-black/30 px-1">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key</code> to <code className="bg-black/30 px-1">.env.local</code></li>
        </ol>
      </div>
    </div>
  );
}
