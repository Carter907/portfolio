import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import type { FeaturedProject } from "@/lib/projects";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
  compact?: boolean;
}

export default function FeaturedProjectCard({
  project,
  compact = false,
}: FeaturedProjectCardProps) {
  return (
    <article className="flex flex-col w-full p-6 bg-surface border border-line hover:border-line-strong rounded-lg transition-colors">
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-ink hover:text-accent transition-colors"
          >
            {project.title}
          </a>
          <span className="text-xs font-mono text-ink-subtle">
            {project.role}
          </span>
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-ink-subtle hover:text-accent transition-colors shrink-0 text-xs font-mono"
          aria-label={`View ${project.title} on GitHub`}
        >
          <FaGithub size={17} />
          <FaExternalLinkAlt size={11} />
        </a>
      </div>

      <p className="text-sm text-ink-muted leading-relaxed mb-4">
        {project.summary}
      </p>

      {!compact && (
        <ul className="flex flex-col gap-2 mb-5 text-sm text-ink-muted leading-relaxed list-disc pl-5">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-line">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 bg-surface-muted border border-line rounded-md font-mono text-xs text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
