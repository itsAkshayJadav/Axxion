import { ArrowRight } from "lucide-react";
import { CONTACT_FORM_HREF } from "@/content/home";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

// Low-friction mid-funnel CTA so visitors don't have to scroll to the footer to act.
export function MidCtaBand() {
  return (
    <section className="py-4">
      <Container>
        <Reveal>
          <Card className="flex flex-col items-center gap-5 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left" variant="muted">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Not sure where to start?</p>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Get a free project scoping call.</h3>
            </div>
            <a className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "group w-full sm:w-auto")} href={CONTACT_FORM_HREF}>
              Get my free scoping call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
