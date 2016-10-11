<style lang="css" src="../assets/login.css" scoped></style>
<template>

<div class="login container">
  <p class="link back"><span @click="back()">返回</span><span>登录</span><span>注册</span></p>
  <div class="cform">
    <p><span><a class="a active">账号登录</a></span><span><a class="b">短信登录</a></span></p>
    <div>
        <validator name="validation1">
          <form novalidate>
            <input id="mobile" name="mobile" type="text" class="form-control" v-validate:mobile="{required: true,pattern: '/^1(3|4|5|6|7|8)\d{9}$/'}" v-model="mobile" placeholder="请输入手机号">
            <input id="password" type="password" class="form-control" v-validate:password="{required: true, maxlength: 8, minlength: 6}" v-model="password" placeholder="登录密码">
            <div class="errors" v-show="$validation1.mobile.touched">
              <p v-show="$validation1.mobile.required">手机号码不能为空</p>
              <p v-show="!$validation1.mobile.required && $validation1.mobile.pattern">手机号码错误</p>
              
            </div>
            <div class="errors" v-show="$validation1.password.touched">
              <p v-show="$validation1.password.required">密码不能为空</p>
              <p v-show="!$validation1.password.required && $validation1.password.maxlength">密码长度不能大于8位！</p>
              <p v-show="!$validation1.password.required && $validation1.password.minlength">密码长度不能小于6位！</p>
            </div>
            <p type="submit" class="fbnt" value="登录">登录</p>
          </form>
        </validator>
    </div>
    
  </div>
</div>
</template>

<script>
import auth from '../auth'
import config from '../config'
import {router} from '../index.js'
export default {

  data() {
    return {
        mobile: '',
        password: '',
      error: ''
    }
  },

  methods: {
    back(){
      router.go('account');
    },
    submit() {
      
      var credentials = {
        mobile: this.credentials.mobile,
        password: this.credentials.password
      }
     
      auth.login(this, credentials, 'account')

    }
  }
  
}
</script>