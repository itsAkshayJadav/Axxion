import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow: string;
  heading: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  align = "left",
  className,
  description,
  eyebrow,
  heading,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-5", align === "center" && "mx-auto max-w-3xl text-center", className)} {...props}>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">{eyebrow}</p>
      <div className="space-y-4">
        <h2 className="display-font text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[3.25rem]">
          {heading}
        </h2>
        {description ? <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}