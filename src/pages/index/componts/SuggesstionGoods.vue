<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { getRecommendGoodsAPI } from '@/services/home'
import type { RecommendGoodsItem } from '@/types/home'
import { reactive } from 'vue'

// 设置tab集合
const tabsName = reactive(['食谱', '保健', '出行'])
// 设置动态设置高亮的下标
const activeIndex = ref(0)

// 推荐数据的list
const recommendList = ref<RecommendGoodsItem[]>([])

// 获取数据
const getHotRecommendData = async () => {
  const res = await getRecommendGoodsAPI({
    // 在开发时，用DEV模式下直接从30开始获取 正常用户使用下页码从1开始 import.meta.env.DEV ? 2 : 1
    page: 1,
    pageSize: 5,
  })
  console.log(res.result)
  recommendList.value = res.result.items
}
// 到底的标识
const isScrolltolower = ref(false)
// 下拉触底
const onScrolltolower = async () => {
  console.log(activeIndex.value)
  // 获取当前tab下的数据
  const curr = recommendList.value[activeIndex.value]
  console.log('触底了！')
  if (curr.goodsItems.page >= curr.goodsItems.pages) {
    // 没有更多数据了
    if (isScrolltolower.value) {
      uni.showToast({
        title: '没有更多数据~',
        icon: 'none',
      })
      return
    }
  }
  console.log(curr)
  // 增加页码
  curr.goodsItems.page++
  const res = await getRecommendGoodsAPI({
    subType: activeIndex.value,
    page: curr.goodsItems.page,
    pageSize: curr.goodsItems.pageSize,
  })
  console.log(res)
  curr.goodsItems.items.push(...res.result.items[activeIndex.value].goodsItems.items)
  // 判断是否到底了
  if (curr.goodsItems.page >= curr.goodsItems.pages) {
    isScrolltolower.value = true
  }
}
// 测试
const test = (val: number) => {
  activeIndex.value = val
  console.log(val)
}
onLoad(() => {
  getHotRecommendData()
})
</script>

<template>
  <!-- 推荐选项 -->
  <view class="tabs">
    <!-- 搜索 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
    </view>
    <text
      v-for="(item, index) in recommendList"
      :key="index"
      class="text"
      :class="{ active: index === activeIndex }"
      @tap="test(index)"
      >{{ recommendList[index].name }}</text
    >
  </view>
  <!-- 推荐列表 -->
  <scroll-view
    scroll-y
    class="scroll-view"
    v-for="(item, index) in recommendList"
    :key="index"
    v-show="index === activeIndex"
    @scrolltolower="onScrolltolower"
  >
    <view class="goods">
      <navigator
        hover-class="none"
        class="navigator"
        v-for="goods in item.goodsItems.items"
        :key="goods.id"
        :url="`/pages/goods/goods?id=${goods.id}`"
      >
        <image class="thumb" :src="goods.pic"></image>
        <view class="name ellipsis">{{ goods.name }}</view>
        <view class="price">
          <text class="symbol">备注：</text>
          <text class="number">{{ goods.text }}</text>
        </view>
      </navigator>
    </view>
    <view class="loading-text" v-if="isScrolltolower">没有更多数据了...</view>
    <view class="loading-text" v-else>正在加载...</view>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.search {
  width: 300rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rpx 0 20rpx;
  height: 64rpx;
  margin: 20rpx 10rpx;
  color: #0e0e0e93;
  font-size: 28rpx;
  border-radius: 32rpx;
  background-color: rgba(255, 255, 255, 0.5);
  // 边框
  border: 2rpx solid #c5c5c5e5;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 20rpx;
  box-shadow: 0 4rpx 5rpx rgba(155, 155, 155, 0.541);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 50rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
