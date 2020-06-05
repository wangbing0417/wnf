export const BASE_URL = {
  development: ''
}

export const BASE_CONFIG = {
  defaults: {
    transform: true,
    timeout: 30000
  },
  development: {
    withCredentials: true
  }
}

export const API_LIST = {
  HEALTH_CHECK: '/api/healthcheck',
  GET_POST: '/api/thrift/post/${id}'
}

export default {
  BASE_URL,
  BASE_CONFIG,
  API_LIST
}
