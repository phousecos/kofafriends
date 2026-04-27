import type { Metadata } from "next";
import { Source_Serif_4, Inter_Tight } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Friends of KOFA, Africa",
  description:
    "A U.S.-based 501(c)(3) public charity raising tax-deductible funds in support of KOFA Africa's community health, maternal care, and clean water work across the African continent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${interTight.variable}`}>
      <body className="font-sans bg-kofa-warm text-kofa-ink antialiased">
        {children}
      </body>
    </html>
  );
}
