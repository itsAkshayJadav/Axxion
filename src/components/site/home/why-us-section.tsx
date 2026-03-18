import { Layers3, Sparkles, ShieldCheck, Target } from "lucide-react";
import { whyUsItems } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  spark: Sparkles,
  layers: Layers3,
  shield: ShieldCheck,
  target: Target,
};

export function WhyUsSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="why-us">
      <Container>
        <SectionHeading
          description="The delivery model is intentionally lean: AI helps accelerate throughput, while experienced engineers stay accountable for architecture, implementation quality, and launch readiness."
          eyebrow="Why companies choose us"
          heading="Faster shipping without agency drag or quality theatre."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyUsItems.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <Reveal delay={index * 0.06} key={item.title}>
                <Card className="group h-full p-6 transition-transform duration-200 hover:-translate-y-1" variant="muted">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-300/10 text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
