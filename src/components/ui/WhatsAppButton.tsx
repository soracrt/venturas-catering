"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "60123456789"; // replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Venturas! I'd like to enquire about catering for my event."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 group"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="text-sm font-semibold pr-1 hidden sm:inline">Chat with us</span>
    </a>
  );
}
