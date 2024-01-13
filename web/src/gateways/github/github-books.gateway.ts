import { BooksProps, github } from "../../libs/github";
import { BooksGateway } from "../books.gateway";

export class GithubBooksGateway implements BooksGateway {
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

  async find({ state }: { state: 'open' | 'closed' | 'all'}): Promise<BooksProps> {
    const response = await github.rest.issues.listForRepo({
      owner: 'alexandrebekor',
      repo: 'alexandrebekor',
      milestone: '19',
      state
    })

    return response.data
  }
}