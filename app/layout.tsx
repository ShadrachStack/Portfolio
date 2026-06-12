import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadrach Obaah — Frontend Developer & Product Designer",
  description: "Portfolio — frontend development, UI/UX design, and case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 relative overflow-x-hidden">

        {/* 🌈 Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_35%)]" />

        {/* App structure */}
        <div className="relative z-10 flex flex-col min-h-screen">

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>
      </body>
    </html>
  );
}