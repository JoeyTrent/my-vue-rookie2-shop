// 路由对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'

//组件
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes: [
       {
           path: '/msite',
           component: Msite,
           meta: {
               showFooter: true
           }
       },
       {
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
       },
       {
        path: '/order',
        component: Order,
        meta: {
            showFooter: true
        }
       },
       {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter: true
        }
       },
       {
        path: '/',
        redirect: '/msite'
       },
       {
        path: '/login',
        component: Login
       },
       {
         path: '/shop',
         component: Shop,
         children: [
           {
            path: 'goods',
            component: ShopGoods
           },
           {
            path: 'ratings',
            component: ShopRatings
           },
           {
            path: 'info',
            component: ShopInfo
           },
           {
             path: '/',
             redirect: 'goods'
           }
         ]
       }
    ]
  })
