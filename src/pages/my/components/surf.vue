<template>
  <view class="box" v-if="memberStore.profile">
    <related>
      <template #head>
        <div>1</div>
      </template>
      <template #bottom>
        <div>我的帖子</div>
      </template>
    </related>
    <related>
      <template #head>
        <div>1</div>
      </template>
      <template #bottom>
        <div>我的收藏</div>
      </template>
    </related>
    <related>
      <template #head>
        <div>12</div>
      </template>
      <template #bottom>
        <div>浏览历史</div>
      </template>
    </related>
  </view>
  <view class="fail" v-else>
    <related>
      <template #head>
        <div>0</div>
      </template>
      <template #bottom>
        <div>我的帖子</div>
      </template>
    </related>
    <related>
      <template #head>
        <div>0</div>
      </template>
      <template #bottom>
        <div>我的收藏</div>
      </template>
    </related>
    <related>
      <template #head>
        <div>0</div>
      </template>
      <template #bottom>
        <div>浏览历史</div>
      </template>
    </related>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import Related from './related.vue'
// 获取会员信息
const memberStore = useMemberStore()
</script>
<style scoped lang="scss">
.box {
  width: 650rpx;
  height: 150rpx;
  background-color: white;
  margin: auto;
}
.fail {
  width: 650rpx;
  height: 150rpx;
  background-color: white;
  margin: auto;
}
</style>
