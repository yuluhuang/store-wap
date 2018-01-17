<template>
    <div class="rating_page">
        <head-top :head-title="name" go-back='true'></head-top>
        <section class="header_img">
            <img :src="imgBaseUrl + image_path" class="food_img">
            <div class="cover"></div>
        </section>
        <p class="description">{{description}}</p>
        <section class="detail_container">
            <section class="detail_left">
                <p>{{name}}</p>
                <div class="rating_sale">
                    <span>评分</span>
                    <rating-star :rating='rating'></rating-star>
                    <span>{{rating.toFixed(1)}}</span>
                </div>
                <p>
                    <span>月售 {{month_sales}}单</span>
                    <span>售价 ¥{{foods.specfoods[0].price}}</span>
                    <span v-if="foods.specfoods.length">起</span>
                </p>
                <p>
                    <span>评论数 {{rating_count}}</span>
                    <span>好评率 {{satisfy_rate}}%</span>
                </p>
            </section>
            <!-- <buy-cart :shopId='shopId'  :foods='foods' @moveInCart="$emit('moveInCart')"></buy-cart> -->
        </section>
    </div>
</template>

<script>
//    import headTop from 'src/components/header/head'
//    import {getImgPath} from 'src/components/common/mixin'
//    import ratingStar from 'src/components/common/ratingStar'
//    import buyCart from 'src/components/common/buyCart'
//    import {imgBaseUrl} from 'src/config/env'

    export default {
        data () {
            return {
                image_path: null,
                description: null,
                month_sales: null,
                name: null,
                rating: null,
                rating_count: null,
                satisfy_rate: null,
                foods: null,
                shopId: null,
                imgBaseUrl: 'http://cangdu.org:8001/img/'
            }
        },
        created () {
            this.image_path = this.$route.query.image_path
            this.description = this.$route.query.description
            this.month_sales = this.$route.query.month_sales
            this.name = this.$route.query.name
            this.rating = this.$route.query.rating
            this.rating_count = this.$route.query.rating_count
            this.satisfy_rate = this.$route.query.satisfy_rate
            this.foods = this.$route.query.foods
            this.shopId = this.$route.query.shopId
        },
//        mixins: [getImgPath],
//        components: {
//            headTop,
//            ratingStar,
//            buyCart,
//        },
        props: [],
        methods: {}
    }
</script>

<style lang="scss" scoped>
    /*@import 'src/style/mixin';*/

    $blue: #3190e8;
    $bc: #e4e4e4;
    $fc:#fff;

    // 背景图片地址和大小
    @mixin bis($url) {
        background-image: url($url);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    @mixin borderRadius($radius) {
        -webkit-border-radius: $radius;
        -moz-border-radius: $radius;
        -ms-border-radius: $radius;
        -o-border-radius: $radius;
        border-radius: $radius;
    }
    //定位全屏
    @mixin allcover{
        position:absolute;
        top:0;
        right:0;
    }

    //定位上下左右居中
    @mixin center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    //定位上下居中
    @mixin ct {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    //定位上下居中
    @mixin cl {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    //宽高
    @mixin wh($width, $height){
        width: $width;
        height: $height;
    }

    //字体大小、行高、字体
    @mixin font($size, $line-height, $family: 'Microsoft YaHei') {
        font: #{$size}/#{$line-height} $family;
    }

    //字体大小，颜色
    @mixin sc($size, $color){
        font-size: $size;
        color: $color;
    }

    //flex 布局和 子元素 对其方式
    @mixin fj($type: space-between){
        display: flex;
        justify-content: $type;

    }

    /*======================================================================*/

    .rating_page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 12;
        padding-top: 1.95rem;
        p, span {
            font-family: Helvetica Neue, Tahoma, Arial;
        }
    }

    .header_img {
        position: relative;
        .food_img {
            width: 100%;
            display: block;
        }
        .cover {
            position: absolute;
            @include wh(100%, 100%);
            top: 0;
            left: 0;
        }
    }

    .description {
        @include sc(.6rem, #666);
        margin-top: .5rem;
        line-height: .8rem;
        bottom: .2rem;
        padding: 0 .4rem;
    }

    .detail_container {
        padding: .5rem;
        @include fj;
        align-items: center;
        .detail_left {
            p:nth-of-type(1) {
                @include sc(.7rem, #333);
                margin-bottom: .2rem;
            }
            .rating_sale {
                display: flex;
                align-items: center;
                span:nth-of-type(1) {
                    @include sc(.6rem, #666);
                    margin-right: .2rem;
                }
                span:nth-of-type(2) {
                    @include sc(.55rem, #f60);
                    margin-left: .2rem;
                }
                span:nth-of-type(3) {
                    @include sc(.6rem, #666);
                    margin-left: .4rem;
                }
            }
            p:nth-of-type(2) {
                font-size: 0;
                margin-top: .3rem;
                span:nth-of-type(1) {
                    @include sc(.6rem, #666);
                    margin-right: .4rem;
                }
                span:nth-of-type(2), span:nth-of-type(3) {
                    @include sc(.6rem, #f60);
                    margin-right: .2rem;
                }
            }
            p:nth-of-type(3) {
                span {
                    @include sc(.6rem, #666);
                }
            }
        }
    }

</style>
