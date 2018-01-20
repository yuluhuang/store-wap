<template>
    <!-- 初始化 -->
    <div class="border-bottom-1"   @click="selectAdvConfig()">
        <div class="text-center "
             style=" background-color: #eee; width: 535px;height: 100px;line-height: 100px;margin: 5px;">
            <div>添加广告</div>
        </div>
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
            selectAdvConfig () {
                this.$store.dispatch('setCurrentComponentConfigByIdAndValue', {id: 3, config: 'store-adv-component-config'})
            }
        }
    }
</script>

