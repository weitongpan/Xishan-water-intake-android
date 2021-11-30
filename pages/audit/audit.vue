<template>
  <view class="basic-information">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">用水审计</view>
        <view class="message">
          根据“苏水规(2018)1号 省水利厅关于印发《江苏省用水审计实施办法》的通知”规定： 第七条，用水户所在地具有管辖权的县级以上地方人民政府水行政主管部门（以下简称所在地水行政主管部门）应当对其管辖范围内的重点计划用水户按计划定期进行用水审计。 两次用水审计的时间间隔一般不超过五年。 第八条，重点计划用水户的用水审计计划，由所在地水行政主管部门负责制定、公布并组织实施。
        </view>
        <view class="file-box">
          <view>查询管理规范：</view>
          <view class="file-img">
            <image src="../../static/public/txt@2x.png"/>
          </view>
          <view class="file-name" @click="previewFile">江苏省水利厅文件</view>
        </view>
        <view class="info4-box">
          <view class="info4-box-title">文件及归档材料：</view>
          <view class="info4-box-table">
            <view class="table-head">
              <text>#</text>
              <text>归档年度</text>
              <text>用水审计报告</text>
              <text>整改意见</text>
              <text>企业整改报告</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>2021</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
              <text>测试报告.txt</text>
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
.basic-information{
  width: 100%;
  min-height: 100vh;
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
        border-bottom: 2rpx solid #cccbcb;
      }
      .message{
        padding: 20rpx 0 18rpx 86rpx;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #262626;
        line-height: 80rpx;
      }
      .file-box{
        padding: 48rpx 0 48rpx 86rpx;
        background: #f1f6ff;
        display: flex;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #4d4d4d;
        .file-img{
          margin: 0 36rpx 0 18rpx;
          image{
            width: 60rpx;
            height: 70rpx;
          }
        }
        .file-name{
          color: #0a63e6;
        }
      }
      .info4-box{
        display: flex;
        padding: 48rpx 0 54rpx 86rpx;
        .info4-box-title{
          margin-right: 32rpx;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #4d4d4d;
        }
        .info4-box-table{
          margin-left: 40rpx;
          border: 2rpx solid #cccbcb;
          width: 3112rpx;
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
              color: #595959;
            }
          }
          .table-body:nth-child(2n + 1){
            background: #f7f7f7;
          }
        }
      }
    }
  }
}
</style>
