import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Utensils,
  ShieldCheck,
  CalendarCheck,
  ChefHat,
  MessageCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Venturas Catering | Premium Event Catering Malaysia",
  description:
    "Malaysia's premium catering partner for corporate and private events. Halal-certified, 11 years experience, serving KL & Selangor. Get an instant quote today.",
};

const stats = [
  { icon: Users, value: "5,000+", label: "Events Catered" },
  { icon: Star, value: "4.9/5", label: "Client Rating" },
  { icon: Award, value: "11+", label: "Years Experience" },
  { icon: Clock, value: "24hr", label: "Quote Turnaround" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Halal-Certified Kitchen",
    description:
      "Every menu is prepared in our certified Halal kitchen. Perfect for mixed-audience events — your guests eat with complete confidence.",
  },
  {
    icon: ChefHat,
    title: "In-House Culinary Team",
    description:
      "We don't subcontract. Our own trained chefs handle every event, ensuring consistent quality from prep to plate.",
  },
  {
    icon: CalendarCheck,
    title: "Zero Last-Minute Surprises",
    description:
      "We've never missed an event in 11 years. Dedicated coordinators confirm every detail 48 hours before your event.",
  },
  {
    icon: Utensils,
    title: "Menu Flexibility",
    description:
      "Western, Malaysian, Asian fusion, or a custom mix — dietary restrictions accommodated without a separate charge.",
  },
];

const process = [
  { step: "01", title: "Get a Quote", desc: "Fill our 60-second calculator — receive an instant RM estimate." },
  { step: "02", title: "Menu Consultation", desc: "Our team contacts you within 24hrs to tailor the menu and logistics." },
  { step: "03", title: "Confirm & Relax", desc: "Sign off on the proposal. We handle everything from setup to teardown." },
  { step: "04", title: "Enjoy Your Event", desc: "Your guests eat well. You get all the credit." },
];

const testimonials = [
  {
    name: "Farah Nadia",
    role: "Event Manager, Taylor's University",
    quote:
      "We've used Venturas for our annual convocation dinner three years running. 400+ guests every time — flawless execution, incredible food.",
    rating: 5,
  },
  {
    name: "Ahmad Razif",
    role: "Groom, Wedding Sept 2024",
    quote:
      "350 guests at our nikah reception. Every single person asked for the caterer's number. Venturas made our day unforgettable.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Corporate Affairs, Cosentino Malaysia",
    quote:
      "Professional, punctual, and the food is genuinely excellent. Our go-to caterer for every product launch and corporate dinner.",
    rating: 5,
  },
];

const clients = [
  "Taylor's University",
  "Cosentino Malaysia",
  "Petronas",
  "Maybank",
  "Sunway Group",
  "AirAsia",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#1c1c1e] text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e]/70 via-[#1c1c1e]/60 to-[#1c1c1e]/90" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-5 text-xs tracking-[0.3em] uppercase text-[#b8932a] font-semibold bg-[#b8932a]/10 border border-[#b8932a]/30 px-4 py-2 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" /> Halal Certified · Kuala Lumpur & Selangor
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Catering That Makes
              <br />
              <span className="text-[#b8932a]">Your Event</span> the
              <br />
              Talk of the Room.
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl leading-relaxed">
              Corporate events, weddings, and private celebrations — delivered with exceptional
              food, zero stress, and 11 years of proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors text-base"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/60123456789?text=Hi%20Venturas!%20I'd%20like%20to%20enquire%20about%20catering."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fb855] transition-colors text-base"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-stone-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#b8932a]" /> No deposit to enquire</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#b8932a]" /> Quote in 24 hours</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#b8932a]" /> Free menu tasting</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="bg-[#b8932a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <Icon className="w-5 h-5 opacity-80 mb-1" />
                <p className="font-serif text-3xl md:text-4xl font-bold">{value}</p>
                <p className="text-sm opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNNEL SPLIT ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
              What Are You Planning?
            </h2>
            <p className="text-[#6b6560] max-w-xl mx-auto">
              Two distinct pathways — each with curated packages, sample menus, and transparent pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Corporate */}
            <Link
              href="/services/corporate"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 text-white p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10" />
              <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">
                For Businesses
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Corporate Catering</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Boardroom lunches, conferences, product launches, and recurring office catering —
                built to match your company's standards.
              </p>
              <div className="text-xs text-slate-400 space-y-1.5 mb-7">
                <p>✓ From RM 22/pax</p>
                <p>✓ Minimum 20 guests</p>
                <p>✓ Setup & teardown included</p>
              </div>
              <span className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Corporate Packages <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Private */}
            <Link
              href="/services/private"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3d1a1a] to-[#6b3030] text-white p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#b8932a]/10 rounded-full -translate-y-10 translate-x-10" />
              <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-[#d4a843] bg-[#b8932a]/20 px-3 py-1 rounded-full">
                For Individuals
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">Private Events</h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Weddings, birthdays, anniversaries, and intimate gatherings — crafted with warmth
                and meticulous personal attention.
              </p>
              <div className="text-xs text-stone-400 space-y-1.5 mb-7">
                <p>✓ From RM 35/pax</p>
                <p>✓ Custom menu creation</p>
                <p>✓ Free menu tasting (50+ pax)</p>
              </div>
              <span className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                Explore Private Packages <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold">
                Why Venturas
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-5 leading-tight">
                We've Never Missed
                <br />
                an Event in 11 Years.
              </h2>
              <p className="text-[#6b6560] leading-relaxed mb-8">
                Catering is easy to get wrong. The food arrives late. The portions are off. The
                crew doesn't know the venue. We've spent 11 years making sure none of that
                happens — not once.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#b8932a] font-semibold text-sm hover:gap-3 transition-all"
              >
                Our story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, title, description }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                  <div className="w-10 h-10 rounded-xl bg-[#b8932a]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#b8932a]" />
                  </div>
                  <h3 className="font-semibold text-[#1c1c1e] mb-2">{title}</h3>
                  <p className="text-[#6b6560] text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
              Booking in 4 Simple Steps
            </h2>
            <p className="text-[#6b6560]">From first enquiry to a flawlessly catered event.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-px border-t-2 border-dashed border-stone-200" />
                )}
                <div className="w-14 h-14 rounded-2xl bg-[#b8932a]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif font-bold text-[#b8932a] text-lg">{p.step}</span>
                </div>
                <h3 className="font-semibold text-[#1c1c1e] mb-1.5">{p.title}</h3>
                <p className="text-[#6b6560] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
            >
              Start with Step 1 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE CTA ─────────────────────────────────────── */}
      <section className="bg-[#1c1c1e] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Know Your Budget Before You Call.
              </h2>
              <p className="text-stone-400 mb-6">
                Our Quick Quote calculator gives you a live RM estimate in 60 seconds — no
                commitment, no sales pressure.
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
                { label: "Corporate Lunch (50 pax, Standard)", price: "~RM 1,400" },
                { label: "Wedding Reception (150 pax, Premium)", price: "~RM 18,500" },
                { label: "Conference Full Day (80 pax, Standard)", price: "~RM 5,200" },
              ].map((ex) => (
                <div key={ex.label} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-stone-400 text-sm">{ex.label}</span>
                  <span className="font-serif font-bold text-[#b8932a] text-base">{ex.price}</span>
                </div>
              ))}
              <p className="text-xs text-stone-500 pt-1">
                Indicative only. Use our calculator for your exact event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
              Trusted by Malaysia's Best
            </h2>
            <p className="text-[#6b6560]">
              From universities to multinationals — here's what our clients say.
            </p>
          </div>

          {/* Client logos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
            {clients.map((c) => (
              <span key={c} className="text-stone-400 font-semibold text-sm tracking-wide uppercase">
                {c}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b8932a] text-[#b8932a]" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-stone-100">
                  <p className="font-semibold text-[#1c1c1e] text-sm">{t.name}</p>
                  <p className="text-[#6b6560] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-4">
            Ready to Make Your Event Memorable?
          </h2>
          <p className="text-[#6b6560] mb-8">
            Get a quote in 60 seconds or chat with our team directly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/60123456789?text=Hi%20Venturas!%20I'd%20like%20to%20enquire%20about%20catering."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fb855] transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
