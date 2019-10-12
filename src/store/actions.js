//
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
import {
  reqAddress,
  reqFoodCategory,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchShop
} from '../api'
export default{
  //地址
  async getAddress ({commit, state}) {
    //ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  //食品列表
  async getCategory ({commit}) {
    //ajax请求
    const result = await reqFoodCategory()
    //提交mutation
    if (result.code === 0) {
      const category = result.data
      commit(RECEIVE_CATEGORY, {category})
    }
  },
  //异步商家
  async getShops ({commit, state}) {
    //ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 同步记录用户信息
  recordUser ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息 保持登录状态
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步登出
  async logout ({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USERINFO)
    }
  },
   // 异步获取商家信息
   async getShopInfo ({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings ({commit}, callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods ({commit}, callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 数据更新了, 通知一下组件
      callback && callback()
    }
  },
  // 同步更新food中的count
  updateFoodCount ({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    }else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  // 同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  },
  // 异步搜索
  async searchShops ({commit, state}, keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    } 
  }
}
