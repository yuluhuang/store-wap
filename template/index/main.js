import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from '@/store/index'
import VueResource from 'vue-resource'

Vue.config.productionTip = true
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.emulateHTTP = true
Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
// config
Vue.component('StoreHeaderComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreHeaderComponentConfig.vue'], resolve)
})
Vue.component('StoreActivityComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreActivityComponentConfig.vue'], resolve)
})
Vue.component('StoreTitleComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreTitleComponentConfig.vue'], resolve)
})
Vue.component('StoreGroupMenuComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreGroupMenuComponentConfig.vue'], resolve)
})
Vue.component('StoreProductComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreProductComponentConfig.vue'], resolve)
})
Vue.component('StoreAdvComponentConfig', (resolve) => {
    require(['../../src/components/storeComponent/style1/config/StoreAdvComponentConfig.vue'], resolve)
})
// content
Vue.component('StoreHeaderContent', (resolve) => {
    require(['../../src/components/storeComponent/style1/content/StoreHeaderContent.vue'], resolve)
})
Vue.component('StoreActivityContent', (resolve) => {
    require(['../../src/components/storeComponent/style1/content/StoreActivityContent.vue'], resolve)
})
Vue.component('StoreTitleContent', (resolve) => {
    require(['../../src/components/storeComponent/style1/content/StoreTitleContent.vue'], resolve)
})
Vue.component('StoreMenuContent', (resolve) => {
    require(['../../src/components/storeComponent/style1/content/StoreMenuContent.vue'], resolve)
})
// common
Vue.component('ManageMenuAddAdvComponent', (resolve) => {
    require(['../../src/components/storeComponent/style1/common/ManageMenuAddAdvComponent.vue'], resolve)
})
Vue.component('ManageMenuAddGroupComponent', (resolve) => {
    require(['../../src/components/storeComponent/style1/common/ManageMenuAddGroupComponent.vue'], resolve)
})
Vue.component('ManageMenuAddProductComponent', (resolve) => {
    require(['../../src/components/storeComponent/style1/common/ManageMenuAddProductComponent.vue'], resolve)
})





/* eslint-disable no-new */
new Vue({
    el: 'app',
    router,
    store,
    components: { App }
})
