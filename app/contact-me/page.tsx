import Form from "@/app/contact/Form";

export const runtime = "edge"

export default function Page() {
    return (
        <div
            className="relative w-full flex flex-col items-center space-y-8 min-w-full">
            <h2
                className="text-4xl"> Contact
                Me </h2>
            <article className="prose prose-stone dark:prose-invert">
                <p>
                    I would love to get to know more about you and your experiences.
                    Feel free to send me an email about anything relevant like a open source
                    collaboration
                    and I&#39;ll be happy to response.
                </p>
            </article>
            <Form/>
        </div>
    )
}