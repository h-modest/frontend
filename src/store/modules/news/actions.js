import * as types from '../mutation-types'
import md5 from 'js-md5'
import { Indicator } from 'mint-ui'

export const getNewsList = ({ commit }, data) => {
  Indicator.open({
    spinnerType: 'fading-circle'
  })
  commit(types.SET_NEWS_LOADING_OPEN)
  const { tid, page } = data
  let url = 'mobile/getNewsList'
  let signParams = '/' + url + page
  if (tid != 0) {
    signParams+= tid
  }
  let sign = md5(signParams)
  let formData = {
    sign,
    page
  }
  if (tid != 0) {
    formData['tid'] = tid
  }
  API.get(url, formData, res => {
    const { data, status } = res
    if (status === 'ok') {
      commit(types.GET_NEWS_LIST, data)
      commit(types.SET_NEWS_LOADING_CLOSE)
      Indicator.close()
    }
  });
}

export const getNewsDetail = ({ commit }, key) => {
  Indicator.open({
    spinnerType: 'fading-circle'
  })
  let url = 'mobile/getNewDetail'
  let signParams = '/' + url +  key
  let sign = md5(signParams)
  let formData = {
    sign,
    id: key
  }
  API.get(url, formData, res => {
    const { data, status } = res
    if (status === 'ok') {
      commit(types.GET_NEWS_DETAIL, data)
      Indicator.close()
    }
  });
}

export const setNewsDetailLoading = ({ commit }) => {
  commit(types.SET_NEWS_DETAIL_LOADING)
}
