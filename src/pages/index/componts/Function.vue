<template>
  <view class="glass-content">
    <!-- 内容区域 -->
    <view class="container-1" @tap="toNavgetor1">
      <view class="top-text">宠物种类识别</view>
      <view class="bottom-content">
        <image src="@\static\picture\carme.png"></image>
        <text>深入了解宠物的相关信息</text>
      </view>
    </view>
    <view class="container" @tap="toNavgetor2">
      <view class="top-text">健康情绪分析</view>
      <view class="bottom-content">
        <image src="@\static\picture\voice.png"></image>
        <text>听听宠物的悄悄话</text>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
const toNavgetor1 = () => {
  uni.navigateTo({
    url: '/pages/index/homePetMess/PetIdentification/PetIdentification',
  })
}
const toNavgetor2 = () => {
  uni.navigateTo({
    url: '/pages/index/homePetMess/SentimentAnalysis/SentimentAnalysis',
  })
}
</script>
<style lang="scss">
.glass-content {
  margin: 20rpx 20rpx 0 20rpx;
  height: 230rpx;
  padding: 24rpx 20rpx 20rpx;
  display: flex;
  justify-content: center;
  // top: 50%;
  // left: 50%;
  // 阴影
  // box-shadow: 2px 2px 4px rgba(63, 63, 63, 0.2);
  background-color: rgba(255, 255, 255, 0.801); /* 半透明的背景色 */
  backdrop-filter: blur(10px); /* 模糊效果，根据需要调整模糊程度 */
  border-radius: 15px 15px 0 0;
  // 边框
  border-left: 2rpx solid #c5c5c5e5;
  border-right: 2rpx solid #c5c5c5e5;
  border-top: 2rpx solid #c5c5c5e5;
  /* 其他样式属性 */
}
.container-1 {
  text-align: center;
  // 边框
  border-right: 2rpx solid #c5c5c5e5;
  height: 200rpx;
}
.container {
  text-align: center;
  height: 200rpx;
}

.top-text {
  font-size: 20px;
  line-height: 1;
}

.bottom-content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  height: 100rpx;
}

.bottom-content image {
  width: 100rpx; /* 调整图片的宽度 */
  height: 100rpxs;
  margin-left: 10px;
  will-change: transform;
}

.bottom-content text {
  width: 200rpx;
  font-size: 15px;
  line-height: 1;
  margin-left: 20rpx;
}
</style>
