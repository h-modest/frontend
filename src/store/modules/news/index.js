import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

const news = {
  state: {
    newsLoading: false,
    newsDetailLoading: false,
    newsList: [],
    newsDetail: {},
    isLoading: false
  },
  getters,
  actions,
  mutations
}

export default news
