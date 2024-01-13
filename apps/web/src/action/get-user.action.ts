import { GithubUsers } from "../gateways/github/github-users.gateway"

export const getUserAction = async () => {
  try {
    const gateway = new GithubUsers()
    const data = await gateway.me()

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