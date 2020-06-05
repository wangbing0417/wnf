import { AuthorService } from './author.service'
import { Resolver, Query, Args } from '@nestjs/graphql'

@Resolver('Author')
export class AuthorResolver {
  constructor(private readonly authorsService: AuthorService) {}

  @Query('author')
  async getAuthor(@Args('id') id: number) {
    return await this.authorsService.findOneById(id)
  }

  @Query('salary')
  getSalary(@Args('city') city: string) {
    return this.authorsService.getSalary(city)
  }
}
