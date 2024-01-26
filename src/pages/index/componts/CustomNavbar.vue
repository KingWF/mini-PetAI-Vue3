<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/petAiPic/PetAI-logo.png"></image>
      <text class="logo-text">一站式智能宠物管理平台</text>
    </view>
    <!-- 搜索条 -->
    <!-- <view class="search">
      <text class="icon-search">搜索资讯</text>
      <text class="icon-scan"></text>
    </view> -->
  </view>
</template>

<script lang="ts" setup>
// 获取安全距离 适配不同的机型
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log(safeAreaInsets)
</script>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  height: 160rpx;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 20rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
}
</style>
