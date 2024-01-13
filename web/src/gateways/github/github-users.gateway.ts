import { UserProps, github } from "../../libs/github";
import { UsersGateway } from "../users.gateway";

export class GithubUsers implements UsersGateway {
  async me(): Promise<UserProps> {
    const user = await github.rest.users.getByUsername({
      username: 'alexandrebekor'
    })

    return user.data
  }
}