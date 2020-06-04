import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthorResolver } from './src/author/author.resolver';
import { AuthorService } from './src/author/author.service';

@Module({
  imports: [GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'] })],
  controllers: [AppController],
  providers: [AppService, AuthorResolver, AuthorService]
})
export class AppModule {}
