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
