<template>
    <!-- 初始化 -->
    <div>
        <div class="cell font-text-1 ">
            <div class="panel-body " >
                <div class="row " style="margin-bottom: 20px;">
                    <div class="col-md-6">
                        <div class="font-text-3">全部评价 <span class="font-text-1">23条</span></div>
                    </div>
                    <div class="col-md-6 text-right font-text-1 text-blue" @click="toAllRate()">全部</div>
                </div>

                <div class="row ">
                    <div class="col-md-1">图</div>
                    <div class="col-md-11 row">
                        <div class="col-md-6">
                            <div>小米</div>
                            <div>star</div>
                        </div>
                        <div class="col-md-6 text-right text-gray" style="padding-right: 0px;">
                            <div>2017-11-21 12:09</div>
                            <div>大桥店</div>
                        </div>
                        <div class="col-md-12 ">我要评级 我在评价 一起评价 评价 评价 评价</div>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<script>
    export default {
        props: ['config'],
        data () {
            return {
            }
        }
    }
</script>

