import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://telegram-mini-app.dev"),
  title: {
    default: "Telegram Mini App Builder – Drag & Drop No‑Code",
    template: "%s | Telegram Mini App Builder",
  },
  description:
    "Create Telegram Mini Apps without coding. AI‑powered builder with visual drag‑and‑drop and one‑click Shopify import — generate production‑ready mini apps for small businesses, content creators, and Shopify sellers.",
  applicationName: "Telegram Mini App Builder",
  keywords: [
    "Telegram Mini App",
    "Telegram Web App",
    "Telegram Bot",
    "no‑code",
    "drag and drop builder",
    "AI",
    "Shopify integration",
    "one‑click Shopify import",
    "ecommerce",
    "small business",
    "content creator",
    "landing page",
    "lead generation",
    "catalog",
    "payments",
  ],
  authors: [{ name: "Telegram Mini App Builder" }],
  creator: "Telegram Mini App Builder",
  publisher: "Telegram Mini App Builder",
  category: "Business",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    title: "Telegram Mini App Builder – Drag & Drop No‑Code",
    description:
      "Create Telegram Mini Apps without coding. AI‑powered builder with visual drag‑and‑drop and one‑click Shopify import — generate production‑ready mini apps for small businesses, content creators, and Shopify sellers.",
    siteName: "Telegram Mini App Builder",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Telegram Mini App Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram Mini App Builder – Drag & Drop No‑Code",
    description:
      "Create Telegram Mini Apps without coding. AI‑powered builder with visual drag‑and‑drop and one‑click Shopify import — generate production‑ready mini apps for small businesses, content creators, and Shopify sellers.",
    images: ["/globe.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1221" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
              <Analytics />

    </html>
  );
}
