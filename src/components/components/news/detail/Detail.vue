<template>
  <div class="news-per-detail">
    <Banner :title="banner.title" :bannerBg="banner.bg"></Banner>
    <div class="news-detail" @click="add" v-if="loading">
      <div class="detail-title">{{ detail.title }}</div>
      <div class="detail-date">{{ date }}</div>
      <div class="detail-content" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
import { Banner } from '@/components/public'
import { mapGetters, mapActions } from 'vuex'
import { fmtDate } from '@/lib/util'
export default {
  name: 'newsDetail',
  data () {
    return {
      banner: {
        bg: '/static/images/news/banner.png',
        title: 'news'
      },
    }
  },
  created () {
    this.init()
  },
  computed: {
    ...mapGetters({
      detail: 'newsDetail',
      loading: 'newsDetailLoading'
    }),
    date () {
      let { created_at } = this.detail
      let time = fmtDate(created_at*1000)
      return time
    }
  },
  methods: {
    ...mapActions([
      'getNewsDetail'
    ]),
    init () {
      const { id } = this.$route.params
      this.$store.dispatch('setNewsDetailLoading')
      this.$store.dispatch('getNewsDetail', id)
    },
    add () {
      console.log(this.detail)
    }
  },
  components: {
    Banner
  }
}
</script>
