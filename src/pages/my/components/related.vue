<template>
  <view class="box">
    <div class="head">
      <slot name="head"></slot>
    </div>
    <div class="bottom"><slot name="bottom"></slot></div>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.box {
  width: 150rpx;
  height: 150rpx;
  background-color: white;
  display: inline-block;
  margin-left: 50rpx;
  position: relative;
  .head {
    position: absolute;
    text-align: center;
    left: 60rpx;
    top: 20rpx;
  }
  .bottom {
    position: absolute;
    top: 80rpx;
    left: 10rpx;
  }
}
</style>
