<template>
  <view class="glass-content">
    <scroll-view scroll-y class="scoll-css">
      <!-- 内容区域 -->
      <view class="container">
        <view class="left-section">
          <view class="circle">
            <image
              src="https://img.zcool.cn/community/01ab5e5aec6354a801219b7f5e6a73.jpg@1280w_1l_2o_100sh.jpg"
            />
          </view>
          <view class="text1">
            <text class="text01">柯基</text>
            <text class="text02">
              <text>小标题</text>
              <text>性别</text>
              <text>年龄</text>
            </text>
          </view>
        </view>
        <view class="right-section">
          <text>右侧文字</text>
        </view>
      </view>
      <view class="container" v-for="item in 3" :key="item">
        <view class="left-section">
          <view class="circle">
            <image
              src="https://ts1.cn.mm.bing.net/th/id/R-C.be1895b6cc60526df6bd79aef4005208?rik=v29k4ZW3ZVFq8g&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140328%2f20140328093026-679114537.jpg&ehk=EPX8WPV2D9J4aUmNtfgcN2KN3X%2fUk2BgISQsCaHMZ2Q%3d&risl=&pid=ImgRaw&r=0"
            />
          </view>
          <view class="text1">
            <text class="text01">柯基</text>
            <text class="text02">
              <text>小标题</text>
              <text>性别</text>
              <text>年龄: {{ item }}</text>
            </text>
          </view>
        </view>
        <view class="right-section">
          <text>右侧文字</text>
        </view>
      </view>
      <!-- 添加宠物 -->
      <uni-fab
        ref="fab"
        :pattern="pattern"
        :content="content"
        horizontal="right"
        vertical="bottom"
        direction="horizontal"
        @trigger="trigger"
      >
      </uni-fab>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const pic1 =
  'https://ts1.cn.mm.bing.net/th/id/R-C.727bd959dac97a2cdd2200de0546fc48?rik=uf%2bQn0NfSuwqdw&riu=http%3a%2f%2fwww.deskcar.com%2fdesktop%2felse%2f2018529201241%2f15.jpg&ehk=E9oLjp552WFha0R57Y2BJ2Lz5ZEmlgss1qOACunmmpQ%3d&risl=&pid=ImgRaw&r=0'
const onClick = (e: any) => {
  console.log(e)
}
// 悬浮按钮属性
const pattern = reactive({
  color: '#7A7E83',
  backgroundColor: '#fff',
  selectedColor: '#007AFF',
  buttonColor: '#007AFF',
  iconColor: '#fff',

})
const content = reactive([
  {
    iconPath: '/static/icon/add002.png',
    selectedIconPath: '/static/icon/add002.png',
    text: '添加',
    active: false,
  },
  {
    iconPath: '/static/icon/reset001.png',
    selectedIconPath: '/static/icon/reset001.png',
    text: '修改',
    active: false,
  },
  {
    iconPath: '/static/icon/dangan.png',
    selectedIconPath: '/static/icon/dangan.png',
    text: '档案',
    active: false,
  },
])
// 悬浮按钮跳转页面链接
const linkList = reactive([
  {
    navToLink: '/pages/index/homePetMess/AddPetMess/AddPetMess',
  },
  {
    navToLink: '/pages/index/homePetMess/SetPetMess/SetPetMess',
  },
  {
    navToLink: '/pages/index/homePetMess/getMorePetMess/getMorePetMess',
  },
])

const trigger = (e: any) => {
  console.log(e.index)
  content[e.index].active = !e.item.active
  uni.navigateTo({
    url: linkList[e.index].navToLink,
  })
}
</script>
<style lang="scss">
.glass-content {
  margin: 20rpx 20rpx;
  height: 200px;

  // top: 20%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // padding: 20px;
  background-color: rgba(255, 255, 255, 0.801); /* 半透明的背景色 */
  backdrop-filter: blur(10px); /* 模糊效果，根据需要调整模糊程度 */
  border-radius: 15px;
  // 边框
  border: 2rpx solid #c5c5c5e5;
  /* 其他样式属性 */
}
.container {
  height: 200rpx;
  display: flex;
  // 边框
  border-bottom: 2rpx solid #c5c5c5e5;
  padding-top: 10rpx;
  margin: 30rpx;
}

.left-section {
  display: flex;
}

.circle {
  width: 150rpx;
  height: 150rpx;
  border-radius: 50%;
  overflow: hidden;
}
.circle image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  margin-left: 40rpx;
}

.text01 {
  margin-bottom: 20rpx;
  font-size: 20px;
}

.text02 {
  font-size: 14px;

  color: lightgray;
}
.text02 text:nth-child(2),
.text02 text:nth-child(3) {
  margin-left: 20rpx;
}

.right-section {
  margin-left: auto;
  margin-top: 50rpx;
  margin-right: 10rpx;
}
.scoll-css{
  padding-top: 10rpx;
  padding-bottom: 10rpx;
}
</style>
