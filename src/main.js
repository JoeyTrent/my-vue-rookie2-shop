/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'

new Vue({
    el: "#app",
    render: c => c(App),
    router
})