'use server'

import { GithubArticlesGateway } from "../gateways/github/github-articles.gateway"

export const getArticleById = async ({ slug }: { slug : string }) => {
  try {
    const { length, [length - 1]: id } = slug.split('-')
    const gateway = new GithubArticlesGateway()
    const data = await gateway.findyId(Number(id))
    
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