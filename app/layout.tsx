import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://wgj.io"),
  title: "Weston Johnson | Operator, Technologist, Entrepreneur",
  description:
    "Weston Johnson builds, buys, and runs great companies. Operator, technologist, entrepreneur.",
  openGraph: {
    title: "Weston Johnson | Operator, Technologist, Entrepreneur",
    description:
      "Weston Johnson builds, buys, and runs great companies. Operator, technologist, entrepreneur.",
    url: "https://wgj.io",
    siteName: "wgj.io",
    images: [
      {
        url: "/weston-headshot.jpg",
        width: 1200,
        height: 1200,
        alt: "Weston Johnson",
      },
    ],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weston Johnson | Operator, Technologist, Entrepreneur",
    description:
      "Weston Johnson builds, buys, and runs great companies. Operator, technologist, entrepreneur.",
    images: ["/weston-headshot.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
