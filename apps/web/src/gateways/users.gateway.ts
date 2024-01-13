import { UserProps } from "../libs/github"

export type UsersGateway = {
  me(): Promise<UserProps>
}