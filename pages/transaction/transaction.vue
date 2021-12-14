<template>
  <view class="transaction">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">水权交易</view>
        <view class="table-r">
          <view class="table-r-title">
            <text @click="previewFile(false)">1、取水权申请表</text>
          </view>
          <view class="table-r-time">
            <text>2021-09-10</text>
          </view>
        </view>
        <view class="table-r">
          <view class="table-r-title">
            <text  @click="previewFile(true)">2、取水权交易证</text>
          </view>
          <view class="table-r-time">
            <text>2021-09-02</text>
          </view>
        </view>
      </view>
    </view>
    <view class="tips-box" v-if="isShow">
      <view class="text">详情查阅锡⼭区取⽔监管信息化系统</view>
    </view>
  </view>
</template>

<script>
import topNav from '../../components/nav/topNav'
export default {
  components: {
    topNav
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    previewFile(isShow) {
      if (isShow) {
        uni.navigateTo({
          url: '/pages/preview/preview'
        })
      } else {
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, 2000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.transaction{
  width: 100%;
  height: 100vh;
  overflow: auto;
  .content-box{
    width: 100%;
    background: #1175d6;
    overflow: auto;
    height: calc(100vh - 220rpx);
    .content{
      min-height: calc(100vh - 348rpx);
      width: 3720rpx;
      background: #ffffff;
      border-radius: 40rpx;
      margin: 66rpx auto 62rpx;
      overflow: hidden;
      .title{
        border-bottom: 2rpx solid #cccbcb;
        font-size: 72rpx;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #262626;
        line-height: 100rpx;
        padding: 64rpx 0 58rpx;
      }
      .table-r{
        display: flex;
        justify-content: space-between;
        padding: 0 52rpx 0 116rpx;
        height: 160rpx;
        box-sizing: border-box;
        line-height: 160rpx;
        .table-r-title{
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #262626;
        }
        .table-r-time {
          text-align: right;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #595959;
        }
      }
      .table-r:nth-child(2n + 1){
        background: #f1f6ff;
      }
    }
  }
  .tips-box{
    position: fixed;
    top: 50%;
    width: 100%;
    .text{
      margin: 0 auto;
      width: 1232rpx;
      height: 200rpx;
      padding: 56rpx 88rpx;
      box-sizing: border-box;
      font-size: 64rpx;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #ffffff;
      line-height: 90rpx;
      letter-spacing: 2rpx;
      background: #000000;
      border-radius: 30rpx;
    }
  }
}
</style>
