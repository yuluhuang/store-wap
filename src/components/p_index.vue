<template>
    <div class="">
        <div class="row">
            <div class="col-md-3">menu</div>
            <div class="col-md-6">
                <div  style="width: 640px;">
                    <div class="media"  style="padding: 15px 15px 8px 15px; background: #b5b5fb;">
                        <div class="media-left "  style="padding-right: 15px;">
                            <img class="img-rounded" src="https://avatars1.githubusercontent.com/u/5743499?s=90&v=4" alt="Generic placeholder image">
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading" style="margin-top: 3px; margin-bottom: 7px;">演示</h4>
                            <p>商家配送 / 分钟送达 / 配送费￥5</p>
                            <p>公告: 好吃多好吃</p>
                        </div>
                    </div>
                    <div class="media font-white"  style="padding-left: 15px;padding-bottom: 5px;  background: #b5b5fb;">
                        满30减5，满60减8（APP专享）
                    </div>
                    <div class="media text-center " style="padding-bottom: 10px; border-bottom: 1px solid #eee;">

                        <div class="media-body">
                            <div class="bar-title bar-title-border-bottom">商品</div>
                        </div>
                        <div class="media-body">
                            <div class="bar-title">评价 <span class="color-orange">(4.5分)</span></div>
                        </div>


                    </div>
                    <div class="">
                        <div class="float-left" style="width: 150px; ">
                            <div class="text-center"
                                 style="    width: 100%;height: 60px;line-height: 60px;border-left: 1px solid #eee;border-bottom: 1px solid #eee;">
                                <span class="oi oi-plus"></span>
                            </div>
                        </div>
                        <div class="float-left" style="width: 490px;border-left: 1px solid #eee; height: 100%; ">
                            <div>
                                <div class="text-center"
                                     style="    width: 100%;height: 100px;line-height: 100px;border-right: 1px solid #eee; border-bottom: 1px solid #eee;">
                                    <span class="oi oi-plus"></span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div class="col-md-3 " style="border-left: 1px solid gray;" :style="{height: clientHeight + 'px'}">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">分组名</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>


            </div>
        </div>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
    @import '../../src/assets/config.styl';
    p, h4 {
        margin-bottom: 5px;
        color: #fff;
    }
    .font-white {
        color white;
    }
    .bar-title {
        padding 10px;
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
                clientHeight: window.innerHeight
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

