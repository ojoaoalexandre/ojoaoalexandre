import { ArticlesProps } from "@/libs/github"

export type ArticlesGateway = {
  find({ state }: { state: 'open' | 'closed' | 'all'}): Promise<ArticlesProps>
}