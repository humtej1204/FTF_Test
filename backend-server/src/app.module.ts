import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { join } from 'path';
import { OctokitModule } from 'nestjs-octokit';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    // }),
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
