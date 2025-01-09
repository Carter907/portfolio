export const runtime = "edge"

export default function Home() {
    return (
        <article className="prose prose-stone dark:prose-invert min-w-full">

            <div id="content"><h2 id="home">Home</h2></div>
            <div id="content"><p>Welcome to my website. This was make using <a
                href="https://svelte.dev/docs/svelte/overview">svelte</a> (you should totally give it
                a try). I&#39;m passionate about documenting programming experience so this website
                might be a little long-winded. I&#39;m hoping to continuously expand this to
                encapsulate everything I&#39;d like to share - which may include a personal blog.</p>
                <p>Hopefully you find it entertaining non-the-less. </p>
                <h4 id="index">Index</h4>
                <p><em>About me</em></p>
                <blockquote>
                    <p>About my past experience and reasons why I got into programming. This might
                        be a little more personal than it needs to be, but it&#39;s worth the
                        read!</p>
                </blockquote>
                <p><em>Experience</em></p>
                <blockquote>
                    <p>About the various technologies I&#39;ve dabbled in. I plan on adding some
                        sort of progress bar or visual indication on my level of competency or
                        confidence in each subject.</p>
                </blockquote>
                <p><em>Contact Me</em></p>
                <blockquote>
                    <p>Here is where you can send me an email automatically using the form (created
                        this using the email.js library)</p>
                </blockquote>
            </div>
        </article>

    );
}
