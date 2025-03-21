export interface SectionProps {
    title: string;
    subsections: Subsection[]
}

interface Subsection {
    title: string,
    contents: string[],
}

export default function Section(props: SectionProps) {

    return (
        <div>
            <div className="dark:bg-stone-900 bg-stone-100 rounded-2xl">
                <h3 id={props.title}
                    className="dark:bg-stone-800 bg-stone-50 rounded-t-2xl p-4">{props.title}</h3>
                <div className="grid grid-cols-2 px-10">
                    {props.subsections.map((item, i) => (
                        <div key={i}>
                            <p><strong>{item.title}</strong></p>
                            <ul>
                                {item.contents.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>);
}