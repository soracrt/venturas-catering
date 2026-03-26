import type { Metadata } from "next";
import FilterableMenu from "@/components/sections/FilterableMenu";

export const metadata: Metadata = {
  title: "Our Menu — Halal Catering Shah Alam",
  description:
    "Explore our Halal-certified buffet, bento, and vegan catering menus. Malaysian, Western, and Asian fusion options for events in Shah Alam, Selangor & KL.",
};

export default function MenuPage() {
  return (
    <div className="py-16 md:py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold">
            Halal Certified · Fresh Daily
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our Menu
          </h1>
          <p className="text-[#6b6560] max-w-2xl mx-auto mb-1">
            Filter by style or dietary need. Hover any dish to see full ingredients.
          </p>
          <p lang="ms" className="text-sm text-stone-400 italic">
            Tapis mengikut kategori. Layangkan tetikus pada hidangan untuk melihat bahan-bahan.
          </p>
        </div>

        <FilterableMenu />
      </div>
    </div>
  );
}
