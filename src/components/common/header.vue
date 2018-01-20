<template>
    <div style="width: 100%;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <!--<div>点餐系统-自定义页面</div>-->
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <!--<li class="nav-item active">-->
                        <!--<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link" href="#">Link</a>-->
                    <!--</li>-->
                    <!--<li class="nav-item">-->
                        <!--<a class="nav-link disabled" href="#">Disabled</a>-->
                    <!--</li>-->
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <div class="btn btn-outline-success my-2 my-sm-0" @click="submit()">发布</div>
                    <div  class="btn btn-outline-success " v-if="id"><a target="_blank" :href="'./#/phone?id='+id">预览</a></div>
                </form>
            </div>
        </nav>
    </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
    @import '../../../src/assets/config.styl';
    p, h4 {
        margin-bottom: 5px;
        color: #fff;
    }
</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'store',
        data () {
            return {
                clientHeight: window.innerHeight,
                id: ''
            }
        },
        computed: mapGetters({
            store: 'store'
        }),
        methods: {
            submit () {
                const self = this
                let components = JSON.parse(JSON.stringify(this.store))
                components.isEdit = false
                let temp = {}
                temp.type = 'store'
                temp.content = JSON.stringify(components)
                this.$http.post('http://127.0.0.1:18080/api/blog/add', temp).then(function (res) {
                    self.id = res.data.blog.id
                    console.log(res)
                })
            }
        },
        components: {
        }
    }
</script>

