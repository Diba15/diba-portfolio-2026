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

const SITE_URL = "https://diba-portfolio-2026.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === "id";

  const title = isId
    ? "Dimas Bagas Saputro | Portofolio Frontend & Fullstack Developer"
    : "Dimas Bagas Saputro | Frontend & Fullstack Developer Portfolio";
  const description = isId
    ? "Portofolio pribadi Dimas Bagas Saputro, Software Developer yang membangun aplikasi web modern, performan, dan berpusat pada pengguna."
    : "Personal portfolio of Dimas Bagas Saputro, a Software Developer crafting user-centric, performant, and clean web applications.";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | Dimas Bagas Saputro",
    },
    description,
    keywords: [
      "Dimas Bagas Saputro",
      "Diba",
      "Software Developer",
      "Frontend Developer",
      "Fullstack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Tailwind CSS",
      "Portofolio Developer",
      "Karawang",
      "Indonesia",
    ],
    authors: [
      { name: "Dimas Bagas Saputro", url: "https://github.com/Diba15" },
    ],
    creator: "Dimas Bagas Saputro",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: "Dimas Bagas Saputro Portfolio",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "Dimas Bagas Saputro - Portfolio Preview",
        },
      ],
      locale: isId ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/preview.png"],
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
