<template>
    <!-- 初始化 -->
    <div>
        <div class="media font-text-1 text-left">
            <div class="media-body">满21减20, 满36减25, 满66减30</div>
            <div class="media-body text-right">2个活动</div>
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {
            }
        },
        mounted: function () {
        },
        computed: mapGetters({
            storeConfig: 'store'
        }),
        methods: {
        },
        components: {}
    }
</script>

