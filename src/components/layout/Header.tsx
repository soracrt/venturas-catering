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
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#1B1F23]/8">
      {/* Accent top-line — colour shifts with data-theme on <html> */}
      <div className="header-accent-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.12em] text-[#1B1F23] uppercase not-italic">
              Venturas
            </span>
            <span
              className="text-[9px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold -mt-0.5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Catering
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 text-xs font-semibold text-[#1B1F23]/55 hover:text-[#1B1F23] transition-colors uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-3 w-52 bg-[#F9F7F2] border border-[#1B1F23]/10 overflow-hidden transition-all duration-150 shadow-lg shadow-[#1B1F23]/8",
                      servicesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-3 text-xs text-[#1B1F23]/60 hover:text-[#D4AF37] hover:bg-[#1B1F23]/3 transition-colors uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-montserrat)" }}
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
                  className="text-xs font-semibold text-[#1B1F23]/55 hover:text-[#1B1F23] transition-colors uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-montserrat)" }}
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
            className="md:hidden p-2 text-[#1B1F23]/60 hover:text-[#1B1F23] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#1B1F23]/8 bg-[#F9F7F2] px-4 py-5 space-y-1">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block text-sm font-semibold text-[#1B1F23]/70 uppercase tracking-widest py-2.5 hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block pl-4 text-xs text-[#1B1F23]/60 uppercase tracking-wider py-1.5 hover:text-[#1B1F23]/70 transition-colors"
                  style={{ fontFamily: "var(--font-montserrat)" }}
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
