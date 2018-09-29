<template>
  <div class="news">
    <Banner :title="banner.title" :bannerBg="banner.bg"></Banner>
    <section class="module-news" v-if="isNews && loading">
      <Navigation :navList="navList" @toggle="toggleNav">
        <div class="navigation-content" slot="nav-content">
          <ul v-if="postList">
            <li v-for="(vo, i) in list.postList" :key="i">
              <router-link :to="{ path: '/news/detail/' + vo.id }">
                <div class="news-banner">
                  <img :src="vo.thumb" class="news-banner-img" />
                </div>
                <div class="news-title">{{ vo.title }}</div>
              </router-link>
              <div class="news-date">{{ vo.year + '-' + vo.month }}</div>
            </li>
          </ul>
          <div class="empty-news" v-else>{{ emptyText }}</div>
        </div>
      </Navigation>
    </section>
    <!-- <Transition>
      <router-view></router-view>
    </Transition> -->
  </div>
</template>

<script>
import { Banner, Navigation, /*Transition,*/ } from '@/components/public'
import md5 from 'js-md5'
import { mapGetters, mapActions } from 'vuex'
import { Loadmore } from 'mint-ui'

export default {
  name: 'news',
  data () {
    return {
      banner: {
        bg: '/static/images/news/banner.png',
        title: 'news'
      },
      upconfig:{
        use: true
      },
      newsKey: 0,
      emptyText: '暂无数据...',
      allLoaded: false
    }
  },
  created () {
    this.$_init()
  },
  computed: {
    ...mapGetters({
      list: 'newsList',
      loading: 'newsLoading',
      isload: 'isLoading'
    }),
    navList () {
      const { termList } = this.list
      termList.unshift({id: 0, name: '全部新闻'})
      return termList
    },
    postList () {
      const { postList } = this.list
      return postList.length > 0
    },
    isNews () {
      return this.$route.name === 'news'
    }
  },
  methods: {
    ...mapActions([
      'getNewsList',
      'initMescroll',
      'loadNewsList'
    ]),
    $_init () {
      if (this.$route.name === 'news') {
        const { newsKey, newsPage } = this
        this.$store.dispatch('getNewsList', {tid: newsKey, page: newsPage })
      }
      this.scroll ()
    },
    toggleNav (key) {
      this.newsKey = key
      this.$store.dispatch('getNewsList', {tid: key, page: 1})
    },
    loadMore () {
      if (this.$route.name === 'news') {
        const { newsKey, list: { pageCount, page }, list } = this
        let p = parseInt(page)
        let nextPage = p + 1
        if (nextPage <= parseInt(pageCount)) {
          this.$store.dispatch('getNewsList', {tid: newsKey, page: nextPage })
          // this.$refs.loadmore.onBottomLoaded()
        }
      }
      // this.$store.dispatch('getNewsList', {tid: this.newsKey,})
    },
    scroll(person) {
     window.onscroll = () => {
      // 距离底部200px时加载一次
      let { offsetHeight, scrollTop } = document.documentElement
      let bottomOfWindow = offsetHeight - scrollTop - window.innerHeight <= 20
      if (bottomOfWindow && this.$route.name === 'news' && !this.isload) {
        const { newsKey, list: { pageCount, page }, list } = this
        let p = parseInt(page)
        let nextPage = p + 1
        if (nextPage <= parseInt(pageCount)) {
          this.$store.dispatch('getNewsList', {tid: newsKey, page: nextPage })
        }
      }
     }
    }
  },
  components: {
    Banner,
    Navigation
    /*Transition*/
  }
}
</script>
