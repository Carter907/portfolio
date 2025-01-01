import {Repo} from './repos'
import {FaGithub} from "react-icons/fa";

interface RepositoryProps {
    repo: Repo
}

export default function Repository({repo}: RepositoryProps) {
    return (
        <div className="flex flex-row shadow-xl bg-stone-50 p-2 rounded-3xl w-[500px] dark:bg-stone-900">
            <div className="basis-1/4">
                {repo.name}
            </div>
            <div className="basis-1/2 text-end select-none">
                <em className="opacity-30 text-sm">made with {repo.primaryLanguage.name}</em>
            </div>
            <div className="basis-1/4 text-end items-center flex flex-row justify-end">
                <a target="_blank" href={`https://github.com/Carter907/${repo.name}`}>
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    )
}