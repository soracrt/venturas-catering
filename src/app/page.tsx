import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Phone } from "lucide-react";
import HeroVideo from "@/components/sections/HeroVideo";
import TrustSection from "@/components/sections/TrustSection";

export const metadata: Metadata = {
  title: "Venturas Catering | Premium Halal Event Catering Shah Alam & Selangor",
  description:
    "Premium Halal-certified catering for weddings, corporate events, and private occasions in Shah Alam, Selangor & KL. 11 years experience, 5,000+ events. Get an instant quote.",
};

const process = [
  { step: "01", title: "Get a Quote",       titleMs: "Dapatkan Sebutan Harga",   desc: "Use our calculator — receive an instant RM estimate in 60 seconds." },
  { step: "02", title: "Menu Consultation", titleMs: "Konsultasi Menu",           desc: "Our team contacts you within 24hrs to tailor the menu and logistics." },
  { step: "03", title: "Confirm & Relax",   titleMs: "Sahkan & Berehat",          desc: "Sign off the proposal. We handle everything from setup to teardown." },
  { step: "04", title: "Enjoy Your Event",  titleMs: "Nikmati Majlis Anda",       desc: "Your guests eat well. You get all the credit." },
];

const testimonials = [
  {
    name: "Farah Nadia",
    role: "Event Manager, Taylor's University",
    quote: "We've used Venturas for our annual convocation dinner three years running. 400+ guests every time — flawless execution, incredible food.",
    rating: 5,
  },
  {
    name: "Ahmad Razif",
    role: "Groom, Wedding Sept 2024",
    quote: "350 guests at our nikah reception. Every single person asked for the caterer's number. Venturas made our day unforgettable.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Corporate Affairs, Cosentino Malaysia",
    quote: "Professional, punctual, and the food is genuinely excellent. Our go-to caterer for every product launch and corporate dinner.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Video Hero */}
      <HeroVideo />

      {/* ── FUNNEL SPLIT ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
              What Are You Planning?
            </h2>
            <p className="text-[#6b6560] max-w-xl mx-auto">
              Two journeys — each with curated packages, sample menus, and transparent pricing.
            </p>
            <p lang="ms" className="text-sm text-stone-400 italic mt-1">
              Dua pilihan — pakej disesuaikan dengan harga yang telus.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/services/corporate"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 text-white p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10" />
              <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                For Businesses · Untuk Syarikat
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Corporate Catering</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Boardroom lunches, conferences, product launches, and recurring office catering.
              </p>
              <div className="text-xs text-slate-400 space-y-1.5 mb-7">
                <p>✓ From RM 22/pax</p>
                <p>✓ Minimum 20 guests</p>
                <p>✓ Setup & teardown included</p>
              </div>
              <span className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Packages <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/services/private"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3d1a1a] to-[#6b3030] text-white p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#b8932a]/10 rounded-full -translate-y-10 translate-x-10" />
              <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[#d4a843] bg-[#b8932a]/20 px-3 py-1 rounded-full">
                For Individuals · Untuk Individu
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Private Events</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Weddings, birthdays, anniversaries, and intimate gatherings.
              </p>
              <div className="text-xs text-stone-400 space-y-1.5 mb-7">
                <p>✓ From RM 35/pax</p>
                <p>✓ Custom menu creation</p>
                <p>✓ Free tasting (50+ pax)</p>
              </div>
              <span className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Packages <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-2">
              Booking in 4 Simple Steps
            </h2>
            <p lang="ms" className="text-sm text-stone-400 italic">Tempah dalam 4 langkah mudah</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px border-t-2 border-dashed border-stone-300" />
                )}
                <div className="w-14 h-14 rounded-2xl bg-[#b8932a]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-[#b8932a] text-lg">{p.step}</span>
                </div>
                <h3 className="font-semibold text-[#1c1c1e] mb-0.5">{p.title}</h3>
                <p lang="ms" className="text-[10px] text-stone-400 italic mb-2">{p.titleMs}</p>
                <p className="text-[#6b6560] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors shadow-lg shadow-[#b8932a]/20"
            >
              Check Availability <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE TEASER ── */}
      <section className="bg-[#1c1c1e] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Know Your Budget<br />Before You Call.
              </h2>
              <p className="text-stone-400 mb-6">
                Our Quick Quote calculator gives you a live RM estimate, lets you add waitstaff,
                décor, and more — then unlocks a full proposal when you're ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
                >
                  Get Instant Quote
                </Link>
                <a
                  href="tel:+60123456789"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              {[
                { label: "Corporate Lunch · 50 pax · Standard",   price: "~RM 1,400" },
                { label: "Wedding Reception · 150 pax · Premium", price: "~RM 18,500" },
                { label: "Conference · 80 pax · Standard",        price: "~RM 5,200" },
              ].map((ex) => (
                <div key={ex.label} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-stone-400 text-sm">{ex.label}</span>
                  <span className="font-serif font-bold text-[#b8932a]">{ex.price}</span>
                </div>
              ))}
              <p className="text-xs text-stone-500 pt-1">Indicative. Use our calculator for your exact event.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-2">
              Trusted by Malaysia's Best
            </h2>
            <p lang="ms" className="text-sm text-stone-400 italic">Dipercayai oleh organisasi terkemuka Malaysia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#faf8f4] rounded-2xl p-7 border border-stone-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b8932a] text-[#b8932a]" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-stone-200">
                  <p className="font-semibold text-[#1c1c1e] text-sm">{t.name}</p>
                  <p className="text-[#6b6560] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / MARQUEE / HALAL / CHEF / INSTAGRAM ── */}
      <TrustSection />
    </>
  );
}
