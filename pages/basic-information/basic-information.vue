<template>
	<view class="basic-information">
		<top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">企业基础信息</view>
        <view class="info1-box">
          <view class="info1-box-left">
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">单位名称：</text>
              <text class="info1-box-left-r-content">南国红豆控股有限公司</text>
            </view>
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">统一社会信用代码：</text>
              <text class="info1-box-left-r-content">9194583920028330589D</text>
            </view>
            <view class="info1-box-left-r">
              <text class="info1-box-left-r-title">法定代表人：</text>
              <text class="info1-box-left-r-content">周明江</text>
            </view>
          </view>
          <view class="info1-box-right">
            <view class="info1-box-right-title">营业执照：</view>
            <view class="info1-box-right-img">
              <image src="../../static/basic-information/bz@2x.png"></image>
            </view>
          </view>
        </view>
        <view class="info2-box">
          <view class="info2-box-left">
            <text class="info2-box-left-r-title">所属镇/街道：</text>
            <text class="info2-box-left-r-content">东港镇</text>
          </view>
          <view class="info2-box-right">
            <text class="info2-box-right-title">住所（地址）：</text>
            <text class="info2-box-right-content">锡山市东港镇红豆工业园区</text>
          </view>
        </view>
        <view class="info3-box">
          <view class="info3-box-left">
            <text class="info3-box-left-r-title">行业类别：</text>
            <text class="info3-box-left-r-content">电力生产</text>
          </view>
          <view class="info3-box-right">
          </view>
        </view>
        <view class="info4-box">
          <view class="info4-box-title">主要产品：</view>
          <view class="info4-box-table">
            <view class="table-head">
              <text>#</text>
              <text>产品种类</text>
              <text>产品种类</text>
              <text>行业用水定额</text>
              <text>实际用水定额</text>
            </view>
            <view class="table-body">
              <text>01</text>
              <text>电力生产</text>
              <text>19000000000Kwh</text>
              <text>1.85m³/Mwh</text>
              <text>1.78m³/Mwh</text>
            </view>
          </view>
        </view>
        <view class="info5-box">
          <view class="info5-box-left">
            <text class="info5-box-left-r-title">取水用途：</text>
            <text class="info5-box-left-r-content">工业用水</text>
          </view>
          <view class="info5-box-right">
            <text class="info5-box-right-title">单位荣誉：</text>
            <text class="info5-box-right-content">区节水型企业</text>
          </view>
        </view>
        <view class="info5-box">
          <view class="info5-box-left">
            <text class="info5-box-left-r-title">水务经理：</text>
            <text class="info5-box-left-r-content">陈玲燕</text>
          </view>
          <view class="info5-box-right">
          </view>
        </view>
        <view class="info5-box">
          <view class="info5-box-left">
            <text class="info5-box-left-r-title">联系电话1：</text>
            <text class="info5-box-left-r-content">18273849871</text>
          </view>
          <view class="info5-box-right">
            <text class="info5-box-right-title">联系电话2：</text>
            <text class="info5-box-right-content">17082739018</text>
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
              width: 496rpx;
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
            width: 496rpx;
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
            width: 496rpx;
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
            width: 496rpx;
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
            width: 496rpx;
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
        }
        .info3-box-right{
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info3-box-right-title{
            display: inline-block;
            width: 496rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info3-box-right-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
        }
      }
      .info4-box{
        display: flex;
        padding: 48rpx 0 54rpx;
        background: #f1f6ff;
        .info4-box-title{
          width: 496rpx;
          text-align: right;
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
        }
      }
      .info5-box{
        display: flex;
        .info5-box-left{
          border-right: 2rpx solid #cccbcb;
          box-sizing: border-box;
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info5-box-left-r-title{
            display: inline-block;
            width: 496rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info5-box-left-r-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
        }
        .info5-box-right{
          width: 50%;
          padding: 48rpx 0 46rpx;
          .info5-box-right-title{
            display: inline-block;
            width: 496rpx;
            text-align: right;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            color: #4d4d4d;
          }
          .info5-box-right-content{
            display: inline-block;
            padding-left: 42rpx;
            font-size: 48rpx;
            font-family: PingFangSC, PingFangSC-Medium;
            font-weight: 500;
            color: #262626;
          }
        }
      }
      .info5-box:nth-child(2n + 1){
        background: #f1f6ff;
      }
    }
  }
}
</style>
