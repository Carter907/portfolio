import { useEffect, useState } from "react";
import Head from "next/head";
import { getPinnedRepos, type Repo } from "@/lib/repos";
import { FEATURED_PROJECTS, FEATURED_REPO_NAMES } from "@/lib/projects";
import FeaturedProjectCard from "@/components/FeaturedProjectCard";
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

  const additionalRepos = repos.filter(
    (repo) => !FEATURED_REPO_NAMES.has(repo.name.toLowerCase())
  );

  return (
    <>
      <Head>
        <title key="title">Showcase — Carter Speerschneider</title>
        <meta
          key="description"
          name="description"
          content="Featured full-stack and backend projects alongside pinned GitHub repositories by Carter Speerschneider."
        />
      </Head>
      <div className="flex flex-col gap-12 w-full">
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Showcase
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl leading-relaxed">
            Selected full-stack applications, developer tooling, and backend
            systems I&#39;ve built and contributed to, plus additional pinned
            repositories from GitHub.
          </p>
        </section>

        <section className="flex flex-col gap-5 w-full">
          <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
            Featured Projects
          </h2>
          {FEATURED_PROJECTS.map((project) => (
            <FeaturedProjectCard key={project.title} project={project} />
          ))}
        </section>

        {(isLoading || additionalRepos.length > 0) && (
          <section className="flex flex-col gap-5 w-full">
            <h2 className="text-xs font-mono uppercase tracking-wider text-ink-subtle">
              More on GitHub
            </h2>
            {additionalRepos.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-5">
                {additionalRepos.map((repo) => (
                  <Repository key={repo.name} repo={repo} />
                ))}
              </div>
            ) : (
              <div className="p-8 bg-surface border border-line rounded-lg text-center font-mono text-sm text-ink-subtle">
                Loading additional GitHub repositories...
              </div>
            )}
          </section>
        )}
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
