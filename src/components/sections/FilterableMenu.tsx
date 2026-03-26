"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Sparkles, ShieldCheck, Leaf, ArrowRight } from "lucide-react";
import { menuItems, categoryLabels, type MenuCategory } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const ALL = "all" as const;
type Filter = MenuCategory | typeof ALL;

const filters: { value: Filter; label: string; labelMs: string }[] = [
  { value: ALL,     label: "All Dishes",   labelMs: "Semua Hidangan" },
  { value: "buffet", label: "Buffet",       labelMs: "Bufet" },
  { value: "bento",  label: "Bento Box",    labelMs: "Kotak Bento" },
  { value: "halal",  label: "Halal",        labelMs: "Halal" },
  { value: "vegan",  label: "Vegan",        labelMs: "Vegan" },
];

export default function FilterableMenu() {
  const [active, setActive] = useState<Filter>(ALL);

  const filtered =
    active === ALL
      ? menuItems
      : menuItems.filter((item) => item.category.includes(active));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={cn(
              "group flex flex-col items-center px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200",
              active === f.value
                ? "bg-[#D4AF37] border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/25"
                : "bg-white border-stone-200 text-stone-600 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            )}
          >
            <span>{f.label}</span>
            <span
              lang="ms"
              className={cn(
                "text-[10px] font-normal leading-none mt-0.5",
                active === f.value ? "text-white/70" : "text-stone-400"
              )}
            >
              {f.labelMs}
            </span>
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="text-center text-sm text-stone-400 mb-8">
        Showing {filtered.length} dish{filtered.length !== 1 ? "es" : ""}
      </p>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="menu-card group relative bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Image placeholder — replace with <Image> when assets are ready */}
            <div className="relative h-52 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm font-medium">
                {item.name}
              </div>

              {/* Ingredient reveal overlay */}
              <div className="menu-card-overlay absolute inset-0 bg-[#1B1F23]/95 p-5 flex flex-col justify-between">
                <div>
                  <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wide mb-3">
                    Ingredients
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-white text-xs bg-white/10 px-2 py-1 rounded-full"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
                {item.allergens && item.allergens.length > 0 && (
                  <div>
                    <p className="text-amber-400 text-xs font-medium">
                      ⚠ Contains: {item.allergens.join(", ")}
                    </p>
                  </div>
                )}
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {item.popular && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-white bg-[#D4AF37] px-2 py-0.5 rounded-full">
                    <Sparkles className="w-2.5 h-2.5" /> Popular
                  </span>
                )}
                {item.new && (
                  <span className="text-[10px] font-bold text-white bg-blue-500 px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
                {item.spicy && (
                  <span className="flex items-center gap-0.5 text-[10px] font-bold text-white bg-red-500 px-2 py-0.5 rounded-full">
                    <Flame className="w-2.5 h-2.5" /> Spicy
                  </span>
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-semibold text-[#1B1F23] leading-tight">{item.name}</h3>
                  {item.nameMs && (
                    <p lang="ms" className="text-xs text-stone-400 italic mt-0.5">
                      {item.nameMs}
                    </p>
                  )}
                </div>
                {item.priceFrom && (
                  <div className="text-right flex-shrink-0">
                    <span className="text-[#D4AF37] font-bold text-sm">{item.priceFrom}</span>
                    <p className="text-[10px] text-stone-400">/pax</p>
                  </div>
                )}
              </div>

              <p className="text-[#1B1F23] text-xs leading-relaxed mb-3 line-clamp-2">
                {item.description}
              </p>

              {/* Category tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.category.map((cat) => {
                  const label = categoryLabels[cat];
                  return (
                    <span
                      key={cat}
                      className={cn(
                        "text-[10px] font-semibold px-2 py-0.5 rounded-full border flex items-center gap-1",
                        label.bg,
                        label.color
                      )}
                    >
                      {cat === "halal" && <ShieldCheck className="w-2.5 h-2.5" />}
                      {cat === "vegan" && <Leaf className="w-2.5 h-2.5" />}
                      {label.en}
                    </span>
                  );
                })}
              </div>

              <p className="text-[10px] text-stone-400 mt-2 italic">
                Hover image to reveal ingredients
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Request custom menu CTA */}
      <div className="mt-16 bg-[#faf8f4] rounded-3xl p-8 md:p-12 text-center border border-stone-200">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1B1F23] mb-3">
          Don't See What You Need?
        </h2>
        <p className="text-[#1B1F23] mb-7 max-w-lg mx-auto">
          Every menu is fully customisable. Tell us your preferences, dietary requirements, and
          event theme — our chef will design something bespoke.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#D4AF37] text-white font-semibold rounded-full hover:bg-[#A8892A] transition-colors"
          >
            Request Custom Menu <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/60123456789?text=Hi%20Venturas!%20I%20need%20a%20custom%20menu%20for%20my%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-stone-300 text-[#1B1F23] font-semibold rounded-full hover:bg-stone-100 transition-colors"
          >
            WhatsApp the Chef
          </a>
        </div>
      </div>
    </div>
  );
}
