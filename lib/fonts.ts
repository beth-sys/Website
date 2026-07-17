import { Fraunces, Geist, Geist_Mono } from "next/font/google";

// Display serif — used with restraint for headings only. Fraunces has a
// warm, slightly hand-carved quality (via its optical-size axis) that
// reads as bespoke rather than a stock luxury serif like Playfair.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Body / UI sans — clean and modern without being decorative.
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Utility face for captions, stats, and data (price tags, sqft, MLS #).
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
