"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { processSteps } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const progress = activeIndex !== null && processSteps.length > 1 ? (activeIndex / (processSteps.length - 1)) * 100 : 0;

  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="process">
      <Container>
        <SectionHeading
          align="center"
          description="AI is embedded into research, scaffolding, testing, and delivery support. Human engineers stay accountable for the quality, tradeoffs, and production decisions that actually matter."
          eyebrow="Process"
          heading="A delivery system built to move from idea to launch without wasted motion."
        />

        <div className="relative mt-14">
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-white/8 lg:block" />
          <div
            className="absolute left-[12%] top-6 hidden h-px bg-[linear-gradient(90deg,rgba(103,232,249,0.9),rgba(59,130,246,0.6))] shadow-[0_0_12px_rgba(6,182,212,0.5)] transition-[width] duration-500 ease-out lg:block"
            style={{ width: `${((100 - 24) * progress) / 100}%` }}
          />
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <Reveal delay={index * 0.07} key={step.step}>
                  <button
                    aria-expanded={isActive}
                    className="block w-full text-left"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    type="button"
                  >
                    <Card
                      className={cn(
                        "relative flex h-full items-center justify-between gap-3 p-6 pt-12 transition-all duration-300",
                        isActive ? "-translate-y-1 border-cyan-300/30 shadow-[0_20px_50px_rgba(6,182,212,0.16)]" : "hover:-translate-y-0.5"
                      )}
                      variant={isActive ? "default" : "muted"}
                    >
                      <div
                        className={cn(
                          "absolute left-6 top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border text-sm font-semibold shadow-[0_0_28px_rgba(6,182,212,0.16)] transition-colors duration-300",
                          isActive
                            ? "border-cyan-300/40 bg-cyan-300/20 text-white"
                            : "border-cyan-300/18 bg-[rgba(7,16,29,0.96)] text-cyan-100"
                        )}
                      >
                        {step.step}
                      </div>
                      <p className="text-sm font-semibold text-white sm:text-base">{step.title}</p>
                      <ChevronDown
                        className={cn("h-4 w-4 shrink-0 text-cyan-100/70 transition-transform duration-300", isActive && "rotate-180")}
                      />
                    </Card>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeIndex !== null ? (
            <motion.div
              animate={{ opacity: 1, y: 0, height: "auto" }}
              className="mt-8 overflow-hidden"
              exit={{ opacity: 0, y: -8, height: 0 }}
              initial={{ opacity: 0, y: 8, height: 0 }}
              key={activeIndex}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="border-cyan-300/15 p-6" variant="default">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">
                  Stage {processSteps[activeIndex].step} of {processSteps.length}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{processSteps[activeIndex].title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{processSteps[activeIndex].description}</p>
              </Card>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </section>
  );
}
