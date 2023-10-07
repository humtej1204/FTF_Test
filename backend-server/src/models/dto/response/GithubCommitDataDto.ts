export class GithubCommitDataDto {
  sha: string;
  node_id: string;
  commit: CommitData;
  url: string;
  html_url: string;
  comments_url: string;
  author: GithubCommitUserData;
  committer: GithubCommitUserData;
  parents: any[];
}

class CommitData {
  author: BasicGithubUserData;
  committer: BasicGithubUserData;
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  comment_count: number;
  verification?: VerificationData;
}

class VerificationData {
  verified: boolean;
  reason: string;
  signature: any;
  payload: any;
}

class BasicGithubUserData {
  name?: string;
  email?: string;
  date?: string;
}

class GithubCommitUserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
