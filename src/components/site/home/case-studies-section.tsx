import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="case-studies">
      <Container>
        <SectionHeading
          description="A live client launch alongside representative examples of the products and systems we help teams bring to market."
          eyebrow="Case studies"
          heading="Work shaped around business outcomes, not just feature lists."
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {caseStudies.map((study, index) => {
            const isLiveResult = Boolean(study.url);

            return (
              <Reveal delay={index * 0.06} key={study.title}>
                <div
                  className={
                    isLiveResult
                      ? "rounded-[30px] bg-[linear-gradient(135deg,rgba(103,232,249,0.18),rgba(59,130,246,0.08),transparent_70%)] p-[1px]"
                      : "rounded-[30px] border border-dashed border-white/10 p-[1px]"
                  }
                >
                  <Card className="h-full p-6" variant={isLiveResult ? "default" : "muted"}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">{study.projectType}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{study.title}</h3>
                      </div>
                      <Badge variant={isLiveResult ? "accent" : "muted"}>{isLiveResult ? "Live client result" : "Example scenario"}</Badge>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-slate-300">{study.outcome}</p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Timeline</p>
                        <p className="mt-2 text-lg font-semibold text-white">{study.timeline}</p>
                      </div>
                      <div className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Business type</p>
                        <p className="mt-2 text-sm font-semibold text-white">{study.category}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.stack.map((tag) => (
                        <Badge key={tag} variant="accent">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {study.url ? (
                      <a
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
                        href={study.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {study.linkLabel ?? "View project"}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : null}
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

