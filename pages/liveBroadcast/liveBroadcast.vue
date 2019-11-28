<template>
    <view class="channel">
			<view class="tip">直播源来自第三方平台，请勿相信直播中任何广告！</view>
        <view class="content">
          <view class="item" v-for="(x,y) in movieTypesArray" :key="y" @click="findMoreMovie(x.address,x.title)">
						<image class="item_img" :src="x.xinimg"></image>
						<view class="item_text">
							<text class="text_top">{{x.title}}</text>
							<text class="text_bottom">美女主播在线</text>
						</view>
						<view class="right">立即进入</view>
					</view>
        </view>
    </view>
</template>

<script>
  import util from '../../utils/public'
  import allMovie from '../../components/allMovie.vue'
    export default {
        name: "channel",
        data(){
          return{
            navState:null,
            movieTypesArray:[],
          }
        },
        components:{
          allMovie
        },
        onLoad(){
            this.getMovieType();
						this.getconfig();
        },
				onPullDownRefresh() {
					this.getMovieType();
				},
        methods:{
					async getconfig(){
						const data = await util.getInfoByAxios("get",`${util.config.host}/api/index/app_config`,{},true);
						console.log(data);
						uni.setStorageSync('config',data.data.data);
					},
					findMoreMovie(url,title) {
						console.log(url);
						uni.navigateTo({
							url:`../liveBroadcastList/liveBroadcastList?url=${url}&title=${title}`
						})
					},
          getMovieType(){
						uni.showLoading({
							title:"加载中...",
						})
						uni.request({
							url: 'https://zb.papalu.in/zhibo/pt.txt',
							method: 'GET',
							data: {},
							success: (res) => {
								console.log(res);
								uni.hideLoading();
								this.movieTypesArray = res.data.pingtai;
								uni.stopPullDownRefresh();
							},
							fail: (error) => {
								uni.stopPullDownRefresh();
								uni.hideLoading();
								setTimeout(() => {
									uni.showToast({
										message: '请求失败',
										position: 'center',
										duration: 2000
									});
								}, 1000);
							}
						});
						
          },
          changeNav(index){
            this.navState = index;
          }
        },
       
    }
</script>

<style scoped lang="scss">
	.tip{
		font-size: 32upx;
		color: red;
		padding:20upx;
	}
  .channel{
    width: 100%;
    .content{
      width: 100%;
      display: flex;
      flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;
			margin-top: 30upx;
			.item{
				width:690upx;
				margin: 0 auto;
				height: 150upx;
				margin-bottom: 40upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1upx solid #e5e5e5;
				background-color: #F08080;
				border-radius: 12upx;
				box-shadow: 0 0 10upx rgba(0,0,0,.3);
				
				.item_img{
					width: 110upx;
					height: 110upx;
					border-radius:50%;
					box-shadow: 0 0 10upx rgba(0,0,0,.3);
					margin-left: 20upx;
				}
				.item_text{
					text-align: left;
					padding-top: 10upx;
					width: 330upx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 28upx;
					color: #333333;
					.text_top{
						display: block;
						color: #333;
						font-size:28upx;
						padding-bottom: 10upx;
					}
					.text_bottom{
						display: block;
						color:#fff;
						font-size:28upx;
					}
				}
				.right{
					width: 180upx;
					height: 80upx;
					text-align: center;
					line-height: 80upx;
					font-size: 32upx;
					color: #fff;
					background-image: linear-gradient(to right , #ee6868, #f04848);
					border-radius: 40upx;
					box-shadow: 0 0 10upx rgba(0,0,0,.3);
					margin-right: 20upx;
				}
			}
    }
  }
</style>
