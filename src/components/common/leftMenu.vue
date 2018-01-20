<template>
    <div class="" style="padding: 20px 0 0 50px;">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">风格1</button>
            <button type="button" class="btn btn-secondary">风格2</button>
        </div>

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

