<template>
  <view class="demonstration">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">水资源论证</view>
        <view class="table-r">
          <view class="table-r-title">
            <text>1、水资源论证报告</text>
          </view>
          <view class="table-r-file">
            <image src="../../static/demonstration/pdf-2@2x.png"/>
            <text @click="previewFile">水资源论证报告.pdf</text>
          </view>
          <view class="table-r-time">
            <text>2021-09-10</text>
          </view>
        </view>
        <view class="table-r">
          <view class="table-r-title">
            <text>2、节水评价</text>
          </view>
          <view class="table-r-file">
            <image src="../../static/public/txt@2x.png"/>
            <text @click="previewFile">节水评价.txt</text>
          </view>
          <view class="table-r-time">
            <text>2021-09-02</text>
          </view>
        </view>
      </view>
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

    }
  },
  methods: {
    previewFile() {
      uni.navigateTo({
        url: '/pages/preview/preview'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.demonstration{
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
        padding: 0 52rpx 0 116rpx;
        height: 160rpx;
        box-sizing: border-box;
        line-height: 160rpx;
        .table-r-title{
          width: 13%;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Medium;
          font-weight: 500;
          text-align: left;
          color: #262626;
        }
        .table-r-file{
          width: 77%;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #0a56c7;
          image{
            width: 64rpx;
            height: 70rpx;
            position: relative;
            top: 15rpx;
            margin-right: 53rpx;
          }
        }
        .table-r-time {
          text-align: right;
          width: 10%;
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
}
</style>
