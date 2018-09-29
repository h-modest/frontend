// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import createHistory from 'history/createBrowserHistory'
import store from './store'
import api from './lib/api'
import MintUI from 'mint-ui'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
import './assets/less/base.less'
import './assets/less/components.less'
import './assets/less/mint-ui.less'
import './assets/less/video.less'
import './assets/less/home.less'
import './assets/less/case.less'
import './assets/less/aboutus.less'
import './assets/less/cooperation.less'
import './assets/less/news.less'
import './assets/less/menuitems.less'
import './assets/less/help.less'
// 引入i18n
import VueI18n from 'vue-i18n'
import { messages } from './lib/i18n'
// 引入验证
import './assets/validate/validate'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.use(MintUI)
Vue.use(VueVideoPlayer)
global.browserHistory = createHistory()
global.API = api
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
