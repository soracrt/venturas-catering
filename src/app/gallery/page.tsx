import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse photos from Venturas Catering events — weddings, corporate dinners, and more.",
};

const placeholderImages = [
  { id: 1, alt: "Corporate dinner setup", category: "Corporate" },
  { id: 2, alt: "Wedding reception buffet", category: "Wedding" },
  { id: 3, alt: "Canape service", category: "Corporate" },
  { id: 4, alt: "Birthday celebration cake", category: "Private" },
  { id: 5, alt: "Live cooking station", category: "Corporate" },
  { id: 6, alt: "Outdoor garden reception", category: "Wedding" },
  { id: 7, alt: "Malaysian fusion spread", category: "Private" },
  { id: 8, alt: "Conference catering setup", category: "Corporate" },
  { id: 9, alt: "Dessert station", category: "Private" },
];

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our Gallery
          </h1>
          <p className="text-[#6b6560] max-w-xl mx-auto">
            A glimpse into the events, flavours, and moments we&apos;ve had the privilege to create.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {placeholderImages.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square bg-stone-100 rounded-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
                {img.alt}
              </div>
              <div className="absolute inset-0 bg-[#1c1c1e]/0 group-hover:bg-[#1c1c1e]/40 transition-all flex items-end p-4">
                <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-[#b8932a] px-2.5 py-1 rounded-full">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/quote"
            className="inline-block px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
          >
            Plan Your Event
          </Link>
        </div>
      </div>
    </div>
  );
}
