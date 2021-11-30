<template>
  <view class="water-balance-test">
    <top-nav/>
    <view class="content-box">
      <view class="content">
        <view class="title">
          <image src="../../static/water-balance-test/return@2x.png" @click="returnSuperior"></image>
          <text>基于企业水平衡测试的工业节水分析</text>
        </view>
        <view class="content-content">
          <view class="paragraph">
            摘 要:企业水平衡测试是能够实现工业节水的有效基础 方式。文章主要通过在企业水平衡测试的基础上对公司中的各 个部门的实际用水状况进行了解。并且按照技术评价和用水定 额的对比方式，对企业的节水潜力进行相应评估。同时，在节约 用水的基础上，提出具有合理性和科学性的用水意见。 关键词:企业;水平衡测试;工业节水
          </view>


          <view class="paragraph-title">1 引言</view>
          <view class="paragraph">
            摘 要:企业水平衡测试是能够实现工业节水的有效基础 方式。文章主要通过在企业水平衡测试的基础上对公司中的各 个部门的实际用水状况进行了解。并且按照技术评价和用水定 额的对比方式，对企业的节水潜力进行相应评估。同时，在节约 用水的基础上，提出具有合理性和科学性的用水意见。 关键词:企业;水平衡测试;工业节水水平衡测试是指使用水表、检测仪对某一生产周期内的水 系统或机组的水量数据进行监测和收集，根据水量平衡原理，对 水量数据进行整理和分析，并针对取水过程中出现的问题，提出 有效地节水措施和建议等。水平衡测试的目标可以大到一个工 厂或企业、社区，小到一个用水点。例如:空气压缩机、锅炉等， 在日常工作过程中可以根据不同部门的需要，分阶段的开展企 业水平衡测试。水平衡测试是强化用水过程科学管理，实现节 水的基础性工作。
          </view>



          <view class="paragraph-title"> 2 工业节水的重要作用</view>
          <view class="paragraph">
            2.1 工业节水能够为实现社会用水总量控制提供基础 中国是一个水资源短缺、万元产值用水量大的国家，并且也 是水资源极为匮乏的一个国家。随着社会经济的快速发展，城 市工业用水量也在日益增加，水污染和水资源浪费极为严重且 和有限的水资源产生冲突。对于工业企业来说，水资源不但是 生产过程中必不可少的生产原料，而且是最便宜、最广泛的冷却 源。与此同时，它还是保证安全生产、正常生产的重要材料。工 业企业用水量占全社会的比重大，节水潜力巨大。而不同的工 业企业在实际的生产过程中的水资源的消耗情况不同，只有经 过实行以节水为目的的水平衡测试，才能发现水在使用中存在 的问题，才能采取必要的措施加强用水管理，完成节水&#911]。
          </view>
          <view class="paragraph">
            2.2 工业节水能够为提高水资源利用效率推动社会可持续发展 提供保障 众所周知展开工业节水不仅仅是指从总量上减少水资源消 耗，更是从水质上提高水资源的安全性，为社会生产生活提供保 障。一直以来，工业用水都是造成水资源污染的重要来源，做好 工业节水还要求能够减少工业水的污染性。当前完成对工业节 水研究，其能够展开对工业水质的分析，对于工业生产中的水排 放进行有效地处理，由此提高工业用水的回收率，减少工业乱排 放污水对于整个区域水资源的影响。
          </view>

          <view class="paragraph-title">3 企业水平衡测试 </view>
          <view class="paragraph">
            3.1 水平衡测试的概念和水平衡测试的依据 水平衡主要是指“水量”平衡而言，水平衡是研究用水体系 在用水过程中，水的供入、消耗、漏失、排放等环节在量上的平衡 关系&#912]。因此，对企业的水平衡则是以企业为考核对象的水量平 衡，亦即该企业各用水系统的输入水量之和应等于其消耗输出
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
  },
  methods: {
    returnSuperior() {
      uni.navigateBack()
    }
  }
}
</script>

<style scoped lang="scss">
.water-balance-test{
  width: 100%;
  height: 100vh;
  overflow: auto;
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
        border-bottom: 2rpx solid #cccbcb;
        font-size: 72rpx;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #262626;
        line-height: 100rpx;
        padding: 64rpx 0 58rpx;
        position: relative;
        image{
          position: absolute;
          left: 168rpx;
          top: 60rpx;
          width: 140rpx;
          height: 108rpx;
        }
      }
      .content-content{
        background: #f7f7f7;
        margin: 80rpx auto 80rpx;
        padding: 40rpx 54rpx 30rpx 78rpx;
        width: 3560rpx;
        min-height: 1460rpx;
        font-size: 44rpx;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #262626;
        line-height: 80rpx;
      }
    }
  }
}
</style>
