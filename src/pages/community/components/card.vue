<template>
  <view class="box" v-for="(item, index) in communityData" :key="index">
    <div class="box1">
      <div class="left">
        <div class="COM_ava">
          <image :src="item.comAva" />
        </div>
        <div class="my">
          <div class="COM_name">{{ item.comName }}</div>
          <div class="COM_Intro">{{ item.comIntro }}</div>
        </div>
      </div>
      <div class="right">关注</div>
    </div>
    <div class="title">{{ item.titlecontent }}</div>
    <div class="text">{{ item.text }}</div>
    <div class="picture">
      <div
        v-for="(image, index) in item.comPics.slice(0, 3)"
        :key="index"
        class="image-wrapper"
        :style="{ zIndex: index === 2 ? '2' : '1' }"
      >
        <img :src="image" alt="Image" />
        <div v-if="index === 2 && item.comPics.length > 3" class="overlay">
          +{{ item.comPics.length - 3 }}
        </div>
      </div>
    </div>
    <div class="bottom">
      <image src="/static/communityImages/点赞.png"></image>
      <image src="/static/communityImages/消息.png"></image>
      <image src="/static/communityImages/分享.png"></image>
    </div>
  </view>
  <div class="add" @click="add">+</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { communityItem } from '@/types/community'
import { getCommunityDataAPI } from '@/services/community'
import { onLoad } from '@dcloudio/uni-app'

const communityData = ref<communityItem[]>([])
const getCommunityData = async () => {
  const res = await getCommunityDataAPI()
  for (let i = 0; i < res.result.length; i++) {
    res.result[i].comPics = res.result[i].comPic.split(',')
  }
  //反转获取的信息，保证用户发表说说后，是出现在页面的第一个位置
  res.result = res.result.slice().reverse()
  communityData.value = res.result
}

const add = () => {
  uni.navigateTo({
    url: '/pages/community/components/add',
  })
}

onLoad(() => {
  getCommunityData()
})
</script>

<style lang="scss">
.box {
  width: 600rpx;
  height: 477rpx;
  margin-left: 73rpx;
  margin-top: 25rpx;
  border-radius: 42rpx;
  border: 1rpx solid #797979;
}
.box .box1 {
  display: flex;
  justify-content: space-between;
}
.box .box1 .left {
  float: left;
  display: flex;
  .COM_ava {
    width: 66rpx;
    height: 66rpx;
    margin-left: 25rpx;
    margin-top: 12rpx;
    & image {
      width: 100%;
      height: 100%;
      border-radius: 50rpx;
    }
  }
  .my {
    margin-top: 12rpx;
    margin-left: 16rpx;
    .COM_name {
      height: 28rpx;
      font-size: 28rpx;
      line-height: 28rpx;
    }
    .COM_Intro {
      margin-top: 9rpx;
      font-size: 21rpx;
      height: 21rpx;
      line-height: 21rpx;
    }
  }
}
.box .box1 .right {
  float: right;
  width: 100rpx;
  height: 40rpx;
  border: 1rpx solid #797979;
  border-radius: 16rpx;
  font-size: 25rpx;
  line-height: 40rpx;
  text-align: center;
  margin-top: 26rpx;
  margin-right: 26rpx;
}
.box .title {
  margin-left: 30rpx;
  margin-top: 18rpx;
  height: 28rpx;
  font-size: 28rpx;
  line-height: 28rpx;
  font-weight: 600;
}
.box .text {
  white-space: pre-wrap;
  width: 550rpx;
  height: 42rpx;
  line-height: 20rpx;
  font-size: 20rpx;
  margin-left: 30rpx;
  margin-top: 16rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.box .picture {
  display: flex;
  flex-wrap: wrap;
  width: 555rpx;
  height: 180rpx;
  margin-left: 30rpx;
  margin-top: 32rpx;
  position: relative;
  .image-wrapper {
    width: 180rpx;
    height: 180rpx;
    box-sizing: border-box;
    border: 1rpx solid #797979;
    margin: 1rpx;
    .overlay {
      position: absolute;
      top: 0;
      right: 8rpx;
      width: 180rpx;
      height: 180rpx;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 18px;
    }
  }
}
.box .bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 22rpx;
  & image {
    width: 50rpx;
    height: 50rpx;
  }
  & image:first-child {
    margin-left: 68rpx;
  }
  & image:last-child {
    margin-right: 68rpx;
  }
}
.add {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  line-height: 80rpx;
  font-weight: 600;
  font-size: 40rpx;
  text-align: center;
  position: fixed;
  z-index: 100;
  bottom: 50rpx;
  right: 22rpx;
  background-color: antiquewhite;
}
</style>
