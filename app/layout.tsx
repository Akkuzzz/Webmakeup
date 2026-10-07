import type { Metadata, Viewport } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import "./globals.css";
import "./extras.css";
import "./facility-extras.css";
import "./facility-detail-pages.css";
import "./editorial-pages.css";

const description = "Engineering education for curious minds and ambitious futures at the Federal Institute of Science and Technology, Angamaly, Kerala.";

export const metadata: Metadata = {
  title: { default: "Build What Comes Next at FISAT | Kerala", template: "%s" },
  description,
  keywords: ["FISAT", "engineering college Kerala", "admissions", "academic programmes", "campus life", "research", "placements"],
  openGraph: { type: "website", siteName: "FISAT — Federal Institute of Science and Technology", title: "Build What Comes Next at FISAT | Kerala", description, images: [{ url: "https://fisat.ac.in/wp-content/uploads/2022/07/Institution1.jpg", width: 1920, height: 890, alt: "FISAT campus, Angamaly, Kerala" }] },
  twitter: { card: "summary_large_image", title: "Build What Comes Next at FISAT | Kerala", description, images: ["https://fisat.ac.in/wp-content/uploads/2022/07/Institution1.jpg"] },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { themeColor: "#2C3480", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/></head><body className="min-h-dvh antialiased"><a className="skip-link" href="#main-content">Skip to main content</a><SiteFrame>{children}</SiteFrame></body></html>;
}
