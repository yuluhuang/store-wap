<template>
    <div class="font-text-1"
         style="">
        <div class="  text-left ">
            <div class="">
                <div class=" ">
                    <h3>{{header.title}}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3>{{header.content[0].name}}</h3>
                </div>
                <div class="col-md-12" style="margin-bottom: 10px;">
                    <div class="media-body" style="width: 2000px;">
                        <h4>{{header.content[0].currentIcon.name}}</h4>
                    </div>
                    <div class="media-body media-middle">
                        <i :class="StoreConfig.header.data.callIcon"></i>
                    </div>


                </div>
                <div class="col-md-12">
                    <div class="media-body" style="width: 2000px;">
                        <h4>{{header.content[0].selectIcon.name}}</h4>
                    </div>
                    <div class="media-body media-middle ">
                        <div v-for="(icon,key) in header.content[0].selectIcon.content" class="float-left"
                        style="width: 40px;" @click="selectIconClick(key)">
                            <i :class="icon.src" ></i>

                        </div>
                    </div>


                </div>
            </div>


            <div class="row">
                <div class="col-md-12">
                    <h4>{{header.content[1].name}}</h4>
                </div>
                <div class="col-md-12" style="margin-bottom: 10px;">
                    <div class="media-body media-middle" style="width: 2000px;">
                        <h4>{{header.content[1].currentIcon.name}}</h4>
                    </div>
                    <div class="media-body media-middle">
                        <i :class="StoreConfig.header.data.searchIcon"></i>
                    </div>


                </div>
                <div class="col-md-12">
                    <div class="media-body media-middle" style="margin-right: 20px;width: 2000px;">
                        <h4>{{header.content[1].selectIcon.name}}</h4>
                    </div>
                    <div class="media-body media-middle ">
                        <div v-for="(icon,key) in header.content[1].selectIcon.content" class="float-left"
                             style="width: 40px;" @click="selectIcon2Click(key)">
                            <i :class="icon.src"></i>

                        </div>
                    </div>


                </div>
            </div>


            <div class="row">
                <div class="col-md-12">
                    <h4>{{header.content[2].name}}</h4>
                </div>
                <div class="col-md-12" style="margin-bottom: 10px;">
                    <div class="media-body">
                        <label class="radio-inline" @click="advshow()">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" :checked="StoreConfig.header.data.notice"> 显示
                        </label>
                        <label class="radio-inline" @click="advhide()">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" :checked="!StoreConfig.header.data.notice"> 隐藏
                        </label>

                    </div>


                </div>

            </div>


            <div class="row">
                <div class="col-md-12">
                    <h4>{{header.content[3].name}}</h4>
                </div>
                <div class="col-md-12" style="margin-bottom: 10px;">
                    <div class="media-body" style="width: 2000px;">
                        {{header.content[3].currentColor.name}}
                    </div>
                    <div class="media-body ">
                        <div style="width: 30px; height: 30px;"
                        :style="{backgroundColor: StoreConfig.header.data.color}"></div>
                        <!--<i :class="header.content[3].currentColor.src"></i>-->
                        <!--<img :src="header.content[0].currentIcon.src" alt="">-->
                    </div>
                    <!--<div v-for="(icon,key) in header.content.selectIcon">-->
                    <!--<div>icon</div>-->
                    <!--</div>-->

                </div>
                <div class="col-md-12">
                    <div class="media-body" style="width: 2000px;">
                        {{header.content[3].selectColor.name}}
                    </div>
                    <div class="media-body media-middle">
                        <div v-for="(icon,key) in header.content[3].selectColor.content"
                             style="width: 30px; height: 30px; float: left;" @click="selectColorClick(key)"
                             :style="{backgroundColor: icon.color}">


                        </div>
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
    import {mapGetters} from 'vuex'
    export default {
        props: ['contentData'],
        data () {
            return {
                header: {
                    title: '点餐页-头部',
                    content: [
                        {name: '呼叫服务图标',
                            currentIcon: {name: '当前图标', src:'glyphicon glyphicon-volume-up'},
                            selectIcon: {
                                name: '可选图标',
                                content: [
                                    {id: 0, src: 'glyphicon glyphicon-volume-up', selected: false},
                                    {id: 1, src: 'glyphicon glyphicon-volume-down', selected: false}
                                ]
                            }},
                        {name: '搜索图标', currentIcon: {name: '当前图标', src:'glyphicon glyphicon-search'},
                            selectIcon: {
                                name: '可选图标',
                                content: [
                                    {id: 0, src: 'glyphicon glyphicon-search', selected: false},
                                    {id: 1, src: 'glyphicon glyphicon-zoom-in', selected: false}
                                ]
                            }},
                        {
                            name: '公告显示隐藏', show: true
                        },
                        {name: '头部背景颜色', currentColor: {name: '当前颜色', color:'green'},
                            selectColor: {
                                name: '可选颜色',
                                content: [
                                    {id: 0, color: 'red', selected: false},
                                    {id: 1, color: 'green', selected: false}
                                ]
                            }},
                    ]
                }
            }
        },
        mounted: function () {
        },
        computed: mapGetters({
            StoreConfig: 'store'
        }),
        methods: {
            selectIconClick (key) {
                const self = this
                self.header.content[0].selectIcon.content.forEach(function (v, k) {
                    v.selected = false
                    if (k === key) {
                        v.selected = true
                        self.$store.dispatch('setHeaderCallIcon', v.src)
                    }
                })
            },
            selectIcon2Click (key) {
                const self = this
                self.header.content[1].selectIcon.content.forEach(function (v, k) {
                    v.selected = false
                    if (k === key) {
                        v.selected = true
                        self.$store.dispatch('setHeaderSearchIcon', v.src)
                    }
                })
            },
            advshow () {
                this.$store.dispatch('setHeaderNoticeShow', true)
            },
            advhide () {
                this.$store.dispatch('setHeaderNoticeShow', false)
            },
            selectColorClick (key) {
                const self = this
                self.header.content[3].selectColor.content.forEach(function (v, k) {
                    v.selected = false
                    if (k === key) {
                        v.selected = true
                        self.$store.dispatch('setHeaderBackgroundColor', v.color)
                    }
                })
            }
        },
        components: {
        }
    }
</script>

