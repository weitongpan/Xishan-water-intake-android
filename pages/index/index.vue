<template>
	<view class="index">
    <view class="time">
      <text class="hour">{{ time.hour }}</text>
      <text class="day">{{ time.day }}</text>
    </view>
		<view class="title">
      <view class="title-text">
        锡山区取水分户归档台账自助查询终端
      </view>
      <view class="select-box">
        <view class="left">取水许可证号</view>
        <view class="right">
          <view class="right-top">
            <view class="right-top-text">
              9194583920028330589D
            </view>
            <view class="image-box" @click="selectClick">
              <image v-show="!isShow" src="../../static/index/xiala@2x.png"></image>
              <image v-show="isShow" src="../../static/index/shouqi@2x.png"></image>
            </view>
          </view>
          <view v-show="isShow"
              class="right-bottom"
          >
            <view>9194583920028330589D</view>
            <view>9194583920028330589D</view>
            <view>9194583920028330589D</view>
          </view>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="nav-row">
        <view class="nav-item" @click="goPage('/pages/basic-information/basic-information')">
          <image src="../../static/index/jichu@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/licence/licence')">
          <image src="../../static/index/xuke@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item monitor" @click="goPage('/pages/water-intake-facilities/water-intake-facilities')">
          <image src="../../static/index/jiankong@2x.png" mode="aspectFit"/>
        </view>

        <view class="nav-item" @click="goPage('/pages/demonstration/demonstration')">
          <image src="../../static/index/szlz@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/water-balance-test/water-balance-test')">
          <image src="../../static/index/sphce@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/carrier/carrier')">
          <image src="../../static/index/jsxzt@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/audit/audit')">
          <image src="../../static/index/yssj@2x.png" mode="aspectFit"/>
        </view>


        <view class="nav-item" @click="goPage('/pages/water-intake-plan/water-intake-plan')">
          <image src="../../static/index/qsjh@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/levy-taxes/levy-taxes')">
          <image src="../../static/index/szyzf@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/transaction/transaction')">
          <image src="../../static/index/sqjyqk@2x.png" mode="aspectFit"/>
        </view>
        <view class="nav-item" @click="goPage('/pages/supervision/supervision')">
          <image src="../../static/index/jdgl@2x.png" mode="aspectFit"/>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        isShow: false,
			  time: {
          day: '',
          hour: ''
        }
			}
		},
		onLoad() {
      this.getDateData()
		},
		methods: {
      selectClick() {
        this.isShow = !this.isShow
      },
      goPage(path) {
        uni.navigateTo({
          url: path
        })
      },
      getDateData() {
        setInterval(() => {
          let dayArr = [
            '周日',
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
          ]
          let Time = new Date()
          let month = Time.getMonth() + 1
          let date = Time.getDate()
          let day = dayArr[Time.getDay()]
          let hours = Time.getHours()
          let minutes = Time.getMinutes()
          let seconds = Time.getSeconds()
          this.time.day = `${month}.${date} ${day}`
          this.time.hour = `${hours}:${minutes}:${seconds}`
        }, 1000)
      }
		}
	}
</script>

<style scoped lang="scss">
.index{
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-size: cover;
  background-position: center;
  background-color: #1053c5;
  background-image: url("../../static/index/bg@2x.png");
  .time{
    position: absolute;
    top: 132upx;
    left: 211upx;
    color: #FFFFFF;
    text{
      display: block;
    }
    .hour{
      font-size: 60rpx;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
    }
    .day{
      font-size: 40rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
    }
  }
  .title{
    position: relative;
    font-family: SourceHanSansCN, SourceHanSansCN-Bold;
    font-weight: 700;
    text-align: center;
    font-size: 96rpx;
    color: #ffffff;
    margin-top: 162rpx;
    .title-text{
      position: relative;
      left: -60rpx;
    }
    .select-box{
      position: absolute;
      box-sizing: border-box;
      z-index: 1;
      right: 56rpx;
      top: 0;
      font-size: 22px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      color: #ffffff;
      letter-spacing: 1px;
      width: 1020rpx;
      display: flex;
      .left{
        color: #ffffff;
        width: 308rpx;
        height: 120rpx;
        line-height: 120rpx;
        //box-sizing: border-box;
        color: #cccccc;
        background: rgba(255,255,255,0.10);
        border: 2rpx solid rgba(255,255,255,0.30);
        border-right: 2rpx solid rgba(255,255,255,0.20);
        text-align: center;
        font-size: 40rpx;
      }
      .right{
        .right-top{
          box-sizing: border-box;
          border: 2rpx solid rgba(255,255,255,0.30);
          border-left: none;
          display: flex;
          .right-top-text{
            background: rgba(255,255,255,0.10);
            width: 608rpx;
            height: 120rpx;
            line-height: 120rpx;
          }
          .image-box{
            background: rgba(255,255,255,0.20);
            width: 104rpx;
            height: 120rpx;
            line-height: 120rpx;
            text-align: center;
            image{
              width: 42rpx;
              height: 26rpx;
            }
          }
        }
        .right-bottom{
          width: 712rpx;
          text-align: left;
          padding-left: 18rpx;
          box-sizing: border-box;
          background: rgba(255,255,255,0.20);
          view{
            height: 120rpx;
            line-height: 120rpx;
          }

        }
      }
    }
  }
  .content{
    width: 3204rpx;
    margin: 0 auto;
    margin-top: 160rpx;
    .nav-row{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .nav-item{
      margin-bottom: 52rpx;
      width: 760rpx;
      height: 440rpx;
      image{
        width: 100%;
      }
    }
    .monitor {
      width: 1572rpx;
    }
  }
}
</style>
