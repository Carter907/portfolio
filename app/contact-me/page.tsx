import Form from "@/app/contact/Form";

export const runtime = "edge"

export default function Page() {
    return (
        <div>

            <article className="relative w-full flex flex-col items-center justify-center space-y-8">
                <h2 className="text-4xl">Contact Me</h2>
                <p>
                    I would love to get to know more about you and your experiences.
                    Feel free to send me an email about anything relevant, like a open source collaboration or question about me,
                    and I&#39;ll be happy to response.
                </p>
                <Form/>
            </article>
        </div>
    )
}