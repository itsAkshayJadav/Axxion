import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { COMPANY_EMAIL } from "@/content/home";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";
import { cn } from "@/lib/utils";

const highlights = [
  "AI-native engineers",
  "Human accountability",
  "Production-grade release quality",
];

export function ContactSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="contact">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <Card className="relative overflow-hidden p-7 sm:p-8 lg:p-10" variant="feature">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.12),transparent_34%)]" />
              <div className="relative">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">Final CTA</p>
                <h2 className="mt-4 display-font text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.6rem]">
                  Build faster. Launch smarter. Spend less on drag.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                  AI-native engineers for startups and SMEs who need real software shipped without agency bloat. Faster delivery, leaner cost structure, and human-reviewed execution from first sprint to release.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a className={cn(buttonVariants({ size: "lg" }), "group")} href={`mailto:${COMPANY_EMAIL}?subject=Strategy%20Call`}>
                    Book a strategy call
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="#contact-form">
                    Tell us what you need
                  </a>
                </div>

                <div className="mt-8 space-y-3">
                  {highlights.map((item, index) => (
                    <Reveal className="flex items-center gap-3 text-sm text-slate-200" delay={0.06 + index * 0.04} key={item}>
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      <span>{item}</span>
                    </Reveal>
                  ))}
                </div>

                <a className="mt-10 inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-white" href={`mailto:${COMPANY_EMAIL}`}>
                  <Mail className="h-4 w-4 text-cyan-300" />
                  {COMPANY_EMAIL}
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 sm:p-8" variant="default">
              <div className="mb-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Start the brief</p>
                <h3 className="mt-3 display-font text-3xl font-semibold text-white">Tell us what needs shipping.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Share the product, platform, or automation you need. We will respond with the clearest route to a faster, production-ready delivery.
                </p>
              </div>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
