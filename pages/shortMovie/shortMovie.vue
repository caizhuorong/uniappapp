<template>
	<view class="find">
		<findList :findMovieObject="findMovieObject" v-for="(findMovieObject, index) in findMovieArray" :key="index" @showShare="showShare"></findList>
		<view v-show="allLoaded && findMovieArray.length >= 20" class="allLoadedTips">已全部加载</view>
	</view>
</template>

<script>
import util from '../../utils/public.js';
import findList from '../../components/findList';
let page = 1;
export default {
	name: 'find',
	components: {
		findList
	},
	data() {
		return {
			findMovieArray: [],
			topStatus: '',
			loading: false,
			allLoaded: false,
			isShowShare: false
		};
	},
	onLoad() {
		this.getFindInfo();
	},
	onPullDownRefresh() {
		page = 1;
		this.allLoaded = false;
		this.findMovieArray = [];
		this.getFindInfo();
	},
	onReachBottom(){
		this.loadMore();
	},
	methods: {
		async getFindInfo() {
			uni.showLoading({
				title: '加载中...'
			});
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/find_video`,
				{
					page:1,
				},
				true
			);
			uni.hideLoading();
			uni.stopPullDownRefresh();
			console.log(data);
			this.findMovieArray = data.data.data;
		},
		async loadMore() {
			this.loading = true;
			this.allLoaded = false;
			uni.showLoading({
				title: '加载中...'
			});
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/find_video`,
				{
					page:page
				},
				true
			);
			uni.hideLoading();
			if (data.data.data.length > 0) {
				for (let i = 0; i < data.data.data.length; i++) {
					this.findMovieArray.push(data.data.data[i]);
					this.loading = false;
				}
			} else {
				this.loading = true;
				this.allLoaded = true;
			}
		},
		async refresh() {
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/find_video`,
				{
					page:page
				},
				true
			);
			setTimeout(() => {
				this.findMovieArray = data.data.data;
				this.loading = false;
				this.allLoaded = false;
			}, 600);
		},
		doShare(type) {
			uni.navigateTo({
				url: '../extension/extension'
			});
		}
	}
};
</script>

<style scoped lang="scss">
.find {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: white;
	.contentAll {
		width: 100%;
		flex: 1;
		overflow-y: auto;
		.content {
		}
	}
}
</style>
