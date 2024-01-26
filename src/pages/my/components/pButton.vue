<template>
  <button>
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
button {
  width: 500rpx;
  height: 100rpx;
  background-color: white;
  margin: auto;
  margin-top: 80rpx;
  border-radius: 15px;
}
</style>
