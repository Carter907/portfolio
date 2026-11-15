import Head from "next/head";
import {
  LuBriefcase,
  LuCode2,
  LuDatabase,
  LuGraduationCap,
  LuLayers,
  LuWrench,
} from "react-icons/lu";

interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Student Success TA",
    organization: "USF Bellini College of AI, Cybersecurity & Computing",
    period: "Aug 2026 – Present",
    highlights: [
      "Mentor a cohort of ~20 students through core C programming (COP 3514), tracking progress and strengthening debugging skills.",
    ],
  },
  {
    role: "Software Engineering Intern",
    organization: "Aubot",
    period: "Feb 2026 – Sep 2026",
    highlights: [
      "Built a Python workflow automation tool using REST APIs and JSON/YAML parsing to fetch exercise payloads, process fix requests, and update test configurations.",
      "Debugged and refined hundreds of C, Java, Python, and SQL exercises (pointers, memory allocation, bit masks) by authoring unit and I/O edge-case assertions.",
    ],
  },
  {
    role: "Programming Tutor",
    organization: "Hillsborough College — Brandon, FL",
    period: "Mar 2025 – Present",
    highlights: [
      "Lead campus programming tutor across C, C++, C#, Java, and Python; coach students on Git/GitHub workflows, debugging, and static analysis.",
    ],
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    icon: <LuCode2 className="text-lg" />,
    skills: [
      "TypeScript",
      "Go",
      "Python",
      "SQL",
      "Java",
      "C/C++",
      "C#",
      "Bash",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <LuLayers className="text-lg" />,
    skills: [
      "React",
      "TanStack (Start, Router)",
      "Hono",
      "HTMX",
      "Tailwind CSS",
      "Zod",
      "Cobra",
      "GORM",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: <LuDatabase className="text-lg" />,
    skills: [
      "PostgreSQL",
      "Supabase",
      "Cloudflare Workers",
      "Docker",
      "Linux",
    ],
  },
  {
    title: "Tools & Certifications",
    icon: <LuWrench className="text-lg" />,
    skills: [
      "Git",
      "GitHub Actions (CI/CD)",
      "Vitest",
      "pnpm",
      "Vite",
      "REST APIs",
      "CompTIA Security+",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title key="title">
          Experience &amp; Skills — Carter Speerschneider
        </title>
        <meta
          key="description"
          name="description"
          content="Software engineering internship experience, teaching roles, USF Computer Science education, and full-stack technical skills."
        />
      </Head>
      <div className="flex flex-col gap-12 w-full">
        {/* Header Section */}
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Experience &amp; Skills
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            Computer Science undergraduate at the University of South Florida
            targeting Full-Stack Software Engineering internships, backed by
            industry internship experience, university teaching, and production
            TypeScript and Go projects.
          </p>
        </section>

        {/* Work Experience Timeline */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            {EXPERIENCES.map((item) => (
              <article
                key={`${item.role}-${item.organization}`}
                className="p-6 bg-surface border border-line hover:border-line-strong rounded-lg transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <div className="flex items-center gap-2 text-ink">
                      <LuBriefcase className="text-accent shrink-0" size={16} />
                      <h3 className="font-semibold text-base">{item.role}</h3>
                    </div>
                    <p className="text-sm text-ink-muted mt-0.5">
                      {item.organization}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-ink-subtle shrink-0">
                    {item.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5 text-sm text-ink-muted leading-relaxed list-disc pl-5">
                  {item.highlights.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
            Education
          </h2>
          <article className="p-6 bg-surface border border-line rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <div className="flex items-center gap-2 text-ink">
                  <LuGraduationCap className="text-accent shrink-0" size={18} />
                  <h3 className="font-semibold text-base">
                    University of South Florida
                  </h3>
                </div>
                <p className="text-sm text-ink-muted mt-1">
                  Bachelor of Science in Computer Science · GPA: 3.90
                </p>
              </div>
              <span className="text-xs font-mono text-ink-subtle shrink-0">
                Expected Graduation: Dec 2027
              </span>
            </div>
          </article>
        </section>

        {/* Technical Skills */}
        <section className="flex flex-col gap-4">
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="p-6 bg-surface border border-line hover:border-line-strong rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4 text-ink">
                  <span className="text-accent">{group.icon}</span>
                  <h3 className="font-semibold text-base">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-surface-muted border border-line rounded-md font-mono text-xs text-ink-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
