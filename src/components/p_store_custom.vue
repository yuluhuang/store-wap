<template>
    <div class="">
        <div class="media">
            <div class="media-body">menu</div>
            <div class="media-body">
                <store-header-content :config="store.header.data"></store-header-content>
                <store-title-content :config="store.title.data"></store-title-content>
                <store-activity-content :config="store.activity.data"></store-activity-content>
                <store-menu-content :config="store.menu.data"></store-menu-content>
            </div>
            <div class="media-body panel-body">
                <div class="panel">
                    <div :is="store.config" ></div>

                </div>
            </div>
        </div>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
    @import '../../src/assets/config.styl';
</style>

<script>
    import StoreHeaderComponentConfig from './storecustom/StoreHeaderComponentConfig.vue'
    import StoreActivityComponentConfig from './storecustom/StoreActivityComponentConfig.vue'
    import StoreTitleComponentConfig from './storecustom/StoreTitleComponentConfig.vue'
    import StoreMenuComponentConfig from './storecustom/StoreMenuComponentConfig.vue'
    import StoreHeaderContent from './storecustom/StoreHeaderContent.vue'
    import StoreActivityContent from './storecustom/StoreActivityContent.vue'
    import StoreTitleContent from './storecustom/StoreTitleContent.vue'
    import StoreMenuContent from './storecustom/StoreMenuContent.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'store',
        data () {
            return {
            }
        },
        computed: mapGetters({
            store: 'store'
        }),
        methods: {
        },
        components: {
            StoreHeaderContent,
            StoreActivityContent,
            StoreTitleContent,
            StoreMenuContent,
            StoreHeaderComponentConfig,
            StoreActivityComponentConfig,
            StoreTitleComponentConfig,
            StoreMenuComponentConfig
        }
    }
</script>

