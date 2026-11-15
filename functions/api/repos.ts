import { fetchPinnedRepos } from "../../lib/repos";

interface Env {
  GITHUB_TOKEN?: string;
  NEXT_PUBLIC_GH_TOKEN?: string;
}

interface PagesContext {
  env: Env;
}

export async function onRequestGet({ env }: PagesContext): Promise<Response> {
  const token = env.GITHUB_TOKEN ?? env.NEXT_PUBLIC_GH_TOKEN;
  const repos = await fetchPinnedRepos(token);

  return new Response(JSON.stringify(repos), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
}
