import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from '@/store/index'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
    el: 'app',
    router,
    store,
    components: { App }
})
