export const COMPANY_NAME = "Axxion";
export const COMPANY_EMAIL = "enquiry@axxionstudio.com";
export const CONTACT_FORM_HREF = "#contact-form";
export const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/axxion-studio/";

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
  url?: string;
  linkLabel?: string;
};

export type EngagementModel = {
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
  website?: string;
};

export const announcementItems = [
  "AI-native software delivery",
  "Production-grade products shipped faster",
  "Web apps, platforms, AI integrations",
  "Built for startups and MSMEs",
];

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const heroTrustPoints = ["Faster delivery", "Leaner cost", "Human-reviewed quality", "Built for launch"];

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
    description: "We ship software that helps teams sell, operate, automate, and scale, not just polished prototypes.",
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
    label: "Release confidence",
    traditional: "QA and launch prep often bunch up near the end of the project.",
    axxion: "Testing, release planning, and human review run throughout delivery, not just at the end.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Yes Grout & Silicone",
    category: "Perth trade services",
    projectType: "Client engagement",
    outcome:
      "Clarified the customer journey, then designed, built, and launched a professional service-business website with a direct path from service discovery to quote enquiry.",
    timeline: "Delivered within 1 week",
    stack: ["Customer journey", "Service website", "Lead capture", "Launch"],
    url: "https://www.yesgroutandsilicone.com.au/",
    linkLabel: "Visit the live website",
  },
  {
    title: "Multi-site operations hub",
    category: "Multi-site service business",
    projectType: "Representative solution",
    outcome:
      "A typical engagement could consolidate fragmented spreadsheets, job coordination, and reporting into one operational view for managers and field teams.",
    timeline: "Typical delivery: 6-10 weeks",
    stack: ["Workflow redesign", "Central operations", "Role access", "Reporting"],
  },
  {
    title: "Enquiry-to-service automation",
    category: "Growth-focused MSME",
    projectType: "Representative solution",
    outcome:
      "A practical automation pathway could connect enquiry intake, qualification, document handling, CRM updates, and follow-up to reduce response time and manual administration.",
    timeline: "Typical delivery: 3-6 weeks",
    stack: ["Process mapping", "AI-assisted intake", "CRM integration", "Follow-up"],
  },
];

export const engagementModels: EngagementModel[] = [
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
    idealFor: "MSMEs and startups with a longer roadmap",
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
      "Axxion Studio made the whole process straightforward and delivered our new website within a week. They understood what our business needed, communicated clearly, and produced a professional website that makes it easier for customers to learn about our services and get in touch. I’m very happy with the result and would recommend Axxion Studio to other business owners.",
    name: "Rajvinder Singh",
    role: "Owner",
    company: "Yes Grout & Silicone",
    website: "https://www.yesgroutandsilicone.com.au/",
  },
];

export const trustedLabels = ["Founder-led teams", "B2B products", "MSME operations", "AI-enabled delivery"];
