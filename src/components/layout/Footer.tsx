import Link from "next/link";
import { Phone, Mail, MapPin, Share2, MessageCircle } from "lucide-react";

const footerLinks = {
  corporate: [
    { label: "Corporate Lunch", href: "/services/corporate#lunch" },
    { label: "Office Catering", href: "/services/corporate#office" },
    { label: "Conference & Seminars", href: "/services/corporate#conference" },
    { label: "Product Launches", href: "/services/corporate#launches" },
  ],
  private: [
    { label: "Weddings", href: "/services/private#weddings" },
    { label: "Birthdays & Anniversaries", href: "/services/private#birthdays" },
    { label: "Social Gatherings", href: "/services/private#social" },
    { label: "Themed Events", href: "/services/private#themed" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Menu", href: "/menu" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-2xl font-bold text-white tracking-wide">VENTURAS</p>
              <p className="text-xs tracking-[0.25em] uppercase text-gold font-medium">Catering</p>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-5">
              Premium event catering for corporate and private occasions across Malaysia.
              Excellence in every bite.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/venturascatering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/venturascatering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Corporate */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Corporate
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.corporate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Private */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Private Events
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.private.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="tel:+60123456789" className="hover:text-gold transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <a href="mailto:hello@venturascatering.my" className="hover:text-gold transition-colors">
                  hello@venturascatering.my
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span>Kuala Lumpur, Malaysia</span>
              </li>
            </ul>
            <Link
              href="/quote"
              className="inline-block mt-5 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-dark transition-colors"
            >
              Quick Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-700 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Venturas Catering. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
