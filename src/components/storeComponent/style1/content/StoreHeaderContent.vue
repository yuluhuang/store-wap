<template>
    <!-- 初始化 -->
    <div @click="setConfig()" class="media"  :style="{background: header.color}" style="padding: 15px 15px 0px 15px;">
        <div class="media-left "  style="padding-right: 15px;">
            <img class="img-rounded" src="https://avatars1.githubusercontent.com/u/5743499?s=80&v=4" alt="Generic placeholder image">
        </div>
        <div class="media-body">
            <div class="media">
                <div class="media-body">
                    <h4 class="media-heading white" style="margin-top: 3px; margin-bottom: 7px;">演示</h4>

                </div>
                <div class="media-body text-right">
                    <i :class="header.callIcon" style="padding-right: 20px;"></i>
                    <i :class="header.searchIcon" style="padding-right: 20px;"></i>

                </div>
            </div>

            <div class="font-text-2 white">商家配送 / 分钟送达 / 配送费￥5</div>
            <div class="font-text-3 white">公告: 好吃多好吃</div>
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
    .white {
        margin-bottom: 5px;
        color: #fff;
    }
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
            header: 'header'
        }),
        methods: {
            setConfig () {
                this.$store.dispatch('setCurrentComponentConfigById', 0)
            }
        },
        components: {}
    }
</script>

