<template>
  <view class="supervision">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">取水计划</view>
        <view class="material-science">文件及归档材料</view>
        <view class="table-box">
          <view class="table-r table-head">
            <text class="r-number">#</text>
            <text class="certificate-number">取水证号</text>
            <text>监管内容</text>
            <text class="company">填报单位</text>
            <text>填报人</text>
            <text>填报日期</text>
            <text>操作</text>
          </view>
          <view v-for="item in list" class="table-r">
            <text class="r-number">01</text>
            <text class="certificate-number">9194583920028330589D</text>
            <text>日常监管</text>
            <text class="company">南国红豆股份有限公司</text>
            <text>孙茜</text>
            <text>2020-09-12</text>
            <text class="operation" @click="detailsClick">查看详情</text>
          </view>
        </view>
      </view>
    </view>
    <uni-popup ref="popup"
               @change="isMessageChange"
               background-color="#fff">
      <view class="popup">
        <view class="title">
          <text>监督管理详情</text>
          <image src="../../static/supervision/cancel@2x.png"
                 @click="detailsClose"
          />
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            监管内容
          </view>
          <view class="popup-r-content">
            监管内容
          </view>
        </view>
        <view class="popup-r file-box">
          <view class="popup-r-title">
            检查结果
          </view>
          <view class="popup-r-content">
            <view class="content-img">文件材料.pdf</view>
            <view class="content-img">文件材料.pdf</view>
            <view class="content-img">现场图片.png</view>
            <view class="content-img">现场图片.png</view>
          </view>
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            检查结果
          </view>
          <view class="popup-r-content">
            这是示例文字：东莞市达菱机电设备有限公司是一家专业销售各种型号冷却塔及水泵专业厂家. 冷却塔系统有:制造不锈钢冷却塔、闭式冷却塔、工业冷却塔、空调冷却塔。冷却塔又称凉水塔、冷却水塔
          </view>
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            整改与处理
          </view>
          <view class="popup-r-content">
            这是示例文字：东莞市达菱机电设备有限公司是一家专业销售各种型号冷却塔及水泵专业厂家. 冷却塔系统有:制造不锈钢冷却塔、闭式冷却塔、工业冷却塔、空调冷却塔。冷却塔又称凉水塔、冷却水塔
          </view>
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            填报单位
          </view>
          <view class="popup-r-content">
            东港镇水里管理站
          </view>
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            填报人
          </view>
          <view class="popup-r-content">
            刘娟
          </view>
        </view>
        <view class="popup-r">
          <view class="popup-r-title">
            填报日期
          </view>
          <view class="popup-r-content">
            2021-09-29
          </view>
        </view>
      </view>
    </uni-popup>
    <view v-if="isMessage" class="message">详情查阅锡山区取水监管信息化系统</view>
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
      isMessage: false,
      list: [
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        },
        {
          text1: '01',
          text2: '9194583920028330589D',
          text3: '日常监管',
          text4: '南国红豆股份有限公司',
          text5: '孙茜',
          text6: '2020-09-12',
          text7: '查看详情'
        }
      ]
    }
  },
  methods: {
    isMessageChange(e) {
      if (e.show) {
        this.isMessage = true
        setTimeout(() => {
          this.isMessage = false
        },2000)
      } else {
        this.isMessage = false
      }
    },
    detailsClick() {
      this.$refs.popup.open()
    },
    detailsClose() {
      this.$refs.popup.close()
    }
  }
}
</script>

<style scoped lang="scss">
.supervision {
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
      .material-science{
        padding: 38rpx 0 54rpx 132rpx;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #262626;
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
          .certificate-number, .company{
            flex: 3;
          }
          .operation{
            color: #0a63e6;
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

  .popup{
    width: 2400rpx;
    box-sizing: border-box;
    .title{
      position: relative;
      font-size: 28px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #262626;
      height: 152rpx;
      line-height: 152rpx;
      background: #eff1f4;
      image{
        position: absolute;
        right: 44rpx;
        top: 44rpx;
        width: 64rpx;
        height: 64rpx;
      }
    }
    .popup-r{
      display: flex;
      padding: 28rpx 44rpx 68rpx 0;
      border-top: 2rpx solid #cccccc;
      .popup-r-title{
        width: 421rpx;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: right;
        color: #4d4d4d;
      }
      .popup-r-content{
        width: 2159rpx;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        color: #262626;
        padding-left: 146rpx;
        box-sizing: border-box;
        .content-img{
          color: #0a63e6;
          margin-bottom: 44rpx;
        }
      }
    }
    .file-box{
      padding-bottom: 0 !important;
    }
  }

  .message{
    z-index: 999;
    position: absolute;
    left: 35%;
    top: 45%;
    width: 1232rpx;
    height: 200rpx;
    line-height: 200rpx;
    background: #000000;
    border-radius: 30rpx;



    font-size: 64rpx;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
    letter-spacing: 2rpx;
  }
}
</style>
