<template lang="html">
  <div class="detail">
    <section class="module-header">
      <div class="goBack" @click="goBack">返回</div>
      详情页
    </section>
    <section>
      内容
    </section>
  </div>
</template>

<script>
export default {
  name: 'detail',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
