<template>
  <div class="container">
    <router-view></router-view>
  </div>

  <Footers v-if="showFooter"></Footers>
  <Error v-if="showError" :error-msg.sync="errorMsg"></Error>

</template>

<script>
import auth from '../auth'
import config from '../config'
import footer from './page/Footer.vue'
import error from './page/Error.vue'
import {Vue} from '../index'
 /*Vue.component("child", {
    //声明props属性
    props: ['msg'],
    //props可以用在模板内
    //可以用"this.msg"设置
    template: '<div>msg: {{msg}}</div>'
});*/
export default {
  data() {
    return {
      showError:false,
      showFooter: false,
      errorMsg: '',
      user: auth.user,
      navbar: config.page.navbar
    }
  },
  components:{
      Footers: footer,
      Error: error
  },
  events: {
    //分发事件到vm实例中， 在创建实例时 `events` 选项简单地调用 `$on`
    showFooter: function(footer) {
      this.showFooter = footer
    },
    showError: function(error) {
	  console.info(22222)
      this.showError = error.error
      this.errorMsg = error.msg
      //this.$broadcast("setErrorMsg", error.msg);
    }

  },
  methods: {

    logout() {
      auth.logout()
    }
  }
}
</script>