<template>
  <view class="water-intake-plan">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">取水计划</view>
        <view class="table-box">
          <view class="table-r table-head">
            <text class="r-number">#</text>
            <text>填报年度</text>
            <text>年计划取水量</text>
            <text>取水总结和计划申请表</text>
            <text>取水计划下达文件</text>
            <text>取水计划调度申请表</text>
            <text>调整计划下达文件</text>
          </view>
          <view class="table-r" v-for="item in fileData">
            <text class="r-number">{{ item.id }}</text>
            <text>{{ item.t1 }}</text>
            <text>{{ item.t2 }}</text>
            <text @click="viewPicture(item.t3Url)">{{ item.t3 }}</text>
            <text @click="viewPicture(item.t4Url)">{{ item.t4 }}</text>
            <text>{{ item.t5 }}</text>
            <text>{{ item.t6 }}</text>
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
  data () {
    return {
      isShow: false,
      fileData: [
        {
          id: '01',
          t1: '2021',
          t2: '200',
          t3: '申请表.txt',
          t3Url: 'https://demo.gzzyb.cn/android/Android/d1/jhsq1.pdf',
          t4: '下达文件.pdf',
          t4Url: '../../static/file/d1/qsxd.pdf',
          t5: '',
          t6: '',
        },
        {
          id: '02',
          t1: '2020',
          t2: '200',
          t3: '申请表.txt',
          t3Url: 'https://demo.gzzyb.cn/android/Android/d1/jhsq2.pdf',
          t4: '下达文件.pdf',
          t4Url: 'https://demo.gzzyb.cn/android/Android/d1/jhxd2.pdf',
          t5: '',
          t6: '',
        },
        {
          id: '03',
          t1: '2019',
          t2: '200',
          t3: '',
          t3Url: '',
          t4: '下达文件.pdf',
          t4Url: 'https://demo.gzzyb.cn/android/Android/d1/jhxd3.pdf',
          t5: '',
          t6: '',
        },
        // {
        //   id: '04',
        //   t1: '2021',
        //   t2: '6803',
        //   t3: '申请表.txt',
        //   t4: '文件.txt',
        //   t5: '申请表.txt',
        //   t6: '文件.txt',
        //   isShow: false
        // },
        // {
        //   id: '05',
        //   t1: '2021',
        //   t2: '6803',
        //   t3: '申请表.txt',
        //   t4: '文件.txt',
        //   t5: '申请表.txt',
        //   t6: '文件.txt',
        //   isShow: true
        // }
      ]
    }
  },
  methods: {
    viewPicture(path) {
      uni.showLoading({
        title: 'loading……',
        mask: true
      })
      uni.downloadFile({
        url: path,
        success: function (res) {
          uni.hideLoading()
          var filePath = res.tempFilePath;
          uni.openDocument({
            filePath: filePath,
            showMenu: true,
            success: function (res) {
              console.log('打开文档成功');
            }
          })
        }
      })
    },
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
.water-intake-plan {
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
