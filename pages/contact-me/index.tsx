import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { MdEmail } from "react-icons/md";

export default function ContactMePage() {
  return (
    <>
      <Head>
        <title key="title">Contact Me — Carter&#39;s Portfolio</title>
        <meta
          key="description"
          name="description"
          content="Get in touch with Carter S. about internships, systems engineering, or open-source collaboration."
        />
      </Head>
      <div className="flex flex-col gap-12 w-full">
        {/* Header Section */}
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Contact Me.
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            I would love to get to know more about you and your experiences. Feel
            free to send me an email about anything relevant like an open source
            collaboration and I&#39;ll be happy to respond.
          </p>
        </section>

        {/* Form Section */}
        <section className="w-full">
          <div className="p-6 sm:p-8 bg-surface border border-line rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-surface-muted border border-line rounded-md text-accent">
                <MdEmail className="text-xl" />
              </div>
              <h2 className="text-xl font-semibold text-ink">Get in Touch</h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
