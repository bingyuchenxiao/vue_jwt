<style lang="css" src='../assets/account.css' scoped></style>
<template>
  <div class="acontainer">
    <div class="account" v-bind:class="{ 'r': isR, 'a': isA }" v-bind:style="{ top: up + 'px' }" v-on:touchstart="onTouchStart" v-on:touchend="onTouchEnd" v-on:touchmove="onTouchMove">
     
      <div class="info">
        <div class="top">
          <img class="photo img-circle img-responsive" v-bind:src="photo">
          <p class="text-center group" id="group">白银会员</p>
          <p class="text-center mobile" id="mobile">13162761012</p>
        </div>
        <div class="row text-center vertical-middle-xs bottom">
          <div class="col-xs-4"><p class="w">账户余额</p></div>
          <div class="col-xs-4"><p class="w">会员积分</p></div>
          <div class="col-xs-4"><p class="w">红包</p></div>
        </div>
      </div>
      <div class="jiugongge" v-on:click="onClick">
        <div class="row text-center">
          <div class="col-xs-4"><p id="order">我的订单</p></div>
          <div class="col-xs-4"><p id="review">评价晒单</p></div>
          <div class="col-xs-4"><p id="aftersale">申请售后</p></div>
        </div>
        <div class="row text-center">
          <div class="col-xs-4"><p id="redeem">充值更省</p></div>
          <div class="col-xs-4"><p>免费拿红包</p></div>
          <div class="col-xs-4"><p>幸运摇一摇</p></div>
        </div>
        <div class="row text-center">
          <div class="col-xs-4"><p>地址管理</p></div>
          <div class="col-xs-4"><p>账户资料</p></div>
          <div class="col-xs-4"><p>联系客服</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
import config from '../config'
import {router} from '../index'
export default {

  data() {
    return {
      up:0,
      isR:true,
      isA:false,
      handle:false,
      footer: true,
      name: auth.user.info.usermobile,
      photo:'http://media.freshfresh.com/media/catalog/product/cache/1/thumbnail/0dc2d03fe217f8c83829496872af24a0/_/2/_2_2_94_1.jpg'
    }
  },
  props: ['showFooter3']
  ,
  created(){
    this.$dispatch("showFooter", this.footer);
  },
  methods: {
    onSwipeDown: function (e) {
      var x=event.currentTarget
    },
    onTouchStart: function(e){
      //this.isA = true
      //this.isR = false
    },
    onTouchMove: function(e){
      this.isA = true
      this.isR = false
      if(this.up>=100) return
      this.up += 2.5;
    },
    onTouchEnd: function(e){
      this.handle = setInterval( this.moveTop.bind(this), 2)
    },
    moveTop: function(){
      this.up -= 3
      if(this.up <= 0) clearInterval(this.handle)
      this.isA = false
      this.isR = true
    },
    handle: function(){
      setInterval( this.moveTop.bind(this), 100)
    },
    onClick: function(e){
      this.footer = false
      if(!auth.user.authenticated){
        router.go('login')
      }
        
    }
  }
}
</script>
