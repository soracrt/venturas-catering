import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Venturas Catering | Premium Event Catering in Malaysia",
  description:
    "Exceptional catering for corporate events and private occasions. Mobile-first ordering, instant quotes, and impeccable service across Malaysia.",
};

const stats = [
  { icon: Users, value: "5,000+", label: "Events Catered" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Clock, value: "24hr", label: "Quote Turnaround" },
];

const services = [
  {
    title: "Corporate Catering",
    description:
      "Boardroom lunches, seminars, product launches, and office events — elevated to match your brand.",
    href: "/services/corporate",
    tag: "For Businesses",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    title: "Private Events",
    description:
      "Weddings, birthdays, anniversaries, and intimate gatherings crafted with personal flair.",
    href: "/services/private",
    tag: "For Individuals",
    tagColor: "bg-rose-50 text-rose-700",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1c1c1e] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-[#b8932a] font-semibold">
            Premium Event Catering · Malaysia
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Every Event,
            <br />
            <span className="text-[#b8932a]">Unforgettably</span> Served.
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-stone-300 mb-10">
            From intimate private gatherings to large-scale corporate events, Venturas Catering
            delivers exceptional food and flawless execution — every single time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#faf8f4] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="w-6 h-6 text-[#b8932a] mx-auto mb-2" />
                <p className="font-serif text-3xl font-bold text-[#1c1c1e]">{value}</p>
                <p className="text-sm text-[#6b6560] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Funnel */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-4">
              What Are You Planning?
            </h2>
            <p className="text-[#6b6560] max-w-xl mx-auto">
              We&apos;ve tailored our services for two distinct journeys — choose yours to explore
              curated menus, packages, and pricing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative p-8 bg-white rounded-2xl border border-stone-200 hover:border-[#b8932a] hover:shadow-lg transition-all duration-200"
              >
                <span
                  className={`inline-block mb-4 text-xs font-semibold px-3 py-1 rounded-full ${service.tagColor}`}
                >
                  {service.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1c1c1e] mb-3 group-hover:text-[#b8932a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#6b6560] text-sm leading-relaxed mb-5">{service.description}</p>
                <span className="flex items-center gap-2 text-[#b8932a] text-sm font-semibold">
                  Explore Packages{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote CTA */}
      <section className="bg-[#1c1c1e] text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Get an Instant Quote in 60 Seconds
          </h2>
          <p className="text-stone-400 mb-8">
            Tell us your event type, guest count, and date — our Quick Quote calculator gives you a
            live estimate with no commitment required.
          </p>
          <Link
            href="/quote"
            className="inline-block px-10 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors text-base"
          >
            Start Your Quote
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Lim",
                role: "Marketing Director, TechCorp KL",
                quote:
                  "Venturas made our product launch dinner absolutely stunning. The food was exceptional and service was flawless.",
              },
              {
                name: "Ahmad Razif",
                role: "Groom, Wedding Oct 2024",
                quote:
                  "Our wedding guests couldn't stop raving about the food. Venturas handled 300 pax with ease.",
              },
              {
                name: "Priya Nair",
                role: "Events Manager, Petronas",
                quote:
                  "Reliable, professional, and always on time. Our go-to caterer for all corporate events.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 text-left shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#b8932a] text-[#b8932a]" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <p className="font-semibold text-[#1c1c1e] text-sm">{t.name}</p>
                  <p className="text-[#6b6560] text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
