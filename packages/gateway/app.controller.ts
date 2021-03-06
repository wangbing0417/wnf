import { Controller, Get, Param } from '@nestjs/common'
import { config } from '@creditkarma/dynamic-config'
import { createHttpClient } from '@creditkarma/thrift-client'
import { AppService } from './app.service'
import { ContentService, Post } from './codegen/com/content/ContentService'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/thrift/post/:id')
  async getPost(@Param('id') id: number) {
    const clientConfig = await config().get('gateway.client')

    // 建立客户端
    const contentClient: ContentService.Client = createHttpClient(ContentService.Client, clientConfig)

    console.log(`Gateway: fetching post with id: ${id}`)

    const post = await contentClient.getPost(id)

    return {
      data: post
    }
  }

  @Get('/add')
  async add() {
    const clientConfig = await config().get('gateway.client')
    // 建立客户端
    const contentClient: ContentService.Client = createHttpClient(ContentService.Client, clientConfig)
    const value = await contentClient.add(1, 23)

    return value
  }

  @Get('/api/healthcheck')
  healthCheck() {
    return {
      data: {
        msg: 'gateway success'
      },
      success: true
    }
  }
}
