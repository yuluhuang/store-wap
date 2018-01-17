import Vue from 'vue'

export var SIGNIN = 'USER_SIGNIN' // 登录成功
export var SIGNOUT = 'USER_SIGNOUT' // 退出登录

export default {
    state: JSON.parse(window.sessionStorage.getItem('user')) || {},
    mutations: {
        [SIGNIN] (state, user) {
            window.sessionStorage.setItem('user', JSON.stringify(user))
            Object.assign(state, user)
        },
        [SIGNOUT] (state) {
            window.sessionStorage.removeItem('user')
            Object.keys(state).forEach(k => Vue.delete(state, k))
        }
    },
    actions: {
        [SIGNIN] ({commit}, user) {
            commit(SIGNIN, user)
        },
        [SIGNOUT] ({commit}) {
            commit(SIGNOUT)
        }
    }
}
