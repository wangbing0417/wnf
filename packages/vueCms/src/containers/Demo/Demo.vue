<template>
  <div>
    <p>healthCheck:{{ healthCheckStatus }}</p>

    <beer-button variant="text">text</beer-button>
    <beer-button variant="link">link</beer-button>
    <beer-button variant="secondary" icon="add-m" :iconBs="{ size: 18 }">上传</beer-button>
  </div>
</template>

<script>
import BeerButton from '@beer/cmp/common/Button/Button'
import BeerAlert from '@beer/cmp/common/Alert/Alert'
import { healthCheck, getPost, getAuthor } from './services'

export default {
  name: 'Demo',
  data() {
    return {
      healthCheckStatus: ''
    }
  },
  components: {
    BeerButton,
    BeerAlert
  },
  methods: {
    healthCheck() {
      healthCheck().then((res) => {
        this.healthCheckStatus = res.msg
      })
    },
    getPost() {
      getPost(2).then((res) => {
        console.log('getPost res', res)
      })
    },
    getAuthor() {
      getAuthor({ id: 2, city: 'shanghai' }).then((res) => {
        console.log('getAuthor res', res)
      })
    }
  },
  created() {
    this.healthCheck()
    this.getPost()
    this.getAuthor()
  }
}
</script>

<style></style>
