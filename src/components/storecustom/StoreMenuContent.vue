<template>
    <!-- 初始化 -->
    <div>
        <div>
            <div class="media panel font-text-1 text-left">
                <div class="media-body" style="width: 150px;">
                    <div style="height: 300px; overflow: scroll; ">
                        <div style="height: 50px" v-for="(title, key) in titles" :key="key">{{title.name}}</div>
                    </div>
                </div>
                <div class="media-body" style="width: 590px;">
                    <div style="height: 300px; overflow: scroll; ">
                        <div v-for="(product, key) in products" :key="key">
                            <div class="media-body" style="width: 300px;">
                                <img src="https://avatars1.githubusercontent.com/u/5743499?s=100&v=4" alt="">

                            </div>
                            <div class="media-body">
                                <div>{{product.name}}</div>
                                <div>{{product.desc}}</div>
                                <div>{{product.mark}}</div>
                                <div>
                                    <div class="media-body" style="width: 60%;">{{product.price}}</div>
                                    <div class="media-body" style="width: 40%;">
                                        <div class="media-body text-center">
                                            <i class="glyphicon glyphicon-plus"></i>
                                        </div>
                                        <div class="media-body" style="width: 50px;">
                                          1
                                        </div>

                                        <div class="media-body text-center">
                                            <i class="glyphicon glyphicon-minus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
    export default {
        props: ['config'],
        data () {
            return {
                titles: [
                    {name: '今日特惠', selected: true},
                    {name: '今日最火', selected: false},
                    {name: '客服', selected: false},
                    {name: '冷菜', selected: false},
                    {name: '热菜', selected: false},
                    {name: '清香甜点', selected: false},
                    {name: '客服', selected: false},
                    {name: '冷菜', selected: false},
                    {name: '热菜', selected: false},
                    {name: '清香甜点', selected: false},
                    {name: '色拉', selected: false}
                ],
                products: [
                    {name: '日式烤鱼套餐', mark: '今日特惠', desc: '123456', price: 123},
                    {name: '日式烤鱼套餐', mark: '今日特惠', desc: '123456', price: 123},
                    {name: '日式烤鱼套餐', mark: '今日特惠', desc: '123456', price: 123},
                    {name: '日式烤鱼套餐', mark: '今日特惠', desc: '123456', price: 123},
                    {name: '日式烤鱼套餐', mark: '今日特惠', desc: '123456', price: 123}
                ]
            }
        },
        mounted: function () {},
        computed: {},
        methods: {
        },
        components: {}
    }
</script>

