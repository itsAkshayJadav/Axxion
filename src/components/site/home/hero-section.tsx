import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroTrustPoints, workflowSteps } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-16 lg:pb-28" id="top">
      <Container className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] rounded-[3rem] bg-[radial-gradient(circle_at_25%_20%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_78%_16%,rgba(103,232,249,0.18),transparent_22%)]" />

        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center xl:gap-14">
          <Reveal className="max-w-3xl">
            <Badge className="mb-6 w-fit" variant="eyebrow">
              AI-native software delivery
            </Badge>

            <h1 className="display-font text-4xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-[4.35rem] xl:text-[4.9rem]">
              We build websites, web apps, and AI-powered software with{" "}
              <span className="relative inline-flex">
                <span className="absolute inset-x-0 bottom-1 top-2 rounded-full bg-cyan-400/16 blur-2xl" />
                <span className="relative bg-[linear-gradient(135deg,#ffffff_0%,#d7f7ff_38%,#67e8f9_72%,#38bdf8_100%)] bg-clip-text text-transparent">
                  startup speed and production precision.
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Axxion helps startups and SMEs ship faster and reduce cost by combining AI-native execution with experienced engineers who own architecture, QA, and release quality.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className={cn(buttonVariants({ size: "lg" }), "group")} href="#contact">
                Start your project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a className={buttonVariants({ variant: "secondary", size: "lg" })} href="#pricing">
                See pricing and delivery model
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroTrustPoints.map((point, index) => (
                <Reveal className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-3" delay={0.08 + index * 0.04} key={point}>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                    <span>{point}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.12}>
            <Card className="relative overflow-hidden p-5 sm:p-6 lg:p-7" variant="feature">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.12),transparent_34%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-5">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">Operating model</p>
                    <h2 className="mt-2 display-font text-2xl font-semibold text-white sm:text-[2rem]">Sprint engine dashboard</h2>
                  </div>
                  <div className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-cyan-100">
                    Live workflow
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {workflowSteps.map((step, index) => (
                    <Reveal delay={0.12 + index * 0.06} key={step.step}>
                      <Card className="group p-4 transition-transform duration-200 hover:-translate-y-1 sm:p-5" variant="muted">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/16 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="text-base font-semibold text-white sm:text-lg">{step.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.28}>
                  <Card className="mt-6 p-5" variant="default">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-cyan-100/80">Delivery philosophy</p>
                    <p className="mt-3 text-base leading-8 text-slate-200 sm:text-lg">
                      AI removes drag from the software cycle, while human engineers own judgment, architecture, and production decisions. That is how you move faster without introducing fragility.
                    </p>
                  </Card>
                </Reveal>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
