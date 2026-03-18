import { Github, Linkedin } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_NAME, navLinks } from "@/content/home";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8 sm:py-10">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-sm leading-7 text-slate-400">
            {COMPANY_NAME} builds websites, apps, platforms, and AI automations for startups and SMEs that want faster delivery with stronger engineering discipline.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3 text-sm text-slate-300">
              {navLinks.map((link) => (
                <a className="transition hover:text-white" href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Contact</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a className="transition hover:text-white" href={`mailto:${COMPANY_EMAIL}`}>
                {COMPANY_EMAIL}
              </a>
              <span>Perth, Australia</span>
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Social</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="LinkedIn placeholder" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/30 hover:text-white" href="#">
                <Linkedin className="h-4 w-4" />
              </a>
              <a aria-label="GitHub placeholder" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/30 hover:text-white" href="#">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Container className="mt-8 border-t border-white/8 pt-6 text-sm text-slate-500">
        Copyright {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </Container>
    </footer>
  );
}
