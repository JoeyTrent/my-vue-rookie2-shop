import Vue from 'vue'
//更新state对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USERINFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

export default{
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {category}) {
    state.category = category
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USERINFO] (state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if (!food.count) {
      Vue.set(food, 'count', 1)
      // 将food 加入cartFood
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) {
      food.count--
      if(food.count === 0) {
      // 移除
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },

  [CLEAR_CART] (state) {
    // 清除food 的count
    state.cartFoods.forEach(food => food.count = 0)
    // 清空购物车
    state.cartFoods = []
  },

  [RECEIVE_SEARCH_SHOPS] (state, {searchShops}) {
    state.searchShops = searchShops
   }
}
