<!-- 头部Banner  -->
<template>
  <section class="ar-banner" :style="{ 'background-image': 'url(' + bannerBg + ')' }">
    <div class="banner-text">
      <div class="banner-title">{{ $t(title) }}</div>
      <div class="banner-dec">{{ enTitle }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'bannerBg'],
  computed: {
    enTitle () {
      return this.title.toUpperCase()
    }
  }
}
</script>
