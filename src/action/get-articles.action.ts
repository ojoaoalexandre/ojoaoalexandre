'use server'

import { GithubArticlesGateway } from "@/gateways/github/github-articles.gateway"

export const getArticlesAction = async () => {
  try {
    const gateway = new GithubArticlesGateway()
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