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
      <view class="top">
        <image src="../../static/sign_in/logo.png"></image>
        <text class="text">锡山取水管理系统</text>
      </view>
      <view class="form-item" hover-class="active">
        <view class="input-box">
          <view class="left">
            <image src="../../static/sign_in/user.png"></image>
            <image src="../../static/sign_in/line.png" class="line"></image>
          </view>
          <view class="middle">
            <input placeholder="请输入您的用户名">
          </view>
          <view class="right">
<!--            <image src="../../static/sign_in/show.png"></image>-->
          </view>
        </view>
      </view>
      <view class="form-item">
        <view class="input-box">
          <view class="left">
            <image src="../../static/sign_in/suo.png"></image>
            <image src="../../static/sign_in/line.png" class="line"></image>
          </view>
          <view class="middle">
            <input placeholder="请输入您的密码" :password="!passwordIsShow">
          </view>
          <view class="right">
            <image src="../../static/sign_in/show.png" v-if="passwordIsShow" @click="passShow"></image>
            <image src="../../static/sign_in/hide.png" v-else  @click="passShow"></image>
          </view>
        </view>
      </view>
      <view class="tips">用户名或密码错误！</view>
      <view class="sub">
        <button>登 录</button>
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
        },
        passwordIsShow: false
			}
		},
    onLoad() {
      this.getDateData()
    },
		methods: {
      passShow() {
        this.passwordIsShow = !this.passwordIsShow
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
    .top{
      height: 144rpx;
      line-height: 144rpx;
      text-align: center;
      padding-top: 54rpx;
      margin-bottom: 108rpx;
      image{
        width: 160rpx;
        height: 100%;
      }
      .text{
        font-size: 50rpx;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        font-weight: bold;
        color: #262626;
        position: relative;
        top: -50rpx;
      }
    }
    .form-item{
      margin-top: 60rpx;
      .input-box{
        box-sizing: border-box;
        line-height: 120rpx;
        display: flex;
        width: 880rpx;
        height: 120rpx;
        background: #ffffff;
        border: 2rpx solid #cccccc;
        border-radius: 12rpx;
        margin: 0 auto;
        image{
          width: 60rpx;
          height: 60rpx;
        }
        .left{
          width: 10%;
          position: relative;
          padding-top: 20rpx;
          margin-left: 30rpx;
          .line{
            width: 4rpx;
            height: 60rpx;
            position: absolute;
            right: 0;
            top: 30rpx;
          }
        }
        .middle{
          width: 80%;
          margin-left: 40rpx;
          input{
            height: 100%;
            font-size: 44rpx;
          }
        }
        .right{
          width: 10%;
          padding-top: 20rpx;
        }
      }
      .active{
        border: 2rpx solid #0a63e6;
      }
      .input-box:focus{
        border: 2rpx solid #0a63e6;
      }
    }
    .tips{
      width: 880rpx;
      margin: 16rpx auto 0;


      font-size: 36rpx;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ff3945;
      line-height: 50rpx;
    }
    .sub{
      margin: 54rpx auto 0;
      width: 880rpx;
      height: 132rpx;
      button{
        width: 100%;
        height: 132rpx;
        background: #0a63e6;
        border-radius: 12rpx;
        line-height: 132rpx;
        color: #ffffff;
        border: none;
        font-size: 52rpx;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}

</style>
