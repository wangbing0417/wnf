import { Resolver, Query, Args } from '@nestjs/graphql'
import { ContentService } from './content.service'

@Resolver('Content')
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Query('getPost')
  getPost(@Args('id') id: number) {
    return this.contentService.getPost(id)
  }
}
