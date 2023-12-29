import { BooksProps } from "@/libs/github"

export type BooksGateway = {
  find({ state }: { state: 'open' | 'closed' | 'all'}): Promise<BooksProps>
}