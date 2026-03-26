import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Camera, MessageCircle, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — We'll Be in Touch Soon",
  description: "Your catering enquiry has been received. Our team will respond within 24 hours.",
};

const nextSteps = [
  { icon: Clock, step: "Within 2 hours", desc: "You'll receive a WhatsApp message acknowledging your enquiry." },
  { icon: CheckCircle, step: "Within 24 hours", desc: "Our events coordinator will send your full personalised proposal." },
  { icon: MessageCircle, step: "Within 48 hours", desc: "We confirm your event date and begin your menu consultation." },
];

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#faf8f4] flex items-center py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center w-full">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-[#b8932a]/10 border-2 border-[#b8932a]/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#b8932a]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#1c1c1e] mb-2">
          Enquiry Received!
        </h1>
        <p lang="ms" className="text-sm text-stone-400 italic mb-4">Pertanyaan anda telah diterima!</p>
        <p className="text-[#6b6560] mb-10 max-w-md mx-auto">
          Thank you for choosing Venturas. While you wait, here's exactly what happens next.
        </p>

        {/* Next Steps */}
        <div className="bg-white rounded-3xl border border-stone-200 p-7 mb-8 text-left space-y-5">
          <h2 className="font-semibold text-[#1c1c1e] text-sm uppercase tracking-wide">What Happens Next</h2>
          {nextSteps.map(({ icon: Icon, step, desc }) => (
            <div key={step} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#b8932a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-4.5 h-4.5 text-[#b8932a]" />
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1e] text-sm">{step}</p>
                <p className="text-[#6b6560] text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social follow prompt */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100 p-7 mb-8">
          <h2 className="font-serif text-xl font-bold text-[#1c1c1e] mb-2">
            While You Wait — Follow Our Work
          </h2>
          <p className="text-[#6b6560] text-sm mb-5">
            Get daily inspiration from our live events, behind-the-scenes kitchen action, and new
            menu reveals on Instagram.
          </p>
          <a
            href="https://instagram.com/venturascatering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Camera className="w-4 h-4" />
            Follow @venturascatering
          </a>
        </div>

        {/* Direct contact */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-8">
          <p className="text-sm font-semibold text-[#1c1c1e] mb-4">Need to reach us sooner?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#1fb855] transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+60123456789"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-stone-300 text-[#1c1c1e] font-semibold rounded-full hover:bg-stone-50 transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call +60 12-345 6789
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="text-sm text-stone-400 hover:text-[#b8932a] transition-colors underline-offset-2 hover:underline"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
}
