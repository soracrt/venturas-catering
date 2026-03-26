import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Venturas Catering event photos — weddings, corporate dinners, conferences, and private celebrations across Malaysia.",
};

const categories = ["All", "Corporate", "Wedding", "Private", "Setup"];

const gallery = [
  { id: 1, category: "Corporate", title: "Annual Gala Dinner", client: "Cosentino Malaysia", pax: "250 pax", aspect: "aspect-[4/3]" },
  { id: 2, category: "Wedding", title: "Garden Wedding Reception", client: "Razif & Aisyah", pax: "320 pax", aspect: "aspect-square" },
  { id: 3, category: "Corporate", title: "Product Launch Cocktail", client: "Tech Company KL", pax: "150 pax", aspect: "aspect-[4/3]" },
  { id: 4, category: "Private", title: "50th Birthday Celebration", client: "Private Client", pax: "80 pax", aspect: "aspect-square" },
  { id: 5, category: "Setup", title: "Live Cooking Station Setup", client: "Conference KL", pax: "200 pax", aspect: "aspect-[4/3]" },
  { id: 6, category: "Wedding", title: "Ballroom Wedding Dinner", client: "Ahmad & Nurul", pax: "450 pax", aspect: "aspect-[4/3]" },
  { id: 7, category: "Corporate", title: "Boardroom Lunch Series", client: "Petronas", pax: "30 pax", aspect: "aspect-square" },
  { id: 8, category: "Private", title: "Hari Raya Open House", client: "Private Client", pax: "120 pax", aspect: "aspect-[4/3]" },
  { id: 9, category: "Setup", title: "Dessert & Canape Station", client: "Awards Dinner", pax: "300 pax", aspect: "aspect-square" },
  { id: 10, category: "Corporate", title: "Conference Full-Day Catering", client: "Taylor's University", pax: "180 pax", aspect: "aspect-[4/3]" },
  { id: 11, category: "Wedding", title: "Outdoor Solemnization", client: "Farhan & Liyana", pax: "200 pax", aspect: "aspect-square" },
  { id: 12, category: "Private", title: "Anniversary Dinner", client: "Private Client", pax: "60 pax", aspect: "aspect-[4/3]" },
];

const colors: Record<string, string> = {
  Corporate: "bg-blue-50 text-blue-700",
  Wedding: "bg-rose-50 text-rose-700",
  Private: "bg-amber-50 text-amber-700",
  Setup: "bg-stone-100 text-stone-700",
};

export default function GalleryPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our Gallery
          </h1>
          <p className="text-[#6b6560] max-w-xl mx-auto">
            A glimpse into the events, flavours, and moments we&apos;ve had the privilege to create
            — each one captioned so you know exactly what we can do for yours.
          </p>
        </div>

        {/* Category filter — client-side enhancement possible later */}
        <div className="flex flex-wrap gap-2 justify-center my-8">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 text-sm font-medium rounded-full border border-stone-200 text-stone-600 cursor-pointer hover:border-[#b8932a] hover:text-[#b8932a] transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative bg-stone-100 rounded-2xl overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className={`${item.aspect} w-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center`}>
                <span className="text-stone-400 text-xs text-center px-4">{item.title}</span>
              </div>

              {/* Hover overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${colors[item.category]}`}>
                  {item.category}
                </span>
                <h3 className="text-white font-semibold text-sm leading-tight">{item.title}</h3>
                <p className="text-stone-300 text-xs mt-0.5">{item.client} · {item.pax}</p>
              </div>

              {/* Always-visible category badge */}
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors[item.category]} opacity-90`}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1c1c1e] text-white rounded-3xl p-10 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Like What You See?
          </h2>
          <p className="text-stone-400 mb-7">
            Let&apos;s make your event the next one in this gallery.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
