import Vue from 'vue'
import Index from './components/Index.vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Account from './components/Account.vue'
import Account2 from './components/account/Account.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './auth'

Vue.use(VueResource)
Vue.use(VueRouter)
var VueTouch = require('vue-touch')
Vue.use(VueTouch)
var VueValidator = require('vue-validator')
Vue.use(VueValidator)



Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()
var page = { navbar: 1 }
var vm = new Vue({
  data: {
    navbar: 1
  }
  //  watch: {
  //  'a': function (val, oldVal) {
  //    console.log('new: %s, old: %s', val, oldVal)
  //  }
    // 方法名
    // 'b': 'someMethod',
    //  深度 watcher
    // 'c': {
    //  handler: function (val, oldVal) { /* ... */ },
    //  deep: true
    //  }
  //  }
})

export var router = new VueRouter()

/*  router.map({
  '/home': {
    component: Home
  },
  'secretquote': {
    component: SecretQuote
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  },
  '/usercenter': {
    component: Usercenter
  }
})
router.redirect({
  '*': '/home'
})*/

router.map({
    //默认指向index
    '/':{
        name:'app',
        component:App,
        //子路由(有页头)
        subRoutes:{
            '/home':{
                name:'home',
                component:Home
            },
            '/account':{
                name:'account',
                component: (resolve) => require(['./components/Account.vue'],resolve)    
                
            },
            '/login':{
              name:'login',
              component:(resolve) => require(['./components/Login.vue'],resolve)
            },
        }
    },
    //没有页头
    '/account2':{
        name:'account2',
        component:Account
    },
    '/login2':{
        name:'login',
        component:(resolve) => require(['./components/Login.vue'],resolve)
      },
})
router.redirect({
  '*': '/home'
})
router.start(Index, '#app')

