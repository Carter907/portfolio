export const runtime = "edge"

export default function Home() {
    return (
        <article className="prose prose-stone dark:prose-invert min-w-full">
            <div id="content"><h2 id="home">Home</h2>
                <p>Welcome to my portfolio website. Here is where I have all my achievements and
                    experience laid out in a more comprehensive and personalized manner. </p>
                <h2 id="index">Index</h2>
                <p><strong>Experience</strong></p>
                <ul>
                    <li>About the various technologies I&#39;ve dabbled in. I plan on adding some sort
                        of progress bar or visual indication on my level of competency or confidence
                        in each subject.
                    </li>
                </ul>
                <p><strong>Contact Me</strong></p>
                <ul>
                    <li>Here is where you can send me an email automatically using the form (created
                        this using the email.js library)
                    </li>
                </ul>
            </div>
        </article>

    );
}
