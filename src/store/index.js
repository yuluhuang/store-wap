/* global ENV */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import StoreConfig from './StoreConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: ENV.NODE_ENV !== 'production', // 在非生产环境下，使用严格模式
    modules: {
        StoreConfig,
        user
    }
})
