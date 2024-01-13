import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from 'octokit'
import { env } from './env'

export const github = new Octokit({
  auth: env.GITHUB_CLIENT
})

export type ArticlesProps = GetResponseDataTypeFromEndpointMethod<
  typeof github.rest.issues.listForRepo
>

export type BooksProps = GetResponseDataTypeFromEndpointMethod<
  typeof github.rest.issues.listForRepo
>

export type RepositoriesProps = GetResponseDataTypeFromEndpointMethod<
  typeof github.rest.repos.listForAuthenticatedUser
>

export type UserProps = GetResponseDataTypeFromEndpointMethod<
  typeof github.rest.users.getByUsername
>