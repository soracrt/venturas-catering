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

const serviceCards = [
  {
    href: "/services/corporate",
    label: "For Businesses",
    labelMs: "Untuk Syarikat",
    title: "Corporate Events",
    description: "Boardroom lunches, conferences, product launches, office catering.",
    from: "RM 22/pax",
    accentColor: "#4A6076",
    accentText: "text-[#4A6076]",
    accentBg: "bg-[#4A6076]/5",
    accentBorder: "hover:border-[#4A6076]/40",
  },
  {
    href: "/services/private",
    label: "Wedding & Reception",
    labelMs: "Perkahwinan",
    title: "Wedding Receptions",
    description: "Grand receptions and intimate garden ceremonies for 30–500+ guests.",
    from: "RM 88/pax",
    accentColor: "#B5838D",
    accentText: "text-[#B5838D]",
    accentBg: "bg-[#B5838D]/5",
    accentBorder: "hover:border-[#B5838D]/40",
  },
  {
    href: "/services/private#birthdays",
    label: "Private Events",
    labelMs: "Majlis Peribadi",
    title: "Private Occasions",
    description: "Birthdays, anniversaries, Hari Raya open houses, themed celebrations.",
    from: "RM 35/pax",
    accentColor: "#B5838D",
    accentText: "text-[#B5838D]",
    accentBg: "bg-[#B5838D]/4",
    accentBorder: "hover:border-[#B5838D]/35",
  },
  {
    href: "/menu",
    label: "Signature Range",
    labelMs: "Rangkaian Signature",
    title: "Bento & Buffet",
    description: "Individual bento boxes to grand buffet spreads — all Halal certified.",
    from: "RM 18/pax",
    accentColor: "#8DAA91",
    accentText: "text-[#8DAA91]",
    accentBg: "bg-[#8DAA91]/5",
    accentBorder: "hover:border-[#8DAA91]/40",
  },
];

const commitments = [
  { icon: ShieldCheck, title: "JAKIM Halal Certified", titleMs: "Bersijil Halal JAKIM",  body: "Every ingredient sourced from certified Halal suppliers. Valid certificate on display." },
  { icon: Leaf,        title: "Sustainability Pledge", titleMs: "Komitmen Kelestarian",  body: "Biodegradable packaging, zero food-waste policy, locally-sourced produce." },
  { icon: Award,       title: "HACCP Kitchen",         titleMs: "Dapur HACCP",           body: "All staff Food Handler certified. International food safety standards applied." },
  { icon: ChefHat,     title: "In-House Chefs Only",   titleMs: "Chef Dalaman Sahaja",   body: "We never subcontract. Our trained team handles every single event." },
];

const testimonials = [
  { name: "Farah Nadia",   role: "Event Manager, Taylor's University",   quote: "Three years of convocation dinners, 400+ guests each time. Flawless every time.", rating: 5 },
  { name: "Ahmad Razif",   role: "Groom, Wedding Sept 2024",             quote: "350 guests at our nikah. Every single person asked for the caterer's number.", rating: 5 },
  { name: "Priya Nair",    role: "Corporate Affairs, Cosentino Malaysia", quote: "Professional, punctual, genuinely excellent food. Our permanent go-to caterer.", rating: 5 },
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
      {/* ── HERO (dark cinematic — intentional contrast) ── */}
      <HeroVideo />

      {/* ── TRUST BAR — below the fold, grounded data points ── */}
      <div className="bg-[#1B1F23] border-b border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F9F7F2]/8">
            {[
              { value: "11 Years",  label: "In Business",         labelMs: "Dalam Perniagaan"  },
              { value: "5,000+",    label: "Events Delivered",     labelMs: "Majlis Disiapkan"  },
              { value: "4.9 ★",    label: "Google Rating",        labelMs: "Penilaian Google"  },
              { value: "JAKIM",     label: "Halal Certified",      labelMs: "Bersijil Halal"    },
            ].map((s) => (
              <div key={s.label} className="px-6 py-5 text-center">
                <p className="font-serif font-bold text-[#D4AF37] text-xl not-italic leading-none">{s.value}</p>
                <p className="text-[10px] text-[#F9F7F2]/55 uppercase tracking-widest mt-1.5" style={{ fontFamily: "var(--font-montserrat)" }}>{s.label}</p>
                <p lang="ms" className="text-[9px] text-[#F9F7F2]/30 italic mt-0.5">{s.labelMs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORY STRIP ── */}
      <div className="bg-white border-b border-[#1B1F23]/8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-4 divide-x divide-[#1B1F23]/6">
            {[
              { label: "Corporate", ms: "Korporat",     icon: "🏢", href: "/services/corporate" },
              { label: "Wedding",   ms: "Perkahwinan",  icon: "💍", href: "/services/private"   },
              { label: "Private",   ms: "Peribadi",     icon: "🎉", href: "/services/private"   },
              { label: "Bento",     ms: "Bento",        icon: "🍱", href: "/menu"                },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className="flex flex-col items-center gap-1.5 py-4 text-[#1B1F23]/62 hover:text-[#D4AF37] transition-colors group"
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase group-hover:text-[#D4AF37]" style={{ fontFamily: "var(--font-montserrat)" }}>{cat.label}</span>
                <span lang="ms" className="text-[9px] text-[#1B1F23]/52 italic">{cat.ms}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE CARDS — glassmorphism with service accents ── */}
      <section className="py-20 md:py-28 bg-[#F9F7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                Our Services
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1B1F23] leading-tight">
                What Are You<br />Planning?
              </h2>
              <p lang="ms" className="text-[#1B1F23]/55 text-sm italic mt-1">Apakah majlis anda?</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm text-[#1B1F23]/62 hover:text-[#D4AF37] transition-colors uppercase tracking-widest font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2×2 glassmorphism card grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={`service-card card-glass group relative overflow-hidden ${card.accentBorder} transition-all duration-300`}
                style={{ minHeight: "280px" }}
              >
                {/* Accent tint */}
                <div className={`absolute inset-0 ${card.accentBg} pointer-events-none`} />

                {/* Hover accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: card.accentColor }}
                />

                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${card.accentText}`} style={{ fontFamily: "var(--font-montserrat)" }}>
                          {card.label}
                        </span>
                        <span lang="ms" className="text-[9px] text-[#1B1F23]/52 italic ml-2">
                          {card.labelMs}
                        </span>
                      </div>
                      <span className="text-xs text-[#1B1F23]/60 font-medium">From {card.from}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B1F23] mb-3 group-hover:text-[#1B1F23]/80 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#1B1F23]/55 text-sm leading-relaxed">{card.description}</p>
                  </div>

                  <div className={`flex items-center gap-2 mt-6 text-sm font-semibold ${card.accentText} uppercase tracking-wider`} style={{ fontFamily: "var(--font-montserrat)" }}>
                    Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGNATURE DISHES ── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#1B1F23]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Signature Dishes</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1B1F23] leading-tight gold-line">
                Food That Speaks<br />Before You Taste It.
              </h2>
            </div>
            <div>
              <p className="text-[#1B1F23]/55 leading-relaxed mb-6">
                Every dish is prepared fresh on-site by our in-house culinary team. We don&apos;t
                subcontract. We don&apos;t batch-cook days in advance. Your guests taste the
                difference — every time.
              </p>
              <Link href="/menu" className="btn-gold">
                Explore Full Menu <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 3-column dish strip */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Chef's Philosophy",  ms: "Falsafah Chef",    desc: "Fresh ingredients. No shortcuts. Every plate personally approved." },
              { label: "Live Stations",      ms: "Stesen Langsung",  desc: "Dim sum, carving, wok-fry — theatre and taste in one." },
              { label: "VIP Reservations",   ms: "Tempahan VIP",     desc: "Priority bookings for marquee events. Limited slots per month." },
            ].map((item, i) => (
              <div key={item.label} className="group relative overflow-hidden card-glass" style={{ aspectRatio: "3/4" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-[#EDE9E0] flex items-center justify-center">
                  <span className="text-[#1B1F23]/20 text-xs text-center px-4">
                    {i === 0 ? "Chef plating shot" : i === 1 ? "Live station photo" : "VIP table setup"}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F23]/75 via-[#1B1F23]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold mb-1" style={{ fontFamily: "var(--font-montserrat)" }}>{item.label}</p>
                  <p lang="ms" className="text-[#F9F7F2]/45 text-[10px] italic mb-2">{item.ms}</p>
                  <p className="text-[#F9F7F2]/80 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F9F7F2] py-20 md:py-28 border-t border-[#1B1F23]/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>The Process</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1B1F23]">
              From Enquiry to Applause<br />in 4 Steps.
            </h2>
            <p lang="ms" className="text-[#1B1F23]/55 text-sm italic mt-2">Dari pertanyaan hingga majlis — 4 langkah mudah.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#1B1F23]/6">
            {processSteps.map((p) => (
              <div key={p.n} className="card-glass p-8 hover:bg-white transition-colors">
                <span className="font-serif text-4xl font-bold text-[#D4AF37]/55 block mb-4 not-italic">{p.n}</span>
                <h3 className="font-serif font-semibold text-[#1B1F23] mb-0.5 not-italic">{p.title}</h3>
                <p lang="ms" className="text-[10px] text-[#1B1F23]/55 italic mb-3">{p.ms}</p>
                <p className="text-[#1B1F23]/70 text-sm leading-relaxed">{p.body}</p>
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

      {/* ── QUOTE TEASER ── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#1B1F23]/6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                <Calculator className="inline w-3 h-3 mr-1" />
                Instant Quote
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#1B1F23] leading-tight mb-5 gold-line">
                Know Your Budget<br />Before You Call.
              </h2>
              <p className="text-[#1B1F23]/55 mb-8 leading-relaxed">
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

            {/* Indicative prices — glass card */}
            <div className="card-glass divide-y divide-[#1B1F23]/6">
              {[
                { label: "Corporate Lunch · 50 pax · Standard",   price: "~RM 1,400" },
                { label: "Wedding Reception · 150 pax · Premium", price: "~RM 18,500" },
                { label: "Conference Full-Day · 80 pax",          price: "~RM 5,200" },
                { label: "Bento Boxes · 100 pax",                 price: "~RM 2,200" },
              ].map((ex) => (
                <div key={ex.label} className="flex justify-between items-center px-6 py-4">
                  <span className="text-[#1B1F23]/55 text-sm">{ex.label}</span>
                  <span className="font-serif font-bold text-[#D4AF37] not-italic">{ex.price}</span>
                </div>
              ))}
              <div className="px-6 py-3">
                <p className="text-[11px] text-[#1B1F23]/55 italic">Indicative only. Use our calculator for your exact event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMITMENTS ── */}
      <section className="bg-[#F9F7F2] py-20 md:py-28 border-t border-[#1B1F23]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Our Commitments</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1F23]">
              Why Clients Come Back — Every Year.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {commitments.map(({ icon: Icon, title, titleMs, body }) => (
              <div key={title} className="card-glass p-8 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:border-[#D4AF37] transition-colors">
                  <Icon className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif font-semibold text-[#1B1F23] mb-0.5 text-sm not-italic">{title}</h3>
                <p lang="ms" className="text-[10px] text-[#1B1F23]/55 italic mb-3">{titleMs}</p>
                <p className="text-[#1B1F23]/70 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20 md:py-28 border-t border-[#1B1F23]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Client Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1F23]">
              Trusted by Malaysia&apos;s Best.
            </h2>
            <p lang="ms" className="text-[#1B1F23]/55 text-sm italic mt-1">Dipercayai oleh organisasi terkemuka Malaysia</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="card-glass p-8 flex flex-col hover:shadow-lg transition-all">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#1B1F23]/65 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-[#1B1F23]/8 pt-5">
                  <p className="font-semibold text-[#1B1F23] text-sm">{t.name}</p>
                  <p className="text-[#1B1F23]/60 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST / MARQUEE / CHEF / INSTAGRAM ── */}
      <TrustSection />
    </>
  );
}
