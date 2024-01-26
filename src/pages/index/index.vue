<script setup lang="ts">
import CustomNavbar from './componts/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import type { PetAiGuessInstance } from '@/types/component'
import PetProfiles from './componts/PetProfiles.vue'
import Function from './componts/Function.vue'
import Function2 from './componts/Function2.vue'
import RecommendGoods from './componts/SuggesstionGoods.vue'

// 通过封装在ts文件中的API来获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

const guessRef = ref<PetAiGuessInstance>()
// 下拉刷新
const isRefresher = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启下拉刷新
  isRefresher.value = true
  //重置猜你喜欢的数据
  guessRef.value?.resetData()
  // 调用首页三个组件的方法重新获取数据 并使用await开启同步
  // await getHomeBannerData()
  // await getHomeCatefgoryData()
  // await getHomeHotData()

  /**
   *  在每个方法前面使用await来实现同步依此线程导致浪费时间
   *  可以使用Promise.all来将所有的Promise都放到一起 并使用await实现请求时间最佳
   */
  await Promise.all([getHomeBannerData(), guessRef.value?.getMore()])
  // 关闭下拉刷新
  isRefresher.value = false
}
// 是否加载中的标记
const isLoading = ref(false)
// 页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData()])
  isLoading.value = false
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- <image src="@/static/icon/圣诞冰淇淋.png" mode="scaleToFill" /> -->
  <!-- 定义骨架屏
    <PageSkeleton v-if="isLoading" /> -->
  <!-- 轮播图 -->
  <!-- <PetAiSwiper :list="bannerList" /> -->
  <!-- 板块 -->
  <PetProfiles></PetProfiles>
  <Function></Function>
  <Function2></Function2>
  <!-- 猜你喜欢 -->
  <!-- <PetAiGuess ref="guessRef" /> -->
  <!-- 推荐 -->
  <RecommendGoods></RecommendGoods>
</template>

<style lang="scss">
page {
  background-color: rgb(224, 224, 224);
  height: 100%;
  // display: flex;
  // flex-direction: column;
}
</style>
