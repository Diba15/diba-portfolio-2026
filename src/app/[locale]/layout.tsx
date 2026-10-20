import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import Footer from "@/components/base/Footer";
import Navbar from "@/components/base/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { type Locale, routing } from "@/i18n/routing";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  return {
    title: isId
      ? "Dimas Bagas Saputro | Portofolio Frontend & Fullstack Developer"
      : "Dimas Bagas Saputro | Frontend & Fullstack Developer Portfolio",
    description: isId
      ? "Portofolio pribadi Dimas Bagas Saputro, Software Developer yang membangun aplikasi web modern, performan, dan berpusat pada pengguna."
      : "Personal portfolio of Dimas Bagas Saputro, a Software Developer crafting user-centric, performant, and clean web applications.",
    alternates: {
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Analytics />
          <SpeedInsights />
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <Toaster position="bottom-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

