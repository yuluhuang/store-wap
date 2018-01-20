const routes = [
    {
        path: '/',
        name: 'Main',
        component (resolve) {
            require(['../../src/components/Main.vue'], resolve)
        },
        children: [
            {
                path: '/',
                components: {
                    header: resolve => require(['../../src/components/common/header.vue'], resolve),
                    leftMenu: resolve => require(['../../src/components/common/leftMenu.vue'], resolve),
                    default: resolve => require(['../../src/components/p_index.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/phone',
        name: 'phone',
        component (resolve) {
            require(['../../src/components/p_phone.vue'], resolve)
        }
    }
]

export default routes
