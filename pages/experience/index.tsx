import Head from "next/head";
import {
  LuCode2,
  LuCpu,
  LuTerminal,
  LuAppWindow,
  LuSettings,
  LuWrench,
} from "react-icons/lu";

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

interface Category {
  title: string;
  groups: SkillGroup[];
}

const CATEGORIES: Category[] = [
  {
    title: "Programming Languages",
    groups: [
      {
        title: "Low-Level & Performance",
        icon: <LuCpu className="text-lg" />,
        skills: ["C++ (C++17/20)", "C", "Rust"],
      },
      {
        title: "Scripting & Automation",
        icon: <LuTerminal className="text-lg" />,
        skills: ["Bash", "Python"],
      },
      {
        title: "Application Development",
        icon: <LuAppWindow className="text-lg" />,
        skills: ["Java", "Typescript/Javascript"],
      },
    ],
  },
  {
    title: "Technical Competencies",
    groups: [
      {
        title: "Systems Programming",
        icon: <LuSettings className="text-lg" />,
        skills: ["RAII & Memory Management", "Concurrency", "RTOS"],
      },
      {
        title: "Performance & Debugging",
        icon: <LuWrench className="text-lg" />,
        skills: ["GDB", "Optimization Techniques"],
      },
      {
        title: "Build Systems & Tools",
        icon: <LuCode2 className="text-lg" />,
        skills: ["CMake", "Make", "Git", "Docker"],
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title key="title">Experience &amp; Skills — Carter&#39;s Portfolio</title>
        <meta
          key="description"
          name="description"
          content="Programming languages, low-level systems competencies, and tooling experience."
        />
      </Head>
      <div className="flex flex-col gap-12 w-full">
      {/* Header Section */}
      <section className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
          Experience &amp; Skills
        </h1>
        <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
          I am an aspiring software engineer specializing in high-performance,
          low-level systems with a strong foundation in C++. I am currently a
          student seeking internship opportunities to apply my skills in C++,
          Java, Python, and Bash within a professional environment.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {CATEGORIES.map((category) => (
          <div key={category.title} className="flex flex-col gap-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
              {category.title}
            </h2>
            <div className="flex flex-col gap-4">
              {category.groups.map((group) => (
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
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
