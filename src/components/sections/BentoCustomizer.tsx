"use client";

import { useState } from "react";
import { Plus, X, Share2, ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoSlot = "protein" | "rice" | "side1" | "side2" | "sauce" | "fruit";
type BentoItem = { id: string; name: string; nameMs: string; emoji: string; price: number; slot: BentoSlot; spicy?: boolean; vegan?: boolean };

const SLOT_LABELS: Record<BentoSlot, { en: string; ms: string; emoji: string }> = {
  protein: { en: "Protein",  ms: "Protein",       emoji: "🍗" },
  rice:    { en: "Rice",     ms: "Nasi",           emoji: "🍚" },
  side1:   { en: "Side 1",   ms: "Lauk 1",         emoji: "🥦" },
  side2:   { en: "Side 2",   ms: "Lauk 2",         emoji: "🥕" },
  sauce:   { en: "Sauce",    ms: "Sos",            emoji: "🫙" },
  fruit:   { en: "Fruit",    ms: "Buah",           emoji: "🍊" },
};

const ITEMS: BentoItem[] = [
  // Proteins
  { id: "ayam-rendang",    name: "Ayam Rendang",       nameMs: "Rendang Ayam",          emoji: "🍗", price: 4.50, slot: "protein" },
  { id: "daging-berlada",  name: "Beef Chilli Fry",    nameMs: "Daging Berlada",         emoji: "🥩", price: 5.50, slot: "protein", spicy: true },
  { id: "ikan-masak-kicap",name: "Soy Sauce Fish",     nameMs: "Ikan Masak Kicap",       emoji: "🐟", price: 5.00, slot: "protein" },
  { id: "teriyaki",        name: "Teriyaki Chicken",   nameMs: "Ayam Teriyaki",          emoji: "🍗", price: 4.00, slot: "protein" },
  { id: "tofu-sambal",     name: "Sambal Tofu",        nameMs: "Tauhu Sambal",           emoji: "🧆", price: 3.00, slot: "protein", vegan: true, spicy: true },
  // Rice
  { id: "nasi-putih",      name: "Steamed Rice",       nameMs: "Nasi Putih",             emoji: "🍚", price: 1.00, slot: "rice" },
  { id: "nasi-lemak",      name: "Coconut Rice",       nameMs: "Nasi Lemak",             emoji: "🌴", price: 1.50, slot: "rice" },
  { id: "nasi-goreng",     name: "Fried Rice",         nameMs: "Nasi Goreng",            emoji: "🍳", price: 2.00, slot: "rice" },
  { id: "nasi-ulam",       name: "Herb Rice",          nameMs: "Nasi Ulam",              emoji: "🌿", price: 1.80, slot: "rice", vegan: true },
  // Sides
  { id: "sayur-campur",    name: "Stir-fry Veg",       nameMs: "Sayur Campur",           emoji: "🥦", price: 1.50, slot: "side1", vegan: true },
  { id: "acar",            name: "Pickled Acar",       nameMs: "Acar",                   emoji: "🥒", price: 1.20, slot: "side1", vegan: true },
  { id: "telur-dadar",     name: "Omelette",           nameMs: "Telur Dadar",            emoji: "🍳", price: 1.50, slot: "side1" },
  { id: "karipap",         name: "Curry Puff",         nameMs: "Karipap",                emoji: "🥟", price: 2.00, slot: "side2" },
  { id: "keropok",         name: "Prawn Crackers",     nameMs: "Keropok",                emoji: "🍘", price: 1.00, slot: "side2" },
  { id: "ulam",            name: "Fresh Ulam",         nameMs: "Ulam Raja",              emoji: "🥬", price: 1.20, slot: "side2", vegan: true },
  // Sauces
  { id: "sambal",          name: "House Sambal",       nameMs: "Sambal Rumah",           emoji: "🌶", price: 0.50, slot: "sauce", spicy: true, vegan: true },
  { id: "kicap",           name: "Sweet Soy",          nameMs: "Kicap Manis",            emoji: "🫙", price: 0.50, slot: "sauce", vegan: true },
  { id: "curry-gravy",     name: "Curry Gravy",        nameMs: "Kuah Kari",              emoji: "🍛", price: 0.70, slot: "sauce" },
  // Fruit
  { id: "watermelon",      name: "Watermelon",         nameMs: "Tembikai",               emoji: "🍉", price: 0.80, slot: "fruit", vegan: true },
  { id: "papaya",          name: "Papaya",             nameMs: "Betik",                  emoji: "🍑", price: 0.80, slot: "fruit", vegan: true },
  { id: "seasonal",        name: "Seasonal Mix",       nameMs: "Buah Campur Musim",      emoji: "🍊", price: 1.00, slot: "fruit", vegan: true },
];

const BASE_BOX_PRICE = 3; // packaging + handling
const MIN_BOXES      = 20;

type Selection = Partial<Record<BentoSlot, BentoItem>>;

export default function BentoCustomizer() {
  const [selection, setSelection] = useState<Selection>({
    rice:    ITEMS.find((i) => i.id === "nasi-putih")!,
    sauce:   ITEMS.find((i) => i.id === "sambal")!,
    fruit:   ITEMS.find((i) => i.id === "seasonal")!,
  });
  const [activeSlot, setActiveSlot]  = useState<BentoSlot | null>(null);
  const [boxes, setBoxes]            = useState(50);
  const [copied, setCopied]          = useState(false);

  const filledSlots   = Object.keys(selection).length;
  const isComplete    = filledSlots === 6;
  const pricePerBox   = Object.values(selection).reduce((sum, item) => sum + item.price, BASE_BOX_PRICE);
  const totalPrice    = pricePerBox * boxes;

  function select(item: BentoItem) {
    setSelection((prev) => ({ ...prev, [item.slot]: item }));
    setActiveSlot(null);
  }

  function remove(slot: BentoSlot) {
    setSelection((prev) => {
      const next = { ...prev };
      delete next[slot];
      return next;
    });
  }

  function share() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const slotOrder: BentoSlot[] = ["protein", "rice", "side1", "side2", "sauce", "fruit"];

  return (
    <div className="grid lg:grid-cols-5 gap-4">

      {/* ── BENTO BOX VISUAL ── */}
      <div className="lg:col-span-3 space-y-4">
        <div className="card-glass p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">Your Bento</p>
              <p lang="ms" className="text-[#1B1F23]/35 text-[10px] italic">Kotak Bento Anda</p>
            </div>
            <span className="text-xs text-[#1B1F23]/45">{filledSlots}/6 slots filled</span>
          </div>

          {/* 2×3 slot grid */}
          <div className="grid grid-cols-3 gap-2">
            {slotOrder.map((slot) => {
              const item     = selection[slot];
              const label    = SLOT_LABELS[slot];
              const isActive = activeSlot === slot;

              return (
                <button
                  key={slot}
                  onClick={() => setActiveSlot(isActive ? null : slot)}
                  className={cn(
                    "relative aspect-square border transition-all duration-200 flex flex-col items-center justify-center gap-1 group",
                    item
                      ? isActive
                        ? "border-[#D4AF37] bg-[#D4AF37]/8"
                        : "border-[#1B1F23]/12 bg-white/60 hover:border-[#D4AF37]/50"
                      : isActive
                        ? "border-[#D4AF37] border-dashed bg-[#D4AF37]/5"
                        : "border-[#1B1F23]/8 border-dashed hover:border-[#D4AF37]/40"
                  )}
                >
                  {item ? (
                    <>
                      <span className="text-3xl">{item.emoji}</span>
                      <span className="text-[10px] text-[#1B1F23]/80 font-medium text-center px-1 leading-tight">{item.name}</span>
                      <span lang="ms" className="text-[9px] text-[#1B1F23]/35 italic">{item.nameMs}</span>
                      {(item.spicy || item.vegan) && (
                        <div className="flex gap-1 mt-0.5">
                          {item.spicy  && <span className="text-[8px] bg-red-900/40 text-red-400 px-1 py-0.5">🌶 Spicy</span>}
                          {item.vegan  && <span className="text-[8px] bg-green-900/40 text-green-400 px-1 py-0.5">🌿 Vegan</span>}
                        </div>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); remove(slot); }}
                        className="absolute top-1.5 right-1.5 w-5 h-5 bg-[#F9F7F2] border border-[#1B1F23]/12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-red-500"
                      >
                        <X className="w-3 h-3 text-[#1B1F23]/55" />
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl opacity-30">{label.emoji}</span>
                      <span className="text-[10px] text-[#1B1F23]/35">{label.en}</span>
                      <Plus className="w-3 h-3 text-[#1B1F23]/25 mt-0.5" />
                    </>
                  )}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Halal badge */}
          <div className="flex items-center gap-2 mt-4 text-xs text-[#1B1F23]/45">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            All items Halal certified · JAKIM compliant
          </div>
        </div>

        {/* Quantity + summary */}
        <div className="card-glass p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-semibold text-[#1B1F23]">Number of Boxes</p>
            <p lang="ms" className="text-[10px] text-[#1B1F23]/35 italic">Bilangan Kotak</p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <input
              type="range" min={MIN_BOXES} max={500} step={10}
              value={boxes}
              onChange={(e) => setBoxes(Number(e.target.value))}
              className="flex-1 h-1.5 accent-[#D4AF37] cursor-pointer"
            />
            <span className="font-serif font-bold text-[#D4AF37] text-xl w-16 text-right">{boxes}</span>
          </div>
          <p className="text-xs text-[#1B1F23]/35 mb-5">Minimum {MIN_BOXES} boxes per order</p>

          <div className="space-y-2 border-t border-[#1B1F23]/6 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-[#1B1F23]/45">Per box</span>
              <span className="text-[#1B1F23]">RM {pricePerBox.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#1B1F23]/45">× {boxes} boxes</span>
              <span className="font-serif font-bold text-[#D4AF37] text-lg">RM {totalPrice.toFixed(0)}</span>
            </div>
            <p className="text-[10px] text-[#1B1F23]/25 italic">Indicative. Final price confirmed on proposal.</p>
          </div>

          <div className="flex gap-3 mt-5">
            <a
              href={`/quote?type=bento&boxes=${boxes}&pricePerBox=${pricePerBox.toFixed(2)}`}
              className="btn-gold flex-1 justify-center text-xs py-3"
            >
              Order Now <ArrowRight className="w-3 h-3" />
            </a>
            <button
              onClick={share}
              className="btn-ghost text-xs py-3 px-4"
            >
              <Share2 className="w-3.5 h-3.5" />
              {copied ? "Copied!" : "Share"}
            </button>
          </div>
        </div>
      </div>

      {/* ── ITEM PICKER ── */}
      <div className="lg:col-span-2 card-glass overflow-hidden">
        <div className="p-5 border-b border-[#1B1F23]/6">
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
            {activeSlot ? `Choose ${SLOT_LABELS[activeSlot].en}` : "Select a Slot"}
          </p>
          {activeSlot && (
            <p lang="ms" className="text-[#1B1F23]/35 text-[10px] italic mt-0.5">
              {SLOT_LABELS[activeSlot].ms}
            </p>
          )}
        </div>

        <div className="overflow-y-auto" style={{ maxHeight: "540px" }}>
          {!activeSlot ? (
            <div className="p-5 text-center text-[#1B1F23]/35 text-sm py-12">
              Click a slot on the bento box to choose your item
            </div>
          ) : (
            <div className="p-3 space-y-1.5">
              {ITEMS.filter((i) => i.slot === activeSlot).map((item) => {
                const selected = selection[activeSlot]?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => select(item)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 text-left transition-all",
                      selected
                        ? "bg-[#D4AF37]/10 border border-[#D4AF37]/40"
                        : "bg-white/60 border border-[#1B1F23]/6 hover:border-[#D4AF37]/30"
                    )}
                  >
                    <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-sm font-medium leading-tight", selected ? "text-[#D4AF37]" : "text-[#1B1F23]")}>
                        {item.name}
                      </p>
                      <p lang="ms" className="text-[10px] text-[#1B1F23]/35 italic">{item.nameMs}</p>
                      <div className="flex gap-1 mt-1">
                        {item.spicy && <span className="text-[8px] bg-red-900/30 text-red-400 px-1">🌶 Spicy</span>}
                        {item.vegan && <span className="text-[8px] bg-green-900/30 text-green-400 px-1">🌿 Vegan</span>}
                      </div>
                    </div>
                    <span className="text-xs text-[#D4AF37] font-semibold flex-shrink-0">+RM {item.price.toFixed(2)}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
