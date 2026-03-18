"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reducedMotion ? false : { opacity: 0, y }}
      transition={reducedMotion ? undefined : { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={reducedMotion ? undefined : { once: true, amount: 0.2, margin: "0px 0px -72px 0px" }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}