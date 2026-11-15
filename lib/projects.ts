export interface FeaturedProject {
  title: string;
  role: string;
  repoName: string;
  repoUrl: string;
  summary: string;
  stack: string[];
  highlights: string[];
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "Bluelearn",
    role: "Contributor",
    repoName: "bluelearn",
    repoUrl: "https://github.com/bluelearn-org/bluelearn",
    summary:
      "Full-stack learning platform built with TanStack, React, Hono on Cloudflare Workers, and Supabase (171 commits).",
    stack: [
      "TypeScript",
      "React",
      "TanStack",
      "Hono",
      "Supabase",
      "Cloudflare Workers",
      "PostgreSQL",
      "Vitest",
    ],
    highlights: [
      "Built full-stack guide revision history, metadata, and public profile activity across TanStack Router/React and Hono on Cloudflare Workers (171 commits).",
      "Implemented automated 48-hour review-seat expiration sweeps using PostgreSQL RPCs, schema migrations, and Vitest unit tests in Supabase.",
      "Enhanced the Markdown/LaTeX editor (MDXEditor, MathLive) and account settings with Supabase Auth, loader fetching, and mobile/fullscreen fixes.",
    ],
  },
  {
    title: "Go Solve",
    role: "Creator",
    repoName: "go-solve",
    repoUrl: "https://github.com/Carter907/go-solve",
    summary:
      "Sandboxed coding platform featuring isolated Docker execution, server-driven HTMX UI updates, and relational problem modeling.",
    stack: ["Go", "Docker SDK", "HTMX", "GORM", "SQL"],
    highlights: [
      "Engineered a code execution engine using the Docker Go SDK to run submissions in isolated containers.",
      "Built dynamic, server-driven UI updates with HTMX to improve application responsiveness.",
      "Designed a relational data model with GORM and SQL to store and query hierarchical problem data.",
    ],
  },
  {
    title: "qst",
    role: "Creator",
    repoName: "qst",
    repoUrl: "https://github.com/Carter907/qst",
    summary:
      "Go CLI, DAG knowledge-graph validator/solver (~11.9k LOC), static site generator, and live-reloading preview server.",
    stack: [
      "Go",
      "Cobra",
      "Goldmark",
      "HTML/CSS",
      "SSE",
      "GitHub Actions",
    ],
    highlights: [
      "Engineered a Go CLI and DAG knowledge-graph validator/solver (~11.9k LOC) enforcing acyclicity, prerequisite traversal, and coverage auditing.",
      "Built a static site generator and live-reloading server (fsnotify + SSE) with MathJax/Chroma rendering, Mermaid exports, and .kng archiving.",
      "Automated cross-platform releases and checks with golangci-lint, unit tests, and GoReleaser CI/CD with build provenance attestation.",
    ],
  },
];

export const FEATURED_REPO_NAMES = new Set(
  FEATURED_PROJECTS.map((project) => project.repoName.toLowerCase())
);
