<template>
  <div class="ar-navigation">
    <section class="nav-style">
      <span class="nav-mode" :style="{'width': modeWidth + '%', 'left': modeLeft + '%' }"></span>
      <ul>
        <li v-for="(vo, i) in navList" :key="i" :data-id="vo.id" :class="{'action': vo.id == active }" @click="navMove(i, vo.id)" :style="{'width': modeWidth + '%' }">
          {{ vo.name }}
        </li>
      </ul>
    </section>
    <slot name="nav-content"></slot>
  </div>
</template>

<script>
export default {
  props: ['navList'],
  data () {
    return {
      active: 0,
      modeLeft: 0
    }
  },
  computed: {
    modeWidth () {
      return 100/(this.navList.length)
    }
  },
  methods: {
    navMove (key, id) {
      this.modeLeft = key * (100/(this.navList.length))
      this.active = id
      this.$emit('toggle', id)
    }
  }
}
</script>
