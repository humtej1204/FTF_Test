import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: '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',
      },
    }),
    GithubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
