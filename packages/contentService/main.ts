import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { createClient } from '@creditkarma/thrift-client'

import { ThriftServerExpress } from '@creditkarma/thrift-server-express'
import * as bodyParser from 'body-parser'
import * as express from 'express'

import { config } from '@creditkarma/dynamic-config'
import { User, UserService } from './codegen/com/identity/UserService'

import { ContentService, ContentServiceException, Post, PublishedDate } from './codegen/com/content/ContentService'

import { findPost, IMockPost } from './data'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const serverConfig = await config().get('content.server')
  const clientConfig = await config().get('content.client')

  const userClientV1: UserService.Client = createClient(UserService.Client, clientConfig)

  const serviceHandler: ContentService.IHandler<express.Request> = {
    getPost(id: number, context?: express.Request) {
      console.log(`ContentService: getPost[${id}]`)
      const post: IMockPost | undefined = findPost(id)

      if (post !== undefined) {
        return userClientV1.getUser(post.author).then((author: User) => {
          console.log('author', author)
          return new Post({
            id: post.id,
            author,
            date: new PublishedDate(post.date),
            title: post.title,
            body: post.body
          })
        })
      } else {
        throw new ContentServiceException({
          message: `Unable to find post for id[${id}]`
        })
      }
    },
    add(left: number, right: number): number {
      console.log(`ContentService: add(${left}, ${right})`)
      return left + right
    }
  }

  app.use(
    serverConfig.path,
    bodyParser.raw(),
    ThriftServerExpress({
      serviceName: 'content-service',
      handler: new ContentService.Processor(serviceHandler)
    })
  )

  await app.listen(serverConfig.port, () => {
    console.log(`Thrift server listening at http://${serverConfig.hostName}:${serverConfig.port}`)
  })
}
bootstrap()
