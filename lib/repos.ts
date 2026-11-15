import { Octokit } from "octokit";

export type Repo = {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  primaryLanguage: { name: string } | null;
  updatedAt: string;
};

const PINNED_REPOS_QUERY = `
{
  user(login: "Carter907") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          stargazerCount
          primaryLanguage {
            name
          }
          updatedAt
        }
      }
    }
  }
}`;

export async function getPinnedRepos(): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN ?? process.env.NEXT_PUBLIC_GH_TOKEN;
  if (!token) {
    console.warn("GITHUB_TOKEN is not configured; returning empty repo list.");
    return [];
  }

  const octokit = new Octokit({ auth: token });

  try {
    const data = await octokit.graphql<{
      user: { pinnedItems: { nodes: Repo[] } } | null;
    }>(PINNED_REPOS_QUERY);

    return data.user?.pinnedItems.nodes ?? [];
  } catch (error) {
    console.error("Error fetching pinned repositories:", error);
    return [];
  }
}
