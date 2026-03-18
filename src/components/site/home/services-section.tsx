import { ArrowRight, Bot, Globe, LayoutTemplate, PencilRuler, Rocket, Wrench } from "lucide-react";
import { services } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const iconMap = {
  globe: Globe,
  app: LayoutTemplate,
  tools: Wrench,
  bot: Bot,
  rocket: Rocket,
  pen: PencilRuler,
};

export function ServicesSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="services">
      <Container>
        <SectionHeading
          description="Every service is designed around one commercial truth: launch faster, keep overhead lower, and still end up with software your team can trust in production."
          eyebrow="Services"
          heading="Execution for the products and systems that matter most."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal delay={index * 0.05} key={service.title}>
                <Card className="group h-full p-6 transition-transform duration-200 hover:-translate-y-1" variant="default">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 text-slate-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
