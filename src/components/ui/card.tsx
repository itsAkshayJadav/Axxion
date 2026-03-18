import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-[28px] border backdrop-blur-xl", {
  variants: {
    variant: {
      default:
        "border-white/10 bg-[linear-gradient(180deg,rgba(14,24,42,0.82),rgba(8,14,26,0.72))] shadow-[0_24px_72px_rgba(0,0,0,0.28)]",
      muted:
        "border-white/8 bg-white/[0.03] shadow-[0_20px_48px_rgba(0,0,0,0.18)]",
      feature:
        "border-cyan-300/16 bg-[linear-gradient(180deg,rgba(14,28,48,0.9),rgba(8,15,27,0.82))] shadow-[0_28px_72px_rgba(2,132,199,0.16)]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />;
}