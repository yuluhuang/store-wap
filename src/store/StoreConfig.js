export const TEST = 'TEST'
export const SET_STORE = 'SET_STORE'
export const SET_HEADER_BACKGROUND_COLOR = 'SET_HEADER_BACKGROUND_COLOR'
export const SET_HEADER_CALL_ICON = 'SET_HEADER_CALL_ICON'
export const SET_HEADER_SEARCH_ICON = 'SET_HEADER_SEARCH_ICON'
export const SET_HEADER_NOTICE_SHOW = 'SET_HEADER_NOTICE_SHOW' // 公告展示

export default {
    state: {
        store: {
            config: 'store-header-component-config', // 选中模块用于展示 eg: header.config
            header: {
                config: 'store-header-component-config',
                data: {
                    callIcon: 'glyphicon glyphicon-volume-up',
                    searchIcon: 'glyphicon glyphicon-search',
                    notice: true,
                    color: 'green'
                }
            },
            title: {
                config: 'store-title-component-config'
            },
            activity: {
                config: 'store-activity-component-config'
            },
            menu: {
                config: 'store-menu-component-config'
            }
        }
    },
    getters: {
        store: state => state.store
    },
    mutations: {
        [TEST] (state, test) {
        },
        [SET_HEADER_BACKGROUND_COLOR] (state, color) {
            state.store.header.data.color = color
        },
        [SET_HEADER_CALL_ICON] (state, icon) {
            state.store.header.data.callIcon = icon
        },
        [SET_HEADER_SEARCH_ICON] (state, icon) {
            state.store.header.data.searchIcon = icon
        },
        [SET_HEADER_NOTICE_SHOW] (state, isShow) {
            state.store.header.data.notice = isShow
        },
        [SET_STORE] (state, store) {
            state.store.header.data = store
        }
    },
    actions: {
        setTest ({commit}, test) {
            commit(TEST, test)
        },
        setHeaderBackgroundColor ({commit}, color) {
            commit(SET_HEADER_BACKGROUND_COLOR, color)
        },
        setHeaderCallIcon ({commit}, icon) {
            commit(SET_HEADER_CALL_ICON, icon)
        },
        setHeaderSearchIcon ({commit}, icon) {
            commit(SET_HEADER_SEARCH_ICON, icon)
        },
        setHeaderNoticeShow ({commit}, isShow) {
            commit(SET_HEADER_NOTICE_SHOW, isShow)
        },
        setStore ({commit}, store) {
            commit(SET_STORE, store)
        }
    }
}
