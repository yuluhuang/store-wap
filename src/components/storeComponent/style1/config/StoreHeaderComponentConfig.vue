<template>
    <div class="font-text-1"
         style="">
        <div class="panel  text-left ">
            <div class="">
                <div class=" panel-body ">
                    <h3>{{header.title}}</h3>
                </div>
            </div>
            <div class="panel">
                <div class="">
                    <h4>{{header.content[0].name}}</h4>
                </div>
                <div class="" style="margin-bottom: 10px;">
                    <span class="font-text-2">{{header.content[0].currentIcon.name}} &nbsp;&nbsp;</span>
                    <i :class="HeaderConfig.callIcon"></i>

                </div>
                <div class="">
                    <div class="media-body">
                        <span class="font-text-2">{{header.content[0].selectIcon.name}} &nbsp;&nbsp;</span>
                        <span v-for="(icon,key) in header.content[0].selectIcon.content" class=""
                              style="padding-right: 20px;" @click="selectIconClick(key)">
                            <i :class="icon.src" ></i>

                        </span>
                    </div>

                </div>
            </div>


            <div class="panel">
                <div class="">
                    <h4>{{header.content[1].name}}</h4>
                </div>
                <div class="" style="margin-bottom: 10px;">
                    <div class="media-body media-middle" style="width: 200px;">
                        <span  class="font-text-2">{{header.content[1].currentIcon.name}} &nbsp;&nbsp;</span>
                        <i :class="HeaderConfig.searchIcon"></i>

                    </div>


                </div>
                <div class="">
                    <div class="media-body media-middle" style="margin-right: 20px;width: 200px;">
                        <span class="font-text-2">{{header.content[1].selectIcon.name}} &nbsp;&nbsp;</span>
                        <span v-for="(icon,key) in header.content[1].selectIcon.content" class=""
                              style="padding-right: 20px;" @click="selectIcon2Click(key)">
                            <i :class="icon.src"></i>

                        </span>
                    </div>


                </div>
            </div>


            <div class="panel">
                <div class="">
                    <h4>{{header.content[2].name}}</h4>
                </div>
                <div class="" style="margin-bottom: 10px;">
                    <div class="media-body">
                        <label class="radio-inline" @click="advshow()">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" :checked="HeaderConfig.notice"> 显示
                        </label>
                        <label class="radio-inline" @click="advhide()">
                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" :checked="!HeaderConfig.notice"> 隐藏
                        </label>

                    </div>


                </div>

            </div>


            <div class="panel">
                <div class="">
                    <h4>{{header.content[3].name}}</h4>
                </div>
                <div class="" style="margin-bottom: 15px;">
                    <span style="width: 200px;">
                        {{header.content[3].currentColor.name}}
                    </span>
                  <span style="padding: 8px 16px;"
                        :style="{backgroundColor: HeaderConfig.color}"></span>

                </div>
                <div class="">
                    <span class="" style="width: 200px;">
                        {{header.content[3].selectColor.name}}
                    </span>
                    <span v-for="(icon,key) in header.content[3].selectColor.content"
                          style="padding: 8px 16px; margin-right: 5px;" @click="selectColorClick(key)"
                          :style="{backgroundColor: icon.color}">


                        </span>


                </div>
            </div>

        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped="">
</style>

<script>
    import {mapGetters} from 'vuex'
    export default {
        data () {
            return {
                header: {
                    title: '点餐页-头部',
                    content: [
                        {
                            name: '呼叫服务图标',
                            currentIcon: {name: '当前图标', src: 'oi oi-musical-note'},
                            selectIcon: {
                                name: '可选图标',
                                content: [
                                    {id: 0, src: 'oi oi-musical-note', selected: false},
                                    {id: 1, src: 'oi oi-bell', selected: false}
                                ]
                            }
                        },
                        {
                            name: '搜索图标',
                            currentIcon: {name: '当前图标', src: 'oi oi-magnifying-glass'},
                            selectIcon: {
                                name: '可选图标',
                                content: [
                                    {id: 0, src: 'oi oi-magnifying-glass', selected: false},
                                    {id: 1, src: 'oi oi-eye', selected: false}
                                ]
                            }
                        },
                        {
                            name: '公告显示隐藏', show: true
                        },
                        {
                            name: '头部背景颜色',
                            currentColor: {name: '当前颜色', color: 'rgba(33, 66, 99,0.5)'},
                            selectColor: {
                                name: '可选颜色',
                                content: [
                                    {id: 0, color: 'rgba(33, 66, 99,0.5)', selected: false},
                                    {id: 1, color: 'rgba(241, 110, 39, 0.5)', selected: false}
                                ]
                            }
                        }
                    ]
                }
            }
        },
        mounted: function () {
        },
        computed: mapGetters({
            HeaderConfig: 'header'
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

