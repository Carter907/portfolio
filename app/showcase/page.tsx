import {getPinnedRepos} from "@/app/showcase/repos";
import Repository from "@/app/showcase/Repository";

export const runtime = "edge"

export default async function Showcase() {
    const repos = await getPinnedRepos();
    return (
        <article className="prose prose-stone dark:prose-invert min-w-full">
            <div className="flex flex-col space-y-5 justify-center items-center">

                {repos.map((repo) => (
                    <Repository key={repo.name} repo={repo}/>
                ))}
            </div>
        </article>
    )
}