import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import Footer from "@/components/base/Footer";
import Navbar from "@/components/base/Navbar";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Bagas Saputro | Frontend Developer Portfolio",
  description:
    "Personal portfolio of Dimas Bagas Saputro, a Frontend Developer crafting modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
