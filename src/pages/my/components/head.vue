<template>
  <view class="boxsuccess" v-if="memberStore.profile">
    <image class="head" :src="memberStore.profile.avatar"></image>
    <view class="right">
      <div class="first">
        <div class="name">{{ memberStore.profile.nickname }}</div>
        <div class="edit"><button @tap="Edit">编辑</button></div>
      </div>
      <div class="second">
        <div class="focus">关注5</div>
        <div class="fans">粉丝3</div>
      </div>
    </view>
  </view>
  <view class="boxfail" v-else>
    <image
      class="head"
      src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png"
    ></image>
    <view class="right">
      <div class="first">
        <div class="name">未登录</div>
        <div class="edit"><button @tap="Edit">编辑</button></div>
      </div>
      <div class="second">
        <div class="focus">关注0</div>
        <div class="fans">粉丝0</div>
      </div>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'

const Edit = () => {
  uni.navigateTo({
    url: '/pages/my/components/EditInformation',
  })
}
// 获取会员信息
const memberStore = useMemberStore()
</script>

<style lang="scss" scoped>
.boxsuccess {
  position: relative;
  width: 650rpx;
  height: 150rpx;
  background-color: white;
  margin: auto;
  .head {
    position: absolute;
    width: 120rpx;
    height: 120rpx;
    background-color: black;
    border-radius: 30px;
    margin-left: 30rpx;
    top: 15rpx;
    float: left;
  }
  .right {
    position: relative;
    margin-left: 200rpx;
    .first {
      position: absolute;
      top: 15rpx;
      .name {
        display: inline-block;
        font-size: 20px;
      }
      .edit {
        display: inline-block;
        margin-left: 40rpx;
        margin-top: 20rpx;
        button {
          font-size: 10px;
          border-radius: 50px;
        }
      }
    }
    .second {
      position: absolute;
      top: 110rpx;
      .focus {
        display: inline-block;
        font-size: 15px;
      }
      .fans {
        margin-left: 30rpx;
        display: inline-block;
        font-size: 15px;
      }
    }
  }
}
.boxfail {
  position: relative;
  width: 650rpx;
  height: 150rpx;
  background-color: white;
  margin: auto;
  .head {
    position: absolute;
    width: 120rpx;
    height: 120rpx;
    background-color: black;
    border-radius: 30px;
    margin-left: 30rpx;
    top: 15rpx;
    float: left;
  }
  .right {
    position: relative;
    margin-left: 200rpx;
    .first {
      position: absolute;
      top: 15rpx;
      .name {
        display: inline-block;
        font-size: 20px;
        color: gray;
      }
      .edit {
        display: inline-block;
        margin-left: 40rpx;
        margin-top: 20rpx;
        button {
          font-size: 10px;
          border-radius: 50px;
        }
      }
    }
    .second {
      position: absolute;
      top: 110rpx;
      .focus {
        display: inline-block;
        font-size: 15px;
      }
      .fans {
        margin-left: 30rpx;
        display: inline-block;
        font-size: 15px;
      }
    }
  }
}
</style>
