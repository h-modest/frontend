import { Indicator } from 'mint-ui'
import axios from 'axios'

export function loadData (that, json) {
  Indicator.open({
    spinnerType: 'fading-circle'
  })
  axios.get('static/data/' + json).then((res) => {
    const { data } = res
    that.data = data
    that.loading = true
    Indicator.close()
  })
}
