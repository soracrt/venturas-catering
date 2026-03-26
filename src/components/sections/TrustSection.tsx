import { Leaf, ShieldCheck, Award, ChefHat, Camera } from "lucide-react";
import Link from "next/link";

const clients = [
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
  // Duplicated for seamless loop
  "Petronas", "Maybank", "Taylor's University", "Cosentino Malaysia",
  "AirAsia", "Sunway Group", "CIMB Bank", "Axiata Group",
  "Maxis", "Tenaga Nasional", "UEM Group", "YTL Corporation",
];

const halalBadges = [
  {
    icon: ShieldCheck,
    title: "Halal Certified",
    titleMs: "Bersijil Halal",
    body: "Our kitchen holds a valid JAKIM Halal certificate. Every ingredient is sourced from certified suppliers.",
    color: "from-emerald-500/10 to-emerald-600/5 border-emerald-200",
    iconColor: "text-emerald-600 bg-emerald-100",
  },
  {
    icon: Leaf,
    title: "Sustainability Pledge",
    titleMs: "Komitmen Kelestarian",
    body: "Biodegradable packaging, zero food waste policy, and locally-sourced produce wherever possible.",
    color: "from-green-500/10 to-teal-600/5 border-green-200",
    iconColor: "text-teal-600 bg-teal-100",
  },
  {
    icon: Award,
    title: "Food Safety Certified",
    titleMs: "Pensijilan Keselamatan Makanan",
    body: "All kitchen staff hold Food Handler certificates. HACCP principles applied at every stage.",
    color: "from-blue-500/10 to-blue-600/5 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
  },
];

// Placeholder Camera posts — replace with real API or embed
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
    <section className="py-0 overflow-hidden">

      {/* ── SCROLLING CLIENT MARQUEE ── */}
      <div className="bg-[#faf8f4] border-y border-stone-200 py-5 overflow-hidden">
        <p className="text-center text-xs tracking-[0.25em] uppercase text-stone-400 font-medium mb-4">
          Trusted by Malaysia's leading organisations
        </p>
        <div className="flex overflow-hidden">
          <div
            className="marquee-track flex items-center gap-12 whitespace-nowrap"
            style={{ animation: "marquee 35s linear infinite" }}
          >
            {clients.map((client, i) => (
              <span
                key={`${client}-${i}`}
                className="text-stone-500 font-semibold text-sm tracking-wide uppercase flex-shrink-0 px-2"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── HALAL & SUSTAINABILITY ── */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-3">
              Our Commitments
            </h2>
            <p className="text-[#6b6560] max-w-xl mx-auto">
              Not just a caterer — a responsible partner for your guests and the planet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {halalBadges.map(({ icon: Icon, title, titleMs, body, color, iconColor }) => (
              <div
                key={title}
                className={`relative rounded-2xl bg-gradient-to-br ${color} border p-7 overflow-hidden`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#1c1c1e] text-base mb-0.5">{title}</h3>
                <p lang="ms" className="text-xs text-[#6b6560] italic mb-3">{titleMs}</p>
                <p className="text-sm text-[#6b6560] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MEET THE CHEF ── */}
      <div className="py-16 md:py-24 bg-[#1c1c1e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Chef photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-stone-800 rounded-3xl overflow-hidden flex items-center justify-center">
                <ChefHat className="w-24 h-24 text-stone-600" />
                {/* Replace with: <Image src="/images/chef.jpg" alt="Head Chef Venturas Catering Shah Alam" fill className="object-cover" /> */}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#b8932a] text-white rounded-2xl p-4 shadow-xl">
                <p className="font-serif font-bold text-2xl">11+</p>
                <p className="text-xs opacity-80">Years Mastery</p>
              </div>
            </div>

            {/* Chef bio */}
            <div>
              <span className="inline-block mb-4 text-xs tracking-[0.25em] uppercase text-[#b8932a] font-semibold">
                Meet the Team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                Chef Hafizuddin Razak
              </h2>
              <p lang="ms" className="text-stone-400 text-sm italic mb-5">
                Ketua Chef, Venturas Catering
              </p>
              <p className="text-stone-300 leading-relaxed mb-4">
                With a decade of experience spanning hotel banquets, airline catering, and
                bespoke private dining, Chef Hafiz brings international technique to deeply
                Malaysian soul food. Every menu is personally signed off by him.
              </p>
              <p className="text-stone-300 leading-relaxed mb-7">
                Trained at KDU Culinary Arts and further refined in Singapore and Dubai, he
                believes great catering is invisible — guests only notice the food, never the
                logistics.
              </p>
              <div className="flex flex-wrap gap-3">
                {["KDU Culinary Graduate", "JAKIM Halal Auditor", "HACCP Certified", "11 Years Experience"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium text-stone-300 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INSTAGRAM LIVE EVENTS FEED ── */}
      <div className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-2">
                Live from Our Events
              </h2>
              <p className="text-[#6b6560]">Real moments, real food — follow us for daily updates.</p>
            </div>
            <a
              href="https://instagram.com/venturascatering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <Camera className="w-4 h-4" />
              @venturascatering
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instaPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com/venturascatering"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-stone-200 rounded-2xl overflow-hidden block"
              >
                {/* Placeholder — replace with <Image> when you have real photos */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-stone-400" />
                </div>
                <div className="absolute inset-0 bg-[#1c1c1e]/0 group-hover:bg-[#1c1c1e]/60 transition-all duration-200 flex flex-col items-center justify-center gap-1 p-3">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center leading-tight">
                    {post.caption}
                  </span>
                  <span className="text-[#b8932a] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ♥ {post.likes}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-4">
            Connect your Camera Business account via the Camera Basic Display API to show live posts here.
          </p>
        </div>
      </div>

      {/* ── AVAILABILITY CTA ── */}
      <div className="py-14 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1c1c1e] mb-3">
            Is Your Date Available?
          </h2>
          <p className="text-[#6b6560] mb-7">
            We cap bookings to maintain quality. Check availability before it's taken.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors text-base shadow-lg shadow-[#b8932a]/20"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
}
