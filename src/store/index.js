import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/home'
import News from './modules/news'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Home,
    News
  }
})

export default store
