import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-rose-600 text-white hover:bg-rose-700",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-800 hover:bg-zinc-200",
        outline: "border-zinc-200 text-zinc-800",
        crimson: "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
