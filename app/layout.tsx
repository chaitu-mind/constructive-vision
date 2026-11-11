import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { site } from "@/lib/site";
import { businessJsonLd, websiteJsonLd, JsonLd } from "@/lib/seo";
import "./globals.css";

/* Self-hosted at build time: no third-party request, no render-blocking
   stylesheet, no layout shift. All three matter for Core Web Vitals. */
const display = Manrope({ subsets: ["latin"], weight: ["300", "400", "600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — civil engineering & construction in ${site.city}`,
    template: `%s — ${site.name}`,
  },
  description:
    `Turnkey homes, commercial buildings and interiors across ${site.region}. Published specification, stage-wise billing and a written agreement on every project.`,
  applicationName: site.name,
  authors: [{ name: site.legal }],
  generator: "Next.js",
  keywords: [
    "civil contractor Tirupati", "construction company Tirupati",
    "turnkey house construction", "RCC structural design",
    "building contractor Andhra Pradesh", "construction company Bengaluru",
    "house construction cost per sq ft",
    "interior fit-out contractor", "structural consultant Tirupati",
  ],
  category: "construction",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    shortcut: [{ url: "/icon.png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — civil engineering & construction in ${site.city}`,
    description: `Turnkey construction, structural design and interiors across ${site.region}.`,
    images: [{
      url: "/og.png", width: 1200, height: 630,
      alt: `${site.name} — civil engineering & construction across ${site.region}`,
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — civil engineering & construction`,
    description: `Turnkey construction, structural design and interiors across ${site.region}.`,
    images: ["/og.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0A1D2B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <JsonLd data={businessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
