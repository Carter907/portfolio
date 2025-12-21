import ContactForm from "@/components/ContactForm";
import { MdEmail } from "react-icons/md";

export const runtime = "experimental-edge"

export default function ContactMePage() {
    return (
        <div className="flex flex-col gap-16 w-full py-10">
            {/* Header Section */}
            <section className="flex flex-col gap-6 items-start">
                <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-stone-600 to-stone-900 dark:from-stone-100 dark:to-stone-400 bg-clip-text text-transparent leading-tight">
                    Contact Me.
                </h1>
                <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
                    I would love to get to know more about you and your experiences.
                    Feel free to send me an email about anything relevant like an open source
                    collaboration and I&#39;ll be happy to respond.
                </p>
            </section>

            {/* Form Section */}
            <section className="w-full">
                <div className="p-8 border border-stone-200 dark:border-stone-800 rounded-2xl bg-stone-50 dark:bg-white/5">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white dark:bg-stone-800 rounded-xl shadow-sm">
                            <MdEmail className="text-2xl text-stone-700 dark:text-stone-300"/>
                        </div>
                        <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Get in Touch</h3>
                    </div>
                    <ContactForm  />
                </div>
            </section>
        </div>
    )
}