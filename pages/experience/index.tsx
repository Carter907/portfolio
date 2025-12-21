import Section, {SectionProps} from "@/components/Section";

export const runtime = "experimental-edge"
export default function ExperiencePage() {
    const sections: SectionProps[] = [
        {
            title: "Programming Languages",
            subsections: [
                {
                    title: "Low-Level & Performance",
                    contents: ["C++ (C++17/20)", "C", "Rust"]
                },
                {
                    title: "Scripting & Automation",
                    contents: ["Bash", "Python"]
                },
                {
                    title: "Application Development",
                    contents: ["Java", "Typescript/Javascript"]
                }
            ]
        },
        {
            title: "Technical Competencies",
            subsections: [
                {
                    title: "Systems Programming",
                    contents: ["RAII and Memory Management in C++", "Concurrency", "RTOS"]
                },
                {
                    title: "Performance & Debugging",
                    contents: ["GDB", "Optimization Techniques"]
                },
                {
                    title: "Build Systems & Tools",
                    contents: ["CMake", "Make", "Git", "Docker"]
                }
            ]
        }
    ]
    return (
        <article className="prose dark:prose-invert prose-stone min-w-full">
            <div id="content"><h2 id="experience">Experience</h2>
                <p>I am an aspiring software engineer and current student specializing in high-performance, low-level systems with a strong foundation in C++. I am currently seeking internship opportunities to apply my skills in C++, Java, Python, and Bash within a professional environment.</p>

                    {sections.map((section, i) => (
                        <Section key={i} title={section.title} subsections={section.subsections}/>
                    ))}
            </div>
        </article>
    )
}