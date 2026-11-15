import { useEffect, useState } from "react";
import Head from "next/head";
import { getPinnedRepos, type Repo } from "@/lib/repos";
import Repository from "@/components/Repository";
import type { InferGetStaticPropsType } from "next";

export default function ShowcasePage({
  allRepos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [repos, setRepos] = useState<Repo[]>(allRepos);
  const [isLoading, setIsLoading] = useState(allRepos.length === 0);

  useEffect(() => {
    const controller = new AbortController();

    async function refreshRepos() {
      try {
        const response = await fetch("/api/repos", {
          signal: controller.signal,
        });
        if (!response.ok) return;

        const data: unknown = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data as Repo[]);
        }
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to refresh repositories:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    refreshRepos();
    return () => controller.abort();
  }, []);

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
          {repos.length > 0 ? (
            repos.map((repo) => <Repository key={repo.name} repo={repo} />)
          ) : (
            <div className="p-8 bg-surface border border-line rounded-lg text-center font-mono text-sm text-ink-subtle">
              {isLoading
                ? "Loading repositories..."
                : "No pinned repositories available right now."}
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
  };
}
