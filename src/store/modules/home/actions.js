import * as types from '../mutation-types'
export const setCount = ({ commit }) => {
  window.API.post('product', { a: 2 }, res => {
    commit(types.SET_NUMBER, res)
  })
}
