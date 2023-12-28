import { RepositoriesProps, github } from "@/libs/github";
import { RepositoriesGateway } from "../repositories.gateway";

export class GithubRepositoriesGateway implements RepositoriesGateway {
  async find(): Promise<RepositoriesProps> {
    const response = await github.rest.repos.listForAuthenticatedUser()

    return response.data
  }
}