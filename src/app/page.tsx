import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Phone, ShieldCheck, Leaf, Award, ChefHat, Calculator } from "lucide-react";
import HeroVideo from "@/components/sections/HeroVideo";
import TrustSection from "@/components/sections/TrustSection";

export const metadata: Metadata = {
  title: "Venturas Catering | Premium Halal Event Catering Shah Alam & Selangor",
  description:
    "Premium Halal-certified catering for weddings, corporate events, and private occasions in Shah Alam, Selangor & KL. 11 years, 5,000+ events. Get an instant quote.",
};

// Inspired by Tradition Traiteur's dark photo-card grid
const serviceCards = [
  {
    href: "/services/corporate",
    label: "For Businesses",
    labelMs: "Untuk Syarikat",
    title: "Corporate Events",
    description: "Boardroom lunches, conferences, product launches, office catering.",
    from: "RM 22/pax",
    bg: "from-slate-900 to-slate-800",
    accent: "text-blue-300",
  },
  {
    href: "/services/private",
    label: "For Individuals",
    labelMs: "Untuk Individu",
    title: "Wedding Receptions",
    description: "Grand receptions and intimate garden ceremonies for 30–500+ guests.",
    from: "RM 88/pax",
    bg: "from-[#2a1a0e] to-[#3d2510]",
    accent: "text-amber-300",
  },
  {
    href: "/services/private#birthdays",
    label: "Private Events",
    labelMs: "Majlis Peribadi",
    title: "Private Occasions",
    description: "Birthdays, anniversaries, Hari Raya open houses, themed celebrations.",
    from: "RM 35/pax",
    bg: "from-[#0e1a2a] to-[#142233]",
    accent: "text-sky-300",
  },
  {
    href: "/menu",
    label: "Signature Range",
    labelMs: "Rangkaian Signature",
    title: "Bento & Buffet",
    description: "Individual bento boxes to grand buffet spreads — all Halal certified.",
    from: "RM 18/pax",
    bg: "from-[#1a1a0e] to-[#2a2810]",
    accent: "text-yellow-300",
  },
];

const commitments = [
  { icon: ShieldCheck, title: "JAKIM Halal Certified", titleMs: "Bersijil Halal JAKIM",  body: "Every ingredient sourced from certified Halal suppliers. Valid certificate on display." },
  { icon: Leaf,        title: "Sustainability Pledge", titleMs: "Komitmen Kelestarian",  body: "Biodegradable packaging, zero food-waste policy, locally-sourced produce." },
  { icon: Award,       title: "HACCP Kitchen",         titleMs: "Dapur HACCP",           body: "All staff Food Handler certified. International food safety standards applied." },
  { icon: ChefHat,     title: "In-House Chefs Only",   titleMs: "Chef Dalaman Sahaja",   body: "We never subcontract. Our trained team handles every single event." },
];

const testimonials = [
  { name: "Farah Nadia",   role: "Event Manager, Taylor's University",  quote: "Three years of convocation dinners, 400+ guests each time. Flawless every time.", rating: 5 },
  { name: "Ahmad Razif",   role: "Groom, Wedding Sept 2024",            quote: "350 guests at our nikah. Every single person asked for the caterer's number.", rating: 5 },
  { name: "Priya Nair",    role: "Corporate Affairs, Cosentino Malaysia",quote: "Professional, punctual, genuinely excellent food. Our permanent go-to caterer.", rating: 5 },
];

const processSteps = [
  { n: "01", title: "Get a Quote",       ms: "Dapatkan Sebutan Harga",  body: "60-second calculator gives you a live RM estimate instantly." },
  { n: "02", title: "Menu Consultation", ms: "Konsultasi Menu",         body: "Our coordinator contacts you within 24hrs to tailor the menu." },
  { n: "03", title: "Confirm & Relax",   ms: "Sahkan & Berehat",        body: "We handle everything from setup to teardown." },
  { n: "04", title: "Enjoy Your Event",  ms: "Nikmati Majlis Anda",     body: "Your guests eat well. You get all the credit." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO (split editorial) ── */}
      <HeroVideo />

      {/* ── CATEGORY STRIP (Sushi Bar icon-nav inspired) ── */}
      <div className="bg-[#080808] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-white/5">
            {[
              { label: "Corporate", ms: "Korporat",  icon: "🏢" },
              { label: "Wedding",   ms: "Perkahwinan",icon: "💍" },
              { label: "Private",   ms: "Peribadi",   icon: "🎉" },
              { label: "Bento",     ms: "Bento",      icon: "🍱" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.label === "Corporate" ? "/services/corporate" : cat.label === "Wedding" || cat.label === "Private" ? "/services/private" : "/menu"}
                className="flex flex-col items-center gap-1.5 py-4 text-stone-400 hover:text-[#c9a84c] transition-colors group"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase group-hover:text-[#c9a84c]">{cat.label}</span>
                <span lang="ms" className="text-[9px] text-stone-600 italic">{cat.ms}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── DARK PHOTO SERVICE CARDS (Tradition Traiteur style) ── */}
      <section className="bg-[#080808] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-3">
                Our Services
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight">
                What Are You<br />Planning?
              </h2>
              <p lang="ms" className="text-stone-600 text-sm italic mt-1">Apakah majlis anda?</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm text-stone-400 hover:text-[#c9a84c] transition-colors uppercase tracking-widest font-semibold">
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2×2 dark card grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`service-card group relative overflow-hidden bg-gradient-to-br ${card.bg} border border-white/5 hover:border-[#c9a84c]/40 transition-all duration-300`}
                style={{ minHeight: "280px" }}
              >
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5" />

                {/* Hover gold line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${card.accent}`}>
                          {card.label}
                        </span>
                        <span lang="ms" className="text-[9px] text-stone-600 italic ml-2">
                          {card.labelMs}
                        </span>
                      </div>
                      <span className="text-xs text-stone-500 font-medium">From {card.from}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{card.description}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-6 text-sm font-semibold text-stone-400 group-hover:text-[#c9a84c] transition-colors uppercase tracking-wider">
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES strip (Image 6 inspired — editorial dark) ── */}
      <section className="bg-[#0e0e0e] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">Signature Dishes</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight gold-line">
                Food That Speaks<br />Before You Taste It.
              </h2>
            </div>
            <div>
              <p className="text-stone-400 leading-relaxed mb-6">
                Every dish is prepared fresh on-site by our in-house culinary team. We don't
                subcontract. We don't batch-cook days in advance. Your guests taste the
                difference — every time.
              </p>
              <Link href="/menu" className="btn-gold">
                Explore Full Menu <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3-column dish photo strip (editorial, Caverta-inspired) */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Chef's Philosophy",    ms: "Falsafah Chef",     desc: "Fresh ingredients. No shortcuts. Every plate personally approved." },
              { label: "Live Stations",        ms: "Stesen Langsung",   desc: "Dim sum, carving, wok-fry — theatre and taste in one." },
              { label: "VIP Reservations",     ms: "Tempahan VIP",      desc: "Priority bookings for marquee events. Limited slots per month." },
            ].map((item, i) => (
              <div key={item.label} className="group relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                {/* Photo placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-800 to-stone-900 flex items-center justify-center">
                  <span className="text-stone-600 text-xs text-center px-4">
                    {i === 0 ? "Chef plating shot" : i === 1 ? "Live station photo" : "VIP table setup"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] font-semibold mb-1">{item.label}</p>
                  <p lang="ms" className="text-stone-500 text-[10px] italic mb-2">{item.ms}</p>
                  <p className="text-stone-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — dark ── */}
      <section className="bg-[#080808] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">The Process</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">
              From Enquiry to Applause<br />in 4 Steps.
            </h2>
            <p lang="ms" className="text-stone-600 text-sm italic mt-2">Dari pertanyaan hingga majlis — 4 langkah mudah.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {processSteps.map((p) => (
              <div key={p.n} className="bg-[#080808] p-8 hover:bg-[#0e0e0e] transition-colors">
                <span className="font-serif text-4xl font-bold text-[#c9a84c]/30 block mb-4">{p.n}</span>
                <h3 className="font-semibold text-white mb-0.5">{p.title}</h3>
                <p lang="ms" className="text-[10px] text-stone-600 italic mb-3">{p.ms}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/quote" className="btn-gold">
              Check Availability <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUOTE TEASER — split dark ── */}
      <section className="bg-[#0e0e0e] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">
                <Calculator className="inline w-3 h-3 mr-1" />
                Instant Quote
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white leading-tight mb-5 gold-line">
                Know Your Budget<br />Before You Call.
              </h2>
              <p className="text-stone-400 mb-8 leading-relaxed">
                Our calculator gives you a live RM estimate with add-ons — waitstaff, décor,
                live stations. Enter your email to unlock the full itemised breakdown.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-gold">
                  Get Instant Quote
                </Link>
                <a href="tel:+60123456789" className="btn-ghost">
                  <Phone className="w-3.5 h-3.5" /> Call Us
                </a>
              </div>
            </div>

            {/* Indicative prices — dark card */}
            <div className="border border-white/8 divide-y divide-white/5">
              {[
                { label: "Corporate Lunch · 50 pax · Standard",    price: "~RM 1,400" },
                { label: "Wedding Reception · 150 pax · Premium",  price: "~RM 18,500" },
                { label: "Conference Full-Day · 80 pax",           price: "~RM 5,200" },
                { label: "Bento Boxes · 100 pax",                  price: "~RM 2,200" },
              ].map((ex) => (
                <div key={ex.label} className="flex justify-between items-center px-6 py-4">
                  <span className="text-stone-500 text-sm">{ex.label}</span>
                  <span className="font-serif font-bold text-[#c9a84c]">{ex.price}</span>
                </div>
              ))}
              <div className="px-6 py-3">
                <p className="text-[11px] text-stone-600 italic">Indicative only. Use our calculator for your exact event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS — 4 dark cards ── */}
      <section className="bg-[#080808] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">Our Commitments</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Why Clients Come Back — Every Year.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {commitments.map(({ icon: Icon, title, titleMs, body }) => (
              <div key={title} className="bg-[#080808] p-8 hover:bg-[#0e0e0e] transition-colors group">
                <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center mb-6 group-hover:border-[#c9a84c] transition-colors">
                  <Icon className="w-4.5 h-4.5 text-[#c9a84c]" />
                </div>
                <h3 className="font-semibold text-white mb-0.5 text-sm">{title}</h3>
                <p lang="ms" className="text-[10px] text-stone-600 italic mb-3">{titleMs}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS — dark editorial ── */}
      <section className="bg-[#0e0e0e] py-20 md:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold mb-4">Client Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Trusted by Malaysia's Best.
            </h2>
            <p lang="ms" className="text-stone-600 text-sm italic mt-1">Dipercayai oleh organisasi terkemuka Malaysia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#080808] p-8 flex flex-col hover:bg-[#0e0e0e] transition-colors">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c9a84c] text-[#c9a84c]" />
                  ))}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-white/8 pt-5">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-stone-600 text-xs mt-0.5">{t.role}</p>
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
