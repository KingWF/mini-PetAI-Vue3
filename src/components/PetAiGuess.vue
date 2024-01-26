<script setup lang="ts">
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { PageParams } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted } from 'vue'
import { ref } from 'vue'

// 分页参数 使用Required将可选变为必选
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 5,
}
// 标记是否达到最大页数
const finish = ref(false)
//获取猜你喜欢数据
const goodguessList = ref<GuessItem[]>([])
const getHomeGoodsGuessLikeData = async () => {
  // 判断是否达到最大页数
  if (finish.value) {
    return uni.showToast({ icon: 'none', title: '没有更多了~' })
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  // 数组追加
  goodguessList.value.push(...res.result.items)
  if (pageParams.page < res.result.pages) {
    // 增加页码
    pageParams.page++
  } else {
    finish.value = true
  }
}

// 组件挂载完毕
onMounted(() => {
  getHomeGoodsGuessLikeData()
})
// 在刷新后重置数据
const resetData = () => {
  pageParams.page = 1
  goodguessList.value = []
  finish.value = false
}
// 暴露方法给父组件
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="search">
    <text class="icon-search">搜索商品</text>
    <text class="icon-scan"></text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in goodguessList"
      :key="item.id"
      url="/pages/goods/goods"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">食谱介绍：</text>
        <text>{{ item.textDec }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text" v-if="finish"> 没有更多数据了... </view>
  <view class="loading-text" v-else> 正在加载... </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rpx 0 26rpx;
  height: 64rpx;
  margin: 16rpx 20rpx;
  color: #fff;
  font-size: 28rpx;
  border-radius: 32rpx;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
