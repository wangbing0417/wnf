import { http } from '@xhs/launcher'
import gql from 'graphql-tag'
import apolloClient from '../../utils/graphql'

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

export function getAuthor(params) {
  return apolloClient.query({
    query: gql`
      query($id: Int!, $city: String) {
        author(id: $id) {
          lastName
        }
        salary(city: $city)
      }
    `,
    variables: params
  })
}
