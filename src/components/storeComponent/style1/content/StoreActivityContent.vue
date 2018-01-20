<template>
    <!-- 初始化 -->
    <div @click="setConfig()" class="media font-white font-text-2" :style="{background: header.color}"
         style="padding-left: 15px;padding-bottom: 5px; padding-top: 5px;">
        <div class="media-body">
            <div >
                <div>满30减5，满60减8（APP专享）</div>
                <div :class="show?'show':'hide'">
                    <div>满30减5，满60减8（APP专享）</div>
                    <div>满30减5，满60减8（APP专享）</div>
                    <div>满30减5，满60减8（APP专享）</div>
                </div>

            </div>
        </div>
        <div class="media-right" style="padding-right: 10px;" @click="toggleClick()">
            <span class="oi " :class="show?'oi-caret-top':'oi-caret-bottom'"></span>
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
    .show {
        display: block;
        transform-origin: 0 0;
        transition: all .5s;
        transform: scaleY(1);
    }
    .hide {
        display: none;
        transform: scaleY(0);
    }
    .bar-title {
        padding: 10px;
        font-size: 22px;
    }
    .bar-title-border-bottom {
        border-bottom: 1px solid blue;
    }
    .color-orange {
        color: orange;
    }
</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {
                show: false
            }
        },
        mounted: function () {
        },
        computed: mapGetters({
            header: 'header'
        }),
        methods: {
            setConfig () {
                this.$store.dispatch('setCurrentComponentConfigById', 2)
            },
            toggleClick () {
                this.show = !this.show
            }
        },
        components: {}
    }
</script>

