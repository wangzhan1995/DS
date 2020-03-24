<template>
    <div class="slider">
        <div class="slider-inner">
            <ul>
                <li v-for="(item,index) in dataList">
                    <div class="firstname" @click="changeList(index)"><i class="el-icon-menu"></i>{{ item.firstName }}</div>
                    <div v-if="item.isSelection">
                        <div class="first" v-for="val in item.children">
                            <router-link :to="val.path" class="sec"><span>{{val.secondName }}</span>
                                <b class="el-icon-d-arrow-right"></b></router-link>
                        </div>
                    </div>
                </li>
                <div>
                    <div class="addname"><i class="el-icon-plus"></i></div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminList",
        data(){
            return {
                dataList:[
                    {firstName:"用户管理",isSelection:true ,children:[
                            {secondName:"信息管理",path:"/home/userInformation"},
                            {secondName:"收货地址管理",path:"/home/userReceivingAddress"},
                            {secondName:"积分管理",path:"/home/UserIntegral"},
                            {secondName:"会员管理",path:"/home/UserMember"}
                        ]
                    },
                    {firstName:"图书管理",isSelection:false ,children:[
                            {secondName:"图书信息",path:"/home/bookInformation"},
                            {secondName:"图书上/下架",path:"/home/upperLowerShelf"}
                        ]
                    },
                    {firstName:"活动管理",isSelection:false ,children:[
                            {secondName:"活动banner管理",path:"/home/activityBanner"},
                            {secondName:"图书折扣活动管理",path:"/home/activityDiscount"},
                            {secondName:"图书满减活动管理",path:"/home/activityFullReduction"}
                        ]
                    },
                    {firstName:"降价通知推送",isSelection:false ,children:[
                            {secondName:"降价通知推送",path:"/home/priceNotice"},
                        ]
                    },
                    {firstName:"订单管理",isSelection:false ,children:[
                            {secondName:"订单状态",path:"/home/orderState"},
                            {secondName:"订单详情",path:"/home/orderDetails"},
                        ]
                    },
                    {firstName:"库存管理",isSelection:false ,children:[
                            {secondName:"库存管理",path:"/home/inventoryManagement"},
                        ]
                    },
                    {firstName:"售后管理",isSelection:false ,children:[
                            {secondName:"售后管理",path:"/home/afterSale"},
                        ]
                    },
                    {firstName:"客服",isSelection:false ,children:[
                            {secondName:"客服",path:"/home/customerService"},
                        ]
                    },
                ]
            }
        },
        methods:{
            changeList(index) {
                // console.log(this.dataList[index])
                //:to="item.children[0].path"
                // console.log(this.dataList[index].children[0].path)
                this.dataList[index].isSelection=true;
                // this.$router.push(this.dataList[index].children[0].path)
                for (let i=0;i<this.dataList.length;i++) {
                    if (i!==index) {
                        this.dataList[i].isSelection=false;
                    }
                }

            }
        }
    }
</script>

<style scoped lang="less">
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .el-icon-menu{
        float: left;margin-top: 11px;font-size: 6px;
    }
    .el-icon-d-arrow-right{
        float: right;
        margin-top: 11px;
        margin-right: 20px;
        display: none;
    }
    .slider{
        width: 200px;
        height: 600px;
        border: 1px solid #c4c4c4;
        .slider-inner{
            width: 100%;
            .firstname{
                font-weight: bold;
                font-size: 14px;
                height: 42px;
                line-height: 42px;
                background: rgba(218, 218, 218, 0.23);
                border-bottom: 1px solid rgb(224, 224, 224);
                cursor: pointer;
                &>i{
                    line-height: 20px;
                    margin-right: 5px;
                }

            }
            .sec{
                display: block;
                width: 90%;
                margin: 0 auto;
                height: 34px;
                line-height: 34px;
                font-size: 12px;
                color: rgba(51,51,51);
                padding: 2px 10px;
                border-bottom: 1px dotted gainsboro;
                text-decoration: none;
                &>span{
                    float: left;
                    margin-left: 20px;
                }
                &:hover{
                    color: red;
                    cursor: pointer;
                }
                &:hover>span{
                    text-decoration: underline;
                }
                &:hover>b{
                    display: block;
                    color: #c4c4c4;
                }
            }

        }
    }
    .addname{
        text-align: center;
        font-weight: bold;
        font-size: 14px;
        height: 42px;
        line-height: 42px;
        background: rgbargba(51,51,51);
        border-bottom: 1px solid rgb(224, 224, 224);
        &>i{
            font-weight: bolder;
            font-size: 20px;
        }

    }

</style>