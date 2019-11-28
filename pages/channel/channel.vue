<template>
    <view class="channel">
			<view class="status_bar"></view>
        <view class="content">
          <view class="item" v-for="(x,y) in movieTypesArray" :key="y" @click="findMoreMovie(x.tid,x.name)">
						<image class="item_img" :src="x.img"></image>
						<view class="item_text">{{x.name}}</view>
					</view>
        </view>
    </view>
</template>

<script>
  import util from '../../utils/public'
  import allMovie from '../../components/allMovie.vue'
	let tid = 0;
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
					findMoreMovie(typeId,typeName) {
						uni.navigateTo({
							url:`../moreMovie/moreMovie?typeId=${typeId}&typeName=${typeName}`
						})
					},
          async getMovieType(){
            const data = await util.getInfoByAxios("get",`${util.config.host}/api/video/video_types`,{},true);
						this.movieTypesArray = data.data.data;
            this.navState = data.data.data[0].tid;
						uni.stopPullDownRefresh();
          },
          changeNav(index){
            this.navState = index;
          }
        },
       
    }
</script>

<style scoped lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 750upx;
		background-color: #fff;
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
				width: 30%;
				margin-left:2.5%;
				height: 360upx;
				margin-bottom: 30upx;
				.item_img{
					width: 100%;
					height: 300upx;
					border-radius: 14upx;
					box-shadow: 0 0 10upx rgba(0,0,0,.3);
				}
				.item_text{
					text-align: center;
					padding-top: 10upx;
					width: 100%;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 28upx;
					color: #333333;
				}
			}
    }
  }
</style>
