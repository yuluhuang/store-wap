<template>
    <div class="">
        <div class="">
            <router-view name="header"></router-view>
        </div>
        <div class="row">
            <div class="col-md-2" style="padding: 0px 0;">
                <router-view class="view three" name="leftMenu"></router-view>
            </div>
            <div class="col-md-10">
                <router-view></router-view>

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
</style>

<script>
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
        }
    }
</script>

