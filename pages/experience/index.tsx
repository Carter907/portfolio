import { LuCode2, LuCpu, LuTerminal, LuAppWindow, LuSettings, LuWrench } from "react-icons/lu";

export const runtime = "experimental-edge"

interface SkillGroup {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

interface Category {
    title: string;
    groups: SkillGroup[];
}

export default function ExperiencePage() {
    const languages: Category = {
        title: "Programming Languages",
        groups: [
            {
                title: "Low-Level & Performance",
                icon: <LuCpu className="text-xl" />,
                skills: ["C++ (C++17/20)", "C", "Rust"]
            },
            {
                title: "Scripting & Automation",
                icon: <LuTerminal className="text-xl" />,
                skills: ["Bash", "Python"]
            },
            {
                title: "Application Development",
                icon: <LuAppWindow className="text-xl" />,
                skills: ["Java", "Typescript/Javascript"]
            }
        ]
    };

    const competencies: Category = {
        title: "Technical Competencies",
        groups: [
            {
                title: "Systems Programming",
                icon: <LuSettings className="text-xl" />,
                skills: ["RAII & Memory Management", "Concurrency", "RTOS"]
            },
            {
                title: "Performance & Debugging",
                icon: <LuWrench className="text-xl" />,
                skills: ["GDB", "Optimization Techniques"]
            },
            {
                title: "Build Systems & Tools",
                icon: <LuCode2 className="text-xl" />,
                skills: ["CMake", "Make", "Git", "Docker"]
            }
        ]
    };

    return (
        <div className="flex flex-col gap-12 w-full py-10">
            {/* Header Section */}
            <section className="flex flex-col gap-6 items-start">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-stone-600 to-stone-900 dark:from-stone-100 dark:to-stone-400 bg-clip-text text-transparent leading-tight">
                    Experience & Skills
                </h1>
                <p className="text-lg text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed">
                    I am an aspiring software engineer specializing in high-performance, low-level systems with a strong foundation in C++.
                    I am currently a student seeking internship opportunities to apply my skills in C++, Java, Python, and Bash within a professional environment.
                </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Programming Languages Column */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-3">
                        {languages.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {languages.groups.map((group, idx) => (
                            <div key={idx} className="p-6 bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-stone-400 dark:hover:border-stone-600 transition-colors">
                                <div className="flex items-center gap-3 mb-4 text-stone-700 dark:text-stone-200">
                                    {group.icon}
                                    <h3 className="font-semibold text-lg">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Competencies Column */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-100 flex items-center gap-3">
                        {competencies.title}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {competencies.groups.map((group, idx) => (
                            <div key={idx} className="p-6 bg-stone-50 dark:bg-white/5 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-stone-400 dark:hover:border-stone-600 transition-colors">
                                <div className="flex items-center gap-3 mb-4 text-stone-700 dark:text-stone-200">
                                    {group.icon}
                                    <h3 className="font-semibold text-lg">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}