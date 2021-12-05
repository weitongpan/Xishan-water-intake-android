<template>
  <view class="levy-taxes">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">
          <view class="select-box">
            <view class="select-head" @click="selectShow">
              <view class="year">
                <text>{{ year }}</text>
              </view>
              <view class="img-box">
                <image src="../../static/levy-taxes/instructions.png"></image>
              </view>
            </view>
            <view class="item-box" v-if="selectIsShow">
              <view class="select-item" v-for="item in yearArray" @click="selectItemClick(item)">{{ item }}</view>
            </view>

          </view>
          <text>
            水资源费征缴
          </text>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">取水权人：</text>
            <text class="info2-box-left-r-content">南国红豆控股有限公司</text>
          </view>
          <view class="info2-box-right">
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">取水许可证编号：</text>
            <text class="info2-box-left-r-content">9194583920028330589D</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">许可证年取水量(万m3/年)：</text>
            <text class="info2-box-right-content">200</text>
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">水源类型：</text>
            <text class="info2-box-left-r-content">地表水</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">当年计划取水量(万m3)：</text>
            <text class="info2-box-right-content">0</text>
          </view>
        </view>
        <view class="controller-box">
          <view class="controller">
            <view :class="{active: controllerNumber === 0}" @click="controllerClick(0)">取水量填报</view>
            <view :class="{active: controllerNumber === 1}" @click="controllerClick(1)">水资源费</view>
            <view :class="{active: controllerNumber === 2}" @click="controllerClick(2)">水利工程水费</view>
          </view>
        </view>
        <view class="table-box" v-if="controllerNumber === 0">
          <view class="table-r table-head">
            <text>取水缴费期间</text>
            <text>上月抄表数</text>
            <text>本月抄表数</text>
            <text>本月取水量</text>
          </view>
          <view class="table-r">
            <text>1月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
          </view>
          <view class="table-r">
            <text>2月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
          </view>
          <view class="table-r">
            <text>3月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
          </view>
          <view class="table-r">
            <text>4月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
          </view>
          <view class="table-r">
            <text>5月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
          </view>
        </view>
        <view class="table-box" v-if="controllerNumber === 1">
          <view class="table-r table-head">
            <text>取水缴费期间</text>
            <text>收费标准</text>
            <text>本月应收费用</text>
            <text>本月实收费用</text>
            <text>累计应收费用</text>
            <text>累计实收费用</text>
          </view>
          <view class="table-r">
            <text>1月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>2月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>3月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>4月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>5月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>6月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
        </view>
        <view class="table-box" v-if="controllerNumber === 2">
          <view class="table-r table-head">
            <text>取水缴费期间</text>
            <text>收费标准</text>
            <text>本月应收费用</text>
            <text>本月实收费用</text>
            <text>累计应收费用</text>
            <text>累计实收费用</text>
          </view>
          <view class="table-r">
            <text>1月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>2月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>3月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>4月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>5月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
          </view>
          <view class="table-r">
            <text>6月</text>
            <text>0.3</text>
            <text>0.00</text>
            <text>0</text>
            <text>0.00</text>
            <text>0.00</text>
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
    return {
      controllerNumber: 1,
      selectIsShow: false,
      year: '2021',
      yearArray: [2021, 2019, 2018, 2017, 2016]
    }
  },
  methods: {
    selectItemClick(item) {
      this.year = item
      this.selectIsShow = false
    },
    selectShow() {
      this.selectIsShow = !this.selectIsShow
    },
    controllerClick(index) {
      this.controllerNumber = index
    }
  }
}
</script>

<style scoped lang="scss">
.levy-taxes {
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
        position: relative;
        font-size: 72rpx;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #262626;
        line-height: 100rpx;
        padding: 64rpx 0 58rpx;
        border-bottom: 2rpx solid #cccccc;
        .select-box{
          position: absolute;
          left: 104rpx;
          top: 44rpx;
          width: 400rpx;
          .select-head{
            box-sizing: border-box;
            width: 400rpx;
            height: 120rpx;
            background: #f1f6ff;
            border: 2rpx solid #0a56c7;
            border-radius: 10rpx;
            display: flex;
            .year{
              flex: 3;
              text{
                font-size: 64rpx;
                font-family: PingFangSC, PingFangSC-Semibold;
                font-weight: 600;
                color: #0a63e6;
              }
            }
            .img-box{
              flex: 1;
              image{
                width: 40rpx;
                height: 40rpx;
              }
            }

          }
          .item-box{
            height: 600rpx;
            overflow: auto;
            .select-item{
              box-sizing: border-box;
              background: #ffffff;
              font-size: 64rpx;
              border: 2rpx solid #0a56c7;
              border-bottom: 2rpx solid #0a56c7;
              border-spacing: 0;
              border-collapse: collapse;
              height: 120rpx;
              line-height: 120rpx;
              color: #606266;
            }
          }

        }
      }
      .info2-box{
        display: flex;
        .info2-box-left{
          border-right: 2rpx solid #cccbcb;
          box-sizing: border-box;
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info2-box-left-r-title{
            display: inline-block;
            width: 459rpx;
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
            width: 676rpx;
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
      .info2-box:nth-child(2n + 1) {
        background: #f1f6ff;
      }
      .controller-box{
        border-top: 2rpx solid #cccccc;
        padding: 44rpx;
        .controller{
          width: 990rpx;
          height: 80rpx;
          line-height: 80rpx;
          background: #f1f6ff;
          border: 1rpx solid #d9d9d9;
          border-radius: 10rpx;
          display: flex;
          margin: 0 auto;
          view{
            flex: 1;
            text-align: center;
            font-size: 26rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
          .active{
            background: #0a63e6;
            color: #ffffff;
          }
        }
      }
      .table-box{
        width: 3560rpx;
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
            flex: 1;
            text-align: center;
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
