import { processSteps } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
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
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.34),transparent)] lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal delay={index * 0.07} key={step.step}>
                <Card className="relative h-full p-6 pt-12" variant="muted">
                  <div className="absolute left-6 top-0 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/18 bg-[rgba(7,16,29,0.96)] text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(6,182,212,0.16)]">
                    {step.step}
                  </div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">{step.title}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
