<template>
  <view class="glass-content">
    <!-- 内容区域 -->
    <view class="box">
      <image src="@\static\picture\Find_pic.png" />
      <view class="caption">丢失查找</view>
    </view>
    <view class="box">
      <image src="@\static\picture\Doc_pic.png" />
      <view class="caption">在线就诊</view>
    </view>
    <view class="box">
      <image src="@\static\picture\Cons_pic.png" />
      <view class="caption">智能咨询</view>
    </view>
    <view class="box">
      <image src="@\static\picture\Alarm_pic.png" />
      <view class="caption">紧急情况处理</view>
    </view>
  </view>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.glass-content {
  margin: 0 20rpx 20rpx 20rpx;
  height: 200rpx;
  padding: 24rpx 20rpx 20rpx;
  display: flex;
  justify-content: center;
  // top: 50%;
  // left: 50%;
  // 阴影
  // box-shadow: 2px 2px 4px rgba(63, 63, 63, 0.2);
  background-color: rgba(255, 255, 255, 0.801); /* 半透明的背景色 */
  backdrop-filter: blur(10px); /* 模糊效果，根据需要调整模糊程度 */
  border-radius: 0 0 15px 15px;
  // 边框
  border-left: 2rpx solid #c5c5c5e5;
  border-right: 2rpx solid #c5c5c5e5;
  border-bottom: 2rpx solid #c5c5c5e5;
  /* 其他样式属性 */
}
.box {
  flex: 1;
  text-align: center;
  margin: 10px;
}
.box image{
  width: 70rpx;
  height: 70rpx;
}

.caption {
  margin-top: 10px;
  font-size: 20rpx;
}
</style>
