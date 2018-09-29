<!-- 公共头部  -->
<template lang="html">
  <header :class="{'open': isOpen}">
    <div class="module-header">
      <img :src="logo" class="logo" />
      <div class="nav-icon" @click="toggleNav">
        <span class="nav-line"></span>
        <span class="nav-line line-s"></span>
        <span class="nav-line"></span>
      </div>
    </div>
    <div class="nav-modal">
      <transition name="fold">
        <ul class="nav-list" v-if="isOpen">
          <li v-for="(vo, i) in list" :key="i" :class="{'active': active == vo.name}">
            <!-- <a :href="vo.url">{{ vo.title }}</a> -->
            <router-link :to="{ name: vo.name }"  @click.native="toggleNav">{{ vo.title }}</router-link>
          </li>
        </ul>
      </transition>
      <transition name="hide">
        <div class="nav-shadow" v-if="isOpen" @click="toggleNav"></div>
      </transition>
    </div>
  </header>
</template>

<script>

import { toggleClass } from '@/lib/util'

export default {
  props: ['active'],
  data () {
    return {
      logo: '/static/images/home/logo.png',
      list: [
        {
          name: 'home',
          title: '首页'
        },
        // {
        //   name: 'shop',
        //   title: 'AR商城'
        // },
        {
          name: 'case',
          title: '优秀案例'
        },
        {
          name: 'news',
          title: '最新动态'
        },
        {
          name: 'help',
          title: '帮助中心'
        },
        {
          name: 'aboutus',
          title: '关于我们'
        },
        {
          name: 'cooperation',
          title: '渠道合作'
        }
      ],
      isOpen: false
    }
  },
  methods: {
    goBack () {
      this.$touter.go(-1)
    },
    toggleNav () {
      let { isOpen } = this
      let body = document.getElementsByTagName('body')[0]
      this.isOpen = !isOpen
      toggleClass(body, 'fixed')
    }
  }
}
</script>
