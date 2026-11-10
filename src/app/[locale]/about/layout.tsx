import type { Metadata } from "next";
import type { ReactNode } from "react";

interface AboutLayoutProps {
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

  const title = isId
    ? "Tentang & Pengalaman | Dimas Bagas Saputro"
    : "About & Background | Dimas Bagas Saputro";
  const description = isId
    ? "Jejak akademis, sertifikasi resmi, keahlian teknis, dan filosofi rekayasa perangkat lunak Dimas Bagas Saputro."
    : "Academic journey, verified credentials, technical skills matrix, and engineering philosophy of Dimas Bagas Saputro.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        id: "/id/about",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}/about`,
      siteName: "Dimas Bagas Saputro Portfolio",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "About Dimas Bagas Saputro",
        },
      ],
      locale: isId ? "id_ID" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/preview.png"],
    },
  };
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return children;
}
