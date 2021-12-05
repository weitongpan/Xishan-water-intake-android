<template>
  <view class="basic-information">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">节水型载体创建</view>
        <view class="message">
          根据《江苏省节约用水条例》《江苏省节水行动实施方案》和省水利厅、省发展改革委《关于进一步规范省级节水型载体管理的通知》（苏水节〔2020〕8 号）要求，各地应积极开展省级节水型企业、社区、灌区等载体建设。
        </view>
        <view class="file-box">
          <view>查询管理规范：</view>
          <view class="file-img">
            <image src="../../static/public/txt@2x.png"/>
          </view>
          <view class="file-name" @click="previewFile(false)">江苏省水利厅文件</view>
        </view>
        <view class="info4-box">
          <view class="info4-box-title">文件及归档材料：</view>
          <view class="info4-box-table">
            <view class="table-head">
              <text>#</text>
              <text>申报年度</text>
              <text>任务下达文件</text>
              <text>创建成功文件</text>
              <text>台账资料</text>
              <text>复查情况</text>
            </view>
            <view class="table-body" v-for="item in fileData">
              <text>{{ item.id }}</text>
              <text>{{ item.t1 }}</text>
              <text @click="previewFile(item.isShow)">{{ item.t2 }}</text>
              <text @click="previewFile(item.isShow)">{{ item.t3 }}</text>
              <text @click="previewFile(item.isShow)">{{ item.t4 }}</text>
              <text @click="previewFile(item.isShow)">{{ item.t5 }}</text>
            </view>
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
export default {
  components: {
    topNav
  },
  data() {
    return {
      isShow: false,
      fileData: [
        {
          id: '01',
          t1: '2021',
          t2: '测试报告.txt',
          t3: '测试报告.txt',
          t4: '测试报告.txt',
          t5: '测试报告.txt',
          isShow: false
        },
        {
          id: '02',
          t1: '2021',
          t2: '测试报告.txt',
          t3: '测试报告.txt',
          t4: '测试报告.txt',
          t5: '测试报告.txt',
          isShow: true
        },
        {
          id: '03',
          t1: '2021',
          t2: '测试报告.txt',
          t3: '测试报告.txt',
          t4: '测试报告.txt',
          t5: '测试报告.txt',
          isShow: false
        },
        {
          id: '04',
          t1: '2021',
          t2: '测试报告.txt',
          t3: '测试报告.txt',
          t4: '测试报告.txt',
          t5: '测试报告.txt',
          isShow: true
        }
      ]
    }
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
        border-bottom: 2rpx solid #cccbcb;
      }
      .message{
        padding: 20rpx 0 18rpx 86rpx;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #262626;
        line-height: 80rpx;
      }
      .file-box{
        padding: 48rpx 0 48rpx 86rpx;
        background: #f1f6ff;
        display: flex;
        font-size: 48rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #4d4d4d;
        .file-img{
          margin: 0 36rpx 0 18rpx;
          image{
            width: 60rpx;
            height: 70rpx;
          }
        }
        .file-name{
          color: #0a63e6;
        }
      }
      .info4-box{
        display: flex;
        padding: 48rpx 0 54rpx 86rpx;
        .info4-box-title{
          margin-right: 32rpx;
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
          .table-body:nth-child(2n + 1){
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
