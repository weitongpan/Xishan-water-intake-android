<template>
  <view class="water-intake-plan">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">取水计划</view>
        <view class="table-box">
          <view class="table-r table-head">
            <text class="r-number">#</text>
            <text>填报年度</text>
            <text>年计划取水量</text>
            <text>取水总结和计划申请表</text>
            <text>取水计划下达文件</text>
            <text>取水计划调度申请表</text>
            <text>调整计划下达文件</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
          </view>
          <view class="table-r">
            <text class="r-number">01</text>
            <text>2021</text>
            <text>6803</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
            <text>申请表.txt</text>
            <text>文件.txt</text>
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
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.water-intake-plan {
  width: 100%;
  min-height: 100vh;

  .content-box {
    width: 100%;
    background: #1175d6;
    overflow: auto;
    height: calc(100vh - 220rpx);

    .content {
      min-height: calc(100vh - 348rpx);
      width: 3720rpx;
      background: #ffffff;
      border-radius: 40rpx;
      margin: 66rpx auto 62rpx;
      overflow: hidden;

      .title {
        font-size: 72rpx;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #262626;
        line-height: 100rpx;
        padding: 64rpx 0 58rpx;
      }
      .table-box{
        width: 3560rpx;
        min-height: 1432rpx;
        margin: 0 auto 50rpx;
        border: 2rpx solid #d9dada;
        .table-r{
          display: flex;
          padding: 30rpx 0 40rpx 112rpx;
          font-size: 40rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #595959;
          text{
            flex: 2;
            text-align: left;
          }
          .r-number{
            flex: 1;
          }
        }
        .table-r:nth-child(2n + 1) {
          background: #f7f7f7;
        }
        .table-head{
          background: #eff1f4 !important;
          font-size: 40rpx !important;
          font-weight: 400 !important;
          color: #000000 !important;
        }
      }
    }
  }
}
</style>
