<template>
    <div class="">
        <div class="" style="width: 640px; margin: auto auto;">
            <store-header-content></store-header-content>
            <store-title-content></store-title-content>
            <store-activity-content></store-activity-content>
            <store-menu-content></store-menu-content>

        </div>

    </div>
</template>
<style lang="stylus">
    @import '../../src/assets/config.styl';
</style>
<script>
    import StoreHeaderContent from './storecustom/StoreHeaderContent.vue'
    import StoreTitleContent from './storecustom/StoreTitleContent.vue'
    import StoreActivityContent from './storecustom/StoreActivityContent.vue'
    import StoreMenuContent from './storecustom/StoreMenuContent.vue'

    export default {
        data () {
            return {
            }
        },
        mounted: function () {
            const config = require('../mock/page.json')
            this.$store.dispatch('setStore', config)
        },
        components: {
            StoreHeaderContent,
            StoreTitleContent,
            StoreActivityContent,
            StoreMenuContent
        }
    }
</script>
