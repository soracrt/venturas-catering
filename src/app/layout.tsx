import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SchemaOrg from "@/components/seo/SchemaOrg";

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

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Venturas Catering | Premium Halal Event Catering Shah Alam & Selangor",
    template: "%s | Venturas Catering",
  },
  description:
    "Premium Halal-certified catering for corporate events and private occasions in Shah Alam, Selangor & KL. Weddings, conferences, product launches. Get an instant quote.",
  keywords: [
    "catering Shah Alam",
    "catering Selangor",
    "Halal catering Malaysia",
    "wedding catering KL",
    "corporate catering Selangor",
    "event catering Malaysia",
    "katering Shah Alam",
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
    <html
      lang="en-MY"
      className={`${playfair.variable} ${inter.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-stone-900">
        <SchemaOrg />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
