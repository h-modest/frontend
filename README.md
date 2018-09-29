# ar-mobile

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 代码规范

1.	样式类命名最好使用class, id除非必要的话再申明,采用驼峰命名法即 name-action;
2.	Data()中变量命名即nameValue命名
3.	页面样式统一放在src/assets/less中,其中common.less 即公共样式部分, public.less 即公共样式类部分, base.less 即全局类部分,
4.	Vue中methods方法可以放在src/assets/mixin中
5.	Vue公共组件统一放在src/components/public中
6.	Vue公共辅助函数统一放在lib/util.js中
