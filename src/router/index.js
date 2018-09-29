import Vue from 'vue'
import Router from 'vue-router'
import Base from './components/base'
// import Detail from './components/detail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    Base
  ]
})
