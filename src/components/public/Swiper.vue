<!-- 轮播组件 -->
<template lang="html">
  <div class="ar-swiper" :style="{'height': setting.height + 'rem'}">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(vo, index) in setting.swiperArray" :key="index" :style="{'height': setting.sHeight + 'rem', itemStyle}">
        <slot :name="vo"></slot>
      </swiper-slide>
    </swiper>
    <div class="custom-pagination" v-show="setting.isPage">
      <span v-for="(vo, i) in setting.swiperArray" :key="i" :class="['swiper-pagination-bullet',{'swiper-pagination-bullet-active': bulletIndex === i}]" @click="goSlide(i)"></span>
    </div>
    <div class="page-group" :style="{'height': setting.sHeight + 'rem'}" v-show="setting.isPageBtn">
      <div class="page page-prev" @click="onPage(0)">
        <div class="icon-dir icon-top"></div>
      </div>
      <div class="page-line"></div>
      <div class="page page-next" @click="onPage(1)">
        <div class="icon-dir icon-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import _ from 'lodash'

export default {
  props: ['setting'],
  data () {
    const { upSwiper, itemStyle, swiperArray, isFade, vSwiper } = this.setting
    const winW = window.screen.width
    const vOption = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      loop: true
    }
    const uOption = {
      allowTouchMove: false,
      direction: 'vertical',
      loop: true
    }
    const hOption = {
      allowTouchMove: true,
      loop: true
    }
    let options = vSwiper === true ? hOption : (upSwiper ? uOption : vOption)
    let that = this
    const func = {
      on: {
        transitionEnd: function () {
          const l = swiperArray.length
          const active = upSwiper ? this.activeIndex - 1 : this.activeIndex
          let activeIndex = active % l === -1 ? (l - 1) : (active % l)
          that.bulletIndex = activeIndex
        }
      }
    }
    options = _.assign(options, func)
    if (isFade === true) {
      options = _.assign(options, {
        effect: 'fade',
        width: winW*.85
      })
      delete options['direction']
    }
    return {
      swiperOption: options,
      itemStyle,
      bulletIndex: 0
    }
  },
  methods: {
    goSlide (index) {
      // this.slideTo(index, 1000, false);//切换到第一个slide，速度为1秒
      const { swiper } = this.$refs.mySwiper
      swiper.slideTo(index + 1, 500, false)
    },
    onPage (isNext) {
      const { swiper } = this.$refs.mySwiper
      if (isNext === 1) {
        swiper.slideNext()
      } else {
        swiper.slidePrev()
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
