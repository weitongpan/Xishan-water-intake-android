<template>
  <view class="nav-box">
    <view class="nav-title">
      <text>锡山取水分户归档台账自助终端</text>
    </view>
    <view class="nav-btn">
      <button size="mini" @click="returnClick">返回首页</button>
    </view>
  </view>
</template>

<script>
export default {
  name: 'topNav',
  methods: {
    returnClick() {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.nav-box{
  background: linear-gradient(180deg,#1389e3, #0851c4);
  display: flex;
  justify-content: space-between;
  padding: 42rpx 90rpx 54rpx 120rpx;
  height: 220rpx;
  box-sizing: border-box;
  .nav-title{
    font-size: 88rpx;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #ffffff;
  }
  .nav-btn{
    button{
      font-size: 60rpx;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #ffffff;
      width: 400rpx;
      height: 128rpx;
      opacity: 0.7;
      background: rgba(255,255,255,0.13);
      border: 2rpx solid #ffffff;
      line-height: 128rpx;
      padding: 0;
      text-align: center;
    }
  }
}
</style>
