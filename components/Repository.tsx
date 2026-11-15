import { Repo } from "@/lib/repos";
import { FaGithub, FaStar } from "react-icons/fa";
import distanceToNow from "@/lib/dateRelative";

interface RepositoryProps {
  repo: Repo;
}

export default function Repository({ repo }: RepositoryProps) {
  return (
    <article className="flex flex-col w-full bg-surface border border-line hover:border-line-strong rounded-lg transition-colors">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start gap-4 mb-2.5">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-ink hover:text-accent transition-colors"
          >
            {repo.name}
          </a>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-subtle hover:text-accent transition-colors shrink-0"
            aria-label={`View ${repo.name} on GitHub`}
          >
            <FaGithub size={18} />
          </a>
        </div>

        <p className="text-sm text-ink-muted mb-5 flex-grow leading-relaxed">
          {repo.description || "No description provided."}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-ink-subtle mt-auto pt-4 border-t border-line">
          {repo.primaryLanguage && (
            <div className="flex items-center gap-2">
              <span className="block w-2 h-2 rounded-full bg-accent" />
              <span className="text-ink-muted">{repo.primaryLanguage.name}</span>
            </div>
          )}

          <div className="flex items-center gap-1.5">
            <FaStar className="text-accent" size={12} />
            <span>{repo.stargazerCount}</span>
          </div>

          <div className="ml-auto">
            Updated {distanceToNow(new Date(repo.updatedAt))}
          </div>
        </div>
      </div>
    </article>
  );
}
