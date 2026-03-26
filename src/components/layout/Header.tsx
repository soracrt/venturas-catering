"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Corporate Catering", href: "/services/corporate" },
      { label: "Private Events",     href: "/services/private"   },
    ],
  },
  { label: "Menu",      href: "/menu"      },
  { label: "Bento",     href: "/bento"     },
  { label: "Logistics", href: "/logistics" },
  { label: "Gallery",   href: "/gallery"   },
  { label: "About",     href: "/about"     },
  { label: "Blog",      href: "/blog"      },
];

export default function Header() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
      {/* Gold top-line */}
      <div className="h-px bg-gradient-to-r from-[#c9a84c] via-[#e2c175] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.12em] text-white uppercase">
              Venturas
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#c9a84c] font-semibold -mt-0.5">
              Catering
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-xs font-semibold text-stone-400 hover:text-white transition-colors uppercase tracking-widest"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-3 w-52 bg-[#0e0e0e] border border-white/8 overflow-hidden transition-all duration-150",
                      servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-xs text-stone-400 hover:text-[#c9a84c] hover:bg-white/3 transition-colors uppercase tracking-wider"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs font-semibold text-stone-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/quote" className="btn-gold text-xs py-2.5 px-5">
              Check Availability
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-stone-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#080808] px-4 py-5 space-y-1">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block text-sm font-semibold text-stone-300 uppercase tracking-widest py-2.5 hover:text-[#c9a84c] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block pl-4 text-xs text-stone-600 uppercase tracking-wider py-1.5 hover:text-stone-300 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/quote"
            className="block mt-4 btn-gold text-center text-xs"
            onClick={() => setMobileOpen(false)}
          >
            Check Availability
          </Link>
        </div>
      )}
    </header>
  );
}
