import { github } from "@/libs/github";
import { ArticlesGateway } from "../articles.gateway";

export class GithubArticlesGateway implements ArticlesGateway {
  async find(): Promise<any> {
    const response = await github.request("GET /repos/{owner}/{repo}/issues?state=closed&milestone=18", {
      owner: 'alexandrebekor',
      repo: 'alexandrebekor'
    })
  
    return response.data
  }
}