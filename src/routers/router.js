const routes = [
    {
        name: 'Shop',
        path: '/',
        component (resolve) {
            require(['../../src/components/p_index.vue'], resolve)
        },
        children: [{
            path: 'foodDetail', // 食品详情页
            component (resolve) {
                require(['../../src/components/shop/children/foodDetail.vue'], resolve)
            }
        }, {
            path: 'shopDetail', // 商铺详情页
            component (resolve) {
                require(['../../src/components/shop/children/shopDetail.vue'], resolve)
            }
        }]
    },
    {
        name: 'Store',
        path: '/',
        component (resolve) {
            require(['../../src/components/p_store.vue'], resolve)
        }
    },
    {
        name: 'StoreCustom',
        path: '/StoreCustom',
        component (resolve) {
            require(['../../src/components/p_store_custom.vue'], resolve)
        }
    }
]

export default routes
