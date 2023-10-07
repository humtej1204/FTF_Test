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

  // @Get('/test/grapgql')
  // async getGithubDataGrapgql(): Promise<GithubCommitDataDto[]> {
  //   const res: OctokitResponse<GithubCommitDataDto[]> = await this
  //     .octokitService.graphql(`{
  //       query listCommits($owner: String!, $repo: String!) {
  //         commit(owner: $owner, repo: $repo) {

  //         }
  //       }
  //     }`);

  //   return res.data;
  // }
}
