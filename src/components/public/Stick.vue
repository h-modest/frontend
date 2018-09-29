<!-- 置顶组件 -->
<template>
  <div class="ar-stick" @click="scrollUp" v-if="show">
    <img :src="icon" class="stick-icon" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      icon: '/static/images/common/up.png'
    }
  },
  mounted () {
    this.initLoad()
  },
  methods: {
    initLoad () {
      window.requestAnimFrame = (() => {
        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               function (callback) {
                 window.setTimeout(callback, 1000 / 60)
               }
      })()
      this.$nextTick(() => {
        window.addEventListener('scroll', this.needToTop) // 滚动事件监听
      })
    },
    scrollUp () {
      let timer = null
      timer = () => {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop // 得到当前高度
        let now = curHeight
        let speed = (0 - now) / 7 // 随着高度减速
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
        if (curHeight > 0) { // 当前高度为零,停止这次计时器
          window.requestAnimationFrame(timer)
        }
        document.documentElement.scrollTop = curHeight + speed// 直接给高度赋值,会调用needtotop方法
        document.body.scrollTop = curHeight + speed// 谷歌的
      }
      window.requestAnimationFrame(timer)
    },
    needToTop () {
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop
      this.show = curHeight > 0
    }
  }
}
</script>
