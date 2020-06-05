import { Injectable } from '@nestjs/common'
import { Args } from '@nestjs/graphql'
import { config } from '@creditkarma/dynamic-config'
import { createHttpClient } from '@creditkarma/thrift-client'
import { ContentService as ContentServiceRpc, Post } from '../../codegen/com/content/ContentService'

@Injectable()
export class ContentService {
  async getPost(@Args('id') id: number) {
    const clientConfig = await config().get('gateway.client')

    // 建立客户端
    const contentClient: ContentServiceRpc.Client = createHttpClient(ContentServiceRpc.Client, clientConfig)

    console.log(`Gateway: fetching post with id: ${id}`)

    const post = await contentClient.getPost(id)
    return post
  }
}
