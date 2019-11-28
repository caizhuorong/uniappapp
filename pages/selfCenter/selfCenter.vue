<template>
	<view class="selfCenter">
		<view class="content">
			<view class="user">
				<view class="userInfo">
					<view class="userimage"><image :src="userInfoObject.icon_url"></image></view>
					<view class="userNR">
						<view class="userNL">
							<text class="userName">ID:{{ userInfoObject.uid }}</text>
							<image class="userImg" src="../../static/17.png" v-if="userInfoObject.is_vip == 1"></image>
						</view>
						<view class="userTT">
							<view v-if="userInfoObject.is_vip == 0"><text class="userRank">普通用户</text></view>
							<view v-if="userInfoObject.is_vip == 1">
								<text class="userRank vip">会员</text>
								<text class="outTime">到期时间:{{userInfoObject.vip_end }}</text>
							</view>
						</view>
						<view class="inviteNum">邀请人数：{{ userInfoObject.invitation_numbers }}</view>
					</view>
				</view>
				<view class="middle">
					<image src="../../static/16.png" @click="govipCenter()"></image>
					<image src="../../static/15.png" @click="goextension()"></image>
				</view>
			</view>
			<view class="vipcontent">
				<text class="vip_label">会员特权</text>
				<view class="vip_list">
					<view class="vip_item">
						<view class="vip_bj">
							<image class="vip_item_img" src="../../static/18.png" ></image>
						</view>
						<text class="vip_item_text">蓝光高清</text>
					</view>
					<view class="vip_item">
						<view class="vip_bj">
							<image class="vip_item_img" src="../../static/21.png"></image>
						</view>
						<text class="vip_item_text">全球资源</text>
					</view>
					<view class="vip_item">
						<view class="vip_bj">
							<image class="vip_item_img" src="../../static/20.png" ></image>
						</view>
						<text class="vip_item_text">尊贵标志</text>
					</view>
					<view class="vip_item">
						<view class="vip_bj">
							<image class="vip_item_img" src="../../static/19.png" ></image>
						</view>
						<text class="vip_item_text">新片抢先</text>
					</view>
				</view>
			</view>
			<view class="btn_list">
				<view class="btn_item" @click="playRecords()">
					<image src="../../static/23.png" class="btn_img"></image>
					<text class="btn_text">观看历史</text>
				</view>
				<view class="btn_item" @click="collects()">
					<image src="../../static/13.png" class="btn_img"></image>
					<text class="btn_text">我的收藏</text>
				</view>
				<view class="btn_item" @click="kefu()">
					<image src="../../static/24.png" class="btn_img"></image>
					<text class="btn_text">联系客服</text>
				</view>
				<view class="btn_item" @click="goextension()">
					<image src="../../static/22.png" class="btn_img"></image>
					<text class="btn_text">我的推广</text>
				</view>
				<view class="btn_item" @click="aboutUs">
					<image src="../../static/25.png" class="btn_img"></image>
					<text class="btn_text">关于我们</text>
				</view>
				<view class="btn_item" @click="bbgx">
					<image src="../../static/26.png" class="btn_img"></image>
					<text class="btn_text">版本更新</text>
				</view>
			</view>
			<view class="bannerContent" v-if="selfAdv.length>0">
				<swiper :autoplay="true" :interval="parseInt(selfAdv[0].showtime+'000')" :duration="300" >
					<swiper-item @click="goAdv(bannerObject.url)" v-for="(bannerObject,index) in selfAdv" :key="index" >
						<image :src="bannerObject.img"></image>
					</swiper-item>
				</swiper>
      </view>
		</view>
	</view>
</template>

<script>
import util from '../../utils/public';
export default {
	name: 'selfCenter',
	data() {
		return {
			userInfoObject: {},
			selfAdv: []
		};
	},
	onShow() {
		this.getUserInfoBySelfCenter();
	},
	methods: {
		goAdv(url) {
		  if (url){
		    plus.runtime.openURL(url, function(res) {
		    	console.log(res);
		    });
		  }
		},
		aboutUs(){
			uni.navigateTo({
				url:'../aboutUs/aboutUs'
			})
		},
		kefu(){
			uni.navigateTo({
				url:'../kefu/kefu'
			})
		},
		collects(){
			uni.navigateTo({
				url:'../collect/collect'
			})
		},
		bbgx(){
			uni.showToast({
				title:'当前已是最新版本',
				icon:'none'
			})
		},
		playRecords(){
			uni.navigateTo({
				url:"../playRecord/playRecord"
			})
		},
		
		govipCenter() {
			uni.switchTab({
				url: '../vipCenter/vipCenter'
			});
		},
		goextension() {
			uni.navigateTo({
				url: '../extension/extension'
			});
		},
		async getUserInfoBySelfCenter() {
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/player/player_info`,
				{},
				true
			);
			this.userInfoObject = data.data.data;
			this.selfAdv = data.data.data.advert_mycentre;
			if (uni.getStorageSync('userInfo')) {
				uni.removeStorageSync('userInfo');
				uni.setStorageSync('userInfo', data.data.data);
			}
		},
		goGroup(url) {
			plus.runtime.openURL(url, function(res) {
				console.log(res);
			});
		},
		bindMobile() {
			if (this.userInfoObject.mobile) {
				uni.showModal({
					title: '提示',
					content: '您已经绑定了手机号"+this.userInfoObject.mobile+"，是否换绑?',
					success: res => {
						if (res.confirm) {
							uni.navigateTo({
								url: '../bindMobile/bindMobile'
							});
						} else {
						}
					}
				});
			}
		},
		dealTime(obj) {
			if (obj == 2208960000) {
				return '无限制';
			} else {
				let unixTimestamp = new Date(obj * 1000);
				let years = unixTimestamp.getFullYear();
				let months = String(unixTimestamp.getMonth() + 1).length > 1 ? unixTimestamp.getMonth() + 1 : '0' + (unixTimestamp.getMonth() + 1);
				let days = String(unixTimestamp.getDate()).length > 1 ? unixTimestamp.getDate() : '0' + unixTimestamp.getDate();
				let hours = String(unixTimestamp.getHours()).length > 1 ? unixTimestamp.getHours() : '0' + unixTimestamp.getHours();
				let minutes = String(unixTimestamp.getMinutes()).length > 1 ? unixTimestamp.getMinutes() : '0' + unixTimestamp.getMinutes();
				let seconds = String(unixTimestamp.getSeconds()).length > 1 ? unixTimestamp.getSeconds() : '0' + unixTimestamp.getSeconds();
				let commonTime = years + '-' + months + '-' + days + ' ' + hours + ':' + minutes + ':' + seconds;
				return commonTime;
			}
		}
	},
};
</script>

<style scoped lang="scss">
.selfCenter {
	width: 100%;
	position: fixed;
	height: 100%;
	top: 0upx;
	left: 0upx;
	background-color: #f4f4f4;
	.content {
		width: 100%;
		.user {
			width: 100%;
			height: 430upx;
			.userInfo {
				width: 100%;
				height: 230upx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background-color: #fff;
				.userimage {
					width: 120upx;
					height: 120upx;
					margin-left: 30upx;
					margin-top: 30upx;
					image {
						width: 120upx;
						height: 120upx;
						border-radius: 50%;
					}
				}
				.userNR {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 40upx;
					text {
						padding: 20upx 0;
					}
					.userNL {
						display: flex;
						align-items: center;
					}
					.userTT {
						display: flex;
						align-items: center;
					}
					.outTime {
						font-size: 0.8rem;
						color: #b4b4b4;
					}
					.userName {
						font-size: 0.9rem;
						font-weight: bold;
					}
					.userImg {
						width: 80upx;
						height: 30upx;
						margin-left: 20upx;
					}
					.userRank {
						font-size: 0.8rem;
						color: gray;
					}
					.tryLookTimes {
						font-size: 0.8rem;
						color: gray;
						letter-spacing: 0.1rem;
					}
					.vip {
						color: red;
					}
				}
			}
			.middle {
				width: 100%;
				margin-top: 20upx;
				height: 200upx;
				background-color: #fff;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: row;
				image {
					width: 300upx;
					height: 120upx;
				}
			}

			.inviteNum {
				width: 100%;
				margin-top: 8%;
				text-align: left;
				font-size: 26upx;
				/*letter-spacing: .1rem;*/
			}
		}
		.bannerContent {
			width: 100%;
			padding: 2% 4%;
			height: 300upx;
		}
		.listContent {
			width: 100%;
			.list {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 4%;
				border-bottom: 1px solid #f5f5f5;
			}
			.left {
				display: flex;
				align-items: center;
				image {
					width: 1.5rem;
				}
				text {
					margin-left: 15%;
					font-size: 0.8rem;
					white-space: nowrap;
					letter-spacing: 0.1rem;
				}
			}
			.right {
				image {
					width: 0.8rem;
					height: 1rem;
				}
			}
		}
	}
}
.vipcontent {
	width: 100%;
	margin-top: 40upx;
	height: 300upx;
	background-color: #fff;
	.vip_label {
		margin-left: 30upx;
		padding-top: 30upx;
		font-size: 32upx;
		display: block;
		color: #333;
	}
	.vip_list {
		width: 100%;
		display: flex;
		height: 220upx;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		.vip_item {
			flex: 1;
			height: 220upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.vip_bj{
				width:100upx;
				height: 100upx;
				border-radius: 50%;
				 background-image: linear-gradient(to right, #ffcc33 , #ff9900);
				.vip_item_img {
					width: 60upx;
					height: 60upx;
					margin:0 auto;
					display: block;
					margin-top:20upx;
				}
			}
			
			.vip_item_text {
				padding-top:20upx;
				font-size: 30upx;
				font-weight: bold;
				color: #333;
			}
		}
	}
}
.btn_list{
	width:100%;
	margin-top: 20upx;
	height: 320upx;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	background-color: #fff;
	.btn_item{
		width:33%;
		height: 160upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.btn_img{
			width:70upx;
			height:70upx;
		}
		.btn_text{
			padding-top:20upx;
			font-size: 30upx;
			color: #666;
		}
	}
}
</style>
