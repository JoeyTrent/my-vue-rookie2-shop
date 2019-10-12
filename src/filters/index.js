import Vue from 'vue'
import format from 'date-fns/format'
// 注册时间过滤器
Vue.filter('date-format', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return format(dataStr, pattern)
})
