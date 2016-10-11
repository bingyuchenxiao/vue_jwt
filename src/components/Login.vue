<style lang="css" src="../assets/login.css" scoped></style>
<template>

<div class="login container">
  <p class="link back"><span @click="back()">返回</span><span>登录</span><span>注册</span></p>
  <div class="cform">
    <p><span><a class="a active">账号登录</a></span><span><a class="b">短信登录</a></span></p>
    <div>
        <validator name="validation1">
          <form novalidate>
            <input id="mobile" name="mobile" type="text" class="form-control" v-validate:mobile="{required: true,pattern: '/^1[34578]\d{9}$/' }" v-model="mobile" placeholder="请输入手机号">
            <input id="password" type="password" class="form-control" v-validate:password="{required: true, maxlength: 8, minlength: 6}" v-model="password" placeholder="登录密码">
            <!--<div class="errors" v-show="$validation1.mobile.touched">
              <p v-show="$validation1.mobile.required">手机号码不能为空</p>
              <p v-show="!$validation1.mobile.required && $validation1.mobile.pattern">手机号码错误</p>
              
            </div>
            <div class="errors" v-show="$validation1.password.touched">
              <p v-show="$validation1.password.required">密码不能为空</p>
              <p v-show="!$validation1.password.required && $validation1.password.maxlength">密码长度不能大于8位！</p>
              <p v-show="!$validation1.password.required && $validation1.password.minlength">密码长度不能小于6位！</p>
            </div>-->
            <p class="fbnt" @click="login()">登录</p>
          </form>
        </validator>
    </div>
    
  </div>
</div>
</template>

<script>
import auth from '../auth'
import config from '../config'
// import error from './page/Error.vue'
import {router} from '../index.js'
export default {

  data() {
    return {
      user: {
          mobile: '',
          password: '',
        },
      mobile: '',
      password: '',
      footer: false,
      apiUrl: 'http://127.0.0.1/fmagento/mobile/v4/index/uri/customer.account.userLoginWithPhone'
    }
  },
  http: {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    credentials: false
  },
  props: ['hideError'],
  created(){
    this.$dispatch("showFooter", this.footer)
  },
  methods: {
    back(){
      router.go('account');
    },
    login(){
      var that = this
      this.$validate(true,function(){
        if(that.$validation1.mobile.required){
          that.$dispatch("showError", {"msg":"请填写手机号码","error":true})
          return
        }
        //if(that.$validation1.mobile.pattern){ //不知道为什么第一次的匹配结果才正确
        if(!/^1[34578]\d{9}$/.test(that.mobile)){
          console.info( /^1[34578]\d{9}$/.test(that.mobile) )
          that.$dispatch("showError", {"msg":"请填写正确的手机号码","error":true})
          return
        }
        if(that.$validation1.password.required){
          that.$dispatch("showError", {"msg":"请填写密码","error":true})
          return
        }
        if(that.$validation1.password.minlength){
          that.$dispatch("showError", {"msg":"密码长度不能小于6位","error":true})
          return
        }
        var credentials1 = {
          mobile: that.mobile,
          password: that.password
        }
        auth.login(that, credentials1, 'account')
      })
      
    },
    post(){
      console.info(333)
      this.$http.post(this.apiUrl,{"username":this.mobile,"password":this.password})
        .then((response) => {
          console.info(44444)
          console.info(response.data)
        })
      },
    submit() {
      
      var credentials = {
        mobile: this.credentials.mobile,
        password: this.credentials.password
      }
     console.info(555555)
      //auth.login(this, credentials, 'account')

    }
  }
  
}
</script>