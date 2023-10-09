export interface RepositoryModel<T> {
    repository: T
}

export interface RepositoryRefData {
    ref: Ref
}

interface Ref {
    target: Target;
}

interface Target {
    history: CommitHistory;
}

interface CommitHistory {
    nodes: CommitNode[];
}

export interface CommitNode {
    oid: string;
    commitUrl: string;
    committedDate: string;
    committer: CommiterInfo;
    additions: number;
    deletions: number;
    message: string;
    messageHeadline: string;
    messageBody: string;
    treeUrl: string;
}

interface CommiterInfo {
    date: string;
    email: string;
    user: {
        login: string;
        name: string;
        avatarUrl: string;
    }
}
  
export interface RepositoryData {
    name: string;
    url: string;
    description: string | null;
    createdAt: string;
    openGraphImageUrl: string;
    owner: Owner;
    primaryLanguage: PrimaryLanguage;
    languages: LanguageData;
    defaultBranchRef: DefaultBranchRef;
    refs: {
        nodes: RefNode[];
    };
}

interface PrimaryLanguage {
    name: string;
    color: string;
}
  
interface Language {
    size: number;
    node: {
        name: string;
        color: string;
    };
}
  
interface Owner {
    login: string;
    avatarUrl: string;
    url: string;
    resourcePath: string;
}
  
interface DefaultBranchRef {
    name: string;
}
  
export interface RefNode {
    name: string;
}
  
interface LanguageData {
    totalSize: number;
    edges: Language[];
}