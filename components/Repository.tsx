import { Repo } from '@/lib/repos';
import { FaGithub, FaStar } from "react-icons/fa";
import distanceToNow from '@/lib/dateRelative';

interface RepositoryProps {
    repo: Repo;
}

export default function Repository({ repo }: RepositoryProps) {
    return (
        <div className="flex flex-col w-full bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-3">
                    <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-stone-900 dark:text-stone-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        {repo.name}
                    </a>
                    <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-200 transition-colors"
                        aria-label="View on GitHub"
                    >
                        <FaGithub size={22}/>
                    </a>
                </div>

                <p className="text-stone-600 dark:text-stone-400 text-base mb-6 flex-grow leading-relaxed">
                    {repo.description || "No description provided."}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-stone-500 mt-auto pt-4 border-t border-stone-100 dark:border-stone-800">
                    {repo.primaryLanguage && (
                        <div className="flex items-center gap-2">
                            <span className="block w-2.5 h-2.5 rounded-full bg-stone-400 dark:bg-stone-600"></span>
                            <span className="font-medium text-stone-700 dark:text-stone-300">{repo.primaryLanguage.name}</span>
                        </div>
                    )}
                    
                    <div className="flex items-center gap-1.5">
                        <FaStar className="text-yellow-500 mb-0.5" />
                        <span>{repo.stargazerCount}</span>
                    </div>

                    <div className="text-xs ml-auto">
                        Updated {distanceToNow(new Date(repo.updatedAt))}
                    </div>
                </div>
            </div>
        </div>
    )
}