<template lang="html">
  <div class="join">
    <Video src="http://staticst.gxar.com/www/images/antopia/index/index-mp4.mp4"></Video>
    <router-link :to="{ path: '/detail', params: {} }">查看详情</router-link>
    <Swiper :height="swiper.height" :swiperHeight="swiper.sHeight" :swiperArray="swiper.swiperArray" :itemStyle="swiper.itemStyle"></Swiper>
    <section class="translate">
      翻译:
        {{ $t("hello") }}
        <button @click="translate('zh_EN')">翻译成英文</button>
        <button @click="translate('zh_CN')">翻译成中文</button>
    </section>
    <div class="title">表单校验</div>
    <form>
      <div class="form-group">
        账号: <input type="text" name="username" placeholder="请输入账号" v-validate="'required|alpha'" value="" :class="{'input': true, 'is-danger': errors.has('username') }" />
        <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
      </div>
      <div class="form-group">
        密码: <input type="text" name="password" value="" />
      </div>
      <div class="form-group">
        手机号: <input type="text" name="mobile" v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('mobile')}" value="" />
        <span v-show="errors.has('mobile')" class="help is-danger">{{ errors.first('mobile') }}</span>
      </div>
      <div class="form-group">
        邮箱: <input type="text" name="email" value="" />
      </div>
      <button type="button" @click="submit">提交</button>
    </form>
  </div>
</template>

<script>

import { Video, Swiper } from '@/components/public'
import _ from 'lodash'

export default {
  name: 'join',
  data () {
    return {
      swiper: {
        height: 4,
        sHeight: 3.5,
        bannerList: [
          { src: './assets/image/home/logo.png', url: '/' },
          { src: './assets/image/home/logo.png', url: '/' },
          { src: './assets/image/home/logo.png', url: '/' },
          { src: './assets/image/home/logo.png', url: '/' }
        ],
        swiperArray: [],
        itemStyle: {
          'background-size': 'cover',
          'background-position': 'center'
        }
      }
    }
  },
  created () {
    this.swiperOnload()
  },
  methods: {
    swiperOnload () {
      const { bannerList } = this.swiper
      let html = ''
      let swiperArr = []
      _.map(bannerList, (vo, i) => {
        html = '<img src="' + vo.src + '" class="swiper-img" />'
        swiperArr.push(html)
      })
      this.swiper.swiperArray = swiperArr
    },
    translate (name) {
      this.$i18n.locale = name
    },
    submit () {
      this.$validator.validateAll().then((result) => {
        console.log(result)
        if (result) {
          console.log('没错误')
        }
      })
    }
  },
  components: {
    Swiper,
    Video
  }
}

</script>
