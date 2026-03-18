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
          description="Representative examples of the kinds of products and systems we help teams bring to market. Structured like real delivery, even when the details are placeholder-safe."
          eyebrow="Case studies"
          heading="Delivery examples shaped around business outcomes, not just feature lists."
        />

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal delay={index * 0.06} key={study.title}>
              <div className="rounded-[30px] bg-[linear-gradient(135deg,rgba(103,232,249,0.18),rgba(59,130,246,0.08),transparent_70%)] p-[1px]">
                <Card className="h-full p-6" variant="default">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">{study.projectType}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{study.title}</h3>
                    </div>
                    <Badge variant="muted">{study.category}</Badge>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">{study.outcome}</p>

                  <div className="mt-6 rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Timeline</p>
                    <p className="mt-2 text-lg font-semibold text-white">{study.timeline}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((tag) => (
                      <Badge key={tag} variant="accent">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
