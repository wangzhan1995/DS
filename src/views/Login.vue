<template>
    <div class="box">
        <div class="login">
            <h2>ibook管理面板</h2>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button type="button" @click="login">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                // bodyHeight: window.innerHeight + 'px',
                username:'',
                password:'',
                bodyHeight: window.innerHeight + 'px'
            }
        },
        methods:{
            login() {
                this.$router.push('/home/helloLogin');
            }
        }

    }
</script>

<style scoped lang="less">
    .box {
        /*width: 100%;*/
        background-color: #444444;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*border:hidden;*/
    }
    .login{
        width: 600px;
        height: 400px;
        border-radius: 3px;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        & > h2 {
            color: #5f5f5f;
            margin-top: 30px;
            font-weight: normal;
        }
        &>input{
            width: 400px;
            height: 30px;
            line-height: 30px;
            text-indent: 10px;
            font-size: 16px;
            border-radius: 3px;
            border: 1px solid rgba(231, 231, 231, 0.89);
            margin-top: 40px;
        }
        &>button{
            width: 400px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            margin-top: 50px;
            border-radius: 3px;
            background-color: #1da137;
            color: white;
            border: none;
        }
    }
</style>