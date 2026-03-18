import { CheckCircle2, CircleSlash } from "lucide-react";
import { comparisonRows } from "@/content/home";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ComparisonSection() {
  return (
    <section className="section-anchor py-20 sm:py-24 lg:py-28" id="comparison">
      <Container>
        <SectionHeading
          align="center"
          description="The goal is not to sound cheaper. The goal is to remove slow process, bloated handoffs, and unnecessary drag while keeping release quality high."
          eyebrow="Traditional agencies vs AI-native engineering"
          heading="A faster, leaner delivery model built for shipping real software."
        />

        <Card className="mt-10 overflow-hidden" variant="default">
          <div className="grid gap-px border-b border-white/8 bg-white/8 md:grid-cols-[200px_1fr_1fr]">
            <div className="px-5 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Model</div>
            <div className="px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-500">Traditional agency</p>
              <p className="mt-2 text-lg font-semibold text-white">Slow handoffs. Bigger overhead.</p>
            </div>
            <div className="px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Axxion</p>
              <p className="mt-2 text-lg font-semibold text-white">Faster execution. Production-focused shipping.</p>
            </div>
          </div>

          <div className="divide-y divide-white/8">
            {comparisonRows.map((row, index) => (
              <Reveal className="grid gap-px bg-white/6 md:grid-cols-[200px_1fr_1fr]" delay={index * 0.04} key={row.label}>
                <div className="px-5 py-5 text-sm font-semibold text-slate-200">{row.label}</div>
                <div className="px-5 py-5">
                  <div className="flex items-start gap-3">
                    <CircleSlash className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
                    <p className="text-sm leading-7 text-slate-300">{row.traditional}</p>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-200">{row.axxion}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
