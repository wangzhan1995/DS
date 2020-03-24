import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      title:'登录',
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import("../views/Home.vue"),
  children:[
    {
      path:"helloLogin",
      name:"HelloLogin",
      component:()=>import("@/components/HelloLogin.vue"),
      meta:{
        title:'ibook管理',
        requireAuth:true
      },
    },
    {
      path:"userInformation",
      name:"UserInformation",
      component:()=>import("@/components/UserInformation.vue"),
      meta:{
        title:"用户管理",
        authRequire:true
      }
    },
    {
      path:"userReceivingAddress",
      name:"UserReceivingAddress",
      component:()=>import("@/components/UserReceivingAddress.vue"),
      meta:{
        title:"用户管理",
        authRequire:true
      }
    },
    {
      path:"userIntegral",
      name:"UserIntegral",
      component:()=>import("@/components/UserIntegral.vue"),
      meta:{
        title:"用户管理",
        authRequire:true
      }
    },
    {
      path:"userMember",
      name:"UserMember",
      component:()=>import("@/components/UserMember.vue"),
      meta:{
        title:"用户管理",
        authRequire:true
      }
    },
    {
      path:"bookInformation",
      name:"BookInformation",
      component:()=>import("@/components/BookInformation.vue"),
      meta:{
        title:"图书管理",
        authRequire:true
      }
    },
    {
      path:"upperLowerShelf",
      name:"UpperLowerShelf",
      component:()=>import("@/components/UpperLowerShelf.vue"),
      meta:{
        title:"图书管理",
        authRequire:true
      }
    },
    {
      path:"activityBanner",
      name:"ActivityBanner",
      component:()=>import("@/components/ActivityBanner.vue"),
      meta:{
        title:"活动管理",
        authRequire:true
      }
    },
    {
      path:"activityDiscount",
      name:"ActivityDiscount",
      component:()=>import("@/components/ActivityDiscount.vue"),
      meta:{
        title:"活动管理",
        authRequire:true
      }
    },
    {
      path:"activityFullReduction",
      name:"ActivityFullReduction",
      component:()=>import("@/components/ActivityFullReduction.vue"),
      meta:{
        title:"活动管理",
        authRequire:true
      }
    },
    {
      path:"priceNotice",
      name:"PriceNotice",
      component:()=>import("@/components/PriceNotice.vue"),
      meta:{
        title:"降价推送通知",
        authRequire:true
      }
    },
    {
      path:"orderState",
      name:"OrderState",
      component:()=>import("@/components/OrderState.vue"),
      meta:{
        title:"订单管理"
      }
    },
    {
      path:"orderDetails",
      name:"OrderDetails",
      component:()=>import("@/components/OrderDetails.vue"),
      meta:{
        title:"订单管理"
      }
    },
    {
      path:"inventoryManagement",
      name:"InventoryManagement",
      component:()=>import("@/components/InventoryManagement.vue"),
      meta:{
        title:"库存管理"
      }
    },
    {
      path:"afterSale",
      name:"AfterSale",
      component:()=>import("@/components/AfterSale.vue"),
      meta:{
        title:"售后管理"
      }
    },
    {
      path:"customerService",
      name:"CustomerService",
      component:()=>import("@/components/CustomerService.vue"),
      meta:{
        title:"客服"
      }
    }
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
// router.afterEach((to,from,next)=>{
//   // console.log(to)
//   document.title=to.meta.title;
// })

router.beforeEach((to, from, next) => {
  if (document.title !== to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default router
