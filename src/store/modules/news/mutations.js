import * as types from '../mutation-types'
import _ from 'lodash'

export default {
  [types.GET_NEWS_LIST] (state, data) {
    const { page, postList: list } = data
    const { postList } = state.newsList
    if (parseInt(page) == 1) {
      state.newsList = data
    } else {
      state.newsList.postList = _.concat(postList, data.postList)
      state.newsList.page = page
    }
    state.newsLoading = true
  },
  [types.GET_NEWS_DETAIL] (state, data) {
    state.newsDetail = data
    state.newsDetailLoading = true
  },
  [types.SET_NEWS_DETAIL_LOADING] (state) {
    state.newsDetailLoading = false
  },
  [types.SET_NEWS_LOADING_OPEN] (state) {
    state.isLoading = true
  },
  [types.SET_NEWS_LOADING_CLOSE] (state) {
    state.isLoading = false
  }
}
