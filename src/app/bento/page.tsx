import type { Metadata } from "next";
import BentoCustomizer from "@/components/sections/BentoCustomizer";

export const metadata: Metadata = {
  title: "Bento Box Customizer — Build Your Perfect Box",
  description:
    "Customise your Halal bento box for your event. Choose proteins, rice, sides, and sauces. See live pricing. Share with your team.",
};

export default function BentoPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">
            Interactive Tool
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            Build Your Bento Box
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto">
            Drag and assemble your ideal bento. See live pricing. Share the link with your team
            for approval before placing your order.
          </p>
          <p lang="ms" className="text-stone-600 text-sm italic mt-1">
            Bina kotak bento anda sendiri. Lihat harga secara langsung.
          </p>
        </div>
        <BentoCustomizer />
      </div>
    </div>
  );
}
