import '@xhs/yam-style'
import Launcher from '@xhs/launcher'

import routesConfig from './config/routes.config'
import httpConfig from './config/http.config'

const app = new Launcher('#app', {
  routes: routesConfig,
  http: httpConfig
})

app.start()

export default app
