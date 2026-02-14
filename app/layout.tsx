import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tamaal | Premium Indian Rice",
    template: "%s | Tamaal",
  },
  description:
    "Tamaal brings you premium Indian rice, sustainably sourced from the finest farms. Experience purity from farm to table with our carefully selected grains.",
  keywords: [
    "Indian rice",
    "premium rice",
    "basmati rice",
    "sustainable rice",
    "organic rice",
    "Tamaal",
    "FMCG",
    "Indian food",
  ],
  authors: [{ name: "Tamaal" }],
  creator: "Tamaal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tamaal.com",
    siteName: "Tamaal",
    title: "Tamaal | Premium Indian Rice",
    description:
      "Premium Indian rice, sustainably sourced from the finest farms. Purity from farm to table.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tamaal - Premium Indian Rice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamaal | Premium Indian Rice",
    description:
      "Premium Indian rice, sustainably sourced from the finest farms.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased bg-[var(--color-background)] text-[var(--color-text-primary)]">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
