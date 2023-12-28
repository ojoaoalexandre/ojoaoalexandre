import { RepositoryProps } from "@/@types/Repository"

export type RepositoriesGateway = {
  find(): Promise<RepositoryProps[]>
}