import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
  {
    variants: {
      variant: {
        eyebrow: "border-cyan-300/15 bg-cyan-300/10 text-cyan-100",
        muted: "border-white/10 bg-white/[0.04] text-slate-300",
        accent: "border-sky-400/20 bg-sky-400/10 text-sky-100",
      },
    },
    defaultVariants: {
      variant: "eyebrow",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}