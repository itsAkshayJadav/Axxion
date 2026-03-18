"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY_NAME, navLinks } from "@/content/home";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/site/logo";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-11 z-40">
      <Container className="pt-4">
        <div className="glass-panel rounded-full border-white/10 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-4">
            <a aria-label={`${COMPANY_NAME} home`} className="shrink-0" href="#top">
              <Logo priority />
            </a>

            <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a className="text-sm text-slate-300 transition hover:text-white" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <a className={cn(buttonVariants({ variant: "primary", size: "default" }), "ml-auto hidden lg:inline-flex")} href="#contact">
              Book a strategy call
            </a>

            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-cyan-300/30 hover:text-white lg:hidden"
              onClick={() => setOpen((current) => !current)}
              type="button"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden"
                exit={{ opacity: 0, y: -12 }}
                id="mobile-menu"
                initial={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mt-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-3 lg:hidden">
                  <nav aria-label="Mobile navigation" className="grid gap-2">
                    {navLinks.map((link) => (
                      <a
                        className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                        href={link.href}
                        key={link.href}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                    <a
                      className={cn(buttonVariants({ variant: "primary", size: "default" }), "mt-2 w-full")}
                      href="#contact"
                      onClick={() => setOpen(false)}
                    >
                      Book a strategy call
                    </a>
                  </nav>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
