<template>
	<view class="content">
		<view class="list">
			<moreMovieList :tid="currentTypeId" :moreMovieListObject="x" v-for="(x, y) in moreMovieArray" :key="y"></moreMovieList>
		</view>
		<view v-if="allLoaded && moreMovieArray.length >= 20" class="allLoadedTips">已全部加载</view>
	</view>
</template>

<script>
import util from '../../utils/public';
import moreMovieList from '../../components/moreMovieList.vue';
export default {
	name: 'moreMovie',
	components: {
		moreMovieList
	},
	data() {
		return {
			currentPage: 1,
			currentTypeId: null,
			moreMovieArray: [],
			allLoaded: false
		}
	},
	onLoad(options) {
		this.currentTypeId = options.typeId;
		this.getMoreMovieInfo();
		uni.setNavigationBarTitle({
			title: options.typeName
		});
	},
	onPullDownRefresh(){
		this.currentPage= 1;
		this.moreMovieArray = [];
		this.allLoaded = false;
		this.getMoreMovieInfo();
	},
	onReachBottom(){
		this.loadMore();
	},
	methods: {
		async getMoreMovieInfo() {
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/video_type_list`,
				{
					tid: parseInt(this.currentTypeId),
					page: this.currentPage
				},
				true
			);
			console.log(data);
			uni.stopPullDownRefresh();
			this.moreMovieArray = data.data.data.list;
		},
		async loadMore() {
			this.allLoaded = false;
			this.currentPage++;
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/video_type_list`,
				{
					tid: parseInt(this.currentTypeId),
					page: this.currentPage
				},
				true
			);
			if (data.data.data.list.length > 0) {
				for (let i = 0; i < data.data.data.list.length; i++) {
					this.moreMovieArray.push(data.data.data.list[i]);
				}
			} else {
				this.allLoaded = true;
			}
		}
	}
};
</script>

<style lang="scss">
	.content{
		width:100%;
		margin-top:20upx;
		.list{
			width:100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap:wrap;
		}
	}
	.allLoadedTips{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		font-size:26upx;
		color:#666;
	}
</style>
