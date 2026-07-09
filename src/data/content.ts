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
  icon: string;
  external?: boolean;
}

export const profile = {
  name: "Hesham Meneisi",
  eyebrow: "Head of Data & Analytics @ Onramp",
  lead:
    "Hands-on data leader with 8+ years building data platforms for payments, " +
    "lending, and e-commerce. Usually hired into chaos — near-daily failures, " +
    "books that don't reconcile — I rebuild the org so agents handle the routine " +
    "work and the pipelines still reconcile.",
  location: "Bangkok, Thailand · led teams of up to 7 engineers",
  email: "heshammeneisi@gmail.com",
  resume: "/resume.pdf",
};

export const links: Link[] = [
  { label: "Email", href: "mailto:heshammeneisi@gmail.com", icon: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hesham-meneisi", icon: "linkedin", external: true },
  { label: "GitHub", href: "https://github.com/HeshamMeneisi", icon: "github", external: true },
  { label: "Medium", href: "https://medium.com/@heshammeneisi", icon: "pen", external: true },
];

export const metrics: Metric[] = [
  { num: "€10M+", label: "monthly volume reconciled to a < €5 gap" },
  { num: "83%", label: "fewer production incidents" },
  { num: "½", label: "cash-volume loss" },
  { num: "50%", label: "infrastructure cost reduction" },
  { num: "500+", label: "data assets modernized" },
  { num: "2m → 1.5s", label: "warehouse query latency" },
];

export const jobs: Job[] = [
  {
    when: "Apr 2025 — Present",
    org: "Onramp",
    role: "Head of Data and Analytics",
    points: [
      "Restructured the data function into an <b>AI-first operating model</b>: 3 engineers running <b>10–15 parallel agents</b> daily — coding, research, docs, and ad-hoc analysis — serving operations, finance, and customer service.",
      "Held agent-assisted pipelines to audit-grade accuracy: <b>€10M+ monthly volume</b> reconciled across internal data, acquirers, banks, and wallets to a total discrepancy <b>under €5</b>.",
      "Built a <b>lakehouse on Azure</b> that replaced fragmented legacy reporting with auditable, reconciled pipelines, and cut infrastructure cost <b>50%</b>.",
      "Own <b>300+ governed data assets</b>, 30+ self-serve dashboards, and 5 Terraform infra repos with a 3-person team — stakeholders answer their own questions without routing through the data team.",
      "Designed the platform so agents operate it directly: everything as code, fixed repo patterns, and an ADR for every architecture decision — agents open reviewable cross-repo PRs.",
      "Automated bi-monthly statement generation and reconciliation — replacing a 2–3 day manual cycle — and standardized financial close across the org.",
    ],
  },
  {
    when: "Jun 2023 — Apr 2025",
    org: "Honest",
    role: "Lead Data Platform Engineer (L3)",
    points: [
      "Built a self-service <b>data mesh</b> unifying siloed data into a single cataloged platform.",
      "Reduced monthly production incidents from <b>60+ to under 10</b> via a reliability overhaul and runbook standardization.",
      "<b>Halved cash-volume loss</b> by reworking the Probability-of-Default credit-approval model — dropping low-signal legacy features, replacing them, and adding a new data source.",
      "Set up data governance (contracts, SLAs, ownership) and standardized feature definitions across teams.",
    ],
  },
  {
    when: "Sep 2021 — Jun 2023",
    org: "Omise",
    role: "Lead Data Engineer · Team of 7",
    points: [
      "Shipped a third-party <b>clearing/settlement integration in under a month</b> against a multi-month estimate, with a 3-engineer team.",
      "Modernized <b>500+ assets</b> processing terabytes of payment data, cutting failures from near-daily to a few a month.",
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
  {
    title: "LLM-native codebases & teams",
    description:
      "Shaping repos, docs, and team process around AI agents as everyday contributors rather than bolt-ons.",
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
