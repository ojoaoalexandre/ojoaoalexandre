import { Octokit } from 'octokit'
import { env } from './env'

export const github = new Octokit({
  auth: env.GITHUB_CLIENT
})