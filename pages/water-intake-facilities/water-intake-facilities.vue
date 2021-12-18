<template>
  <view class="water-intake-facilities">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">取水设施/计量监控</view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">取水口：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.waterIntake }}</text>
          </view>
          <view class="info3-box-right">
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">取水口经度：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.longitude }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">取水口纬度：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.latitude }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left img-left">
            <view class="img-title">
              <text>取水口远景图：</text>
            </view>
            <view class="img-box">
<!--              <image src="https://demo.gzzyb.cn/android/Android/d1/jy.jpg" @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/jy.jpg')"></image>-->
            </view>
          </view>
          <view class="info3-box-right img-right">
            <view class="img-title">
              <text>取水口特写图：</text>
            </view>
            <view class="img-box">
<!--              <image src="https://demo.gzzyb.cn/android/Android/d1/jj.jpg" @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/jj.jpg')"></image>-->
            </view>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">取水地点：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.address }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">水资源分区：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.classification }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">水源类型：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.type }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">取水设施类型：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.facilities }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">水泵设计扬程（单位m)：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.lift }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">日最大取水能力（单位m³/d)：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.ability }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title"></text>
            <text class="info3-box-left-r-content report" @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/qssqs.pdf')">取水工程（设施）验收申请书</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title"></text>
            <text class="info3-box-right-r-content report" @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/qsys.pdf')">取水工程（设施）验收报告</text>
          </view>
        </view>
        <view v-if="fictitiousData.monitor.number && fictitiousData.monitor.number > 0">
          <view class="x-r info3-box">
            <view class="info3-box-left">
              <text class="info3-box-left-r-title">水井数量：</text>
              <text class="info3-box-left-r-content">{{ fictitiousData.monitor.number }}</text>
            </view>
            <view class="info3-box-right">
              <text class="info3-box-right-r-title">日最大取水能力（单位m³/d)：</text>
              <text class="info3-box-right-r-content">{{ fictitiousData.monitor.ability }}</text>
            </view>
          </view>
          <view class="x-r info4-box">
            <view class="info4-box-title">水井：</view>
            <view class="info4-box-table">
              <view class="table-head">
                <text>#</text>
                <text>开采层位</text>
                <text>井深（m)</text>
                <text>井径（cm）</text>
              </view>
              <view class="table-body" v-for="(item, index) in fictitiousData.monitor.well">
                <text>{{ index }}</text>
                <text>{{ item.layer }}</text>
                <text>{{ item.wellDepth }}</text>
                <text>{{ item.wellDiameter }}</text>
              </view>
            </view>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">计量设备类型：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.metering }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">计量内容：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.meteringConten }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">计量方式：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.meteringMode }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">数据传输方式：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.dataMode }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">计量设施检验合格日期：</text>
            <text class="info3-box-left-r-content">{{ fictitiousData.monitor.meteringTime }}</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title">检定校准要求：</text>
            <text class="info3-box-right-r-content">{{ fictitiousData.monitor.requirement }}</text>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left img-left">
            <view class="img-title">
              <text>取水口远景图：</text>
            </view>
            <view class="img-box">
<!--              <image src="https://demo.gzzyb.cn/android/Android/d1/ly.jpg"  @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/ly.jpg')"></image>-->
            </view>
          </view>
          <view class="info3-box-right img-right">
            <view class="img-title">
              <text>取水口特写图：</text>
            </view>
            <view class="img-box">
<!--              <image src="https://demo.gzzyb.cn/android/Android/d1/lj.jpg"  @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/lj.jpg')"></image>-->
            </view>
          </view>
        </view>
        <view class="x-r info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title"></text>
            <text class="info3-box-left-r-content report" @click="previewFile(false)">计量率定报告</text>
          </view>
          <view class="info3-box-right">
            <text class="info3-box-right-r-title"></text>
            <text class="info3-box-right-r-content report" @click="viewPicture('https://demo.gzzyb.cn/android/Android/d1/jljcbg.pdf')">计量设施检验报告</text>
          </view>
        </view>
        <view class="x-r info4-box">
          <view class="info4-box-title">⽇常运维记录：</view>
          <view class="info4-box-table">
            <view class="table-head">
              <text>#</text>
              <text>计量及监控设施状态</text>
              <text>填报日期</text>
              <text>填报人</text>
            </view>
<!--            <view class="table-body">-->
<!--              <text>01</text>-->
<!--              <text>设施状态略</text>-->
<!--              <text>2020-09-21</text>-->
<!--              <text>孙小姐</text>-->
<!--            </view>-->
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
import { mapState } from 'vuex'
export default {
  components: {
    topNav
  },
  data() {
    return {
      isShow: false
    }
  },
  computed: {
    ...mapState(['fictitiousData'])
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
    },
    viewPicture(path) {
      uni.openDocument({
        filePath: path
      })
    }
  }
}
</script>

<style scoped lang="scss">
.water-intake-facilities{
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
      }
      .info3-box{
        display: flex;
        box-sizing: border-box;
        .info3-box-left{
          border-right: 2rpx solid #cccbcb;
          width: 50%;
          padding: 48rpx 0 46rpx;
          box-sizing: border-box;
          .info3-box-left-r-title{
            display: inline-block;
            width: 620rpx;
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
          .report{
            color: #0a63e6;
          }
        }
        .info3-box-right{
          width: 50%;
          padding: 48rpx 0 46rpx;
          box-sizing: border-box;
          .info3-box-right-r-title{
            display: inline-block;
            width: 736rpx;
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
          .report{
            color: #0a63e6;
          }
        }
        .img-left{
          display: flex;
          .img-title{
            width: 620rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
        }
        .img-right{
          display: flex;
          .img-title{
            width: 736rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .img-box{
            image{
              width: 626rpx;
              height: 432rpx;
            }
          }
        }
      }
      .x-r:nth-child(2n + 1){
        background: #f1f6ff;
      }
      .info4-box{
        display: flex;
        padding: 48rpx 0 54rpx;
        .info4-box-title{
          width: 620rpx;
          text-align: right;
          font-size: 48rpx;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          color: #4d4d4d;
        }
        .info4-box-table{
          margin-left: 40rpx;
          border: 2rpx solid #cccbcb;
          width: 2974rpx;
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
