"use client";

import { Globe } from "lucide-react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { type Locale, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  onSelect?: () => void;
}

export default function LanguageSwitcher({
  className,
  onSelect,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      if (onSelect) onSelect();
      return;
    }

    startTransition(() => {
      // @ts-expect-error next-intl handles dynamic segments when passed params
      router.replace({ pathname, params }, { locale: nextLocale });
      if (onSelect) onSelect();
    });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50/90 p-1 text-xs font-medium text-zinc-600 shadow-2xs backdrop-blur-xs",
        className,
      )}
    >
      <Globe className="ml-1 size-3.5 text-zinc-400" />
      <button
        type="button"
        disabled={isPending}
        aria-pressed={locale === "en"}
        aria-label="Switch to English"
        onClick={() => handleLocaleChange("en")}
        className={cn(
          "rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all cursor-pointer",
          locale === "en"
            ? "bg-rose-600 text-white shadow-xs"
            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60",
        )}
      >
        EN
      </button>
      <button
        type="button"
        disabled={isPending}
        aria-pressed={locale === "id"}
        aria-label="Ganti ke Bahasa Indonesia"
        onClick={() => handleLocaleChange("id")}
        className={cn(
          "rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all cursor-pointer",
          locale === "id"
            ? "bg-rose-600 text-white shadow-xs"
            : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60",
        )}
      >
        ID
      </button>
    </div>
  );
}

