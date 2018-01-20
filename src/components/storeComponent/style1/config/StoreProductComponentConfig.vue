<template>
    <div class="panel-body">
        <div style="padding: 40px 0px 10px; border-bottom: 1px solid gray; margin-bottom: 40px;"><h5>点餐商品添加</h5></div>
        <div class="input-group">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">选择分类</button>
            </div>
            <select class="custom-select" v-model="selectedGroup">
                <option selected>Choose...</option>
                <option v-for="(group, key) in menu.groups" :key="key" :value="group.group">{{group.group.name}}</option>
            </select>
            <!--<div class="input-group-append">-->
            <!--<button class="btn btn-outline-secondary" type="button">确定</button>-->
            <!--</div>-->
        </div>
        <div class="input-group" style="margin-top: 30px;">
            <select class="custom-select" v-model="product">
                <option selected>选择商品</option>
                <option  v-for="(product, key) in products" :key="key" :value="product" value="1">{{product.name}}</option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addProduct()">确定</button>
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
        props: ['contentData'],
        data () {
            return {
                selectedGroup: '',
                product: '',
                products: [
                    {
                        id: 1,
                        name: '日式可口酸梅汁',
                        desc: '校草君, 单点不外送 (^o^)/~',
                        mark: '月售23份, 好评率100%',
                        count: '剩21份',
                        price: '$8.88'
                    },
                    {
                        id: 2,
                        name: '日式酸酸乳',
                        desc: '校草君, 单点不外送 (^o^)/~',
                        mark: '月售19份, 好评率100%',
                        count: '剩21份',
                        price: '$12'
                    },
                    {
                        id: 3,
                        name: '鲜榨芒果汁',
                        desc: '校草君, 单点不外送 (^o^)/~',
                        mark: '月售5份',
                        count: '剩21份',
                        price: '$18'
                    }
                ]
            }
        },
        computed: mapGetters({
            menu: 'menu'
        }),
        methods: {
            addProduct () {
                // {group: {name: '', selected: false},product: {name: ''}}
                this.$store.dispatch('addProductToGroup', {group: this.selectedGroup, product: this.product})
                this.selectedGroup = ''
                this.product = ''
            }
        }
    }
</script>

