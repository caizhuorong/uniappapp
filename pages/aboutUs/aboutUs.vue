<template>
  <view class="aboutUs">
    <view class="content">
      <view class="App">
        <image src="../../static/27.png" ></image>
        <view>v1.0.3</view>
      </view>
      <view class="listContent">
        <view class="list" @click="agreement()">
          <text>用户协议</text>
          <image src="../../static/5.png"></image>
        </view>
        <view class="list" @click="privacy()">
          <text>隐私政策</text>
          <image src="../../static/5.png"></image>
        </view>
        <view class="list" @click="service()">
          <text>服务条款</text>
          <image src="../../static/5.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'agreement',
    methods: {
			agreement(){
				uni.navigateTo({
					url:"../agreement/agreement"
				})
			},
			privacy(){
				uni.navigateTo({
					url:"../privacy/privacy"
				})
			},
			service(){
				uni.navigateTo({
					url:"../service/service"
				})
			},
    },
  }
</script>

<style scoped lang="scss">
  .aboutUs{
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    .content{
      width: 100%;
      overflow: hidden;
      .App{
        width: 168upx;
        margin:0 auto;
				margin-top:80upx;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        image{
          width:220upx;
          height:220upx;
        }
        view{
          width: 100%;
          margin-top: 30upx;
          color: #575757;
          font-size: 32upx;
					text-align: center;
        }
      }
      .listContent{
        width: 100%;
        background-color: white;
				margin-top:60upx;
        .list{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
					height: 80upx;
          border-bottom: 1px solid #e5e5e5;
          text{
						font-size: 32upx;
						color:#666;
						line-height: 80upx;
						padding-left: 30upx;
          }
					image{
						width: 50upx;
						height: 50upx;
					}
        }
      }
    }
  }
</style>
