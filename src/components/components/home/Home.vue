<template lang="html">
  <div class="home" v-if="loading">
    <!-- <button type="button" name="button" @click="setCount">计数</button>
    <div class="num">
      {{ counter }}
    </div>
    <div class="" @click="toast">
      提示
    </div> -->
    <section class="video-bg" :style="{'background-image': 'url(' + data.index.videoBg + ')'}">
      <div class="main-num">{{ data.index.num }}</div>
      <div class="title">{{ data.index.title }}</div>
      <div class="sub-title">{{ data.index.subTitle }}</div>
      <div class="video-btn-bg" @click="videoShow">
        <div class="video-btn-icon"></div>
      </div>
      <div class="ar-btn btn-default btn-more">
        <span class="text">{{ data.index.moreText }}</span>
        <div class="icon-dir icon-right"></div>
      </div>
    </section>
    <section class="swiper-video">
      <Swiper :setting="data.index.swiper">
        <div v-for="(vo, i) in data.index.swiper.bannerList" :key="i" :slot="['swiper_'+vo.id]">
          <img :src="vo.src" class="swiper-img" />
          <div class="ar-btn btn-primary btn-case-show" :id="vo.id" @click="videoShow">
            {{ data.index.playText }}<img :src="data.playIcon" class="csse-icon al-md" />
          </div>
        </div>
      </Swiper>
    </section>
    <section class="module-item">
      <div class="title">{{ data.advantage.title }}</div>
      <div class="module-swiper page-right">
        <img :src="data.advantage.swiperBg" class="swiper-bg" :style="{'height': data.advantage.swiper.height + 'rem'}" />
        <Swiper :setting="data.advantage.swiper">
          <div class="module-tab" v-for="(vo, i) in data.advantage.list" :key="i" :slot="['module_' + i]">
            <div class="mark-icon">
              <img :src="data.markIcon" class="mark-img">
            </div>
            <div class="detail">{{ vo }}</div>
          </div>
        </Swiper>
      </div>
    </section>
    <section class="module-item" v-if="false">
      <div class="title">{{ data.scene.title }}</div>
      <div class="module-scene">
        <div class="scene-intro">{{ data.scene.intro }}</div>
        <ul class="scene-list">
          <li v-for="(vo, i) in data.scene.list" :key="i">
            <div class="scene-logo">
              <img :src="vo.logo" />
            </div>
            <div class="scene-name">{{ vo.name }}</div>
          </li>
        </ul>
        <div class="clearfix"></div>
        <div class="scene-more">
          <a :href="data.scene.more.url">
            <div class="ar-circle-plus primary"></div>
            <div class="more-text">{{ data.scene.more.title }}</div>
          </a>
        </div>
      </div>
    </section>
    <section class="module-item">
      <div class="title">{{ data.service.title }}</div>
      <div class="module-swiper page-left">
        <img :src="data.service.swiperBg" class="swiper-bg" :style="{'height': data.service.swiper.height + 'rem'}" />
        <Swiper :setting="data.service.swiper">
          <div class="module-tab tab-left" v-for="(vo, i) in data.service.list" :key="i" :slot="['module_' + i]">
            <div class="mark-icon">
              <img :src="data.markIcon" class="mark-img">
            </div>
            <div class="detail">{{ vo }}</div>
          </div>
        </Swiper>
      </div>
    </section>
    <section class="module-item">
      <div class="title">{{ data.team.title }}</div>
      <div class="module-slide">
        <Swiper :setting="data.team.slide">
          <div class="slide-item" v-for="(vo, i) in data.team.list" :key="i" :slot="['slide_' + i]">
            <div class="slide-logo">
              <img :src="vo.logo" />
            </div>
            <div class="slide-title">{{ vo.title }}</div>
            <div class="slide-intro">{{ vo.intro }}</div>
          </div>
        </Swiper>
      </div>
    </section>
    <section class="module-item">
      <div class="title">{{ data.partner.title }}</div>
      <div :class="['module-partner', { 'open': data.partner.isOpen }]">
        <ul class="partner-list">
          <li v-for="(vo, i) in data.partner.list" :key="i" :style="{ 'background-image': 'url(' + vo.logo + ')' }"></li>
        </ul>
        <div class="clearfix"></div>
        <div class="partner-more" @click="toggleMore" v-if="false">
          <span class="more-text al-md">{{ data.partner.more.name }}</span>
          <div :class="['al-md', { 'ar-plus': !data.partner.isOpen }, { 'ar-minus': data.partner.isOpen }]"></div>
        </div>
      </div>
    </section>
    <section class="module-item contact-items">
      <div class="module-contact">
        <div class="module-bg">
          <img :src="data.contact.contactBg" alt="">
        </div>
        <div class="title">{{ data.contact.title }}</div>
        <div class="contact-form">
          <div class="form-group" v-for="(vo, i) in data.contact.form" :key="i">
            <input :type="vo.type" :name="vo.name" :placeholder="vo.placeholder" v-validate="vo.validate" v-model="vo.value" :class="{'form-control': true, 'is-danger': errors.has(vo.name)}" />
          </div>
          <div class="form-group">
            <div class="ar-btn btn-primary btn-submit" @click="submit">立即发送</div>
          </div>
        </div>
        <div class="contact-info">
          <p v-for="(vo, i) in data.contact.comInfo" :key="i">{{ vo }}</p>
        </div>
      </div>
      <div class="footnote">{{ data.contact.footnote }}</div>
    </section>
    <mt-popup v-model="vodeoVisible">
      <Video src="http://staticst.gxar.com/www/images/antopia/index/index-mp4.mp4" v-if="vodeoVisible"></Video>
    </mt-popup>
  </div>
</template>

<script>

import { homeMixin } from '@/assets/mixin'
import { Field, Popup } from 'mint-ui'
import { Swiper, Video } from '@/components/public'
import { loadData } from '@/lib/common'

export default {
  name: 'home',
  created () {
    loadData(this, 'home.json')
  },
  data () {
    return {
      loading: false,
      vodeoVisible: false,
      data: {}
    }
  },
  mixins: [homeMixin],
  components: {
    Swiper,
    Field,
    Video,
    Popup
  }
}

</script>
