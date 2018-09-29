<!-- 视频组件 -->
<template lang="html">
  <video-player class="vjs-custom-skin"
  :options="playerOptions"
  :playsinline="true"
  @ready="playerReadied($event)"
  ref="player"></video-player>
</template>

<script>

import { videoMixin } from '@/assets/mixin'

export default {
  props: ['height', 'src', 'cls', 'auto'],
  mixins: [videoMixin],
  data () {
    let play = this.auto === undefined
    return {
      playerOptions: {
        height: '260',
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
        autoplay: play,
        sources: [],
        poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg'
      }
    }
  }
}
</script>
