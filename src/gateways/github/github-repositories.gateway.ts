import { github } from "@/libs/github";
import { RepositoriesGateway } from "../repositories.gateway";
import { RepositoryProps } from "@/@types/Repository";


export class GithubRepositoriesGateway implements RepositoriesGateway {
  async find(): Promise<RepositoryProps[]> {
    const response = await github.rest.repos.listForAuthenticatedUser()

    return response.data
  }
}