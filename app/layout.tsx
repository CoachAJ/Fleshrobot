import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { OrganizationSchema, WebSiteSchema, PersonSchema } from "@/components/JsonLd";

const SITE_URL = "https://thefleshrobot.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Flesh Robot | Coach Ed — Wholistic Health & the Mighty 90",
    template: "%s | The Flesh Robot",
  },
  description:
    "Unlock your body's epigenetic potential. Certified Wholistic Health Coach Ed teaches the 90 for Life philosophy — 90 essential nutrients your body cannot make, for optimal health and longevity.",
  keywords: [
    "wholistic health coach",
    "90 for life",
    "Mighty 90 nutrients",
    "Dr Joel Wallach",
    "Youngevity",
    "epigenetics nutrition",
    "nutritional deficiency disease",
    "leaky gut",
    "triangle of disease",
    "health coaching Chicago",
    "supplement coaching",
    "colloidal minerals",
  ],
  authors: [{ name: "Coach Ed", url: SITE_URL }],
  creator: "Coach Ed — The Flesh Robot",
  publisher: "The Flesh Robot",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "The Flesh Robot",
    title: "The Flesh Robot | Coach Ed — Unlock Your Epigenetic Potential",
    description:
      "90 essential nutrients. 900+ disease states addressed. Fix the root, not the fruit. Certified Wholistic Health Coach Ed shows you how.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "The Flesh Robot — Wholistic Health with Coach Ed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Flesh Robot | Coach Ed — Wholistic Health",
    description:
      "Fix the root, not the fruit. 90 essential nutrients your body cannot make. Certified Wholistic Health Coach.",
    images: [
      "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=1200&h=630&fit=crop&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <PersonSchema />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1, paddingTop: "64px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
