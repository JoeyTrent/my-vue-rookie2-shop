//包含 接口请求函数模块
import ajax from './ajax'
//1.由经纬度获取位置 
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

//2.食物列表
export const reqFoodTypes = () => '/index_category'

//3.根据经纬度获取商家列表
export const reqShopList = (longitude,latitude) => ajax('/shops',{longitude,latitude})
