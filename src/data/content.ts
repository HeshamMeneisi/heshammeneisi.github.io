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

export interface SkillGroup {
  title: string;
  items: string[];
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
    "Hands-on tech lead and engineering manager with 8+ years building " +
    "financial-grade platforms, data systems, and APIs across payments, " +
    "lending, and e-commerce — and shipping value with AI agents every day.",
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
      "Operate <b>3–5 parallel AI agents daily</b> to code, research, document, and run ad-hoc analysis — compressing weeks of work into days.",
      "Built an <b>LLM-optimized lakehouse on Azure</b> that replaced fragmented legacy reporting with automated, auditable, reconciled pipelines across millions in monthly fiat and L2 volume.",
      "Automated bi-monthly statement generation and reconciliation, replacing a manual 2–3 day-per-cycle process.",
      "Cut infrastructure cost <b>50%</b> by replacing under-optimized legacy jobs; standardized reconciliation and financial close across the org.",
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
      "Established data governance — contracts, SLAs, and an ownership model — and a standardized feature-definition process.",
    ],
  },
  {
    when: "Sep 2021 — Jun 2023",
    org: "Omise Payment",
    role: "Lead Data Engineer · Team of 7",
    points: [
      "Delivered a mission-critical <b>clearing/settlement API in 3 weeks</b> against an original 3-month estimate.",
      "Modernized <b>500+ pipelines</b> processing terabytes of payment data, cutting failures from near-daily to ~twice a week.",
      "Deployed Superset dashboards and Spark on Kubernetes for delta-table processing and CDC ingestion.",
      "Mentored mid-level engineers to senior, building team capability while delivering at scale.",
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
  "<b>Senior Data & Software Engineer</b>, Devcurate (2019–21, Bangkok) — built multiple products end-to-end · " +
  "<b>Software Engineer</b>, Leastra (2018–19, remote) · " +
  "<b>AI & Robotics R&D</b>, Alpha Inference (2020, Geneva) · " +
  "<b>Algorithms Intern</b>, Valeo (2017, Cairo) — reduced sensor-tracking bottleneck by 88%.";

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "SQL", "TypeScript", "C# / .NET", "Go", "Scala", "Terraform", "Shell"],
  },
  {
    title: "Data & Orchestration",
    items: ["Spark", "Kafka", "KSQL", "Airflow", "Dagster", "dbt", "Redshift", "BigQuery"],
  },
  {
    title: "Monitoring & Visualization",
    items: ["Superset", "Lightdash", "Power BI", "Grafana (LGTM)", "ELK Stack"],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "Azure",
      "Kubernetes (AWS/GCP/Azure)",
      "Terraform",
      "GitHub Actions",
      "BuildKite",
      "Redis",
      "SQS",
      "SES",
      "CloudFront",
    ],
  },
  {
    title: "App Development",
    items: ["React Native", "Vue.js", "Svelte"],
  },
];

export const projects: Project[] = [
  {
    title: "One indie product per month",
    description:
      "Shipping a new product every month since Jan 2026 — across mobile, web, and AI tooling.",
  },
  {
    title: "AI-native engineering",
    description:
      "Running a daily multi-agent workflow for code, research, and analysis, with architecture that's LLM-optimized from day one.",
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
