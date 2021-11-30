<template>
  <view class="licence">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">取水许可</view>
        <view class="info1-box">
          <view class="info1-box-left">
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">取水许可证号：</text>
              <text class="info1-box-left-r-content">D320205S2021-0003</text>
            </view>
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">起始日期：</text>
              <text class="info1-box-left-r-content">2026-07-06</text>
            </view>
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">有效日期：</text>
              <text class="info1-box-left-r-content">2026-07-06</text>
            </view>
          </view>
          <view class="info1-box-right">
            <view class="info1-box-right-title">取水许可证首页：</view>
            <view class="info1-box-right-img">
              <image src="../../static/basic-information/bz@2x.png"></image>
            </view>
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">水源类型：</text>
            <text class="info2-box-left-r-content">水源类型：</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">年允许取水量(万m³/年)：</text>
            <text class="info2-box-right-content">200</text>
          </view>
        </view>
        <view class="info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">允许日最大取水量（m³/天）：</text>
            <text class="info3-box-left-r-content">5479.5</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">允许最大取水流量（m³/秒）：</text>
            <text class="info3-box-right-r-content">0.063</text>
          </view>
        </view>
        <view class="info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">取水许可申请表：</text>
            <text class="info3-box-left-r-content file" @click="previewFile">申请文件.txt</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">取水许可批复文件：</text>
            <text class="info3-box-right-r-content file" @click="previewFile">复印件文件.pdf</text>
            <text class="info3-box-right-r-content">2020-09-10</text>
          </view>
        </view>
        <view class="info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">取水许可登记表</text>
            <text class="info3-box-left-r-content file" @click="previewFile">登记文件.txt</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">取水许可证：</text>
            <text class="info3-box-right-r-content file" @click="previewFile">许可证.png</text>
            <text class="info3-box-right-r-content">2020-09-10</text>
          </view>
        </view>
        <view class="info4-box">
          <view class="info4-box-title">主要产品：</view>
          <view class="info4-box-table">
            <view class="table-head">
              <text>#</text>
              <text>年份</text>
              <text>延续取水申请表</text>
              <text>延续取水评估表</text>
              <text>延续取水决定书</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>申请表1.txt</text>
              <text>评估表1.txt</text>
              <text>决定书1.txt</text>
            </view>
            <view class="table-body">
              <text>02</text>
              <text>2021</text>
              <text>申请表1.txt</text>
              <text>评估表1.txt</text>
              <text>决定书1.txt</text>
            </view>
            <view class="table-body">
              <text>03</text>
              <text>2021</text>
              <text>申请表1.txt</text>
              <text>评估表1.txt</text>
              <text>决定书1.txt</text>
            </view>
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
.licence{
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
        font-size: 72rpx;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #262626;
        line-height: 100rpx;
        padding: 64rpx 0 58rpx;
      }
      .info1-box{
        border-top: 2rpx solid #cccbcb;
        display: flex;
        .info1-box-left{
          border-right: 2rpx solid #cccbcb;
          box-sizing: border-box;
          width: 50%;
          .info1-box-left-r{
            padding: 48rpx 0 46rpx;
            .info1-box-left-r-title{
              display: inline-block;
              width: 685rpx;
              text-align: right;
              font-size: 48rpx;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #4d4d4d;
            }
            .info1-box-left-r-content{
              display: inline-block;
              padding-left: 42rpx;
              font-size: 48rpx;
              font-family: PingFangSC, PingFangSC-Medium;
              font-weight: 500;
              color: #262626;
            }
          }
          .info1-box-left-r:nth-child(2n){
            background: #f1f6ff;
          }
        }
        .info1-box-right{
          width: 50%;
          display: flex;
          .info1-box-right-title{
            padding-top: 48rpx;
            width: 696rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info1-box-right-img{
            padding-top: 24rpx;
            image{
              width: 630rpx;
              height: 436rpx;
            }
          }
        }
      }
      .info2-box{
        background: #f1f6ff;
        display: flex;
        .info2-box-left{
          border-right: 2rpx solid #cccbcb;
          box-sizing: border-box;
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info2-box-left-r-title{
            display: inline-block;
            width: 685rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info2-box-left-r-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
        }
        .info2-box-right{
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info2-box-right-title{
            display: inline-block;
            width: 696rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info2-box-right-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
        }
      }
      .info3-box{
        display: flex;
        .info3-box-left{
          border-right: 2rpx solid #cccbcb;
          box-sizing: border-box;
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info3-box-left-r-title{
            display: inline-block;
            width: 685rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info3-box-left-r-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
          .file{
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #0a63e6;
          }
        }
        .info3-box-right{
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info3-box-right-r-title{
            display: inline-block;
            width: 696rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info3-box-right-r-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
          .file{
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #0a63e6;
          }
        }
      }
      .info3-box:nth-child(2n + 1){
        background: #f1f6ff;
      }
      .info4-box{
        display: flex;
        padding: 48rpx 0 54rpx;
        background: #f1f6ff;
        .info4-box-title{
          width: 700rpx;
          text-align: right;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #4d4d4d;
        }
        .info4-box-table{
          margin-left: 40rpx;
          border: 2rpx solid #cccbcb;
          width: 2902rpx;
          .table-head{
            background: #eff1f4;
            display: flex;
            padding: 42rpx 0 43rpx;
            text{
              flex: 1;
              text-align: center;

              font-size: 40rpx;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #000000;
            }
          }
          .table-body{
            background: #ffffff;
            display: flex;
            justify-content: space-around;
            padding: 42rpx 0 43rpx;
            text{
              flex: 1;
              text-align: center;
              font-size: 40rpx;
              font-family: PingFangSC, PingFangSC-Regular;
              font-weight: 400;
              color: #262626;
            }
          }
          .table-body:nth-child(2n + 1) {
            background: #f7f7f7;
          }
        }
      }
    }
  }
}
</style>
