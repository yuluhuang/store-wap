<template>
    <!-- 初始化 -->
    <div class="text-left" style="opacity: 0.4;" :style="{backgroundColor: StoreConfig.header.data.color}">
        <div class="media-left" style="padding-right: 0;">
            <div class="panel-body">
                <img src="https://avatars1.githubusercontent.com/u/5743499?s=90&v=4" alt="">
            </div>
        </div>
        <div class="media-body text-left">
            <div class="panel-body" style="padding-left: 0; color: white;">
                <div>
                    <div class="media-body">
                        <!--<input type="text" value="">-->
                        <h4>新白鹿</h4>
                    </div>
                    <div class="media-body text-right" style="font-size: 23px;">
                        <i :class="StoreConfig.header.data.callIcon"></i>
                        <i :class="StoreConfig.header.data.searchIcon"></i>
                    </div>
                </div>

                <h5 v-if="StoreConfig.header.data.notice">公告: 1234567889qwertyuiop</h5>
                <h5>12qwdfvb</h5>
            </div>
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
            StoreConfig: 'store'
        }),
        methods: {
        },
        components: {}
    }
</script>

