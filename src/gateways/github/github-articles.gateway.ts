import { ArticlesProps, github } from "../../libs/github";
import { ArticlesGateway } from "../articles.gateway";

export class GithubArticlesGateway implements ArticlesGateway {
  getDescription(text: string) {
    const regex = /::description:\s*(.*?)(?:\n|$)/s
    const expression = text.match(regex)

    if(expression) {
      const description = expression[1]
      return description
    }

    return null
  }

  getCover(text: string) {
    const regex = /::cover:\s*(.*?)(?:\n|$)/s
    const expression = text.match(regex)

    if(expression) {
      const description = expression[1]
      return description
    }

    return null
  }

  async find({ state }: { state: 'open' | 'closed' | 'all'}): Promise<ArticlesProps> {
    const response = await github.rest.issues.listForRepo({
      owner: 'alexandrebekor',
      repo: 'alexandrebekor',
      milestone: '18',
      state
    })

    return response.data
  }

  async findyId(id: number) {
    const response = await github.rest.issues.get({
      owner: 'alexandrebekor',
      repo: 'alexandrebekor',
      issue_number: id
    })

    return response.data
  }
}