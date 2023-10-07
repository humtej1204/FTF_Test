import { Module } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { GithubResolver } from './github.resolver';

@Module({
  imports: [],
  controllers: [GithubController],
  providers: [GithubService, GithubResolver],
})
export class GithubModule {}
