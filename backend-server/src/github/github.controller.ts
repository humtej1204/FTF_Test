import { Controller, Get } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { OctokitResponse } from 'nestjs-octokit/node_modules/@octokit/types';
import { GithubCommitDataDto } from 'src/models/dto/response/GithubCommitDataDto';

@Controller('github')
export class GithubController {
  constructor(private readonly octokitService: OctokitService) {}

  @Get('/test')
  async getGithubData(): Promise<GithubCommitDataDto[]> {
    const res: OctokitResponse<GithubCommitDataDto[]> =
      await this.octokitService.rest.repos.listCommits({
        owner: 'humtej1204',
        repo: 'FTF_Test',
      });
    return res.data;
  }

  @Get('/test/graphql')
  async getGithubDataGrapgql(): Promise<any> {
    const res: OctokitResponse<any> = await this.octokitService.graphql(`{
      repository(owner: "humtej1204", name: "FTF_Test") {
        ref(qualifiedName: "feature/backend-config") {
          target {
            ... on Commit {
              history(first: 100) {
                nodes {
                  oid
                  url
                  commitUrl
                  commitResourcePath
                  committedDate
                  committer {
                    date
                    user {
                      login
                      name
                      email
                      avatarUrl
                    }
                  }
                  additions
                  deletions
                  message
                  messageBody
                  messageBodyHTML
                  messageHeadline
                  messageHeadlineHTML
                  resourcePath
                  treeUrl
                }
              }
            }
          }
        }
      }
    }`);

    return res;
  }
}
