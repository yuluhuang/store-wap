<template>
    <div class="index">
        <div class="row">
            <div class="col-md-8">
                <div  style="width: 640px;">
                    <div v-for="(component, key) in store.components"
                         @click="setConfig(component)"
                         :key="key"
                         :is="component.is"
                         :class="component.selected?'component-selected':''">

                    </div>

                </div>

            </div>
            <div class="col-md-4 " style="border-left: 1px solid #eee;" :style="{height: clientHeight + 'px'}">
                <div :is="store.config"></div>

            </div>
        </div>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    @import '../../src/assets/config.styl';
    .index .component-selected {
        border: 1px dashed red;
    }
</style>

<script>
    import {mapGetters} from 'vuex'

    export default {
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

