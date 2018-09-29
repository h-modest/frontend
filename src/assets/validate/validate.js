import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

import VueI18n from 'vue-i18n'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { dictionary } from './dictionary'
import { rules } from './rules'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN'
})

Vue.use(VeeValidate, {
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
})

Validator.extend('mobile', rules.mobile)
Validator.localize(dictionary)
