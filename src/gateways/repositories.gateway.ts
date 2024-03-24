import { RepositoriesProps } from "../libs/github"

export type RepositoriesGateway = {
  find(data?: { size: number }): Promise<RepositoriesProps>
  findWithCover(): Promise<any>
}