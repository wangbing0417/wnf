import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { createClient } from '@creditkarma/thrift-client'

import { ThriftServerExpress } from '@creditkarma/thrift-server-express'
import * as bodyParser from 'body-parser'
import * as express from 'express'

import { config } from '@creditkarma/dynamic-config'

import { User, UserService, UserServiceException } from './codegen/com/identity/UserService'
import { findUser, IMockUser } from './data'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const serverConfig = await config().get('user.server')

  const serviceHandler: UserService.IHandler<express.Request> = {
    getUser(id: number, context?: express.Request): User {
      console.log(`UserService_v1: getUser[${id}]`)
      const user: IMockUser | undefined = findUser(id)
      if (user !== undefined) {
        return new User({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`
        })
      } else {
        throw new UserServiceException({
          message: `Unable to find user for id[${id}]`
        })
      }
    }
  }

  app.use(
    serverConfig.path,
    bodyParser.raw(),
    ThriftServerExpress({
      serviceName: 'user-service',
      handler: new UserService.Processor(serviceHandler)
    })
  )

  await app.listen(serverConfig.port, () => {
    console.log(`Thrift server listening at http://${serverConfig.hostName}:${serverConfig.port}`)
  })
}
bootstrap()
