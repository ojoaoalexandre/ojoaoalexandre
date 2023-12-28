import { ArticlesProps, github } from "@/libs/github";
import { ArticlesGateway } from "../articles.gateway";

export class GithubArticlesGateway implements ArticlesGateway {
  async find({ state }: { state: 'open' | 'closed' | 'all'}): Promise<ArticlesProps> {
    const response = await github.rest.issues.listForRepo({
      owner: 'alexandrebekor',
      repo: 'alexandrebekor',
      milestone: '18',
      state
    })

    return response.data
  }
}