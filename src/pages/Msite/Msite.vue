<template>
  <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
            <router-link to="/search" class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
            </router-link>
          <router-link to="userInfo._id ? '/userinfo':'/login'" class="header_login" slot="right">
            <span v-if="!userInfo._id" class="header_login_text">
              登录|注册
            </span>
            <span v-else class="header_login_text">
              <i class="iconfont icon-person"></i>
            </span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="category.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(category, index) in categoryArr" :key = 'index' >
                <a href="javascript:" class="link_to_food" v-for = "(categoryItem, index) in category" :key = "index">
                  <div class="food_container">
                    <img :src="baseImageUrl + categoryItem.image_url">
                  </div>
                  <span>{{categoryItem.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else="">
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </section>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    data () {
      return {
        baseImageUrl: 'http://fuss10.elemecdn.com'
        }
    },
    mounted () {
      this.$store.dispatch('getCategory')
      this.$store.dispatch('getShops')
    },
    computed: {
      ...mapState(['address', 'category', 'userInfo']),
      categoryArr ({size = 8}) {
        const {category} = this
        const arr = []
        let minArr = []
        category.forEach(c => {
          if (minArr.length === 0) {
              arr.push(minArr)
          }
          if (minArr.length === size) {
              arr.push(minArr)
              minArr = []
          }
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      category (value) {
        this.$nextTick(() => { // 数据更新后  界面更新即调用
          new Swiper('.swiper-container', {
              loop: true,
              pagination: {
              el: '.swiper-pagination'
              }
          })
        })
      }
    },
    components: {
      HeaderTop,
      ShopList
    }
}
</script>

<style lang="stylus" ref="stylrsheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>
