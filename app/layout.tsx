import type { Metadata } from "next";
import {
  Red_Hat_Display,
  Red_Hat_Text,
  Red_Hat_Mono,
} from "next/font/google";
import "./globals.css";

/* Font loading — Machine-Shop Minimal design system (DESIGN.md §3)
   Self-hosted via next/font/google, not external CDN <link> tags */
const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const redHatMono = Red_Hat_Mono({
  variable: "--font-red-hat-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manu Gupta — Portfolio",
  description:
    "Manu Gupta — third-year B.Tech Computer Science student, Galgotia University. Projects, skills, achievements, resume.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${redHatText.variable} ${redHatMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
