import type { Metadata } from "next";
import { Playfair_Display, Playfair_Display_SC, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfairSC = Playfair_Display_SC({
  variable: "--font-display-sc",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Beaulieu — Restaurant Cuisine Française · Valenciennes",
  description:
    "Restaurant de cuisine française à Valenciennes. Déjeuner du lundi au samedi, dîner vendredi et samedi. Terrasse, parking gratuit, événements privés.",
  keywords: ["restaurant", "valenciennes", "cuisine française", "le beaulieu", "59300"],
  openGraph: {
    title: "Le Beaulieu — Restaurant Cuisine Française",
    description: "Cuisine française à Valenciennes. Terrasse, parking gratuit, événements privés.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${playfairSC.variable} ${inter.variable}`}>
      <body className="antialiased min-h-full">{children}</body>
    </html>
  );
}
