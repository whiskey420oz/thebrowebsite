import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import { getSiteUrl, site } from "@/lib/site";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "laptops Pasig",
    "laptop store Pasig City",
    "Metro Manila laptops",
    "gaming laptop Philippines",
    "laptop repair Pasig",
    "RAM upgrade",
    "SSD upgrade",
    "The Bro Laptop Store",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
  category: "technology",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: site.name,
  description: site.description,
  telephone: site.phoneTel,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    addressCountry: site.addressCountry,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-1 outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
