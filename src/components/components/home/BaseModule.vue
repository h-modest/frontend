<template lang="html">
  <div class="baseModule">
    <Header></Header>
    <section class="container">
      <Transition></Transition>
    </section>
    <Footer></Footer>
    <Stick></Stick>
  </div>
</template>

<script>

import { Transition, Header, Footer, Stick } from '@/components/public'

export default {
  name: 'baseModule',
  data () {
    return {
      title: '首页'
    }
  },
  components: {
    Header,
    Footer,
    Transition,
    Stick
  }
}

</script>
