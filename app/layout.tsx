import type { Metadata } from "next";
import {
  Inter,
  Jua,
  Lilita_One,
  Playfair_Display,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const jua = Jua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jua",
});
const lilitaOne = Lilita_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lilita-one",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair-display",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jua.variable} ${lilitaOne.variable} ${playfairDisplay.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
