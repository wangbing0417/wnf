export interface IServerConfig {
  hostName: string
  port: number
  path: string
}

export const content = {
  server: {
    hostName: 'localhost',
    port: 8095,
    path: '/'
  },
  client: {
    hostName: 'localhost',
    port: 8085,
    path: '/'
  }
}
