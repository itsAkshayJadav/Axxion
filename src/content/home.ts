export const COMPANY_NAME = "Axxion";
export const COMPANY_EMAIL = "hello@axxion.com";

export type NavLink = {
  label: string;
  href: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: "spark" | "layers" | "shield" | "target";
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "globe" | "app" | "tools" | "bot" | "rocket" | "pen";
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type ComparisonRow = {
  label: string;
  traditional: string;
  axxion: string;
};

export type CaseStudy = {
  title: string;
  category: string;
  projectType: string;
  outcome: string;
  timeline: string;
  stack: string[];
};

export type PricingTier = {
  name: string;
  idealFor: string;
  summary: string;
  timeline: string;
  support: string;
  featured?: boolean;
  deliverables: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const announcementItems = [
  "AI-native software delivery",
  "Production-grade products shipped faster",
  "Web apps, platforms, AI integrations",
  "Built for startups and SMEs",
];

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const heroTrustPoints = [
  "Faster delivery",
  "Leaner cost",
  "Human-reviewed quality",
  "Built for launch",
];

export const workflowSteps = [
  {
    step: "01",
    title: "Product discovery and AI-assisted planning",
    description:
      "We frame the problem, pressure-test scope, and turn ambiguity into a buildable execution path.",
  },
  {
    step: "02",
    title: "UX system and technical architecture",
    description:
      "Interface direction, system boundaries, data flow, and delivery decisions are locked early so velocity stays high.",
  },
  {
    step: "03",
    title: "Parallelized engineering and integrations",
    description:
      "AI accelerates scaffolding, repetitive implementation, and internal tooling while engineers own the hard edges.",
  },
  {
    step: "04",
    title: "QA, release, and launch support",
    description:
      "Testing, handoff, deployment, and post-launch tuning are built into the sprint instead of added at the end.",
  },
];

export const whyUsItems: WhyUsItem[] = [
  {
    title: "AI-native execution",
    description:
      "AI is embedded into research, planning, scaffolding, QA, and iteration so delivery moves faster without lowering the bar.",
    icon: "spark",
  },
  {
    title: "Smaller team, faster output",
    description:
      "You work with senior builders instead of layers of management, so decisions are quicker and momentum stays intact.",
    icon: "layers",
  },
  {
    title: "Human-reviewed quality",
    description:
      "Architecture, edge cases, release confidence, and production judgment stay with accountable engineers.",
    icon: "shield",
  },
  {
    title: "Built for real business outcomes",
    description:
      "We ship software that helps teams sell, operate, automate, and scale, not just polished prototypes.",
    icon: "target",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Websites",
    description: "High-credibility marketing sites and launch pages designed to convert faster and cost less to ship.",
    icon: "globe",
  },
  {
    title: "Web Applications",
    description: "Customer-facing products and platforms engineered for speed, usability, and release confidence.",
    icon: "app",
  },
  {
    title: "Internal Tools",
    description: "Operational systems that remove manual work, centralize process, and give teams leverage quickly.",
    icon: "tools",
  },
  {
    title: "AI Automations",
    description: "Workflow automation, copilots, and AI integrations that reduce drag across sales, ops, and delivery.",
    icon: "bot",
  },
  {
    title: "MVP Development",
    description: "Founder-ready MVPs built to validate faster, raise with confidence, and reach launch with less burn.",
    icon: "rocket",
  },
  {
    title: "Product Design + Engineering",
    description: "End-to-end execution across product thinking, interface systems, and the software needed to ship.",
    icon: "pen",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We align on goals, users, constraints, and the highest-leverage scope. AI accelerates research and framing, while humans make the product calls.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "We shape the UX system, data model, integrations, and release approach up front so engineering can move in clean, parallel tracks.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "AI compresses repetitive work, testing support, and delivery loops. Engineers remain accountable for implementation quality and decision-making.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We ship with QA, production readiness, and post-release support already planned in, so launch is controlled instead of chaotic.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    label: "Speed",
    traditional: "Sequential handoffs slow progress across design, development, and QA.",
    axxion: "AI-assisted throughput and tighter delivery loops compress the timeline without cutting corners.",
  },
  {
    label: "Cost efficiency",
    traditional: "Large teams and process overhead push budget upward before product value is delivered.",
    axxion: "Lean senior execution reduces coordination drag and keeps spend tied to actual output.",
  },
  {
    label: "Iteration cycles",
    traditional: "Feedback loops are longer because every change passes through multiple layers.",
    axxion: "Small teams, direct stakeholders, and faster implementation make iteration practical.",
  },
  {
    label: "Flexibility",
    traditional: "Rigid scope and formal change cycles make adaptation expensive.",
    axxion: "We can reframe, refine, and redirect quickly because product and engineering stay close.",
  },
  {
    label: "Release confidence",
    traditional: "QA and launch prep often bunch up near the end of the project.",
    axxion: "Testing, release planning, and human review run throughout delivery, not just at the end.",
  },
  {
    label: "Communication",
    traditional: "Stakeholders often talk to account layers instead of the people building the product.",
    axxion: "Direct founder and operator alignment keeps decisions sharp and tradeoffs visible.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Startup MVP",
    category: "Seed-stage SaaS",
    projectType: "Product launch",
    outcome:
      "Built an investor-ready MVP with onboarding, billing, and analytics so the founding team could demo, test demand, and start closing pilots.",
    timeline: "6 weeks",
    stack: ["Next.js", "Node", "Stripe", "Postgres"],
  },
  {
    title: "SME operations platform",
    category: "Multi-site service business",
    projectType: "Internal system",
    outcome:
      "Replaced fragmented spreadsheets and manual coordination with a single operations platform that improved visibility and reduced admin load.",
    timeline: "8 weeks",
    stack: ["React", "Supabase", "Automation", "Role-based access"],
  },
  {
    title: "AI workflow automation",
    category: "Growth-focused SME",
    projectType: "AI integration",
    outcome:
      "Connected CRM, email, document intake, and AI-assisted review to cut turnaround time and remove repetitive operational work.",
    timeline: "4 weeks",
    stack: ["OpenAI", "Make", "HubSpot", "Custom APIs"],
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Sprint Build",
    idealFor: "Teams that need a focused delivery burst",
    summary: "Ideal for shipping a site, feature set, proof of concept, or internal tool fast.",
    timeline: "2-4 weeks",
    support: "Hands-on delivery and launch support",
    deliverables: [
      "Discovery and technical framing",
      "Design direction and build execution",
      "QA, deployment, and launch handoff",
    ],
  },
  {
    name: "MVP Launch",
    idealFor: "Founders validating a product or entering market",
    summary: "The fastest path to a credible, production-ready MVP with disciplined architecture.",
    timeline: "4-8 weeks",
    support: "Launch support plus early iteration guidance",
    featured: true,
    deliverables: [
      "Product scoping and architecture",
      "UX system, core platform, and integrations",
      "Release readiness and post-launch refinement",
    ],
  },
  {
    name: "Ongoing Product Partner",
    idealFor: "SMEs and startups with a longer roadmap",
    summary: "A lean product and engineering partner for continuous releases without agency overhead.",
    timeline: "Monthly cadence",
    support: "Continuous delivery, prioritization, and technical ownership",
    deliverables: [
      "Roadmap shaping and sprint planning",
      "Feature delivery and AI automation rollout",
      "QA, support, and iteration across releases",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Axxion moved faster than any agency we had spoken to, but the quality never felt rushed. We got a real product, not a prototype dressed up for a demo.",
    name: "Maya Chen",
    role: "Founder",
    company: "B2B SaaS startup",
  },
  {
    quote:
      "What stood out was the balance of speed and engineering discipline. The team used AI where it helped, but every important decision still had strong technical judgment behind it.",
    name: "James Patel",
    role: "COO",
    company: "Operations-heavy SME",
  },
  {
    quote:
      "We needed internal software and automation without the usual overhead. Axxion gave us direct communication, fast iteration, and a launch we could trust.",
    name: "Elena Rossi",
    role: "Director",
    company: "Service business group",
  },
];

export const trustedLabels = ["Founder-led teams", "B2B products", "SME operations", "AI-enabled delivery"];