<template>
  <view class="box">
    <div class="COM_search left">
      <input v-model="inputValue" type="text" placeholder="搜索" />
      <image src="/static/communityImages/查找.png"></image>
    </div>
    <div class="right">
      <div class="recommend">推荐</div>
      <div class="myFollow">关注</div>
      <div class="nearby">附近</div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>

<style lang="scss">
.box {
  width: 100%;
  height: 79rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box .COM_search {
  width: 300rpx;
  height: 50rpx;
  float: left;
  position: relative;
  margin-left: 30rpx;
}
.box .COM_search input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 20rpx;
  border: 1rpx solid #797979;
  border-radius: 30rpx;
}
.box .COM_search image {
  width: 25rpx;
  height: 25rpx;
  position: absolute;
  top: 12rpx;
  left: 12rpx;
}
.box .right {
  display: flex;
  float: right;
}
.box .right .recommend,
.myFollow,
.nearby {
  border-radius: 20rpx;
  margin-right: 8rpx;
  width: 100rpx;
  height: 50rpx;
  font-size: 20rpx;
  line-height: 50rpx;
  border: 1rpx solid #797979;
  text-align: center;
}
.box .right .nearby {
  margin-right: 30rpx;
}
</style>
