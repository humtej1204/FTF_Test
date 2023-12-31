import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    OctokitModule.forRoot({
      isGlobal: true,
      octokitOptions: {
        auth: process.env.GH_TOKEN,
      },
    }),
    GithubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
