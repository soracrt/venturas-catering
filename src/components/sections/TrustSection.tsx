import { ChefHat, Camera } from "lucide-react";
import Link from "next/link";

const clients = [
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
];

const instaPosts = [
  { id: 1, caption: "Wedding setup at Sunway Lagoon Resort 🎊", likes: 284 },
  { id: 2, caption: "Nasi Lemak station for 400 pax 🌿", likes: 412 },
  { id: 3, caption: "Live carving station — product launch ✨", likes: 193 },
  { id: 4, caption: "Dessert table setup 🍰", likes: 367 },
  { id: 5, caption: "Corporate lunch, Petronas Tower KL 🏙️", likes: 521 },
  { id: 6, caption: "Hari Raya open house 400 pax 🌙", likes: 609 },
];

export default function TrustSection() {
  return (
    <section className="bg-[#F9F7F2]">

      {/* ── CLIENT MARQUEE ── */}
      <div className="border-y border-[#1B1F23]/8 py-5 overflow-hidden bg-white">
        <p className="text-center text-[9px] tracking-[0.4em] uppercase text-[#1B1F23]/55 font-medium mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
          Trusted by Malaysia&apos;s leading organisations
        </p>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-14 whitespace-nowrap">
            {clients.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-[#1B1F23]/52 font-semibold text-xs tracking-widest uppercase flex-shrink-0"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEET THE CHEF ── */}
      <div className="py-20 md:py-28 border-b border-[#1B1F23]/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Chef photo */}
            <div className="relative">
              <div className="aspect-[4/5] card-glass flex items-center justify-center overflow-hidden">
                <ChefHat className="w-20 h-20 text-[#1B1F23]/15" />
                {/* Replace: <Image src="/images/chef.jpg" alt="Head Chef Venturas Catering Shah Alam" fill className="object-cover" /> */}
              </div>
              {/* Floating credential card */}
              <div className="absolute -bottom-5 -right-5 bg-[#D4AF37] text-[#1B1F23] p-5 shadow-xl shadow-[#D4AF37]/30">
                <p className="font-serif font-bold text-3xl leading-none not-italic">11+</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1 opacity-70" style={{ fontFamily: "var(--font-montserrat)" }}>Years Mastery</p>
              </div>
            </div>

            {/* Chef bio */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                Meet the Team
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1F23] mb-1">
                Chef Hafizuddin Razak
              </h2>
              <p lang="ms" className="text-[#1B1F23]/60 text-sm italic mb-6">
                Ketua Chef, Venturas Catering
              </p>
              <div className="w-10 h-px bg-[#D4AF37] mb-6" />
              <p className="text-[#1B1F23]/60 leading-relaxed mb-4">
                With a decade across hotel banquets, airline catering, and bespoke private dining,
                Chef Hafiz brings international technique to deeply Malaysian soul food. Every menu
                is personally signed off by him.
              </p>
              <p className="text-[#1B1F23]/60 leading-relaxed mb-8">
                Trained at KDU Culinary Arts and refined in Singapore and Dubai — he believes great
                catering is invisible. Guests notice only the food, never the logistics.
              </p>
              <div className="flex flex-wrap gap-2">
                {["KDU Culinary Graduate", "JAKIM Halal Auditor", "HACCP Certified", "11 Years Experience"].map((b) => (
                  <span key={b} className="text-xs font-medium text-[#1B1F23]/55 border border-[#1B1F23]/15 px-3 py-1.5 uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INSTAGRAM LIVE EVENTS ── */}
      <div className="py-20 md:py-28 border-b border-[#1B1F23]/6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                Live from Our Events
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1B1F23]">
                Real Moments. Real Food.
              </h2>
            </div>
            <a
              href="https://instagram.com/venturascatering"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-shrink-0"
            >
              <Camera className="w-3.5 h-3.5" />
              @venturascatering
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {instaPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/venturascatering"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-[#EDE9E0] block overflow-hidden border border-[#1B1F23]/6"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-5 h-5 text-[#1B1F23]/20" />
                </div>
                <div className="absolute inset-0 bg-[#1B1F23]/0 group-hover:bg-[#1B1F23]/75 transition-all duration-200 flex flex-col items-center justify-center gap-1 p-3">
                  <span className="text-[#F9F7F2] text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity text-center leading-tight">
                    {post.caption}
                  </span>
                  <span className="text-[#D4AF37] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                    ♥ {post.likes}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-[#1B1F23]/25 mt-3 text-center">
            Connect Instagram Business API to display live posts.
          </p>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="py-20 bg-[#1B1F23] section-dark">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Limited Availability</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#F9F7F2] mb-4">
            Is Your Date Available?
          </h2>
          <p className="text-[#F9F7F2]/50 mb-8 leading-relaxed">
            We cap monthly bookings to maintain quality. Secure your event date before it&apos;s gone.
          </p>
          <Link href="/quote" className="btn-gold">
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
