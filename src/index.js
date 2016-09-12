import Vue from 'vue'
import Index from './components/Index.vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Account from './components/Account.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
import auth from './auth'

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
            '/login':{
                name:'login',
                component:Login
            }
        }
    },
    //没有页头
    '/account':{
        name:'account',
        component:Account
    }
})

router.start(Index, '#app')

