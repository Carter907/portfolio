import {getPinnedRepos} from "@/app/showcase/repos";
import Repository from "@/app/showcase/Repository";

export const runtime = "edge"

export default async function Showcase() {
    const repos = await getPinnedRepos();
    return (
        <article className="prose lg:prose-2xl prose-stone dark:prose-invert">
            <div className="flex flex-col space-y-5">

                {repos.map((repo) => (
                    <Repository key={repo.name} repo={repo}/>
                ))}
            </div>
        </article>
    )
}