'use server'

import { GithubBooksGateway } from "../gateways/github/github-books.gateway"

export const getBooksAction = async () => {
  try {
    const gateway = new GithubBooksGateway()
    const data = await gateway.find({
      state: 'closed'
    })

    return {
      data,
      error: null
    }
  } catch (error) {
    if(error instanceof Error) {
      return {
        data: null,
        error: error.message
      }
    }

    throw error
  }
}