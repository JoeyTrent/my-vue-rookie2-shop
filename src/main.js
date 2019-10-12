/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
import './filters'
//注册全局组件标签
Vue.component(Button.name, Button) //mt

Vue.use(VueLazyload, {
  loading
})
  new Vue({
    el: '#app',
    render: c => c(App),
    router,
    store
})
