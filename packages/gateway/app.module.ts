import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthorResolver } from './src/author/author.resolver'
import { AuthorService } from './src/author/author.service'
import { ContentResolver } from './src/content/content.resolver'
import { ContentService } from './src/content/content.service'

@Module({
  imports: [GraphQLModule.forRoot({ typePaths: ['./**/*.graphql'] })],
  controllers: [AppController],
  providers: [AppService, AuthorResolver, AuthorService, ContentResolver, ContentService]
})
export class AppModule {}
