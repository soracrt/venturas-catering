import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { ThemeProvider } from "@/context/ThemeContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
    default: "Venturas Catering | Premium Halal Event Catering Shah Alam & Selangor",
    template: "%s | Venturas Catering",
  },
  description:
    "Premium Halal-certified catering for corporate events and private occasions in Shah Alam, Selangor & KL. Weddings, conferences, product launches. Get an instant quote.",
  keywords: [
    "Premium Halal Catering Shah Alam",
    "catering Shah Alam",
    "catering Selangor",
    "Halal catering Malaysia",
    "wedding catering KL",
    "corporate catering Selangor",
    "event catering Malaysia",
    "katering Shah Alam",
    "Venturas Catering",
    "culinary catering Klang Valley",
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
      className={`${cormorant.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9F7F2] text-[#1B1F23]">
        <ThemeProvider>
          <SchemaOrg />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
