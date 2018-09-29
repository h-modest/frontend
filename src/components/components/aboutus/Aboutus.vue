<template>
  <div class="aboutus" v-if="loading">
    <Banner :title="data.banner.title" :bannerBg="data.banner.bg"></Banner>
    <section class="about-container">
      <div class="about-nav">
        <ul>
          <li v-for="(vo, i) in data.navList" :key="i" @click="scrollTo(vo.id)">
            <span>{{ vo.title }}</span>
            <span class="icon-dir icon-right"></span>
          </li>
        </ul>
      </div>
      <div class="about-module company-module" :id="data.navList[0].id">
        <div class="title">{{ data.navList[0].title }}</div>
        <div class="about-data">
          <div class="about-card">{{data.companyModule.cardText}}</div>
          <div class="data-title">
            {{ data.companyModule.cardTitle }}
            <div class="ar-plus plus-primary"></div>
          </div>
          <div class="data-sub-title">{{ data.companyModule.subTitle }}</div>
          <div class="data-bg" :style="{ 'background-image': 'url(' + data.companyModule.moduleBg + ')' }">
          </div>
          <div class="data">
            <ul>
              <li v-for="(vo, i) in data.companyModule.case" :key="i">
                <div class="data-case-title">
                  <p>{{ vo.title }}</p>
                  <p>{{ vo.subTitle }}</p>
                </div>
                <p class="data-case-num">
                  <span class="data-num">{{ vo.num }}</span>
                  <span class="data-unit">{{ vo.unit }}</span>
                </p>
                <p class="data-name">{{ vo.name }}</p>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="about-market">
          <div class="about-market-title">{{ data.companyModule.market.title }}</div>
          <div class="about-market-content">{{ data.companyModule.market.content }}</div>
        </div>
        <div class="about-swiper">
          <Swiper :setting="data.companyModule.swiper">
            <ul class="swiper-tab" v-for="(vo, i) in data.companyModule.cooperation" :key="i" :slot="['module_' + i]">
              <li v-for="(v, index) in vo" :key="index">
                <img :src="v" class="brand-img" />
              </li>
            </ul>
          </Swiper>
        </div>
        <div class="about-praise">
          <p class="about-praise-title">{{data.companyModule.praise.title}}</p>
          <div class="about-praise-content">{{data.companyModule.praise.content}}</div>
        </div>
      </div>
      <div class="about-module" :id="data.navList[1].id">
        <div class="title left-title">{{ data.navList[1].title }}</div>
        <section class="video-module" :style="{'background-image': 'url(' + data.videoModule.bg + ')'}">
          <div class="video-title">{{ data.videoModule.title }}</div>
          <div class="entitle">{{ data.videoModule.enTitle }}</div>
          <div class="video-btn-bg" @click="videoShow">
            <div class="video-btn-icon"></div>
          </div>
        </section>
      </div>
      <div class="about-module event-module" :id="data.navList[2].id">
        <div class="title">{{ data.navList[2].title }}</div>
        <Timeaxis :timeHistory="data.timeHistory"></Timeaxis>
      </div>
    </section>
    <mt-popup v-model="data.videoModule.visible">
      <Video :src="data.videoModule.src" v-if="data.videoModule.visible"></Video>
    </mt-popup>
  </div>
</template>

<script>

import { Banner, Timeaxis, Swiper, Video } from '@/components/public'
import { random } from '@/lib/util'
import { loadData } from '@/lib/common'

export default {
  name: 'aboutus',
  data () {
    return {
      loading: false,
      data: {}
    }
  },
  created () {
    loadData(this, 'aboutus.json')
  },
  methods: {
    scrollTo (id) {
      let targe = '#' + id
      let headerTop = document.querySelector('.module-header').offsetHeight
      let offset = document.querySelector(targe).offsetTop - headerTop
      // Chrome
      document.body.scrollTop = offset
      // Firefox
      document.documentElement.scrollTop = offset
      // Safari
      window.pageYOffset = offset
    },
    videoShow () {
      this.data.videoModule.visible = true
    },
    test () {
      // let timestamp = Date.parse(new Date())/1000
      // let appKey = '81B0D880A6BAB8B89EA9233AC767FC4F'
      // let appid = '100000000'
      // let sign = md5('/mobile/addOpinion121222')
      // let params = {
      //               content: '1',
      //               mobile: '2',
      //               type: '1222',
      //               sign
      //             }
      //
      // API.get('mobile/addOpinion', params , res => {
      //   console.log(res)
      // })
      // console.log(sign)
    }
  },
  components: {
    Banner,
    Timeaxis,
    Swiper,
    Video
  }
}
</script>
