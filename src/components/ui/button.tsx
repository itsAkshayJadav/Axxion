import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-[-0.01em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,rgba(103,232,249,1),rgba(59,130,246,0.92))] text-slate-950 shadow-[0_16px_48px_rgba(14,165,233,0.28)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(34,211,238,0.22)]",
        secondary:
          "border border-white/10 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.08]",
        ghost: "text-slate-200 hover:bg-white/[0.05] hover:text-white",
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[0.95rem]",
        sm: "h-9 px-4 text-xs uppercase tracking-[0.18em]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} type={type} {...props} />
  )
);

Button.displayName = "Button";

export { Button, buttonVariants };