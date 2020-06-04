import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { config } from '@creditkarma/dynamic-config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const serverConfig = await config().get('gateway.server')

  await app.listen(serverConfig.port, () => {
    console.log(`Web server listening at http://${serverConfig.hostName}:${serverConfig.port}`)
  })
}
bootstrap()
