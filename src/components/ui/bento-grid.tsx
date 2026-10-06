import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
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
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
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
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:border-zinc-300",
      className,
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="z-10 flex flex-col gap-2">
      <div className="pointer-events-none flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-8">
        <div className="flex size-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition-all duration-300 group-hover:scale-110">
          <Icon className="size-6 text-rose-600" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-900">
          {name}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-zinc-500">
          {description}
        </p>
      </div>

      {/* Mobile CTA */}
      <div className="pointer-events-none mt-4 flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden">
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "pointer-events-auto p-0 font-semibold text-rose-600 hover:text-rose-700",
          )}
        >
          {cta}
          <ArrowRightIcon className="ms-1.5 size-4" />
        </Link>
      </div>
    </div>

    {/* Desktop Hover CTA */}
    <div className="pointer-events-none absolute bottom-0 left-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "link", size: "sm" }),
          "pointer-events-auto p-0 font-semibold text-rose-600 hover:text-rose-700",
        )}
      >
        {cta}
        <ArrowRightIcon className="ms-1.5 size-4" />
      </Link>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-rose-50/20" />
  </div>
);

export { BentoCard, BentoGrid };
