<template>
	<view class="sign-in">
    <view class="title-box">
      <view class="time-box">
        <view class="hour">{{ time.hour }}</view>
        <view class="day">{{ time.day }}</view>
      </view>
      <view class="title">锡山区取水分户归档台账自助查询终端</view>
    </view>
    <view class="form">
      <view>

        <input placeholder="请输入您的用户名">
      </view>
      <view>
        <input placeholder="请输入您的密码" :password="true">
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
.sign-in{
  width: 100%;
  height: 100vh;
  background-image: url("../../static/index/bg@2x.png");
  background-size: 100% 100%;
  .title-box{
    padding-top: 166rpx;
    position: relative;
    .time-box{
      position: absolute;
      top: 132upx;
      left: 211upx;
      color: #FFFFFF;
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
      font-size: 96rpx;
      font-family: SourceHanSansCN, SourceHanSansCN-Bold;
      font-weight: 700;
      text-align: center;
      color: #ffffff;
    }
  }
  .form{
    width: 1040rpx;
    height: 1000rpx;
    background: #ffffff;
    border-radius: 20rpx;
    margin: 318rpx auto 0;
  }
}

</style>
