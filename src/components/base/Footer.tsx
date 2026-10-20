"use client";

import { useTranslations } from "next-intl";
import Brand from "@/components/ui/Brand";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  const footerNavItems = [
    { label: tNav("home"), href: "/#hero" },
    { label: tNav("about"), href: "/#about" },
    { label: tNav("projects"), href: "/#projects" },
    { label: tNav("experience"), href: "/#experience" },
    { label: tNav("contact"), href: "/#contact" },
  ];

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <Brand />
            <p className="mt-1 text-sm text-zinc-500">
              {tFooter("craftedWith")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-rose-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-xs text-zinc-500">
          <p>
            © {currentYear} Dimas Bagas Saputro. {tFooter("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
