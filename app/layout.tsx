import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abduvokhid.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abduvokhid Akhmedov - Software Engineering Leader",
    template: "%s | Abduvokhid Akhmedov",
  },
  description:
    "Software Engineering Leader specializing in FinTech, BNPL, Payments, and Cybersecurity. Building practical and secure financial systems through scalable architectures.",
  keywords: [
    "Abduvokhid Akhmedov",
    "Software Engineering Leader",
    "FinTech Developer",
    "BNPL Systems",
    "Payment Solutions",
    "Cybersecurity Expert",
    "Core Banking Systems",
    "Technical Leadership",
    "Full Stack Developer",
    "System Architecture",
  ],
  authors: [{ name: "Abduvokhid Akhmedov", url: siteUrl }],
  creator: "Abduvokhid Akhmedov",
  publisher: "Abduvokhid Akhmedov",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abduvokhid Akhmedov",
    title: "Abduvokhid Akhmedov - Software Engineering Leader",
    description:
      "Software Engineering Leader specializing in FinTech, BNPL, Payments, and Cybersecurity. Building practical and secure financial systems through scalable architectures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abduvokhid Akhmedov - Software Engineering Leader",
    description:
      "Software Engineering Leader specializing in FinTech, BNPL, Payments, and Cybersecurity.",
    creator: "@abduvokhid",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="0f22f5bf-36c0-4662-bd4b-2ef45519b322"
          strategy="lazyOnload"
        />
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
