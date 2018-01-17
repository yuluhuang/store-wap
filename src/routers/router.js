const routes = [
    {
        name: 'Shop',
        path: '/',
        component (resolve) {
            require(['../../src/components/p_index.vue'], resolve)
        }
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
