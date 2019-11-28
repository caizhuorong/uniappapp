<template>
	<view class="home" id="home">
		<view class="status_bar"></view>
		<view class="movieTypesContent">
			<view class="movieTypes">
				<text class="typesName" v-for="(movieType, index) in movieTypesArray" :key="index" @click="goSearch(movieType)">{{ movieType }}</text>
				<image src="../../static/2.png" class="find" @click="goSearch()"></image>
			</view>
		</view>
		<view class="searchContent">
			<view class="search">
				<image src="../../static/1.png" class="searchLogo"></image> 
				<input type="text" placeholder="找电影" 	 :focus="showPopupBottom"  class="searchInput" @click="goSearch()" ref="inputs" />
			</view>
			<image class="lookRecord" @click="goLookRecord()" src="../../static/3.png" alt=""></image>
			<image class="lookRecord" @click="goLookCollect()" src="../../static/4.png" alt=""></image>
		</view>
		<view class="bannerContent">
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" class="banner" v-if="bannerArray.length > 0" ref="mySwiper">
				<swiper-item @click="playMovie(bannerObject.video_id, bannerObject.slide_url)" v-for="(bannerObject, index) in bannerArray" :key="index" class="bannerslide">
					<image :src="bannerObject.img" class="bannerimg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="movieContent">
			<view class="movieDisplay" v-for="(x, y) in movieDisplayArray" :key="y">
				<view class="header">
					<view class="title">{{ x.name }}</view>
					<view class="more" @click="findMoreMovie(x.id, x.name)">
						<text class="name">更多</text>
						<image src="../../static/5.png"></image>
					</view>
				</view>
				<view class="list_content">
					<view :class="ys % 4 != 0 || ys == 0 ? 'content1' : 'content2'" v-for="(xs, ys) in x.list" :key="ys" v-if="ys < 5">
						<view class="movieDisplayList" @click="playMovie(xs.video_id)" v-if="ys % 4 != 0 || ys == 0">
							<view class="move_img_bj">
								<image class="move_img" :src="xs.img" lazy-load></image>
								<!-- <view class="hot">{{xs.is_vip == 1 ? 'VIP':'限免'}}</view> -->
							</view>
							<view class="movieName">{{ xs.name }}</view>
						</view>
						<view class="movieDisplayListBig" @click="playMovie(xs.video_id)" v-if="ys % 4== 0 && ys != 0">
							<view class="move_img_bj">
								<image class="move_img" :src="xs.img" lazy-loadVIP><image>
								<!-- <view class="hot">{{xs.is_vip == 1 ? 'VIP':'限免'}}</view> -->
							</view>
							<view class="movieName">{{ xs.name }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="dx">————我们是有底线的————</view>
		<view class="notice" v-if="noticeType" v-for="(x,y) in noticeInfo" :key="y" >
		  <view class="middle">
		    <view class="header">
		      <image src="../../static/41.png" ></image>
		    </view>
		    <view class="TC">
					<view  class="content">
		      <rich-text class="content" :nodes="x.content"></rich-text>
					</view>
		    </view>
		    <view class="close" @click="closeNotice">关闭公告</view>
		  </view>
		</view>
	</view>
</template>

<script>
import util from '../../utils/public';
let down = '';
export default {
	name: 'home',
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 5000,
			duration: 500,
			movieTypesArray: [],
			bannerArray: [],
			movieDisplayArray: [],
			showPopupBottom:false,
			noticeType:false,
			noticeInfo:[],
		};
	},
	onLoad() {
		this.getHomeInfo();
		if( uni.getStorageSync('notice')!= ''){
			let data = uni.getStorageSync('notice');
			this.noticeType = true;
			this.noticeInfo = data;
			uni.removeStorageSync('notice');
		}else{
		}
		console.log(uni.getSystemInfoSync().platform)
		if(uni.getSystemInfoSync().platform == 'android' ){
			this.getVersion();
		}
	},
	onPullDownRefresh() {
		this.getHomeInfo();
	},
	methods: {
		async getVersion() {
			console.log(util.config.version);
			const data = await util.getInfoByAxios('post', `${util.config.host}/api/common/init`, {
				version:util.config.version
			},true);
			if( data.data.code == 100 ){
				down = data.data.data.android;
				uni.showModal({
					title:"版本更新",
					content:"1、本次强制更新,修复了核心数据. \r\n 3、优化了播放器的流畅性.",
					confirmText:'更新',
					success: function (res) {
						if (res.confirm) {
							console.log(down);
								plus.runtime.openURL(down, function(res) {
									console.log(res);
								});
						} else if (res.cancel) {
								console.log('用户点击取消');
						}
					}
				})
			}
		},
		closeNotice(){
			this.noticeType = false;
		},
		/*跳转到更多电影页面*/
		findMoreMovie(typeId,typeName) {
			uni.navigateTo({
				url:`../moreMovie/moreMovie?typeId=${typeId}&typeName=${typeName}`
			})
		},
		playMovie(movieId,url) {
			util.playmove(movieId,url);
		},
		goSearch(e) {
			uni.navigateTo({
				url: `../search/search?searchInfo=${e}`
			});
		},
		goLookCollect() {
			uni.navigateTo({
				url: '../collect/collect'
			});
		},
		goLookRecord() {
			uni.navigateTo({
				url: '../playRecord/playRecord'
			});
		},
		async getHomeInfo() {
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/index`,
				{
					page: 1
				},
				true
			);
			console.log(data);
			uni.stopPullDownRefresh();
			this.bannerArray = data.data.data.slide_list;
			this.movieTypesArray = data.data.data.video_labels;
			this.movieDisplayArray = data.data.data.video_types;
		}
	}
};
</script>

<style scoped lang="scss">
	.dx{
		width:100%;
		height: 30upx;
		text-align: center;
		font-size: 28upx;
		color:#999;
		margin-top:30upx;
		overflow: hidden;
		padding-top: 20upx;
		padding-bottom:20upx;
	}
.status_bar {
	height: var(--status-bar-height);
	width: 750upx;
	background-color: #fff;
}
.home {
	width: 750upx;
	height: auto;
	overflow-y: auto;
	.movieTypesContent {
		width: 750upx;
		height: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		.movieTypes {
			width: 100%;
			margin: 0 auto;
			height: 60upx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.typesName {
				font-size: 0.9rem;
				font-weight: bold;
				color: #656565;
				font-family: '微软雅黑 Light';
				text-align: center;
			}
			.find {
				width: 50upx;
				height: 50upx;
				margin-right: 10upx;
			}
		}
	}
	.searchContent {
		width: 690upx;
		height: 80upx;
		margin: 0 auto;
		margin-top: 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		.search {
			width: 78%;
			height: 80upx;
			background-color: #eeeeee;
			border-radius: 0.3rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			image {
				width: 40upx;
				height: 40upx;
				margin-left: 30upx;
			}
			input {
				background-color: transparent;
				margin-left: 4%;
				font-size: 0.7rem;
			}
		}
		.lookRecord,
		.collect {
			width: 50upx;
			height: 50upx;
		}
	}
	.bannerContent {
		margin-top: 20upx;
		width: 750upx;
		height: 380upx;
		.banner {
			width: 750upx;
			height: 380upx;
			border-radius: 0.4rem;
			.bannerslide {
				width: 750upx;
				height: 380upx;
				.bannerimg {
					width: 750upx;
					height: 380upx;
				}
			}
		}
	}
}
.movieContent {
	width: 100%;
	.movieDisplay {
		width: 100%;
		margin-top: 20upx;
		.header {
			width: 710upx;
			margin: 0 auto;
			height: 50upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.title {
				font-size: 30upx;
				font-weight: bold;
			}
			.more {
				width: 100upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0;
				.name {
					font-size:26upx;
					color: gray;
				}
				image {
					width: 25%;
					height: 0.8rem;
				}
			}
		}
		.content {
			width: 100%;
			padding: 0 2%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
		}
	}
}

.content1 {
	width: 48%;
	margin-top: 6upx;
	background: transparent;
}
.content2 {
	width: 98%;
	margin-top: 6upx;
	background: transparent;
	overflow: hidden;
}
.list_content {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	background: transparent;
	.movieDisplayList {
		width: 100%;
		background: transparent;
		.move_img_bj {
			width: 100%;
			height: 202upx;
			border-radius: 10upx;
			background-color: #fff;
			box-shadow: 0 0 10upx rgba(0,0,0,.3);
			position: relative;
			.hot{
				position: absolute;
				right:0rem;
				top: 0rem;
				width:100upx;
				height:50upx;
				font-size:24upx;
				line-height: 50upx;
				border-top-right-radius: 10upx;
				color:#fff;
				background-image: linear-gradient(to right , #ee6868, #f04848);
				border-bottom-left-radius: 18upx;
				text-align: center;
			}
			.move_img {
				width: 100%;
				height: 202upx;
				border-radius: 14upx;
			}
		}

		.movieName {
			max-width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: center;
			padding-top:10upx;
			padding-bottom: 15upx;
			font-size:26upx;
			background: transparent;
		}
	}
	.movieDisplayListBig {
		width: 100%;
		height: 460upx;
		background: transparent;
		.move_img_bj {
			width: 100%;
			height: 420upx;
			border-radius: 10upx;
			background-color: #fff;
			box-shadow: 0 0 25upx rgba(0,0,0,.3);
			position: relative;
			.hot{
				position: absolute;
				right:0rem;
				top: 0rem;
				width:100upx;
				height:50upx;
				font-size:24upx;
				line-height: 50upx;
				color:#fff;
				background-image: linear-gradient(to right , #ee6868, #f04848);
				border-bottom-left-radius:18upx;
				text-align: center;
			}
			.move_img {
				width: 100%;
				height: 420upx;
				border-radius: 10upx;
			}
		}
		.movieName {
			max-width: 100%;
			height: 30upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			padding-top:10upx;
			padding-bottom: 15upx;
			font-size: 26upx;
			text-align: center;
			background: transparent;
		}
	}
}
.notice{
  width: 100%;
  height:100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4001;
  background-color: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #626262;
  .middle{
    width: 70%;
    height: 60%;
    background-color: #fb675d;
		border-radius: 18upx;
    .header{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      image{
        width: 100%;
				height: 200upx;
				margin-top: -50upx;
      }
    }
    .TC{
      width: 100%;
      height: 60%;
      margin-top: 5%;
      .content{
				width: 80%;
				margin:0 auto;
        height: 80%;
        margin-top: 5%;
        text-align: left;
        overflow-y: auto;
        white-space: pre-line;
				color: #fff;
				font-size: 26upx;
      }
    }
    .close{
      width: 40%;
      margin: 0 auto;
			text-align: center;
      padding: 2%;
      border-radius: 18upx;
      color: #fb675d;
      background-color: #fff;
    }
  }
}
</style>
