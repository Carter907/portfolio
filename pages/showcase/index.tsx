import Head from "next/head";
import { getPinnedRepos } from "@/lib/repos";
import Repository from "@/components/Repository";
import type { InferGetStaticPropsType } from "next";

export default function ShowcasePage({
  allRepos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title key="title">Showcase — Carter&#39;s Portfolio</title>
        <meta
          key="description"
          name="description"
          content="Pinned repositories, projects, and open-source work by Carter S."
        />
      </Head>
      <div className="flex flex-col gap-12 w-full">
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Showcase
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            A collection of my pinned projects, experiments, and open-source
            contributions on GitHub.
          </p>
        </section>

        <section className="flex flex-col gap-5 w-full">
          {allRepos.length ? (
            allRepos.map((repo) => <Repository key={repo.name} repo={repo} />)
          ) : (
            <div className="p-8 bg-surface border border-line rounded-lg text-center font-mono text-sm text-ink-subtle">
              No pinned repositories available right now.
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allRepos = await getPinnedRepos();

  return {
    props: { allRepos },
    revalidate: 3600,
  };
}
