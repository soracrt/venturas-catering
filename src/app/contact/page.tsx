import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Venturas Catering. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#1c1c1e] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#6b6560] max-w-xl mx-auto">
            Have a question or ready to start planning? Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-xl font-bold text-[#1c1c1e]">Contact Details</h2>
            {[
              { icon: Phone, label: "Phone", value: "+60 12-345 6789", href: "tel:+60123456789" },
              { icon: Mail, label: "Email", value: "hello@venturascatering.my", href: "mailto:hello@venturascatering.my" },
              { icon: MapPin, label: "Address", value: "Kuala Lumpur, Malaysia", href: undefined },
              { icon: Clock, label: "Office Hours", value: "Mon–Fri, 9am–6pm", href: undefined },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b8932a]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#b8932a]" />
                </div>
                <div>
                  <p className="text-xs text-[#6b6560] uppercase tracking-wide font-medium mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-[#1c1c1e] font-medium hover:text-[#b8932a] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#1c1c1e] font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/quote"
                className="inline-block px-7 py-3.5 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors"
              >
                Get a Quick Quote Instead
              </Link>
            </div>
          </div>

          {/* Simple contact form placeholder */}
          <div className="bg-[#faf8f4] rounded-2xl p-7">
            <h2 className="font-serif text-xl font-bold text-[#1c1c1e] mb-5">Send a Message</h2>
            <div className="space-y-4">
              {[
                { label: "Name", type: "text", placeholder: "Your full name" },
                { label: "Email", type: "email", placeholder: "your@email.com" },
                { label: "Phone", type: "tel", placeholder: "+60 12-345 6789" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-[#1c1c1e] mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e] placeholder:text-stone-400"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-[#1c1c1e] mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:border-[#b8932a] focus:ring-2 focus:ring-[#b8932a]/20 outline-none transition-all text-[#1c1c1e] placeholder:text-stone-400 resize-none"
                />
              </div>
              <button className="w-full py-3.5 bg-[#b8932a] text-white font-semibold rounded-full hover:bg-[#8a6d1e] transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
