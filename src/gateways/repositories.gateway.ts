import { RepositoriesProps } from "@/libs/github"

export type RepositoriesGateway = {
  find(): Promise<RepositoriesProps>
}