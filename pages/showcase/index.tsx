import {getPinnedRepos} from "@/lib/repos";
import Repository from "@/components/Repository";
import type {InferGetStaticPropsType} from "next";

export const runtime = "experimental-edge"

export default function ShowcasePage(
    {allRepos}: InferGetStaticPropsType<typeof getStaticProps>
) {
    return (
        <section className="container mx-auto px-4 my-20 max-w-3xl">
            <div className="flex flex-col gap-8 w-full">
                {allRepos.length ? (allRepos.map((repo) => (
                    <Repository key={repo.name} repo={repo}/>
                ))) : (
                    <div className="text-center text-stone-500 py-10">
                        Loading repositories...
                    </div>
                )}
            </div>
        </section>
    )
}
export async function getStaticProps() {
    const allRepos = await getPinnedRepos();

    return {
        props: { allRepos },
    };
}
