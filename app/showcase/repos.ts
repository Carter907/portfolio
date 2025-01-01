import {Octokit} from "octokit";

export type Repo = {
    name: string;
    description: string;
    url: string;
    stargazerCount: number;
    primaryLanguage: { name: string }
    updatedAt: string;
}

export async function getPinnedRepos(): Promise<Repo[]> {

    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GH_TOKEN,
    });
    try {
        const query = `
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
}`
        
        const  data: { user: { pinnedItems: { nodes }}} = await octokit.graphql(query, {})
        return data.user.pinnedItems.nodes
    } catch (error) {
        console.error('Error fetching pinned repositories:', error);
        throw error;
    }
}
