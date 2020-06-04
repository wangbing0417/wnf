<template>
  <div>
    <beer-button variant="text">text</beer-button>
    <beer-button variant="link">link</beer-button>
    <beer-button variant="secondary" icon="add-m" :iconBs="{ size: 18 }">上传</beer-button>
  </div>
</template>

<script>
import BeerButton from '@beer/cmp/common/Button/Button'
import BeerAlert from '@beer/cmp/common/Alert/Alert'

export default {
  name: 'Demo',
  data() {
    return {}
  },
  components: {
    BeerButton,
    BeerAlert
  }
}
</script>

<style></style>
