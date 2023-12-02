<script setup lang="ts">
import { useMemberStore } from '@/stores'
import { http } from '@/utils/http'

const memberStore = useMemberStore()
const sentRequest = async () => {
  // 将请求函数封装到http中返回一个参数Promise 使用res接收
  const res = await http({
    method: 'GET',
    url: '/member/profile',
  })
  console.log('请求成功', res)
}
</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button
      @tap="
        memberStore.setProfile({
          nickname: 'PetAIRoot',
          token: '12345',
        })
      "
      size="mini"
      plain
      type="primary"
    >
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="sentRequest" size="mini" plain type="warn">获取数据</button>
  </view>
</template>

<style lang="scss">
//
</style>
