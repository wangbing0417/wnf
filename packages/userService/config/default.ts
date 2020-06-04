export interface IServerConfig {
  hostName: string
  port: number
  path: string
}

export const user = {
  server: {
    hostName: 'localhost',
    port: 8085,
    path: '/'
  }
}
