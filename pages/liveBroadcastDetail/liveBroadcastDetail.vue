<template>
	<view class="movieDetails">
		<view class="video">
			<view class="videoTrue" id="myplayer">
			<!-- <cover-view class="videoText" v-if="!isVip">试看{{showzd}}秒，VIP无限看</cover-view>-->
			<cover-view class="videoTips" v-if="isPlayEnd"></cover-view>
			<cover-view class="top_title" v-if="isPlayEnd">非会员，仅可试看{{showzd}}秒</cover-view>
			<cover-view class="tops1" v-if="isPlayEnd ">开通会员，享受以下权限：</cover-view>
			<cover-view class="tops2" v-if="isPlayEnd">1、观看本区海量爽片不受限制</cover-view>
			<cover-view class="tops3" v-if="isPlayEnd">2、享受蓝光超清资源</cover-view>
			<cover-view class="tops4" v-if="isPlayEnd">3、急速秒播放，快若闪电</cover-view>
			<cover-view class="bottoms_left" v-if="isPlayEnd" @click="govipCenter()">开通vip会员</cover-view>
				<video id="myVideo" :initial-time="initial" :autoplay="true" @timeupdate="timeupdates" :controls="true" objectFit="fill" :src="url">
					<cover-view class="videoText" v-if="!isVip">试看{{showzd}}秒，VIP无限看</cover-view>
				<!-- 	<cover-view class="videoTips" v-if="isPlayEnd && !isVip"></cover-view>
					<cover-view class="top_title" v-if="isPlayEnd && !isVip">非会员，仅可试看{{showzd}}秒</cover-view>
					<cover-view class="tops1" v-if="isPlayEnd && !isVip">开通会员，享受以下权限：</cover-view>
					<cover-view class="tops2" v-if="isPlayEnd && !isVip">1、观看本区海量爽片不受限制</cover-view>
					<cover-view class="tops3" v-if="isPlayEnd && !isVip">2、享受蓝光超清资源</cover-view>
					<cover-view class="tops4" v-if="isPlayEnd && !isVip">3、急速秒播放，快若闪电</cover-view>
					<cover-view class="bottoms_left" v-if="isPlayEnd && !isVip" @click="govipCenter()">开通vip会员</cover-view> -->
				</video>
			</view>
		</view>
	</view>
</template>
<script>
import util from '../../utils/public';
let a = 0;
let isvip;
export default {
	name: 'liveBroadcastDetail',
	data() {
		return {
			isPlayEnd: false,
			isVip: false,
			showzd: '',
			url: ''
		};
	},
	onLoad(options) {
		console.log(options.url);
		this.url = options.url;
		uni.setNavigationBarTitle({
		    title: uni.getStorageSync('title')
		});
		uni.removeStorageSync('title');
			this.showzd = uni.getStorageSync('config').showzd;
			this.isVip = uni.getStorageSync('userInfo').is_vip == 0 ? false : true;
			this.isPlayEnd = false;
			setTimeout(()=>{
				if( !this.isVip ){
					this.isPlayEnd = true;
				}
			},this.showzd*1000)
	},
	onReady() {

	
	},
	methods: {
		govipCenter() {
			uni.switchTab({
				url: '../vipCenter/vipCenter'
			});
		},
		goAdv(url) {
			if (url) {
				plus.runtime.openURL(url, function(res) {});
			}
		},
		timeupdates(event) {
			if (!this.isVip) {
				let timeDisplay = Math.floor(event.detail.currentTime);
				this.currentTime = Math.floor(event.detail.currentTime);
				if (timeDisplay >= parseFloat(this.showzd)) {
					this.isPlayEnd = true;
				}
			}
		},
	}
};
</script>
<style scoped lang="scss">
.videoText {
	width: 240upx;
	height: 40upx;
	background-color: #00c48d;
	color: #fff;
	font-size: 20upx;
	line-height: 40upx;
	position: absolute;
	right: 30upx;
	top: 30upx;
	border-radius: 2rem;
	z-index: 2001;
	text-align: center;
}
.movieDetails {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left:0;
	
	.video {
		width: 100%;
		height: 100%;
		position: relative;
		.videoTrue {
			width: 100%;
			height: 100%;
			z-index: 1998;
			background-color: black;
			position: relative;
			video {
				width: 100%;
				height: 100%;
				position: absolute;
				z-index: 10;
			}
		}
		.tops {
			position: absolute;
			top: 30%;
			left: 0upx;
			width: 750upx;
			height: 40upx;
			font-size: 30upx;
			color: #fff;
			text-align: center;
			z-index: 2001;
		}
		.tops1 {
			position: absolute;
			top: 33%;
			left: 0upx;
			width: 750upx;
			height: 40upx;
			font-size: 28upx;
			color: #fff;
			text-align: center;
			z-index: 2002;
		}
		.tops2 {
			position: absolute;
			top: 37%;
			left: 200upx;
			width: 750upx;
			height: 40upx;
			font-size: 28upx;
			color: #fff;
			text-align: left;
			z-index: 2002;
		}
		.tops3 {
			position: absolute;
			top: 41%;
			left: 200upx;
			width: 750upx;
			height: 40upx;
			font-size: 28upx;
			color: #fff;
			text-align: left;
			z-index: 2002;
		}
		.tops4 {
			position: absolute;
			top:45%;
			left: 200upx;
			width: 750upx;
			height: 40upx;
			font-size: 28upx;
			color: #fff;
			text-align: left;
			z-index: 2002;
		}
		.bottoms_left {
			width: 200upx;
			height: 60upx;
			color: #fff;
			font-size: 30upx;
			background-color: #ff406f;
			text-align: center;
			line-height: 60upx;
			border-radius: 34upx;
			position: absolute;
			top:54%;
			left: 50%;
			margin-left: -100upx;
			z-index: 2002;
		}
		.bottoms_right {
			width: 200upx;
			height: 60upx;
			color: #fff;
			font-size: 30upx;
			background-color: #ff406f;
			text-align: center;
			line-height: 60upx;
			border-radius: 34upx;
			position: absolute;
			top: 45%;
			left: 410upx;
			z-index: 2002;
		}
		.videoTips {
			width: 80%;
			height: 80%;
			background-color: black;
			position: absolute;
			top: 10%;
			left: 10%;
			z-index: 2001;
			border-radius: 18upx;
			z-index: 2001;
		}
	}
}
</style>
