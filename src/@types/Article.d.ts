export type ArticleProps = {
  "id": number
  "node_id": string
  "number": number
  "title": string
  "user": {
    "login": "alexandrebekor",
    "id": 32578695,
    "node_id": "MDQ6VXNlcjMyNTc4Njk1",
    "avatar_url": "https://avatars.githubusercontent.com/u/32578695?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/alexandrebekor",
    "html_url": "https://github.com/alexandrebekor",
    "followers_url": "https://api.github.com/users/alexandrebekor/followers",
    "following_url": "https://api.github.com/users/alexandrebekor/following{/other_user}",
    "gists_url": "https://api.github.com/users/alexandrebekor/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/alexandrebekor/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/alexandrebekor/subscriptions",
    "organizations_url": "https://api.github.com/users/alexandrebekor/orgs",
    "repos_url": "https://api.github.com/users/alexandrebekor/repos",
    "events_url": "https://api.github.com/users/alexandrebekor/events{/privacy}",
    "received_events_url": "https://api.github.com/users/alexandrebekor/received_events",
    "type": "User",
    "site_admin": false
  },
  "labels": string[]
  "state": "closed" | "open"
  "locked": boolean
  "assignee": null,
  "assignees": [
    {
      "login": "alexandrebekor",
      "id": 32578695,
      "node_id": "MDQ6VXNlcjMyNTc4Njk1",
      "avatar_url": "https://avatars.githubusercontent.com/u/32578695?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/alexandrebekor",
      "html_url": "https://github.com/alexandrebekor",
      "followers_url": "https://api.github.com/users/alexandrebekor/followers",
      "following_url": "https://api.github.com/users/alexandrebekor/following{/other_user}",
      "gists_url": "https://api.github.com/users/alexandrebekor/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/alexandrebekor/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/alexandrebekor/subscriptions",
      "organizations_url": "https://api.github.com/users/alexandrebekor/orgs",
      "repos_url": "https://api.github.com/users/alexandrebekor/repos",
      "events_url": "https://api.github.com/users/alexandrebekor/events{/privacy}",
      "received_events_url": "https://api.github.com/users/alexandrebekor/received_events",
      "type": "User",
      "site_admin": false
    }
  ],
  "milestone": {
    "url": "https://api.github.com/repos/alexandrebekor/alexandrebekor/milestones/18",
    "html_url": "https://github.com/alexandrebekor/alexandrebekor/milestone/18",
    "labels_url": "https://api.github.com/repos/alexandrebekor/alexandrebekor/milestones/18/labels",
    "id": 10349447,
    "node_id": "MI_kwDOG2wD1M4AneuH",
    "number": 18,
    "title": "Blog: Articles",
    "description": "Artigos do blog pessoal.",
    "creator": {
      "login": "alexandrebekor",
      "id": 32578695,
      "node_id": "MDQ6VXNlcjMyNTc4Njk1",
      "avatar_url": "https://avatars.githubusercontent.com/u/32578695?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/alexandrebekor",
      "html_url": "https://github.com/alexandrebekor",
      "followers_url": "https://api.github.com/users/alexandrebekor/followers",
      "following_url": "https://api.github.com/users/alexandrebekor/following{/other_user}",
      "gists_url": "https://api.github.com/users/alexandrebekor/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/alexandrebekor/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/alexandrebekor/subscriptions",
      "organizations_url": "https://api.github.com/users/alexandrebekor/orgs",
      "repos_url": "https://api.github.com/users/alexandrebekor/repos",
      "events_url": "https://api.github.com/users/alexandrebekor/events{/privacy}",
      "received_events_url": "https://api.github.com/users/alexandrebekor/received_events",
      "type": "User",
      "site_admin": false
    },
    "open_issues": 8,
    "closed_issues": 1,
    "state": "open",
    "created_at": "2023-12-26T14:37:54Z",
    "updated_at": "2023-12-27T21:15:16Z",
    "due_on": null,
    "closed_at": null
  },
  "comments": 0,
  "created_at": "2023-12-27T21:13:40Z",
  "updated_at": "2023-12-27T21:15:34Z",
  "closed_at": "2023-12-27T21:15:16Z",
  "author_association": "OWNER",
  "active_lock_reason": null,
  "body": "## Primeiro artigo\nEsse é o meu primeiro post para teste no blog.\n\n```javascript\nconst teste = \"Hello World\"\n```",
  "reactions": {
    "url": "https://api.github.com/repos/alexandrebekor/alexandrebekor/issues/206/reactions",
    "total_count": 0,
    "+1": 0,
    "-1": 0,
    "laugh": 0,
    "hooray": 0,
    "confused": 0,
    "heart": 0,
    "rocket": 0,
    "eyes": 0
  },
  "timeline_url": "https://api.github.com/repos/alexandrebekor/alexandrebekor/issues/206/timeline",
  "performed_via_github_app": null,
  "state_reason": "completed"
}

export type ArticlesProps = {
  data: ArticleProps[]
}