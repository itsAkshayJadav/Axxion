import { ArrowRight, Check } from "lucide-react";
import { pricingTiers } from "@/content/home";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="pricing">
      <Container>
        <SectionHeading
          align="center"
          description="Clear engagement models for founders and operators who need speed, accountability, and lower overhead than traditional agencies."
          eyebrow="Pricing and engagement model"
          heading="Structured for momentum, not for padding headcount."
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Reveal delay={index * 0.06} key={tier.name}>
              <Card className={cn("h-full p-6 sm:p-7", tier.featured && "border-cyan-300/18 shadow-[0_28px_80px_rgba(8,145,178,0.18)]")} variant={tier.featured ? "feature" : "default"}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Ideal for</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{tier.idealFor}</p>
                  </div>
                  {tier.featured ? (
                    <span className="rounded-full border border-cyan-300/16 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                      Most requested
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-8 text-3xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{tier.summary}</p>

                <div className="mt-6 grid gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500">Timeline</p>
                    <p className="mt-2 text-base font-semibold text-white">{tier.timeline}</p>
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-slate-500">Support</p>
                    <p className="mt-2 text-base font-semibold text-white">{tier.support}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {tier.deliverables.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <a className={cn(buttonVariants({ variant: tier.featured ? "primary" : "secondary", size: "lg" }), "mt-8 w-full group")} href="#contact">
                  Discuss this model
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
