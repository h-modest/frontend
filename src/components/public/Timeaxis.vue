<!-- 时间轴  -->
<template>
  <section class="ar-time-axis">
    <div class="time-axis-header">
      <div class="ar-btn btn-default btn-circle btn-pre" @click="timePage(0)">
        <span class="icon-dir icon-left"></span>
      </div>
      <div class="time-axis">
        <ul :style="{ 'left': step + '%' }">
          <li v-for="(vo, i) in timeHistory" :key="i" :class="{'active': i == developHistory.active}" @click="timeAnimate(i)">
            <div class="time-axis-year">{{vo.year}}</div>
            <p class="time-axis-month">{{vo.month}}</p>
          </li>
        </ul>
      </div>
      <div class="ar-btn btn-default btn-circle btn-next" @click="timePage(1)">
        <span class="icon-dir icon-right"></span>
      </div>
    </div>
    <div :class="['time-axis-content', { 'time-first': developHistory.active === 0 }, { 'time-last': developHistory.active === length - 1 }]">
      <div class="mark-icon">
        <img :src="markIcon" class="mark-img">
      </div>
      <div class="detail">
        {{ timeContent }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['timeHistory'],
  data () {
    return {
      step: 0,
      markIcon: '/static/images/aboutus/mark.png',
      loading: false,
      developHistory: {
        active: 1
      }
    }
  },
  computed: {
    timeContent () {
      const { developHistory: { active }, timeHistory } = this
      return timeHistory[active]['text'];
    },
    length () {
      const { timeHistory } = this
      return timeHistory.length
    }
  },
  methods: {
    timePage (isNext) {
      const { developHistory: { active }, timeHistory } = this
      let timeNum = 0

      if (isNext === 1) {
        timeNum = active <= (timeHistory.length - 2) ? ( active + 1 ) : active
      } else {
        timeNum = active >= 1 ? ( active - 1 ) : 0
      }
      this.timeAnimate(timeNum)
    },
    timeAnimate (num) {
      const { active: native_active } = this.developHistory
      if (num === native_active) return false
      window.requestAnimFrame = (() => {
        return window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               function (callback) {
                 window.setTimeout(callback, 1000 / 60)
               }
      })()
      let timeUp = null
      timeUp = () => {
        let { step, developHistory: { active }, timeHistory } = this
        let length = timeHistory.length
        let isPre = num < active
        if ((isPre && ( num == 0 || num == length - 2 )) || (!isPre && ( num == 1 || num == length - 1 ))) {
          this.developHistory.active = num
          return false
        }
        let speed = 3
        let stepMent = active > num ? ( step + speed ) : ( step - speed )
        this.step = stepMent
        if (stepMent%33 !== 0) {
          window.requestAnimationFrame(timeUp)
        } else {
          this.developHistory.active = num
        }
      }
      window.requestAnimationFrame(timeUp)
    }
  }
}
</script>
