export interface IServerConfig {
  hostName: string
  port: number
  path: string
}

export const gateway = {
  server: {
    hostName: 'localhost',
    port: 9000,
    path: '/'
  },
  client: {
    hostName: 'localhost',
    port: 8095,
    path: '/'
  }
}
