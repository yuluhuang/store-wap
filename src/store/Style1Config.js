export const TEST = 'TEST'
export const SET_CURRENT_COMPONENT_CONFIG_BY_ID = 'SET_CURRENT_COMPONENT_CONFIG_BY_ID' // 显示当前组件的配置页
export const SET_CURRENT_COMPONENT_CONFIG_BY_ID_AND_VALUE = 'SET_CURRENT_COMPONENT_CONFIG_BY_ID_AND_VALUE' // 显示当前组件的配置页
export const SET_STORE = 'SET_STORE'
// header
export const SET_HEADER_BACKGROUND_COLOR = 'SET_HEADER_BACKGROUND_COLOR'
export const SET_HEADER_CALL_ICON = 'SET_HEADER_CALL_ICON'
export const SET_HEADER_SEARCH_ICON = 'SET_HEADER_SEARCH_ICON'
export const SET_HEADER_NOTICE_SHOW = 'SET_HEADER_NOTICE_SHOW' // 公告展示
// group
export const ADD_GROUP_MENU = 'ADD_GROUP_MENU'
export const DELETE_GROUP_MENU = 'DELETE_GROUP_MENU'
export const EDIT_GROUP_MENU = 'EDIT_GROUP_MENU'
export const ADD_PRODUCT_TO_GROUP = 'ADD_PRODUCT_TO_GROUP'
/**
 * TODO 1. 数据配置后, 展示时需要拉取新数据
 *      2. 开发时的 交互需求
 *      3. 开发
 */
export default {
    state: {
        store: {
            // TODO 此方法隐藏编辑状态的组件 手机端加载多余的组件
            // 能否发布时移除 编辑状态下的组件
            isEdit: true,
            config: 'store-header-component-config', // 选中模块用于展示 eg: header.config
            components: [
                {
                    id: 0,
                    name: 'header',
                    selected: false,
                    is: 'store-header-content',
                    config: 'store-header-component-config',
                    data: {
                        callIcon: 'oi oi-musical-note', // <span class="oi oi-bell"></span>
                        searchIcon: 'oi oi-magnifying-glass', // <span class="oi oi-eye"></span>
                        notice: true,
                        color: 'rgba(33, 66, 99,0.5)'
                    }
                },
                {
                    id: 2,
                    name: 'activity',
                    selected: false,
                    is: 'store-activity-content',
                    config: 'store-activity-component-config',
                    data: {
                    }
                },
                {
                    id: 1,
                    name: 'title',
                    selected: false,
                    is: 'store-title-content',
                    config: 'store-title-component-config',
                    data: {}
                },
                {
                    id: 3,
                    name: 'menu',
                    selected: false,
                    is: 'store-menu-content',
                    config: 'store-group-menu-component-config',
                    data: {
                        groups: []
                    }
                }
            ]
        }
    },
    getters: {
        store: state => state.store,
        header: state => state.store.components[0].data,
        title: state => state.store.components[1].data,
        activity: state => state.store.components[2].data,
        menu: state => state.store.components[3].data,
        isEdit: state => state.store.isEdit
    },
    mutations: {
        [TEST] (state, test) {
        },
        [SET_STORE] (state, store) {
            state.store = store
        },
        [SET_CURRENT_COMPONENT_CONFIG_BY_ID] (state, id) {
            state.store.components.forEach((v, k) => {
                v.selected = false
                if (v.id === id) {
                    v.selected = true
                    state.store.config = v.config
                }
            })
        },
        [SET_CURRENT_COMPONENT_CONFIG_BY_ID_AND_VALUE] (state, data) {
            state.store.components.forEach((v, k) => {
                v.selected = false
                if (v.id === data.id) {
                    v.selected = true
                    state.store.config = data.config
                }
            })
        },
        // header
        [SET_HEADER_BACKGROUND_COLOR] (state, color) {
            state.store.components[0].data.color = color
        },
        [SET_HEADER_CALL_ICON] (state, icon) {
            state.store.components[0].data.callIcon = icon
        },
        [SET_HEADER_SEARCH_ICON] (state, icon) {
            state.store.components[0].data.searchIcon = icon
        },
        [SET_HEADER_NOTICE_SHOW] (state, isShow) {
            state.store.components[0].data.notice = isShow
        },
        // group
        [ADD_GROUP_MENU] (state, item) {
            // item => {name: '', selected: false}
            let groups = state.store.components[3].data.groups
            let temp = {group: {}, products: []}
            item.selected = false
            item.id = groups.length
            if (!groups.length) {
                item.selected = true
            }
            temp.group = item
            state.store.components[3].data.groups.push(temp)
        },
        [ADD_PRODUCT_TO_GROUP] (state, pro) {
            // pro => {group: {name: '', selected: false},product: {name: ''}}
            let temp = state.store.components[3].data.groups // [pro,...]
            temp.forEach((v, k) => {
                if (v.group.name === pro.group.name) {
                    v.products.push(pro.product)
                }
            })
        }
    },
    actions: {
        setTest ({commit}, test) {
            commit(TEST, test)
        },
        setStore ({commit}, store) {
            commit(SET_STORE, store)
        },
        setCurrentComponentConfigById ({commit}, id) {
            commit(SET_CURRENT_COMPONENT_CONFIG_BY_ID, id)
        },
        setCurrentComponentConfigByIdAndValue ({commit}, data) {
            commit(SET_CURRENT_COMPONENT_CONFIG_BY_ID_AND_VALUE, data)
        },
        // header
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
        // group
        addGroupMenu ({commit}, group) {
            commit(ADD_GROUP_MENU, group)
        },
        addProductToGroup ({commit}, pro) {
            commit(ADD_PRODUCT_TO_GROUP, pro)
        }
    }
}
