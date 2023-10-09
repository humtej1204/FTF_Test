import { Controller, Get, Query } from '@nestjs/common';
import { OctokitService } from 'nestjs-octokit';
import { OctokitResponse } from 'nestjs-octokit/node_modules/@octokit/types';
import { repoCommitHist, repoInfo } from 'src/utils/ghGraphQLQuerys';

@Controller('github/repository')
export class GithubController {
  constructor(private readonly octokitService: OctokitService) {}

  @Get('/info')
  async getGhRepoInfoGql(): Promise<any> {
    const res: OctokitResponse<any> =
      await this.octokitService.graphql(repoInfo);

    return res;
  }

  @Get('/commitsHistory')
  async getGhRepoCommitsHistGql(@Query('branch') branch): Promise<any> {
    const res: OctokitResponse<any> = await this.octokitService.graphql(`{
        repository(owner: "humtej1204", name: "FTF_Test") {
            ref(qualifiedName: "${branch}") {
                ${repoCommitHist}
            }
        }
    }`);

    return res;
  }
}
