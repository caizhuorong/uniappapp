<template>
	<view class="movieDetails">
		<view class="video">
			<view class="videoTrue" id="myplayer">
				<image v-if="isHaveTopAdv" class="topAdv" :src="advTop.img"></image>
				<view class="topAdvs" v-if="isHaveTopAdv" >{{ topAdvPlentyTime }}s</view>
				<!-- <cover-view class="videoText" v-if="!isVip">试看{{ showzd }}秒，VIP无限看</cover-view> -->
				<cover-view class="videoTips" v-if="isPlayEnd && !isVip"></cover-view>
				<cover-view class="top_title" v-if="isPlayEnd && !isVip">非会员，仅可试看{{showzd}}秒</cover-view>
				<cover-view class="tops1" v-if="isPlayEnd && !isVip">开通会员，享受以下权限：</cover-view>
				<cover-view class="tops2" v-if="isPlayEnd && !isVip">1、观看本区海量爽片不受限制</cover-view>
				<cover-view class="tops3" v-if="isPlayEnd && !isVip">2、享受蓝光超清资源</cover-view>
				<cover-view class="tops4" v-if="isPlayEnd && !isVip">3、急速秒播放，快若闪电</cover-view>
				<cover-view class="bottoms_left" v-if="isPlayEnd && !isVip" @click="govipCenter()">开通vip会员</cover-view>
				<block v-if="movieInfo.img != undefined ">
					<video id="myVideo" :initial-time="initial" v-if="!isHaveTopAdv" @timeupdate="timeupdates" :controls="true" objectFit="contain" :src="movieInfo.media_url" :poster="movieInfo.img">
		 				<cover-view class="videoText" v-if="!isVip&&movieInfo.is_vip == 1">试看{{ showzd }}秒，VIP无限看</cover-view>
						<!--<cover-view class="videoTips" v-show="isPlayEnd && !isVip &&movieInfo.is_vip == 1"></cover-view>
						<cover-view class="tops" v-show="isPlayEnd && !isVip &&movieInfo.is_vip == 1">试看结束,开通VIP观看完整影片...</cover-view>
						<cover-view class="bottoms_left" v-show="isPlayEnd && !isVip &&movieInfo.is_vip == 1" @click="govipCenter()">开通vip会员</cover-view>
						<cover-view class="bottoms_right" v-show="isPlayEnd && !isVip &&movieInfo.is_vip == 1" @click="goextension()">免费领取vip</cover-view>
						 -->
<!-- 						 <cover-view class="videoText" v-if="!isVip">试看{{ showzd }}秒，VIP无限看</cover-view>
						<cover-view class="videoText" v-if="!isVip">试看{{ showzd }}秒，VIP无限看</cover-view>
						<cover-view class="videoTips" v-if="isPlayEnd && !isVip"></cover-view>
						<cover-view class="top_title" v-if="isPlayEnd && !isVip">非会员，仅可试看{{showzd}}秒</cover-view>
						<cover-view class="tops1" v-if="isPlayEnd && !isVip">开通会员，享受以下权限：</cover-view>
						<cover-view class="tops2" v-if="isPlayEnd && !isVip">1、观看本区海量爽片不受限制</cover-view>
						<cover-view class="tops3" v-if="isPlayEnd && !isVip">2、享受蓝光超清资源</cover-view>
						<cover-view class="tops4" v-if="isPlayEnd && !isVip">3、急速秒播放，快若闪电</cover-view>
						<cover-view class="bottoms_left" v-if="isPlayEnd && !isVip" @click="govipCenter()">开通vip会员</cover-view> -->
						<!-- <cover-view class="bottoms_right" v-if="isPlayEnd && !isVip" @click="goextension()">免费领取vip</cover-view> -->
					</video>
				</block>
			</view>
		</view>
		<view class="movieInfo">
      <view class="top">
        <view class="left">
          <view class="praise" @click="doPraiseOrCai(1)">
            <image src="../../static/8.png" v-if="isPraiseOrCai==1" >
            <image src="../../static/9.png" v-if="isPraiseOrCai==2||isPraiseOrCai==0">
            <text>{{currentPraiseMount}}</text>
          </view>
          <view class="cai" @click="doPraiseOrCai(0)">
            <image src="../../static/8.png" v-if="isPraiseOrCai==0" >
            <image src="../../static/9.png" v-if="isPraiseOrCai==2||isPraiseOrCai==1" >
            <text>{{currentCaiMount}}</text>
          </view>
        </view>
        <view class="right">
          <view class="feedback" @click="goFeedback(movieId,movieInfo.name)">
            <image src="../../static/12.png">
            <text>反馈</text>
          </view>
          <view class="share" @click="doShare()">
            <image src="../../static/11.png">
            <text>分享</text>
          </view>
          <view class="collect" @click="doCollect()" v-if="!isCollect">
            <image src="../../static/4.png">
            <text>收藏</text>
          </view>
          <view class="cancelCollect" @click="cancelCollect()" v-if="isCollect">
            <image src="../../static/13.png">
            <text>已收藏</text>
          </view>
        </view>
      </view>
      <view class="middle">
        {{movieInfo.name}}
      </view>
			<view class="novip" v-if="!isVip">
				<view class="novip_text">获取会员方式:</view>
				<view class="novip_text">1、充值开通会员，<text class="novip_href" @click="govipCenter()">点击充值 ></text></view>
				<view class="novip_text">2、分享给好友获取会员，<text class="novip_href" @click="goextension()">我要分享 ></text></view>
			</view>
      <view class="bottom">
        <view class="left">
          <text class="mount">{{movieInfo.plays}}次播放</text>
          <text class="time">{{movieInfo.release_time}}</text>
        </view>
        <view class="right" @click="lookIntro()">
          <text>简介</text>
          <image src="../../static/5.png" alt="" @click.prevent="">
        </view>
      </view>
      <view class="intro" :animation="animationData">
        <view class="title">简介</view>
        <view class="content">
          {{movieInfo.desc}}
        </view>
      </view>
    </view>
		<view class="advContent" v-if="advBottom.length>0">
			<swiper :autoplay="true" :interval="parseInt(advBottom[0] != undefined ? advBottom[0].showtime+'000':'0')" :duration="300" >
				<swiper-item @click="goAdv(advBottomObject.url)" v-for="(advBottomObject,index) in advBottom" :key="index" >
					<image :src="advBottomObject.img"></image>
				</swiper-item>
			</swiper>
    </view>
		<view class="recommend">
      <view class="title">猜你喜欢</view>
      <view class="recommendContent">
        <view class="list" v-for="(x,y) in recommend" :key="y" @click="goMovieDetailsAll(x.video_id)">
          <image :src="x.img" class="list_img">
          <view class="list_text">{{x.name}}</view>
					<!-- <view class="hot">{{x.is_vip == 1 ? 'VIP':'限免'}}</view> -->
        </view>
      </view>
      <view class="bottom">
        --- 没有更多数据了---
      </view>
		</view>
	</view>
</template>
<script>
import util from '../../utils/public';
var wv;//计划创建的webview
let player = null;
let a = 0;
let writePlayRecords = false;
let time = 1;
export default {
	name: 'movieDetails',
	data() {
		return {
			animationData: {},
			adv: {},
			advTop: {},
			advBottom: [],
			recommend: [],
			movieInfo: {
				name:'',
				plays:'',
				release_time:''
			},
			currentPraiseMount: 0,
			currentCaiMount: 0,
			isPraiseOrCai: 2,
			player: null,
			reCountDOM: {},
			tryLookTime: null,
			totalTime: null,
			currentTime: null,
			currentMovieId: null,
			topAdvPlentyTimeInterval: null,
			topAdvPlentyTime: null,
			isCollect: false,
			isAllowCollect: true,
			isAllowCancelCollect: true,
			isAllowPraiseOrCai: true,
			isLookIntro: true,
			isOpenPlay: false,
			isPause: false,
			isPlayEnd: false,
			isVip: false,
			isFirstPlay: true,
			isAllowPlay: true,
			isLikeMovie: false,
			isHaveTopAdv: false,
			isFromExternal: false,
			showzd: '',
			movieId:'',
			initial:0,
		};
	},
	onLoad(options) {
		this.movieId = options.movieId;
		this.getMovieInfo(options.movieId);
		var animation = uni.createAnimation({
			duration: 300,
			timingFunction: 'ease',
		})
		this.animation = animation
	},
	onReady() {
	},
	onUnload(){
		if( this.totalTime != null ){
			this.writePlayRecord();
		}
	},
	methods: {
		goextension() {
			uni.navigateTo({
				url: '../extension/extension'
			});
		},
		govipCenter() {
			uni.switchTab({
				url: '../vipCenter/vipCenter'
			});
		},
		goFeedback(id,name){
			uni.navigateTo({
				url:`../feedback/feedback?id=${id}&name=${name}`
			})
		},
		goAdv(url) {
		  if (url){
		    plus.runtime.openURL(url, function(res) {
		    });
		  }
		},
		/*收藏电影*/
		async doCollect () {
		  if (this.isAllowCollect) {
		    this.isAllowCollect = false;
		    const data = await util.getInfoByAxios("post",`${util.config.host}/api/Collection/collection`,{
		      video_id:parseInt(this.movieId),
		    },true);
		    if (data.data.code==1) {
		      this.isAllowCollect = true;
		      this.isCollect = true;
		      uni.showToast({
		        title: '收藏成功',
		        icon:'none'
		      });
		    }
		  }
		},
		/*取消收藏电影*/
		async cancelCollect(){
		  if (this.isAllowCancelCollect) {
		    this.isAllowCancelCollect = false;
		    const data = await util.getInfoByAxios("post",`${util.config.host}/api/Collection/cancelCollection`,{
		      video_id:parseInt(this.movieId),
		    },true);
		    if (data.data.code == "1") {
		      this.isAllowCancelCollect = true;
		      this.isCollect = false;
		      uni.showToast({
		        title: '取消成功',
						icon:'none'
		      });
		    }
		  }
		},
		async doPraiseOrCai (type) {
			if(type == 1){
				if (this.isAllowPraiseOrCai){
				  this.isAllowPraiseOrCai = false;
				  const data = await util.getInfoByAxios("post",`${util.config.host}/api/Likeinfo/video_like`,{
				    video_id:parseInt(this.movieId),
				  },true);
				  this.isAllowPraiseOrCai = true;
				  if (data.data.code=="1"){
				    if (data.data.data.operate==1){
				      this.currentPraiseMount++;
				      this.isPraiseOrCai=1;
				    }
				    else if (data.data.data.operate==0){
				      this.currentCaiMount++;
				      this.isPraiseOrCai=0;
				    }
				  }else if(data.data.msg=="用户已经对该视频进行赞踩"){
						uni.showToast({
							title: '用户已经对该视频进行赞踩',
							icon:"none"
						});
				  }
				}
			}else{
				if (this.isAllowPraiseOrCai){
				  this.isAllowPraiseOrCai = false;
				  const data = await util.getInfoByAxios("post",`${util.config.host}/api/Likeinfo/video_like_cancel`,{
				    video_id:parseInt(this.movieId),
				  },true);
				  this.isAllowPraiseOrCai = true;
				  if (data.data.code=="1"){
				    if (data.data.data.operate==1){
				      this.currentPraiseMount++;
				      this.isPraiseOrCai=1;
				    }
				    else if (data.data.data.operate==0){
				      this.currentCaiMount++;
				      this.isPraiseOrCai=0;
				    }
				  }else if(data.data.msg=="用户已经对该视频进行赞踩"){
						uni.showToast({
							title: '用户已经对该视频进行赞踩',
							icon:"none"
						});
				  }
				}
			}
		  
		},
		timeupdates(event) {
			if( this.totalTime == null || this.totalTime < 0  ){
				this.totalTime = event.detail.duration;
			}
			this.currentTime = Math.floor(event.detail.currentTime);
			if(  writePlayRecords && this.totalTime > 1  ){
				writePlayRecords = false;
				console.log(123);
				this.writePlayRecord();
			}
			if (!this.isVip) {
				//用秒数来显示当前播放进度
				let timeDisplay = Math.floor(event.detail.currentTime);
				
				// if(timeDisplay - this.initial > 10 && time == 1){
				// 	time = timeDisplay - this.initial;
				// }
				// if(this.movieInfo.is_vip == 1){
					// if (timeDisplay - this.initial >= parseFloat(this.showzd) + time) {
						if (timeDisplay  >= parseFloat(this.showzd)) {
						//处理代码
						this.videoContext = uni.createVideoContext('myVideo');
						this.videoContext.exitFullScreen();
						this.isPlayEnd = true;
					}
				// }
			}
		},
		async getMovieInfo(movieId) {
			this.currentMovieId = movieId;
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/video_info`,
				{
					video_id: movieId,
				},
				true
			);
			this.totalTime = null;
			time = 1;
			this.isPlayEnd = false;
			writePlayRecords = true;
			this.adv = data.data.data.ad;
			this.advTop = data.data.data.advert_onplayer;
			/*播放器上面广告时间*/
			if (data.data.data.advert_onplayer.length != 0) {
				this.topAdvPlentyTime = parseInt(data.data.data.advert_onplayer[0].showtime);
			}
			this.advBottom = data.data.data.advert_playerdown;
			this.recommend = data.data.data.recommend_list;
			this.movieInfo = {};
			// this.initial = parseFloat(data.data.data.video_info.time_len-1)*60/3;
			setTimeout(()=>{
					this.movieInfo = data.data.data.video_info;
			},400);
		
			this.showzd = data.data.data.showzd;
			this.isVip = uni.getStorageSync('userInfo').is_vip == 0 ? false : true;
			/*设置广告*/
			this.openTopAdv();
			this.isCollect = this.movieInfo.is_collect == "0" ? false : true;
			this.currentPraiseMount = this.movieInfo.likes;
			this.currentCaiMount = this.movieInfo.dislikes;
			if (this.movieInfo.is_like == 0) {
			  this.isPraiseOrCai = 0;
			} else if (this.movieInfo.is_like == 1) {
			  this.isPraiseOrCai = 1;
			} else if (this.movieInfo.is_like == 2) {
			  this.isPraiseOrCai = 2;
			};
			
		},
		lookIntro() {
			this.isLookIntro = !this.isLookIntro;
			if(this.isLookIntro){
				this.animation.height('0upx').step();
				this.animationData = this.animation.export();
			}else{
				this.animation.height('300upx').step();
				this.animationData = this.animation.export();
			}
		},
		goMovieDetailsAll(movieId) {
			this.movieId = movieId;
			this.getMovieInfo(movieId);
		},
		doShare() {
			uni.navigateTo({
				url:'../extension/extension'
			})
		},
		async writePlayRecord() {
			if (this.totalTime && this.currentTime) {
				const data = await util.getInfoByAxios(
					'post',
					`${util.config.host}/api/History/record`,
					{
						video_id: this.currentMovieId,
						index: 1,
						type: 1,
						progress: this.currentTime,
						total_time: this.totalTime
					},
					true
				);
			}
		},
		openTopAdv() {
			if (this.advTop != '') {
				if (this.topAdvPlentyTimeInterval) {
					clearInterval(this.topAdvPlentyTimeInterval);
				}
				this.topAdvPlentyTimeInterval = setInterval(() => {
					if (this.topAdvPlentyTime > 0) {
						this.isHaveTopAdv = true;
						this.topAdvPlentyTime--;
					} else {
						clearInterval(this.topAdvPlentyTimeInterval);
						this.isHaveTopAdv = false;
					}
				}, 1000);
			}
		},
	},
};
</script>

<style scoped lang="scss">
	.novip{
		width: 710upx;
		height: 160upx;
		margin: 0 auto;
		margin-top:30upx;
		border-radius: 18upx;
		background-image: linear-gradient(to right , #ee6868, #f04848);
		.novip_text{
			font-size: 30upx;
			color: #fff;
			padding-left: 20upx;
			padding-top: 10upx;
			.novip_href{
				color: #F0AD4E;
				font-size: 30upx;
				 text-decoration:underline;
			}
		}
	}
.videoText {
	width: 230upx;
	height: 40upx;
	background-color: #00c48d;
	color: #fff;
	font-size: 20upx;
	line-height: 40upx;
	position: fixed;
	right: 30upx;
	top: 30upx;
	border-radius: 2rem;
	z-index: 2002;
	text-align: center;
}
.topAdv {
	width: 750upx;
	height: 420upx;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2001;
}
.topAdvs {
	position: absolute;
	top: 30upx;
	right: 30upx;
	padding: .7% 3%;
	border-radius: 1rem;
	color: white;
	font-size: 28upx;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2001;
}
.movieDetails {
	width: 100%;
	.video {
		width: 100%;
		position: relative;
		.videoTrue {
			width: 100%;
			height: 420upx;
			z-index: 199;
			background-color: black;
			position: relative;
			video {
				width: 100%;
				height: 100%;
			}
		}
		.tops {
			position: absolute;
			top: 150upx;
			left: 0upx;
			width: 750upx;
			height: 40upx;
			font-size: 30upx;
			color: #fff;
			text-align: center;
			z-index: 2002;
		}
		.tops1 {
			position: absolute;
			top: 90upx;
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
			top: 130upx;
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
			top: 170upx;
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
			top:215upx;
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
			top: 290upx;
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
			top: 250upx;
			left: 380upx;
			z-index: 2002;
		}
		.videoTips {
			width: 80%;
			height: 380upx;
			background-color: black;
			position: absolute;
			top:20upx;
			left: 10%;
			z-index: 2002;
		}
		.top_title{
			color:#ff406f;
			position: absolute;
			top: 50upx;
			left: 0upx;
			width: 750upx;
			height: 40upx;
			font-size: 30upx;
			text-align: center;
			z-index: 2002;
		}
	}

	.movieInfo {
		width: 100%;
		.top {
			width: 100%;
			height: 60upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 35px;
			.left {
				width: 35%;
				height: 60upx;
				display: flex;
				align-items: center;
				flex-direction: row;
				justify-content: space-around;
				view {
					width: 50%;
					display: flex;
					align-items: center;
					flex-direction: row;
					justify-content: flex-start;
					image {
						width: 40upx;
						height: 40upx;
						margin-left: 20upx;
					}
					text {
						margin-left:10upx;
						font-size: 24upx;
						color: gray;
					}
				}
				.cai{
					image{
						transform:rotate(180deg);
					}
				}
			}

			.right {
				width: 65%;
				display: flex;
				align-items: center;
				flex-direction: row;
				justify-content: space-around;
				margin-right: 30upx;
				view {
					width: 32%;
					display: flex;
					justify-content: space-around;
					align-items: center;
					image {
						width: 40upx;
						height: 40upx;
						margin-left: 20upx;
					}
					text {
						margin-left:10upx;
						font-size: 24upx;
						color: gray;
					}
				}

				.cancelCollect {
					text {
						color: #eca09c;
					}
				}
			}
		}
		.middle {
			height: 40upx;
			text-align: left;
			font-size: 32upx;
			margin-top:20upx;
			padding-left: 20upx;
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top:20upx;
			width:100%;
			.left {
				display: flex;
				align-items: center;
				white-space: nowrap;
				.mount {
					font-size: 24upx;
					color: gray;
					padding-left: 20upx;
				}
				.time {
					font-size: 28upx;
					color: #4f4f4f;
					margin-left:20upx;
				}
			}
			.right {
				display: flex;
				align-items: center;
				white-space: nowrap;
				text {
					font-size: 24upx;
					color: #757575;
					margin-right:10upx;
				}
				image {
					width:30upx;
					height:30upx;
					margin-right: 20upx;
				}
			}
			.islook_height{
				width: 100%;
				height:100upx;
			}
		}

		.intro {
			width: 100%;
			text-align: left;
			background-color: #f5f5f5;
			transition: all 0.3s linear;
			overflow: hidden;
			height: 0;
			padding: 0;
			margin-top:10upx;
			.title {
				width: 100%;
				font-size: 26upx;
				color: #414141;
				margin-left:20upx;
			}
			.content {
				width: 100%;
				margin-top: 20upx;
				font-size:24upx;
				color: #414141;
			}
		}
	}

	.advContent {
		width:100%;
		height: 180upx;
		font-size: 0;
		image {
			width: 100%;
			height:180upx;
		}
	}

	.recommend {
		width: 100%;
		.title {
			width: 100%;
			padding-top:20upx;
			margin-bottom:20upx;
			text-align: left;
			font-size: 32upx;
			text-indent:20upx;
		}
		.recommendContent {
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.list {
				width: 49%;
				margin-bottom: 20upx;
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
					border-bottom-left-radius: 18upx;
					border-top-right-radius: 14upx;
					text-align: center;
				}
				.list_img {
					width: 100%;
					height: 202upx;
					border-radius: 14upx;
					box-shadow: 0 0 25upx rgba(0,0,0,.3);
				}
				.list_text {
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding-top: 10upx;
					font-size:28upx;
					text-align: center;
				}
			}
		}
		.bottom {
			padding-top:20upx;
			padding-bottom:20upx;
			font-size:26upx;
			color: #888888;
			text-align: center;
		}
	}
}
</style>
