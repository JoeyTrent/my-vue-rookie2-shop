//包含 接口请求函数模块
import ajax from './ajax'
const BASE_URL = '/api'
//1.由经纬度获取位置
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2.食物列表
export const reqFoodCategory = () => ajax(BASE_URL + '/index_category')
//3.根据经纬度获取商家列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
// 4.搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// 5.获取一次性验证码
// export const reqFoodCategory = () => ajax(BASE_URL + '/index_category')
// 6.用户密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// 7.发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// 8.手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// 9.根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// 10.用户退出
export const reqLogout = () => ajax(BASE_URL + '/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')
