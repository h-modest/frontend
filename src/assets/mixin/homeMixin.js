import { mapGetters, mapActions } from 'vuex'
import { Toast, MessageBox  } from 'mint-ui'
import _ from 'lodash'
import md5 from 'js-md5'
import { sortObj } from '@/lib/util'

export const homeMixin = {
  computed: {
    ...mapGetters({
      counter: 'homeNumber'
    })
  },
  methods: {
    ...mapActions([
      'setCount'
    ]),
    toast () {
      Toast('提示信息')
    },
    toggleMore () {
      let { isOpen, more } = this.data.partner
      let name = more.name === '展开所有' ? '折叠' : '展开所有'
      this.data.partner.isOpen = !isOpen
      this.data.partner.more.name = name
    },
    submit () {
      const { form } = this.data.contact
      let formData = {}
      let formArr = ['company', 'mobile', 'email']
      let sortForm = _.sortBy(formArr, v => { return v })
      this.$validator.validateAll().then((result) => {
        if (!result) {
          const { errors } = this.$validator
          _.forEach(formArr, v => {
            if (errors.has(v)) {
              Toast(errors.first(v))
              return false
            }
          })
          return false
        }
        _.map(form, v => {
          formData[v.name] = v.value
        })
        let url = 'mobile/addContact'
        let str  = '/' + url
        _.map(sortForm, v => {
          str += formData[v]
        })
        formData['sign'] = md5(str)
        API.post(url, formData, res => {
          if (res.status === 'ok') {
            MessageBox('提示', '提交成功')
          }
        })
      })
    },
    videoShow () {
      this.vodeoVisible = true
    }
  }
}
