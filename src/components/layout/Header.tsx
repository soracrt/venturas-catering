"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

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
  const { eveningMode, toggleEveningMode } = useTheme();

  const eve = eveningMode;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
        eve
          ? "bg-[#1B1F23]/97 border-[#F9F7F2]/8"
          : "bg-[#F9F7F2]/95 border-[#1B1F23]/8"
      )}
    >
      {/* Accent top-line — colour shifts with data-theme on <html> */}
      <div className="header-accent-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-serif text-xl md:text-2xl font-bold tracking-[0.12em] uppercase not-italic transition-colors duration-300",
                eve ? "text-[#F9F7F2]" : "text-[#1B1F23]"
              )}
            >
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
                    className={cn(
                      "flex items-center gap-1 text-xs font-semibold transition-colors uppercase tracking-widest",
                      eve
                        ? "text-[#F9F7F2]/60 hover:text-[#F9F7F2]"
                        : "text-[#1B1F23]/55 hover:text-[#1B1F23]"
                    )}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-3 w-52 border overflow-hidden transition-all duration-150 shadow-lg",
                      eve
                        ? "bg-[#1B1F23] border-[#F9F7F2]/10 shadow-black/30"
                        : "bg-[#F9F7F2] border-[#1B1F23]/10 shadow-[#1B1F23]/8",
                      servicesOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    )}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-5 py-3 text-xs transition-colors uppercase tracking-wider",
                          eve
                            ? "text-[#F9F7F2]/60 hover:text-[#D4AF37] hover:bg-[#F9F7F2]/4"
                            : "text-[#1B1F23]/60 hover:text-[#D4AF37] hover:bg-[#1B1F23]/3"
                        )}
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
                  className={cn(
                    "text-xs font-semibold transition-colors uppercase tracking-widest",
                    eve
                      ? "text-[#F9F7F2]/60 hover:text-[#F9F7F2]"
                      : "text-[#1B1F23]/55 hover:text-[#1B1F23]"
                  )}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Evening Mode toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Evening Event Mode toggle */}
            <button
              onClick={toggleEveningMode}
              title={eve ? "Switch to Day Mode" : "Evening Event Mode"}
              aria-label={eve ? "Switch to Day Mode" : "Evening Event Mode"}
              className={cn(
                "flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest px-3 py-2 border transition-all duration-200",
                eve
                  ? "border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/8"
                  : "border-[#1B1F23]/15 text-[#1B1F23]/55 hover:border-[#1B1F23]/30 hover:text-[#1B1F23]"
              )}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {eve ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
              <span className="hidden lg:inline">
                {eve ? "Day Mode" : "Evening Mode"}
              </span>
            </button>

            <Link href="/quote" className="btn-gold text-xs py-2.5 px-5">
              Check Availability
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              eve
                ? "text-[#F9F7F2]/60 hover:text-[#F9F7F2]"
                : "text-[#1B1F23]/60 hover:text-[#1B1F23]"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={cn(
            "md:hidden border-t px-4 py-5 space-y-1",
            eve
              ? "bg-[#1B1F23] border-[#F9F7F2]/8"
              : "bg-[#F9F7F2] border-[#1B1F23]/8"
          )}
        >
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "block text-sm font-semibold uppercase tracking-widest py-2.5 hover:text-[#D4AF37] transition-colors",
                  eve ? "text-[#F9F7F2]/70" : "text-[#1B1F23]/70"
                )}
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block pl-4 text-xs uppercase tracking-wider py-1.5 transition-colors",
                    eve
                      ? "text-[#F9F7F2]/40 hover:text-[#F9F7F2]/70"
                      : "text-[#1B1F23]/60 hover:text-[#1B1F23]/70"
                  )}
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Evening mode toggle */}
          <button
            onClick={toggleEveningMode}
            className={cn(
              "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest py-2.5 w-full transition-colors",
              eve ? "text-[#D4AF37]" : "text-[#1B1F23]/55"
            )}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {eve ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            {eve ? "Day Mode" : "Evening Event Mode"}
          </button>

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
