import Head from "next/head";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { LuArrowRight, LuBrainCircuit } from "react-icons/lu";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import { FEATURED_PROJECTS } from "@/lib/projects";

const NAV_CARDS = [
  {
    href: "/experience",
    title: "Experience",
    description:
      "My internships, teaching roles, USF Computer Science education, and full-stack technical skills.",
    icon: LuBrainCircuit,
  },
  {
    href: "/showcase",
    title: "Showcase",
    description:
      "Featured full-stack and backend projects alongside my pinned repositories on GitHub.",
    icon: GrProjects,
  },
];

const TECH_STACK = [
  "TypeScript",
  "React",
  "TanStack",
  "Hono",
  "Go",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Cloudflare Workers",
  "Docker",
  "Tailwind CSS",
  "GitHub Actions",
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title key="title">Carter Speerschneider — Portfolio</title>
        <meta
          key="description"
          name="description"
          content="Carter Speerschneider — CS student at USF seeking Full-Stack Software Engineering internships. Experience with TypeScript, React, TanStack, Hono, Go, Python, and PostgreSQL."
        />
      </Head>
      <div className="flex flex-col gap-16 w-full">
        {/* Hero Section */}
        <section className="flex flex-col gap-5 items-start">
          <p className="text-xs font-mono uppercase tracking-wider text-accent">
            Full-Stack Software Engineer · USF CS &apos;27
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Hi, I&#39;m Carter.
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            I&#39;m a Computer Science student at the University of South
            Florida (3.90 GPA) and former Software Engineering Intern at Aubot,
            seeking <span className="text-ink font-medium">Full-Stack Software Engineering Internship</span>{" "}
            opportunities. I build end-to-end web applications, APIs, and
            developer tools with TypeScript, React, TanStack, Hono, Go, Python,
            and PostgreSQL.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/contact-me"
              className="px-5 py-2.5 rounded-lg bg-ink text-canvas hover:bg-accent transition-colors text-sm font-medium"
            >
              Get in Touch
            </Link>
            <Link
              href="/showcase"
              className="px-5 py-2.5 rounded-lg border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent transition-colors text-sm font-medium"
            >
              View Work
            </Link>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="flex flex-col gap-5 w-full">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
              Featured Projects
            </h2>
            <Link
              href="/showcase"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-muted hover:text-accent transition-colors"
            >
              All projects <LuArrowRight size={13} />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {FEATURED_PROJECTS.map((project) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                compact
              />
            ))}
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="grid md:grid-cols-2 gap-6 w-full">
          {NAV_CARDS.map(({ href, title, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group p-6 bg-surface border border-line hover:border-line-strong rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className="p-2.5 bg-surface-muted border border-line rounded-md text-ink-muted group-hover:text-accent transition-colors">
                  <Icon className="text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                  {title}
                </h2>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {description}
              </p>
            </Link>
          ))}
        </section>

        {/* Tech Stack */}
        <section className="pt-4 border-t border-line">
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle mb-4">
            Core Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface border border-line rounded-md font-mono text-xs text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
