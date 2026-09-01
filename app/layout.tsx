import type { Metadata } from "next";
import {
  Red_Hat_Display,
  Red_Hat_Text,
  Red_Hat_Mono,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

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
  metadataBase: new URL("https://manu-gupta-portfolio.vercel.app"), // TODO: replace with production domain when T26 assigns one
  title: "Manu Gupta — Portfolio",
  description:
    "Manu Gupta — third-year B.Tech Computer Science student, Galgotia University. Projects, skills, achievements, resume.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Manu Gupta — Portfolio",
    description:
      "Manu Gupta — third-year B.Tech Computer Science student, Galgotia University. Projects, skills, achievements, resume.",
    siteName: "Manu Gupta — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu Gupta — Portfolio",
    description:
      "Manu Gupta — third-year B.Tech Computer Science student, Galgotia University. Projects, skills, achievements, resume.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${redHatText.variable} ${redHatMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
