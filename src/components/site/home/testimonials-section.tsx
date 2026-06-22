import { ArrowUpRight, Quote } from "lucide-react";
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
          description="A first-hand account from our first client launch."
          eyebrow="Client review"
          heading="A professional website, delivered within one week."
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

        <div className="mx-auto mt-10 max-w-4xl">
          {testimonials.map((testimonial, index) => (
            <Reveal delay={index * 0.06} key={testimonial.name}>
              <Card className="relative h-full overflow-hidden p-7 sm:p-10" variant="feature">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.11),transparent_42%)]" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-300/10 text-cyan-100">
                    <Quote className="h-5 w-5" />
                  </div>
                  <blockquote className="mt-6 text-lg leading-9 text-slate-200 sm:text-xl sm:leading-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-8 border-t border-white/8 pt-5">
                    <p className="text-base font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    {testimonial.website ? (
                      <a
                        className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
                        href={testimonial.website}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View their website
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
