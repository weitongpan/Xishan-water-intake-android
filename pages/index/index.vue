<template>
	<view class="index">
    <view class="time">
      <text class="hour">{{ time.hour }}</text>
      <text class="day">{{ time.day }}</text>
    </view>
		<view class="title">
      锡山区取水分户归档台账自助查询终端
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
      },
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
    font-size: 100rpx;
    font-family: SourceHanSansCN, SourceHanSansCN-Bold;
    font-weight: 700;
    text-align: center;
    color: #ffffff;
    margin-top: 162rpx;
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
