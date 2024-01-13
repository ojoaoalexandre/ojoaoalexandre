'use server'

import { GithubRepositoriesGateway } from "../gateways/github/github-repositories.gateway"

export const getRepositoriesAction = async ({ size }: { size: number }) => {
  try {
    const gateway = new GithubRepositoriesGateway()
    const data = await gateway.findWithCover({
      size
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
  }
}