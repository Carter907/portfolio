import Section, {SectionProps} from "@/components/Section";

export const runtime = "experimental-edge"
export default function ExperiencePage() {
    const sections: SectionProps[] = [

        {
            title: "Programming Languages",
            subsections: [
                {
                    title: "Object Orientated",
                    contents: ["Java", "C#", "Kotlin"]
                },
                {
                    title: "Multi-paradigm",
                    contents: ["Rust", "Kotlin"]
                },
                {
                    title: "Procedural",
                    contents: ["C", "Go", "Javascript/Typescript"]
                },
                {
                    title: "Domain Specific Languages",
                    contents: ["HTML", "CSS", "SQL", "Github Actions", "Make"],
                }
            ]
        },
        {
            title: "Libraries & Frameworks",
            subsections: [
                {
                    title: "Libraries",
                    contents: ["Clap", "Raylib", "Sqlx", "JavaFX"]
                },
                {
                    title: "Frameworks",
                    contents: ["Next.js", "Sveltekit", "Spring", "Ktor", "Jetpack Compose"]
                }
            ]
        }
    ]
    return (
        <article className="prose dark:prose-invert prose-stone min-w-full">
            <div id="content"><h2 id="experience">Experience</h2>
                <p>I have a wide breadth of experiences with different software, languages,
                    libraries and frameworks. Here are some of my top picks:</p>

                    {sections.map((section, i) => (
                        <Section key={i} title={section.title} subsections={section.subsections}/>
                    ))}
            </div>
        </article>
    )
}