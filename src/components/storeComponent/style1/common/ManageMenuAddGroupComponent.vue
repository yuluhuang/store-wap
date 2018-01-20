<template>
    <!-- 初始化 -->
    <div class="text-center "  @click="selectGroupConfig()"
         style="width: 80px;height: 60px;line-height: 60px;background-color: #eee;margin: 5px;">
        <span class="oi oi-plus"></span>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
            selectGroupConfig () {
                this.$store.dispatch('setCurrentComponentConfigByIdAndValue', {id: 3, config: 'store-group-menu-component-config'})
            }
        }
    }
</script>

