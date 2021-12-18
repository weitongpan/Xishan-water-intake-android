<template>
  <view class="levy-taxes">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">
          <view class="select-box">
            <view class="select-head" @click="show">
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
            <text class="info2-box-left-r-content">无锡锡东环保能源有限公司</text>
          </view>
          <view class="info2-box-right">
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">取水许可证编号：</text>
            <text class="info2-box-left-r-content"> D320205S2021-0050</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">许可证年取水量(万m3/年)：</text>
            <text class="info2-box-right-content">240.9</text>
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">水源类型：</text>
            <text class="info2-box-left-r-content">地表水</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">当年计划取水量(万m3)：</text>
            <text class="info2-box-right-content">200</text>
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
          <view class="table-r" v-for="item in res.table1">
            <text>{{ item.t1 }}</text>
            <text>{{ item.t2 }}</text>
            <text>{{ item.t3 }}</text>
            <text>{{ item.t4 }}</text>
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
          <view class="table-r" v-for="item in res.table2">
            <text>{{ item.t1 }}</text>
            <text>{{ item.t2 }}</text>
            <text>{{ item.t3 }}</text>
            <text>{{ item.t4 }}</text>
            <text>{{ item.t5 }}</text>
            <text>{{ item.t6 }}</text>
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
          <view class="table-r" v-for="item in res.table3">
            <text>{{ item.t1 }}</text>
            <text>{{ item.t2 }}</text>
            <text>{{ item.t3 }}</text>
            <text>{{ item.t4 }}</text>
            <text>{{ item.t5 }}</text>
            <text>{{ item.t6 }}</text>
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
      yearArray: [2021, 2019, 2018, 2017, 2016],
      res: {
        table1: [
          {
            t1: '1月',
            t2: '5080343',
            t3: '5177427',
            t4: '97084',
          },
          {
            t1: '2月',
            t2: '5177427',
            t3: '5307184',
            t4: '129757',
          },
          {
            t1: '3月',
            t2: '5307184',
            t3: '5464740',
            t4: '157556',
          },
          {
            t1: '4月',
            t2: '5464740',
            t3: '5631211',
            t4: '166471',
          },
          {
            t1: '5月',
            t2: '5631211',
            t3: '5756345',
            t4: '125134',
          },
          {
            t1: '6月',
            t2: '5756345',
            t3: '5894844',
            t4: '138499',
          },
          {
            t1: '7月',
            t2: '5894844',
            t3: '6033290',
            t4: '138446',
          },
          {
            t1: '8月',
            t2: '6033290',
            t3: '6182374',
            t4: '149084',
          },
          {
            t1: '9月',
            t2: '6182374',
            t3: '6321141',
            t4: '138767',
          },
          {
            t1: '10月',
            t2: '6321141',
            t3: '6445039',
            t4: '123898',
          },
          {
            t1: '11月',
            t2: '6445039',
            t3: '6564004',
            t4: '118965',
          }
        ],
        table2: [
          {
            t1: '1月',
            t2: '0.3',
            t3: '29125.2',
            t4: '29125.2',
            t5: '29125.2',
            t6: '29125.2'
          },
          {
            t1: '2月',
            t2: '0.3',
            t3: '38927.1',
            t4: '38927.1',
            t5: '68052.3',
            t6: '68052.3',
          },
          {
            t1: '3月',
            t2: '0.3',
            t3: '27266.8',
            t4: '27266.8',
            t5: '115319.1',
            t6: '115319.1',
          },
          {
            t1: '4月',
            t2: '0.3',
            t3: '49941.3',
            t4: '49941.3',
            t5: '165260.4',
            t6: '165260.4',
          },
          {
            t1: '5月',
            t2: '0.3',
            t3: '37540.2',
            t4: '37540.2',
            t5: '202800.6',
            t6: '202800.6'
          },
          {
            t1: '6月',
            t2: '0.3',
            t3: '41549.7',
            t4: '41549.7',
            t5: '244350.3',
            t6: '244350.3',
          },
          {
            t1: '7月',
            t2: '0.3',
            t3: '41533.8',
            t4: '41533.8',
            t5: '285884.1',
            t6: '285884.1',
          },
          {
            t1: '8月',
            t2: '0.3',
            t3: '44725.2',
            t4: '44725.2',
            t5: '330609.3',
            t6: '330609.3',
          },
          {
            t1: '9月',
            t2: '0.3',
            t3: '41630.1',
            t4: '41630.1',
            t5: '372239.4',
            t6: '372239.4'
          },
          {
            t1: '10月',
            t2: '0.3',
            t3: '37169.4',
            t4: '37169.4',
            t5: '409408.8',
            t6: '409408.8'
          },
          {
            t1: '11月',
            t2: '0.3',
            t3: '35689.5',
            t4: '35689.5',
            t5: '445098.3',
            t6: '445098.3'
          }
        ],
        table3: [
          {
            t1: '1月',
            t2: '0.09',
            t3: '8737.56',
            t4: '8737.56',
            t5: '8737.56',
            t6: '8737.56'
          },
          {
            t1: '2月',
            t2: '0.09',
            t3: '11678.13',
            t4: '11678.13',
            t5: '20415.69',
            t6: '20415.69',
          },
          {
            t1: '3月',
            t2: '0.09',
            t3: '14180.04',
            t4: '14180.04',
            t5: '34595.73',
            t6: '34595.73',
          },
          {
            t1: '4月',
            t2: '0.09',
            t3: '14982.39',
            t4: '14982.39',
            t5: '49578.32',
            t6: '49578.32',
          },
          {
            t1: '5月',
            t2: '0.09',
            t3: '11262.02',
            t4: '11262.02',
            t5: '60840.18',
            t6: '60840.18'
          },
          {
            t1: '6月',
            t2: '0.09',
            t3: '12464.91',
            t4: '12464.91',
            t5: '73305.09',
            t6: '73305.09',
          },
          {
            t1: '7月',
            t2: '0.09',
            t3: '12460.14',
            t4: '12460.14',
            t5: '85765.23',
            t6: '85765.23',
          },
          {
            t1: '8月',
            t2: '0.09',
            t3: '13417.56',
            t4: '13417.56',
            t5: '99182.79',
            t6: '99182.79',
          },
          {
            t1: '9月',
            t2: '0.09',
            t3: '12489.03',
            t4: '12489.03',
            t5: '111671.82',
            t6: '111671.82'
          },
          {
            t1: '10月',
            t2: '0.09',
            t3: '11150.82',
            t4: '11150.82',
            t5: '122822.64',
            t6: '122822.64'
          },
          {
            t1: '11月',
            t2: '0.09',
            t3: '10706.85',
            t4: '10706.85',
            t5: '133529.49',
            t6: '133529.49'
          }
        ]
      }
    }
  },
  methods: {
    selectItemClick(item) {
      this.year = item
      this.selectIsShow = false
    },
    show() {
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
