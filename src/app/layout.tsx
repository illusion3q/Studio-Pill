import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "studio pill",
  description: "Work in progress",
  icons: {
    icon: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { rel: "favicon-16x16", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "favicon-32x32", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: { url: "/favicon.ico" }
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
