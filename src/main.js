/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer.js'
//注册全局组件标签
Vue.component(Button.name, Button) //mt
  new Vue({
    el: '#app',
    render: c => c(App),
    router,
    store
})
