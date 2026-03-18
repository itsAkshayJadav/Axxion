import { Quote } from "lucide-react";
import { testimonials, trustedLabels } from "@/content/home";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          description="Axxion is designed for teams that want to move faster without delegating responsibility for quality."
          eyebrow="Social proof"
          heading="Trusted by ambitious teams that need shipping speed and technical credibility."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {trustedLabels.map((label, index) => (
            <Reveal delay={index * 0.04} key={label}>
              <Badge className="px-4 py-2 text-[0.72rem]" variant="muted">
                {label}
              </Badge>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={index * 0.06} key={testimonial.name}>
              <Card className="h-full p-6" variant="default">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-300/10 text-cyan-100">
                  <Quote className="h-5 w-5" />
                </div>
                <blockquote className="mt-6 text-base leading-8 text-slate-200">
                  â€œ{testimonial.quote}â€
                </blockquote>
                <div className="mt-8 border-t border-white/8 pt-5">
                  <p className="text-base font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
