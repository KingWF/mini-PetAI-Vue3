<template>
  <!-- 自定义导航栏 -->
  <CNavbar />
  <div class="success" v-if="memberStore.profile">
    <Head class="head"></Head>
    <Surf class="surf"></Surf>
    <pButton @tap="ShoppingCart">购物车</pButton>
    <pButton @tap="MyOrder">我的订单</pButton>
    <pButton @tap="MyPrivacy">隐私设置</pButton>
    <pButton @tap="Business">商家注册</pButton>
    <button><div class="word">退出登录</div></button>
  </div>
  <div class="fail" v-else>
    <Head class="head"></Head>
    <Surf class="surf"></Surf>
    <pButton @tap="ShoppingCart">购物车</pButton>
    <pButton @tap="MyOrder">我的订单</pButton>
    <pButton @tap="MyPrivacy">隐私设置</pButton>
    <pButton @tap="Business">商家注册</pButton>
    <button><div class="word">点击登录账号</div></button>
  </div>
</template>

<script setup lang="ts">
import CNavbar from './components/CNavbar.vue'
import Surf from './components/surf.vue'
import Head from './components/head.vue'
import pButton from './components/pButton.vue'
import { useMemberStore } from '@/stores/modules/member'

const ShoppingCart = () => {
  uni.navigateTo({
    url: '/pages/my/components/ShoppingCart',
  })
}
const MyOrder = () => {
  uni.navigateTo({
    url: '/pages/my/components/MyOrder',
  })
}
const MyPrivacy = () => {
  uni.navigateTo({
    url: '/pages/my/components/MyPrivacy',
  })
}
const Business = () => {
  uni.navigateTo({
    url: '/pages/my/components/Business',
  })
}

// 获取会员信息
const memberStore = useMemberStore()
</script>

<style lang="scss" scoped>
.success {
  background-color: #f7f7f8;
  height: 1300rpx;
  // display: flex;
  // flex-direction: column;
  button {
    width: 250rpx;
    height: 90rpx;
    margin-top: 50rpx;
    border-radius: 15px;
    justify-content: center;
    .word {
      color: red;
      text-align: center;
      justify-content: center;
    }
  }
}
.fail {
  background-color: #f7f7f8;
  height: 1300rpx;
  // display: flex;
  // flex-direction: column;
  button {
    width: 250rpx;
    height: 90rpx;
    margin-top: 50rpx;
    border-radius: 15px;
    justify-content: center;
    .word {
      color: red;
      text-align: center;
      justify-content: center;
      font-size: 15px;
    }
  }
}
</style>
