import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import ThemeToggle from "../components/ThemeToggle";
import Wordmark from "../components/Wordmark";

const services = [
  {
    title: "Websites",
    description:
      "Conversion-focused websites and launch pages designed to make early teams look credible fast.",
  },
  {
    title: "Web apps",
    description:
      "Modern internal tools, SaaS products, and platforms built for speed, clarity, and scale.",
  },
  {
    title: "Mobile products",
    description:
      "Cross-platform mobile apps with sharp UX, clean engineering, and production readiness.",
  },
  {
    title: "AI integrations",
    description:
      "Practical AI integrations that connect automation, copilots, and intelligent workflows to the tools your team already uses.",
  },
];

const outcomes = [
  "AI speed with human review and accountability",
  "Production-grade engineering without agency drag",
  "Lean commercial model for startups and SMEs",
  "Discovery, design, build, QA, and launch in one system",
];

const deliveryComparison = [
  {
    title: "Traditional delivery",
    timeframe: "12-16 weeks",
    width: "100%",
    tone: "traditional",
    steps: [
      "Extended scoping, proposals, and repeated alignment loops",
      "Design and engineering move in separate phases",
      "Revision cycles slow down shipping momentum",
      "QA and deployment readiness pile up near the end",
    ],
  },
  {
    title: "AXXION delivery",
    timeframe: "2-4 weeks",
    width: "30%",
    tone: "axxion",
    steps: [
      "Rapid discovery supported by AI research and product framing",
      "Design, architecture, and implementation move together",
      "Engineers use AI integrations and automation to compress repetitive execution",
      "Testing and launch prep happen continuously, not last-minute",
    ],
  },
];

const metrics = [
  { value: 10, suffix: "x", label: "faster delivery loops", delay: 0 },
  { value: 7, suffix: "d", label: "to a sprint-ready build", delay: 120 },
  { value: 100, suffix: "%", label: "human-reviewed output", delay: 240 },
  { value: 24, suffix: "/7", label: "AI-assisted execution", delay: 360 },
];

const process = [
  {
    step: "01",
    title: "System review",
    description:
      "We align on goals, users, constraints, and the right AI leverage points before execution starts.",
  },
  {
    step: "02",
    title: "Weekly delivery",
    description:
      "Work moves in tight delivery loops with visible progress, active review, and room to adapt quickly.",
  },
  {
    step: "03",
    title: "Production build",
    description:
      "Engineering quality, testing, and operational readiness are handled as part of the system, not afterthoughts.",
  },
  {
    step: "04",
    title: "Launch and scale",
    description:
      "We ship, stabilize, and help shape the next release path so momentum continues after launch.",
  },
];

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "MongoDB",
  "Cloud",
  "APIs",
  "Automation",
  "AI tooling",
];

export default function Home() {
  return (
    <main className="overflow-x-hidden text-white">
      <div className="announcement-bar">
        <div className="announcement-track">
          <span>AI-native software delivery for startups and SMEs</span>
          <span>Production-grade software shipped faster</span>
          <span>Websites, web apps, mobile products, and AI integrations</span>
          <span>Book a strategy call to map your build sprint</span>
        </div>
      </div>

      <div className="theme-dock-wrap">
        <div className="theme-dock">
          <span className="theme-dock-label">Theme</span>
          <ThemeToggle />
        </div>
      </div>

      <section className="relative isolate overflow-hidden">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-4 sm:px-8 lg:px-10">
          <Reveal as="nav" className="flex flex-col gap-4 px-1 py-5 sm:flex-row sm:items-center">
            <Wordmark />

            <div className="flex w-full flex-wrap items-center gap-3 sm:ml-auto sm:w-auto sm:justify-end lg:gap-5">
              <div className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
                <a href="#services" className="nav-link">Services</a>
                <a href="#difference" className="nav-link">Why us</a>
                <a href="#process" className="nav-link">Process</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>

              <a
                href="#contact"
                className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Book a strategy call
              </a>
            </div>
          </Reveal>

          <div className="grid gap-10 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal delay={120}>
              <div className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-sky-100">
                Software delivery at light speed
              </div>

              <h1 className="display-font max-w-5xl text-5xl font-semibold leading-[0.94] text-white sm:text-6xl lg:text-7xl">
                We build websites, web apps, and mobile products with <span className="flash-highlight">AI speed and human precision.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                AXXION helps startups and SMEs ship real software faster by combining AI-native execution with experienced engineering. Strategy no longer waits for delivery. It becomes delivery.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-[linear-gradient(135deg,#7dd3fc,#38bdf8)] px-7 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90"
                >
                  Start your sprint
                </a>
                <a
                  href="#difference"
                  className="rounded-full border border-white/12 px-7 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  See cost and launch speed
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="glass rounded-[2rem] p-5 sm:p-6">
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-400">
                    <span>AXXION sprint engine</span>
                    <span>Live workflow</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      "Product framing and AI-assisted research",
                      "Design system and technical architecture",
                      "Implementation with parallelized execution",
                      "QA, launch, and release readiness",
                    ].map((item, index) => (
                      <Reveal
                        key={item}
                        delay={120 + index * 90}
                        className="hover-lift flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-300/15 text-sm font-semibold text-sky-100">
                          0{index + 1}
                        </div>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </Reveal>
                    ))}
                  </div>

                  <Reveal delay={260} className="mt-6 rounded-[1.5rem] border border-sky-300/12 bg-sky-300/8 p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-100">
                      Delivery philosophy
                    </p>
                    <p className="mt-3 text-lg leading-8 text-white">
                      AXXION uses AI to remove drag from the software cycle while humans own quality, judgment, and production decisions.
                    </p>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <StatCounter
                key={metric.label}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                duration={1400 + metric.delay}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <Reveal className="section-heading flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow flash-highlight text-sm uppercase tracking-[0.28em] text-sky-100/80">What we build</p>
            <h2 className="display-font mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Software systems designed for speed, clarity, and go-live readiness.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            We focus on the products that matter most for modern growth: websites, platforms, apps, and AI integrations that improve how a business shows up and operates.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.title}
              delay={index * 90}
              className="glass hover-lift rounded-[1.75rem] p-6"
            >
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="difference" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <Reveal className="section-heading text-center">
          <p className="section-eyebrow flash-highlight text-sm uppercase tracking-[0.28em] text-sky-100/80">The new physics of delivery</p>
          <h2 className="display-font mt-3 text-4xl font-semibold text-white sm:text-5xl">
            See how AI-assisted delivery changes cost and launch speed.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300">
            Compare traditional delivery against AI-assisted execution across cost efficiency, timeline compression, and launch readiness. AXXION keeps research, design, implementation, QA, and deployment moving in parallel wherever possible.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {deliveryComparison.map((lane, index) => (
            <Reveal
              as="article"
              key={lane.title}
              delay={index * 140}
              className="glass rounded-[2rem] p-6 sm:p-8"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className={`text-sm uppercase tracking-[0.26em] ${lane.tone === "axxion" ? "text-sky-100" : "text-slate-400"}`}>
                    {lane.title}
                  </p>
                  <h3 className="mt-3 display-font text-3xl font-semibold text-white">
                    {lane.timeframe}
                  </h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${lane.tone === "axxion" ? "bg-sky-300/12 text-sky-100" : "bg-white/6 text-slate-300"}`}>
                  {lane.tone === "axxion" ? "AI + Engineers" : "Linear workflow"}
                </span>
              </div>

              <div className="mt-8 rounded-full bg-white/6 p-2">
                <div
                  className={`timeline-fill h-4 rounded-full ${lane.tone === "axxion" ? "timeline-fill-axxion" : "timeline-fill-traditional"}`}
                  style={{ width: lane.width }}
                />
              </div>

              <div className="mt-3 flex justify-between text-xs uppercase tracking-[0.22em] text-slate-500">
                <span>Kickoff</span>
                <span>Launch</span>
              </div>

              <div className="mt-8 space-y-3">
                {lane.steps.map((step, stepIndex) => (
                  <Reveal
                    key={step}
                    delay={120 + stepIndex * 90}
                    className={`comparison-step rounded-2xl border p-4 ${lane.tone === "axxion" ? "comparison-step-axxion" : "comparison-step-traditional"}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${lane.tone === "axxion" ? "bg-sky-300" : "bg-slate-500"}`} />
                      <p className="text-sm leading-7 text-slate-200">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((point, index) => (
            <Reveal
              key={point}
              delay={index * 90}
              className="hover-lift rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-4 h-2 w-14 rounded-full bg-[linear-gradient(90deg,#7dd3fc,#38bdf8)]" />
              <p className="text-base leading-7 text-slate-200">{point}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <Reveal className="section-heading text-center">
          <p className="section-eyebrow flash-highlight text-sm uppercase tracking-[0.28em] text-sky-100/80">10x speed to production</p>
          <h2 className="display-font mt-3 text-4xl font-semibold text-white sm:text-5xl">
            A delivery system built for momentum, not waiting.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {process.map((item, index) => (
            <Reveal
              as="article"
              key={item.step}
              delay={index * 100}
              className="hover-lift rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="display-font text-3xl text-sky-100">{item.step}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="technology" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <Reveal className="glass rounded-[2rem] p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-eyebrow flash-highlight text-sm uppercase tracking-[0.28em] text-sky-100/80">Modern stack</p>
              <h2 className="display-font mt-3 text-4xl font-semibold text-white">
                Current technologies, clean implementation, and no dead weight.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              We work with modern tools across frontend, backend, data, cloud, and AI so products launch faster and stay easier to evolve.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {stack.map((item, index) => (
              <Reveal
                as="span"
                key={item}
                delay={index * 70}
                className="tech-pill rounded-full border border-sky-300/15 bg-sky-300/8 px-4 py-2 text-sm text-white"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="section-heading">
            <p className="section-eyebrow flash-highlight text-sm uppercase tracking-[0.28em] text-sky-100/80">Start your build</p>
            <h2 className="display-font mt-3 text-4xl font-semibold text-white sm:text-5xl">
              Want to see how fast this could work for your business?
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Tell us what you need to launch and we will map the fastest route to a real production-ready build.
            </p>
          </Reveal>

          <Reveal delay={120} className="glass rounded-[2rem] p-6 sm:p-8">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-7 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3 text-center md:text-left">
            <Wordmark />
            <p className="text-sm text-slate-400">
              Production-grade delivery with AI-native execution.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            Copyright 2026 AXXION. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}










