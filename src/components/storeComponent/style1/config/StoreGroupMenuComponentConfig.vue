<template>
    <div class="panel-body">
        <div style="padding: 40px 0px 10px; border-bottom: 1px solid gray; margin-bottom: 40px;"><h5>点餐分类设置</h5></div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text">分类名</span>
            </div>
            <input type="text" class="form-control" v-model="group" aria-label="Amount (to the nearest dollar)">
            <div class="input-group-append">
                <span class="input-group-text" @click="addGroup()">添加</span>
            </div>
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
                group: ''
            }
        },
        methods: {
            addGroup () {
                this.$store.dispatch('addGroupMenu', {name: this.group})
                this.group = ''
            }
        }
    }
</script>

