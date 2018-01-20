<template>
    <!-- 初始化 -->
    <div class="" >
        <div class="media" :style="{height: menuHeight + 'px'}" style="border: 1px solid #eee; ">
            <!--左侧分组-->
            <div class=" border-bottom-1" style="overflow: scroll; min-width: 90px;" >
                <div ref="wrapper_menu" :style="{height: menuHeight + 'px'}">
                    <div>
                        <div class="text-center border-bottom-1" v-for="(group, key) in menu.groups" :key="key"
                             :class="group.group.selected? 'group-actived':''" @click="groupSelect(group.group.id)"
                             style="width: 100%;height: 50px;line-height: 50px; ">
                            {{group.group.name}}
                        </div>
                        <!--添加分组位-->
                        <div :is="'manage-menu-add-group-component'" v-if="isEdit"></div>
                    </div>
                </div>

            </div>
            <!--右侧商品-->
            <div class=" " style="border-left: 1px solid #eee; height: 100%; width: 100%;">
                <div style="overflow: scroll;">
                    <!-- 添加广告位-->
                    <div :is="'manage-menu-add-adv-component'" v-if="isEdit"></div>

                    <div ref="main"  :style="{height: menuHeight + 'px'}">
                        <div>
                            <div v-for="(group, key) in menu.groups">
                                <div class="media font-white border-bottom-1" style="padding-left: 5px;">
                                    {{group.group.name}}
                                </div>

                                <div class="text-left border-bottom-1" v-for="(product, key) in group.products"
                                     :key="key"
                                     style="">

                                    <div class="media ">
                                        <div class="media-left panel-small ">
                                            <img class="img-rounded"
                                                 src="https://avatars1.githubusercontent.com/u/5743499?s=75&v=4"
                                                 alt="Generic placeholder image">

                                        </div>
                                        <div class="media-body">
                                            <div class="media " style="padding-top: 10px;">
                                                <div class="media-body">
                                                    <div class="font-text-5">{{product.name}}</div>
                                                    <div class="font-text-2 text-gray-dark">{{product.desc}}</div>
                                                    <div class="font-text-3">{{product.mark}}</div>
                                                    <div class="badge badge-success">{{product.count}}</div>
                                                    <div class="media">
                                                        <div class="media-body ">
                                                            <div class="text-red font-text-6"
                                                                 style="padding-top: 6px; margin-top: 1px; width: 100px;">
                                                                {{product.price}}
                                                            </div>

                                                        </div>
                                                        <div class=" media-body" style="width: 130px;">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                <span class="oi oi-minus"></span>
                                                            </span>
                                                                </div>
                                                                <input type="text" class="form-control"
                                                                       style="width: 30px;">
                                                                <div class="input-group-append">
                                                                <span class="input-group-text">
                                                                    <span class="oi oi-plus"></span>
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--<div class="media-right"></div>-->
                                    </div>
                                </div>
                            </div>
                            <!--添加商品位-->
                            <div :is="'manage-menu-add-product-component'" v-if="isEdit"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
    .group-actived {
        border-left: 5px solid red;
    }

</style>

<script>
    import {mapGetters} from 'vuex'
    import BScroll from 'better-scroll'

    export default {
        data () {
            return {
                touches: [0], // 590,860,2010
//                foodScroll: null,
//                wrapperMenu: null,
                menuHeight: window.innerHeight - 170
            }
        },
        mounted () {
        },
        computed: mapGetters({
            menu: 'menu',
            isEdit: 'isEdit'
        }),
        watch: {
            'menu': function () {
                const self = this
                self.menu.groups.forEach(function (v, k) {
                    self.touches.push(self.touches[k] + v.products.length * 154 + 25)
                })
                self.$nextTick(function () {
                    self.foodScroll = new BScroll(self.$refs.main, {
                        probeType: 3,
                        deceleration: 0.001,
                        bounce: false,
//                        swipeTime: 2000,
                        click: true
                    })
                    self.wrapperMenu = new BScroll(self.$refs.wrapper_menu, {
                        probeType: 3,
                        deceleration: 0.001,
                        bounce: false,
//                        swipeTime: 2000,
                        click: true
                    })
                })
                self.wrapperMenu.on('scroll', function (pos) {
                })
                self.foodScroll.on('scroll', function (pos) {
                    /**
                     * 0:0
                     1:545
                     2:925
                     3:1470
                     * @type {number}
                     */
                    var top = -pos.y
                    console.log(top)
                    self.touches.forEach(function (v, k) {
                        if (top >= self.touches[k] && top < self.touches[k + 1]) {
                            self.wrapperMenu.scrollTo(0, -k * 50)
                        }
                    })
                })
            }
        },
        methods: {
            groupSelect (id) {
                const self = this
                self.menu.groups.forEach(function (v, k) {
                    if (v.group.id === id) {
                        self.foodScroll.scrollTo(0, -self.touches[k])
                    }
                })
            }
        },
        components: {}
    }
</script>

