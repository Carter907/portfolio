import Link from 'next/link';
import { GrProjects } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";

export const runtime = "experimental-edge"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 w-full py-10">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-start">
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-stone-600 to-stone-900 dark:from-stone-100 dark:to-stone-400 bg-clip-text text-transparent leading-tight">
          Hi, I&#39;m Carter.
        </h1>
        <p className="text-xl text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
          I am an aspiring software engineer specializing in high-performance, low-level systems with a strong foundation in C++. 
          I am currently a student seeking C++ internship opportunities to apply my skills within a professional environment.
        </p>
        <div className="flex gap-4 mt-2">
            <Link href="/contact-me" className="px-6 py-3 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-black font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Get in Touch
            </Link>
            <Link href="/showcase" className="px-6 py-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors font-medium">
                View Work
            </Link>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid md:grid-cols-2 gap-6 w-full">
        <Link href="/experience" className="group p-8 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-stone-400 dark:hover:border-stone-600 transition-all hover:shadow-md bg-stone-50 dark:bg-white/5">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-stone-800 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                    <LuBrainCircuit className="text-2xl text-stone-700 dark:text-stone-300"/>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Experience</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                Explore my professional background, skills, and the technologies I work with on a daily basis.
            </p>
        </Link>
        
         <Link href="/showcase" className="group p-8 border border-stone-200 dark:border-stone-800 rounded-2xl hover:border-stone-400 dark:hover:border-stone-600 transition-all hover:shadow-md bg-stone-50 dark:bg-white/5">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-stone-800 rounded-xl shadow-sm group-hover:scale-105 transition-transform">
                    <GrProjects className="text-2xl text-stone-700 dark:text-stone-300"/>
                </div>
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100">Showcase</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                A collection of my projects, experiments, and open-source contributions.
            </p>
        </Link>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-stone-800 dark:text-stone-100">Technical Focus</h2>
        <div className="flex flex-wrap gap-3">
            {['C++', 'C', 'Rust', 'Java', 'Python', 'TypeScript', 'Bash', 'CMake', 'Docker', 'Git'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300">
                    {tech}
                </span>
            ))}
        </div>
      </section>
    </div>
  );
}