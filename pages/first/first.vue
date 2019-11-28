<template>
	<view class="openPage">
		<image :src="openPageInfo.img" alt="" @click="goAdv(openPageInfo.url)" /></image>
		<view class="plentyTime">{{ openPageInfo.showtime ? openPageInfo.showtime:'0' }}s</view>
		<view class="closeOpenPage" @click="bacss()">跳过</view>
	</view>
</template>

<script>
	import util from '../../utils/public.js';
	let plentyTimeInterval = null;
export default {
	name: 'first',
	data() {
		return {
			openPageInfo: {}
		};
	},
	onLoad(options){
		const _this = this;
		if( options.type == 1 ){
			plus.device.getInfo({
				success:function(e){
					let data = e.uuid.split(',');
					 _this.refresh(data[0]);
				},
				fail:function(e){
				}
			});
		}else{
			this.getOpenAndNoticeInfo();
		}
		
	},
	onUnload(){
		clearInterval(plentyTimeInterval);
	},
	methods: {
		goAdv( url ){
			clearInterval(plentyTimeInterval);
			if (url){
			  plus.runtime.openURL(url, function(res) {
			  	console.log(res);
			  });
			}
		},
		async refresh(uuid) {
				let te = uni.getSystemInfoSync();
			  const data = await util.getInfoByAxios("post",`${util.config.host}/api/player/do_init`,{
			    version:1,
					channel:1,
			    machine_code:uuid,
			    maker:te.brand,
			    mobile_model:te.model,
					system:te.platform== 'ios' ? 2:1,
			    system_version:te.system,
					invitation_uid:1
			  },true);
				uni.setStorageSync('token',data.data.data.token);
				uni.setStorageSync('userInfo', data.data.data);
			this.getOpenAndNoticeInfo();
		},
		bacss(){
			clearInterval(plentyTimeInterval);
			uni.switchTab({
				url:'../index/index'
			})
		},
		clearPlentyTimeInterval() {
			clearInterval(plentyTimeInterval);
			uni.switchTab({
				url:'../index/index',
			})
		},
		async getOpenAndNoticeInfo() {
			const data = await util.getInfoByAxios('post', `${util.config.host}/api/video/get_notice`, {},true);
			if (data.data.data != null) {
				uni.setStorageSync('notice', data.data.data.notice);
				this.openPageInfo = data.data.data.advert_start;
				plentyTimeInterval = setInterval(() => {
					if (this.openPageInfo.showtime > 0) {
						this.openPageInfo.showtime-- 
					} else {
						this.clearPlentyTimeInterval();
					}
				}, 1000);
			}
			if (data.data.data != null) {
				
			} else {
				uni.switchTab({
					url: '../index/index'
				});
			}
		}
	}
};
</script>
<style scoped lang="scss">
.openPage {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4002;
	background-color: white;
	image {
		width: 100%;
		height: 100%;
	}
	.plentyTime {
		position: absolute;
		padding: 1% 4%;
		border-radius: 1rem;
		top: 3%;
		right: 5%;
		color: white;
		letter-spacing: 0.1rem;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.closeOpenPage {
		position: absolute;
		padding: 1% 4%;
		border-radius: 1rem;
		bottom: 6%;
		right: 5%;
		color: white;
		letter-spacing: 0.1rem;
		background-color: rgba(0, 0, 0, 0.3);
	}
}
</style>
