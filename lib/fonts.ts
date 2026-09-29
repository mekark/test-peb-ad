import { Inter, Manrope, Space_Grotesk } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/** Variable font — avoid multiple weight entries (Turbopack / next/font). */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-next",
  display: "swap",
});

export const spaceGroteskBold = Space_Grotesk({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
