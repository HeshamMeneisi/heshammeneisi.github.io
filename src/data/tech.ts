export interface Tech {
  name: string;
  /** simple-icons slug; omit (and set `mono`) for brands without a bundled logo */
  slug?: string;
  /** short monogram shown when no logo exists */
  mono?: string;
}

// Three stripes, scrolled in alternating directions.
export const stripes: Tech[][] = [
  // Languages
  [
    { name: "Python", slug: "python" },
    { name: "SQL", mono: "SQL" },
    { name: "TypeScript", slug: "typescript" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Go", slug: "go" },
    { name: "Scala", slug: "scala" },
    { name: "C# / .NET", slug: "dotnet" },
    { name: "Shell", slug: "gnubash" },
    { name: "Terraform", slug: "terraform" },
  ],
  // Data & orchestration
  [
    { name: "Spark", slug: "apachespark" },
    { name: "Kafka", slug: "apachekafka" },
    { name: "KSQL", mono: "kSQL" },
    { name: "Airflow", slug: "apacheairflow" },
    { name: "Dagster", mono: "Dg" },
    { name: "dbt", mono: "dbt" },
    { name: "Redshift", mono: "Rs" },
    { name: "BigQuery", slug: "googlebigquery" },
    { name: "Superset", slug: "apachesuperset" },
  ],
  // Cloud, tools & frameworks
  [
    { name: "Azure", mono: "Az" },
    { name: "Kubernetes", slug: "kubernetes" },
    { name: "GitHub Actions", slug: "githubactions" },
    { name: "BuildKite", slug: "buildkite" },
    { name: "Redis", slug: "redis" },
    { name: "Grafana", slug: "grafana" },
    { name: "Elasticsearch", slug: "elasticsearch" },
    { name: "Power BI", mono: "BI" },
    { name: "React", slug: "react" },
    { name: "React Native", slug: "react" },
    { name: "Vue.js", slug: "vuedotjs" },
    { name: "Svelte", slug: "svelte" },
  ],
];
