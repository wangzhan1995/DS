<template>
  <div class="admin">
    <div class="header">管理员信息栏</div>
    <div class="personCenter">
      <adminList></adminList>
      <div class="show">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import adminList from "@/components/AdminList.vue"

export default {
  name: 'Home',
  data(){
    return {}
  },
  components: {
    adminList
  }
}
</script>

<style scoped lang="less">
  .admin{
    width:1210px;
    margin: 0 auto;
    .header{
      width:1210px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid lightskyblue;
    }

  }

  .personCenter{
    width:1210px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .show{
      width: 990px;
      border: 1px solid red;
    }
  }
</style>
