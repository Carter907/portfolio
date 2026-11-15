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

interface GitHubGraphQLResponse {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Repo[];
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
}

export async function fetchPinnedRepos(token?: string): Promise<Repo[]> {
  if (!token) {
    console.warn("GITHUB_TOKEN is not configured; returning empty repo list.");
    return [];
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "carter-portfolio",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
    });

    if (!response.ok) {
      console.error(
        `GitHub GraphQL request failed with status ${response.status}`
      );
      return [];
    }

    const payload = (await response.json()) as GitHubGraphQLResponse;
    if (payload.errors?.length) {
      console.error("GitHub GraphQL errors:", payload.errors);
      return [];
    }

    return payload.data?.user?.pinnedItems?.nodes ?? [];
  } catch (error) {
    console.error("Error fetching pinned repositories:", error);
    return [];
  }
}

export async function getPinnedRepos(): Promise<Repo[]> {
  return fetchPinnedRepos(
    process.env.GITHUB_TOKEN ?? process.env.NEXT_PUBLIC_GH_TOKEN
  );
}
