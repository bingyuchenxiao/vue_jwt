import {router} from '../index'
import config from '../config'

const API_URL = 'http://127.0.0.1/fmagento/'
const LOGIN_URL = API_URL + 'mobile/v4/index/uri/customer.account.userLoginWithPhone'
const SIGNUP_URL = API_URL + 'users/'

export default {

  user: {
    authenticated: false,
    info: false
  },

  login(context, creds, redirect) {
    //  alert(this.vm)
    //  return
    context.$http.get(LOGIN_URL, creds, (data) => {
      //  alert(vm.navbar)
      //  vm.navbar = 0
      //  alert(vm.navbar)
      //  return
      if(data.result == '0'){
        alert(data.errorMsg); 
        return; 
      }
      // localStorage.setItem('id_token', data.data.userToken)
      // localStorage.setItem('user', data.data)
      this.user.authenticated = true
      this.user.info = data.data
      config.page.navbar = 33
      // config.page.$set('navbar', false)
      // Vue.$set(config.page, 'navbar', '33')
      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {

      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('user')
    this.user.authenticated = false
    this.user.info = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
