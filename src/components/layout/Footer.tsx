import Link from "next/link";
import { Phone, Mail, MapPin, Share2, MessageCircle } from "lucide-react";

const footerLinks = {
  corporate: [
    { label: "Corporate Lunch",      href: "/services/corporate#lunch" },
    { label: "Conference & Seminar", href: "/services/corporate#conference" },
    { label: "Product Launches",     href: "/services/corporate#launches" },
    { label: "Office Catering",      href: "/services/corporate#office" },
  ],
  private: [
    { label: "Weddings",               href: "/services/private#weddings" },
    { label: "Birthdays",              href: "/services/private#birthdays" },
    { label: "Social Gatherings",      href: "/services/private#social" },
    { label: "Themed Events",          href: "/services/private#themed" },
  ],
  company: [
    { label: "About Us",   href: "/about"   },
    { label: "Our Menu",   href: "/menu"    },
    { label: "Gallery",    href: "/gallery" },
    { label: "Blog",       href: "/blog"    },
    { label: "Contact",    href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] text-stone-400 border-t border-white/5">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-[#c9a84c] via-[#e2c175] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <p className="font-serif text-2xl font-bold text-white tracking-[0.12em] uppercase">Venturas</p>
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold">Catering</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 mb-6">
              Premium Halal-certified event catering for corporate and private occasions across
              Malaysia. Excellence in every plate.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/venturascatering" target="_blank" rel="noopener noreferrer"
                className="text-stone-600 hover:text-[#c9a84c] transition-colors" aria-label="Instagram">
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
              <a href="https://facebook.com/venturascatering" target="_blank" rel="noopener noreferrer"
                className="text-stone-600 hover:text-[#c9a84c] transition-colors" aria-label="Facebook">
                <Share2 className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-[9px] tracking-[0.35em] uppercase text-stone-500 font-semibold mb-5">Corporate</h4>
            <ul className="space-y-3">
              {footerLinks.corporate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-500 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Private */}
          <div>
            <h4 className="text-[9px] tracking-[0.35em] uppercase text-stone-500 font-semibold mb-5">Private Events</h4>
            <ul className="space-y-3">
              {footerLinks.private.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-500 hover:text-[#c9a84c] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] tracking-[0.35em] uppercase text-stone-500 font-semibold mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-stone-500">
                <Phone className="w-4 h-4 mt-0.5 text-[#c9a84c] flex-shrink-0" />
                <a href="tel:+60123456789" className="hover:text-[#c9a84c] transition-colors">+60 12-345 6789</a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-500">
                <Mail className="w-4 h-4 mt-0.5 text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:hello@venturascatering.my" className="hover:text-[#c9a84c] transition-colors">
                  hello@venturascatering.my
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-500">
                <MapPin className="w-4 h-4 mt-0.5 text-[#c9a84c] flex-shrink-0" />
                <span>Shah Alam, Selangor, Malaysia</span>
              </li>
            </ul>
            <Link href="/quote" className="inline-block mt-6 btn-gold text-xs py-2.5 px-5">
              Quick Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-stone-700">
          <p>© {new Date().getFullYear()} Venturas Catering. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-[#c9a84c] transition-colors uppercase tracking-wider">Privacy</Link>
            <Link href="/terms"   className="hover:text-[#c9a84c] transition-colors uppercase tracking-wider">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
