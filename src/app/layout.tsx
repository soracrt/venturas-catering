import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Venturas Catering | Premium Event Catering in Malaysia",
    template: "%s | Venturas Catering",
  },
  description:
    "Venturas Catering delivers premium corporate and private event catering across Malaysia. From boardroom lunches to grand weddings — we bring exceptional food and service to your table.",
  keywords: [
    "catering Malaysia",
    "wedding catering KL",
    "corporate catering Malaysia",
    "event catering",
    "Venturas Catering",
  ],
  metadataBase: new URL("https://venturascatering.my"),
  openGraph: {
    siteName: "Venturas Catering",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-stone-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
