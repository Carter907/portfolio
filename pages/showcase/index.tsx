import {getPinnedRepos} from "@/lib/repos";
import Repository from "@/components/Repository";
import type {InferGetStaticPropsType} from "next";

export const runtime = "experimental-edge"

export default function ShowcasePage(
    {allRepos}: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <article className="prose prose-stone dark:prose-invert min-w-full my-40">
            <div className="flex flex-col gap-40 justify-center items-center">

                {allRepos.length ? (allRepos.map((repo) => (
                    <Repository key={repo.name} repo={repo}/>
                ))) : <div>Loading...</div>}
            </div>
        </article>
    )
}
export async function getStaticProps() {
    const allRepos = await getPinnedRepos();

    return {
        props: { allRepos },
    };
}
