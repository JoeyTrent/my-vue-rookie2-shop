//包含 接口请求函数模块
import ajax from './ajax'
const BASE_URL = '/api'
//1.由经纬度获取位置
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2.食物列表
export const reqFoodCategory = () => ajax(BASE_URL + '/index_category')
//3.根据经纬度获取商家列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
