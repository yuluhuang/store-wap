<template>
    <!-- 初始化 -->
    <div @click="setConfig()" class="media text-center " style="">

        <div class="media-body">
            <div class="bar-title bar-title-border-bottom">商品</div>
        </div>
        <div class="media-body">
            <div class="bar-title">评价 <span class="color-orange">(4.5分)</span></div>
        </div>


    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
    p, h4 {
        margin-bottom: 5px;
        color: #fff;
    }
    .font-white {
        color: white;
    }
    .bar-title {
        padding-top: 10px;
        padding-bottom: 5px;
        font-size: 16px;
    }
    .bar-title-border-bottom {
        border-bottom: 1px solid blue;
    }
    .color-orange {
        color: orange;
    }
</style>

<script>
    export default {
        props: ['config'],
        data () {
            return {
            }
        },
        methods: {
            setConfig () {
                this.$store.dispatch('setCurrentComponentConfigById', 1)
            }
        },
        components: {}
    }
</script>

