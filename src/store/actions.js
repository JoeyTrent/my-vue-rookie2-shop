//
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategory,
  reqShops
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

  //商家
  async getShops ({commit, state}) {
    //ajax请求
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    //提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
