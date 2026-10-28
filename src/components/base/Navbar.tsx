"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Brand from "@/components/ui/Brand";
import LanguageSwitcher from "@/components/ui/language-switcher";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: t("home"), href: "/#hero" },
    { label: t("about"), href: "/#about" },
    { label: t("experience"), href: "/#experience" },
    { label: t("projects"), href: "/#projects" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || isOpen
          ? "border-b border-zinc-200/80 bg-white/80 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand closeMenu={closeMenu} />

        {/* Desktop Navigation & Language Switcher */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-rose-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="h-4 w-px bg-zinc-200" />
          <LanguageSwitcher />
        </div>

        {/* Mobile Actions: Language Switcher + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="border-b border-zinc-200 bg-white px-4 pt-2 pb-4 md:hidden">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-base font-medium text-zinc-700 transition-colors hover:bg-rose-50 hover:text-rose-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
