import { http } from '@xhs/launcher'

const { get } = http

export function healthCheck() {
  return get('HEALTH_CHECK')
}

export function getPost(id) {
  return get('GET_POST', {
    resourceParams: {
      id
    }
  })
}
