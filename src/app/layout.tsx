import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurea Cinnamum | Premium Cinnamon Oil",
  description: "Experience the finest quality cinnamon oil, expertly crafted and exported worldwide. Pure, premium, and perfect for your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary/20`}>{children}</body>
    </html>
  )
}
