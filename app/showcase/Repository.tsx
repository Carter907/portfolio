import {Repo} from './repos'
import {FaGithub} from "react-icons/fa";

interface RepositoryProps {
    repo: Repo
}

export default function Repository({repo}: RepositoryProps) {
    return (
        <div
            className="flex flex-row shadow-xl bg-stone-50 p-4 rounded-3xl w-[500px] dark:bg-stone-900">
            <div className="basis-1/2 select-none">
                <p className={"text-2xl"}>
                    {repo.name}
                </p>
                <p>
                    <em className="opacity-30 text-sm">made with {repo.primaryLanguage.name}</em>
                </p>
            </div>
            <div className="basis-1/2 opacity-75 text-end items-center flex flex-row justify-end">
                <a target="_blank" href={`https://github.com/Carter907/${repo.name}`}>
                    <FaGithub size={40}/>
                </a>
            </div>
        </div>
    )
}