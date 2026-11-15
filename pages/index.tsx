import Head from "next/head";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";

const NAV_CARDS = [
  {
    href: "/experience",
    title: "Experience",
    description:
      "Explore my professional background, skills, and the technologies I work with on a daily basis.",
    icon: LuBrainCircuit,
  },
  {
    href: "/showcase",
    title: "Showcase",
    description:
      "A collection of my projects, experiments, and open-source contributions.",
    icon: GrProjects,
  },
];

const TECH_STACK = [
  "C++",
  "C",
  "Rust",
  "Java",
  "Python",
  "TypeScript",
  "Bash",
  "CMake",
  "Docker",
  "Git",
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title key="title">Carter&#39;s Portfolio</title>
        <meta
          key="description"
          name="description"
          content="Carter S. — Aspiring software engineer specializing in high-performance, low-level systems and C++."
        />
      </Head>
      <div className="flex flex-col gap-16 w-full">
      {/* Hero Section */}
      <section className="flex flex-col gap-5 items-start">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
          Hi, I&#39;m Carter.
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          I am an aspiring software engineer specializing in high-performance,
          low-level systems with a strong foundation in C++. I am currently a
          student seeking C++ internship opportunities to apply my skills within
          a professional environment.
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
          Technical Focus
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
