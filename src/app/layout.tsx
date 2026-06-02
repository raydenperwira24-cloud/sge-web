import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LanguageProvider } from "@/context/LanguageContext";

import Navbar from "@/components/navbar";
import Footer from "@/sections/footter";

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
  title: "PT. Surya Gemilang Engineering",
  description:
    "Precision Engineering & Industrial Manufacturing Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <LanguageProvider>

          {/* GLOBAL NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1 pt-28">
            {children}
          </main>

          {/* GLOBAL FOOTER */}
          <Footer />

        </LanguageProvider>

      </body>
    </html>
  );
}