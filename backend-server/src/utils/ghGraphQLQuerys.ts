export const repoInfo = `{
    repository(owner: "humtej1204", name: "ReactJs_proyects") {
        name
        url
        description
        createdAt
        openGraphImageUrl
        owner {
            login
            avatarUrl
            url
            resourcePath
        }
        primaryLanguage {
            name
            color
        }
        languages(first: 10) {
            totalSize
            edges {
                size
                node {
                    name
                    color
                }
            }
        }
        defaultBranchRef {
            name
        }
        refs(first: 100, refPrefix: "refs/heads/") {
            nodes {
                name
            }
        }
    }
}`;

export const repoCommitHist = `{
    repository(owner: "humtej1204", name: "FTF_Test") {
        ref(qualifiedName: "feature/backend-config") {
            target {
                ... on Commit {
                    history(first: 100) {
                        nodes {
                            oid
                            commitUrl
                            committedDate
                            committer {
                                date
                                email
                                user {
                                    login
                                    name
                                    avatarUrl
                                }
                            }
                            additions
                            deletions
                            message
                            messageHeadline
                            messageBody
                            treeUrl
                        }
                    }
                }
            }
        }
    }
}`;
