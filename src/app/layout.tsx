import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.travelvista.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TravelVista Ltd | Schengen Visa & European Holiday Specialists UK",
    template: "%s | TravelVista Ltd",
  },
  description:
    "TravelVista Ltd — UK's trusted Schengen visa consultants. 98% approval rate, free consultation, Schengen + USA/Canada/Turkey visas, flights, hotels and European holiday packages.",
  keywords: [
    "TravelVista Ltd",
    "Schengen visa UK",
    "Schengen visa assistance",
    "European holiday packages UK",
    "Canada visa UK",
    "USA visa UK",
    "Turkey visa UK",
    "visa consultants UK",
  ],
  openGraph: {
    title: "TravelVista Ltd | Schengen Visa & European Holiday Specialists UK",
    description:
      "Expert Schengen visa consultancy with 98% approval rate. Free consultation, 29 Schengen countries, flights, hotels and holiday packages.",
    url: siteUrl,
    siteName: "TravelVista Ltd",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelVista Ltd | Schengen Visa & European Holiday Specialists UK",
    description:
      "Expert Schengen visa consultancy with 98% approval rate. Free consultation, 29 Schengen countries, flights, hotels and holiday packages.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
