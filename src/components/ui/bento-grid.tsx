import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-88 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md",
      className,
    )}
    {...props}
  >
    {/* Badge background slot in top-right */}
    <div className="pointer-events-none absolute top-6 right-6 z-10">
      {background}
    </div>

    {/* Card Content */}
    <div className="flex flex-col gap-2">
      <div className="flex size-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-transform duration-300 group-hover:scale-105">
        <Icon className="size-6 text-rose-600" />
      </div>
      <h3 className="mt-2 text-xl font-bold tracking-tight text-zinc-900">
        {name}
      </h3>
      <p className="max-w-lg text-sm leading-relaxed text-zinc-600">
        {description}
      </p>
    </div>

    {/* CTA Link - Positioned cleanly at bottom, highest z-index, fully clickable */}
    <div className="relative z-20 mt-6 flex items-center">
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "link", size: "sm" }),
          "inline-flex items-center p-0 font-semibold text-rose-600 hover:text-rose-700 transition-colors",
        )}
      >
        <span>{cta}</span>
        <ArrowRightIcon className="ms-1.5 size-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </div>

    {/* Background hover tint */}
    <div className="pointer-events-none absolute inset-0 transition-colors duration-300 group-hover:bg-rose-50/20" />
  </div>
);

export { BentoCard, BentoGrid };
