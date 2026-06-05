export interface Metric {
  num: string;
  label: string;
}

export interface Job {
  when: string;
  org: string;
  role: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  href?: string;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export const profile = {
  name: "Hesham Meneisi",
  eyebrow: "Head of Data & Analytics @ Onramp",
  lead:
    "Tech lead and engineering manager with 8+ years building financial-grade " +
    "data platforms, payment systems, and APIs. I lead small teams and ship " +
    "with AI agents every day.",
  location: "Bangkok, Thailand · led teams of up to 7 engineers",
  email: "heshammeneisi@gmail.com",
  resume: "/resume.pdf",
};

export const links: Link[] = [
  { label: "Email", href: "mailto:heshammeneisi@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hesham-meneisi", external: true },
  { label: "GitHub", href: "https://github.com/HeshamMeneisi", external: true },
  { label: "Medium", href: "https://medium.com/@heshammeneisi", external: true },
];

export const metrics: Metric[] = [
  { num: "€400K", label: "legacy discrepancies uncovered" },
  { num: "83%", label: "fewer production incidents" },
  { num: "50%", label: "infrastructure cost reduction" },
  { num: "2m → 1.5s", label: "warehouse query latency" },
];

export const jobs: Job[] = [
  {
    when: "Apr 2025 — Present",
    org: "Onramp",
    role: "Head of Data and Analytics",
    points: [
      "Run <b>3–5 AI agents in parallel</b> most days to code, research, document, and run ad-hoc analysis, turning weeks of work into days.",
      "Built a lakehouse on Azure that replaced fragmented legacy reporting with automated, reconciled pipelines across millions in monthly fiat and L2 volume. Everything lives in code, so it's easy for an LLM to work in.",
      "Automated bi-monthly statement generation and reconciliation, replacing a manual process that took 2–3 days per cycle.",
      "Cut infrastructure cost <b>50%</b> by replacing under-optimized legacy jobs, and standardized reconciliation and financial close across the org.",
    ],
  },
  {
    when: "Jun 2023 — Apr 2025",
    org: "Honest",
    role: "Lead Data Platform Engineer (L3)",
    points: [
      "Built a self-service <b>data mesh</b> unifying siloed data into a single cataloged platform.",
      "Reduced monthly production incidents from <b>60+ to under 10</b> via a reliability overhaul and runbook standardization.",
      "<b>Halved cash-volume loss</b> by iterating on the Probability-of-Default credit-approval model.",
      "Set up data governance (contracts, SLAs, ownership) and a standard way to define features across teams.",
    ],
  },
  {
    when: "Sep 2021 — Jun 2023",
    org: "Omise Payment",
    role: "Lead Data Engineer · Team of 7",
    points: [
      "Delivered the <b>clearing/settlement API in 3 weeks</b> against an original 3-month estimate.",
      "Modernized <b>500+ pipelines</b> handling terabytes of payment data, cutting failures from near-daily to about twice a week.",
      "Deployed Superset dashboards and Spark on Kubernetes for delta-table processing and CDC ingestion.",
      "Mentored mid-level engineers to senior while the team kept shipping.",
    ],
  },
  {
    when: "Jan 2021 — Sep 2021",
    org: "CREA",
    role: "Senior Backend & Data Engineer",
    points: [
      "Optimized a high-volume e-commerce data-sync system, cutting warehouse query time from <b>2 minutes to 1.5 seconds</b>.",
    ],
  },
];

export const earlier =
  "<b>Senior Data & Software Engineer</b>, Devcurate (2019–21, Bangkok), building products end to end · " +
  "<b>Software Engineer</b>, Leastra (2018–19, remote) · " +
  "<b>AI & Robotics R&D</b>, Alpha Inference (2020, Geneva) · " +
  "<b>Algorithms Intern</b>, Valeo (2017, Cairo), cut a sensor-tracking bottleneck by 88%.";

export const projects: Project[] = [
  {
    title: "One product a month",
    description:
      "I've shipped a new indie product every month since January 2026, across mobile, web, and AI tooling.",
  },
  {
    title: "Daily AI agents",
    description:
      "I keep a few agents running each day for coding, research, and analysis, and build systems that are easy for them to work in.",
  },
];

export const education = [
  {
    when: "2013 — 2018",
    org: "Alexandria University",
    role: "B.Sc. in Computer & Communication Engineering · Major GPA 3.92 / 4.0",
  },
  {
    when: "2018",
    org: "Udacity",
    role: "Machine Learning Nanodegree · 6 months",
  },
];

export const languages = "IELTS Band 8 (English) · Native Arabic";
