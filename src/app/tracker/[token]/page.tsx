import type { Metadata } from "next";
import LiveTracker from "@/components/map/LiveTracker";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Event Tracker",
  description: "Track your Venturas Catering delivery in real-time.",
  robots: { index: false, follow: false }, // private page — not indexed
};

export default async function TrackerPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  // In production: validate token against DB, fetch order data
  // If invalid: redirect to /contact

  return (
    <div className="min-h-screen bg-[#080808] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/" className="text-[9px] tracking-[0.3em] uppercase text-stone-600 hover:text-[#c9a84c] transition-colors">
              ← Venturas Catering
            </Link>
            <h1 className="font-serif text-2xl font-bold text-white mt-1">Your Event Tracker</h1>
            <p className="text-stone-500 text-xs mt-0.5">Token: {token.slice(0, 8)}…</p>
          </div>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost text-xs py-2.5 px-4"
          >
            Contact Team
          </a>
        </div>

        <LiveTracker token={token} />

        <p className="text-center text-xs text-stone-700 mt-6">
          This is a private link. Please do not share it publicly.
        </p>
      </div>
    </div>
  );
}
