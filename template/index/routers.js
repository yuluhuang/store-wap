import Vue from 'vue'
import VueRouter from 'vue-router'
import indexRouter from '../../src/routers/router.js'

var routes = indexRouter.concat([])
var router = new VueRouter({
    routes: routes,
    linkActiveClass: 'v-link-active'
})
Vue.use(VueRouter)

router.beforeEach(function (to, from, next) {
    next()
})
window.router = router
export default router
