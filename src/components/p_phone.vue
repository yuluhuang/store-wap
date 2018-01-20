<template>
    <div class="phone">
        <div class=" main text-left">
            <div class="" style="margin: auto auto;">
                <div  style="">
                    <div v-for="(component, key) in store.components"
                         @click="setConfig(component)"
                         :key="key"
                         :is="component.is"
                         :class="store.isEdit && component.selected?'component-selected':''">

                    </div>

                </div>

            </div>
        </div>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import '../../src/assets/config.styl';
    .phone .component-selected  {
        border: 1px dashed red;
    }
</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data () {
            return {
            }
        },
        computed: mapGetters({
            store: 'store'
        }),
        mounted () {
            const self = this
            this.$http.get('http://127.0.0.1:18080/api/blog/' + this.$route.query.id).then(function (res) {
                console.log(res.data.blog)
                self.$store.dispatch('setStore', JSON.parse(res.data.blog.content))
            })
        },
        methods: {
        },
        components: {
        }
    }
</script>

