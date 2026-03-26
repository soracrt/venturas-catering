import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Explore Venturas Catering menus — Western, Asian, fusion, and Halal-certified options for corporate and private events.",
};

const menuCategories = [
  {
    name: "Malaysian Favourites",
    tag: "Halal Certified",
    items: ["Nasi Lemak Station", "Rendang Daging", "Ayam Percik", "Kuih-muih Selection", "Teh Tarik Bar"],
  },
  {
    name: "Western Cuisine",
    tag: "Popular for Corporate",
    items: ["Roast Beef Carving Station", "Salmon en Croute", "Grilled Chicken Roulade", "Caesar Salad Bar", "Artisan Bread Station"],
  },
  {
    name: "Asian Fusion",
    tag: "Signature Menu",
    items: ["Dim Sum Live Station", "Japanese Sushi Platter", "Korean BBQ Station", "Thai Green Curry", "Wok-fried Noodles"],
  },
  {
    name: "Canapés & Finger Food",
    tag: "Cocktail Events",
    items: ["Prawn Cocktail Blinis", "Mini Beef Wellington", "Bruschetta Trio", "Cheese & Charcuterie Board", "Dessert Petit Fours"],
  },
];

export default function MenuPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Our Menu
          </h1>
          <p className="text-[#6b6560] max-w-2xl mx-auto">
            A curated selection of local and international flavours — all Halal-certifiable, fresh,
            and crafted by our in-house culinary team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-7 mb-14">
          {menuCategories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-2xl border border-stone-200 p-7">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl font-bold text-[#1c1c1e]">{cat.name}</h3>
                <span className="text-xs font-medium text-[#b8932a] bg-[#b8932a]/10 px-2.5 py-1 rounded-full">
                  {cat.tag}
                </span>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-[#6b6560] text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#b8932a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-[#1c1c1e] text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
            Want a Full Menu Brochure?
          </h2>
          <p className="text-stone-400 mb-7">
            Download our complete menu PDF or request a custom tasting session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-7 py-3.5 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
            >
              Request Tasting
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
