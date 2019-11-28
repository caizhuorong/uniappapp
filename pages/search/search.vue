<template>
	<view class="search">
		<view class="status_bar"></view>
		<view class="header">
			<view class="left">
				<view class="searchButton">
					<image src="../../static/1.png" class="searchLogo"></image>
					<form action="#" @submit.prevent>
						<input type="search" :focus="true" placeholder="找电影" class="searchInput" v-model="searchInfo" @confirm="judgeSearchInfoLength" autocapitalize="none" />
					</form>
				</view>
				<view class="lookRecord" @click="goLookRecord()"><image src="../../static/3.png"></image></view>
				<view class="collect" @click="goCorrect()"><image src="../../static/4.png"></image></view>
			</view>
			<view class="right"><view class="close" @click="back()">取消</view></view>
		</view>
		<view class="contentOne" v-if="!isHaveSearchResult">
			<view class="searchRecord" v-if="isHaveSearchRecord">
				<view class="title">
					<text>搜索记录</text>
					<image src="../../static/6.png" alt="" @click="closeSearchRecord()"></image>
				</view>
				<view class="content">
					<text v-for="(searchRecordValue, index) in searchRecordArray" :key="index" @click="doSearch(searchRecordValue)">{{ searchRecordValue }}</text>
				</view>
			</view>
			<view class="hotSearch">
          <view class="title">
            <view class="name">热门搜索</view>
						<view class="view_bottom"></view>
          </view>
          <view class="content">
            <view class="hot_vie" v-for="(hotSearchValue,index) in hotSearchArray" :key="index" @click="doSearch(hotSearchValue)">
              <text class="number">{{index+1}}</text>
              <text class="typeName">{{hotSearchValue}}</text>
            </view>
          </view>
        </view>
		</view>
		<view class="contentTwo" v-else>
		  <view class="title">相关</view>
			<view class="content">
				<view class="details" v-for="(x,y) in searchResultArray" :key="x.video_id" @click="playMovie(x.video_id)">
					<view class="left">
						<image class="movieimage" :src="x.img" mode="widthFix"></image>
					</view>
					<view class="right">
						<text class="movieName">{{x.name}}</text>
						<text class="movieType">{{x.video_type}}</text>
						<text class="actor">主演：{{x.actors}}</text>
						<text class="movieTime">上映时间：{{x.release_time}}</text>
						<button class="play">立即播放</button>
					</view>
				</view>
			</view>
		<!-- <mt-spinner :type="2" color="gray" :size="31" v-show="!allLoaded&&searchResultArray.length>=20"></mt-spinner> -->
		<view v-show="allLoaded&&searchResultArray.length>=20" class="allLoadedTips">————我是有底线的————</view>
		</view>
	</view>
</template>

<script>
import util from '../../utils/public';
export default {
	name: '',
	data: function() {
		return {
			hotSearchArray: [],
			searchInfo: null,
			searchRecordArray: [],
			currentPage: 1,
			searchResultArray: [],
			isHaveSearchRecord: false,
			isHaveSearchResult: true,
			loading: false,
			allLoaded: false,
		};
	},
	onLoad(options) {
		this.getHotSearch();
		if (options.searchInfo != 'undefined' ) {
			this.searchInfo = options.searchInfo;
			this.doSearch(options.searchInfo);
		} else {
			this.searchInfo = '';
			this.isHaveSearchResult = false;
		}
		/*更新搜索页面*/
		if (uni.getStorageSync('searchRecord')) {
			this.searchRecordArray = [];
			this.isHaveSearchRecord = true;
			let list = uni.getStorageSync('searchRecord');
			console.log(list);
			list.map((x,y)=>{
				if( x.includes('object') ){
					list.splice(y,1);
				}
			}) 
			console.log(list);
			this.searchRecordArray = list;
			uni.setStorageSync('searchRecord',this.searchRecordArray)
			this.searchRecordArray.reverse();
		}
	},
	onReachBottom(){
		this.loadMore();
	},
	methods: {
		playMovie(id) {
			util.playmove(id);
		},
		goCorrect(){
			uni.navigateTo({
				url:'../collect/collect',
			})
		},
		goLookRecord(){
			uni.navigateTo({
				url:'../playRecord/playRecord',
			})
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		async getHotSearch() {
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/hot_search_by_type`,
				{},
				true
			);
			console.log(data);
			this.hotSearchArray = data.data.data.split(',');
		},
		async doSearch(searchInfo) {
			/*初始化当前页数*/
			this.currentPage = 1;
			/*去除搜索内容的前后空格*/
			searchInfo = searchInfo.trim();
			/*设置搜索框的内容*/
			this.searchInfo = searchInfo;
			/*设置搜索记录*/
			if (uni.getStorageSync('searchRecord')) {
				let searchRecord = uni.getStorageSync('searchRecord');
				searchRecord.push(searchInfo);
				searchRecord = util.arrayDelete(searchRecord);
				uni.setStorageSync('searchRecord', searchRecord);
			} else {
				let searchRecord = [];
				searchRecord.push(searchInfo);
				uni.setStorageSync('searchRecord', searchRecord);
			}
			/*更新搜索页面*/
			this.searchRecordArray = [];
			this.isHaveSearchRecord = true;
			this.searchRecordArray = uni.getStorageSync('searchRecord');
			this.searchRecordArray.reverse();
			/*发送搜索请求*/
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/do_search`,
				{
					search: this.searchInfo,
					page: this.currentPage
				},
				true
			);
			/*搜索结果提示框*/
			if (data.data.length <= 0) {
				uni.showToast({
					title: '暂时找不到影片',
					icon: 'none',
					position: 'center'
				});
				this.isHaveSearchResult = false;
			} else {
				this.searchResultArray = data.data.data;
				this.isHaveSearchResult = true;
			}
		},
		closeSearchRecord() {
			this.isHaveSearchRecord = false;
			uni.removeStorageSync('searchRecord');
		},
		judgeSearchInfoLength(event) {
			console.log(event.detail.value);
			// if (Boolean(this.searchInfo) && this.searchInfo.indexOf(' ') === -1) {
				/* this.doSearch(this.searchInfo);
              event.preventDefault();*/
					//如果按的是enter键 13是enter
					this.doSearch(this.searchInfo);
					event.preventDefault(); //禁止默认事件（默认是换行）
			// }
		},
		async loadMore() {
			this.allLoaded = false;
			this.currentPage++;
			console.log(this.currentPage);
			const data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/video/do_search`,
				{
					search: this.searchInfo,
					page: this.currentPage
				},
				true
			);
			console.log(data);
			if (data.data.data.length > 0) {
				for (let i = 0; i < data.data.data.length; i++) {
					this.searchResultArray.push(data.data.data[i]);
				}
			} else {
				this.allLoaded = true;
			}
		}
	}
};
</script>

<style scoped lang="scss">
	.allLoadedTips{
		width: 100%;
		height: 60upx;
		text-align: center;
		color: #999;
		font-size: 28upx;
	}
.status_bar {
	height: var(--status-bar-height);
	width: 750upx;
	background-color: #fff;
	position: fixed;
	top: 0upx;
	z-index: 10;
}
.search {
	width: 100%;
	.header {
		width: 750upx;
		height: 80upx;
		background-color: #fff;
		position: fixed;
		top: var(--status-bar-height);
		left: 0upx;
		display: flex;
		z-index: 10;
		justify-content: space-around;
		align-items: center;
		.left {
			width: 80%;
			height: 80upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: white;
			.searchButton {
				width: 75%;
				height: 80upx;
				background-color: #eeeeee;
				border-radius: 0.3rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				image {
					width: 40upx;
					height: 40upx;
					margin-left: 20upx;
				}
				input {
					background-color: transparent;
					margin-left: 20upx;
					letter-spacing: 0.1rem;
					font-size: 0.7rem;
					width: 100%;
					height: 80upx;
					color: gray;
					outline: none;
				}
			}
			.lookRecord,
			.collect {
				width: 50upx;
				height: 50upx;
				image {
					width: 50upx;
					height: 50upx;
				}
			}
		}
		.right {
			color: gray;
			font-size: 0.8rem;
		}
	}
	.contentOne {
		width: 95%;
		margin:0 auto;
		height: 500upx;
		margin-top:180upx;
		.searchRecord {
			width: 100%;
			.title {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				image {
					width:50upx;
					height: 50upx;
				}
				text {
					font-size:30upx;
					color:#333;
				}
			}
			.content {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				margin-bottom: -15px;
				margin-top:30upx;
					text {
						margin-left: 4%;
						padding: 1% 2.5%;
						font-size: 0.8rem;
						border-radius: 0.7rem;
						background-color: #f8f8f8;
						color: #adadad;
						letter-spacing: 0.1rem;
						margin-bottom: 15px;
				}
			}
		}
		.hotSearch {
			width: 100%;
			padding: 2% 0;
			margin-top:30upx;
			.title {
				width: 24%;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				.name {
					width: 100%;
					color: red;
					font-weight: bold;
					letter-spacing: 0.1rem;
				}
				.view_bottom {
					width: 17%;
					border: 1px solid red;
					margin-left: 60upx;
				}
			}
			.content {
				width: 100%;
				height:auto;
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				flex-wrap: wrap;
				align-items: center;
				margin-top:30upx;
				.hot_vie {
					width: 50%;
					text-align: left;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					margin-bottom: 15upx;
					.typeName {
						width: 100%;
						margin-left: 5%;
						font-size: 0.8rem;
						color: #adadad;
						letter-spacing: 0.2rem;
					}
				}
				view:nth-child(1) .number {
					color: red;
				}
				view:nth-child(2) .number {
					color: orange;
				}
				view:nth-child(3) .number {
					color: #e19b83;
				}
			}
		}
	}
	.contentTwo {
		width: 100%;
		margin-top:var(--status-bar-height);
		.title {
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			background-color: #fff;
			color: #e20000;
			text-align: left;
			padding-left: 30upx;
			position: fixed;
			top: 150upx;
			z-index: 10;
		}
		.content {
			width: 95%;
			margin:0 auto;
			margin-top:250upx;
			.details {
				width: 100%;
				height: 210upx;
				display: flex;
				justify-content:space-between;
				align-items: center;
				margin-bottom: 20upx;
				overflow: hidden;
				.left {
					width: 48%;
					height: 210upx;
					background-color: #C8C7CC;
					image {
						width:100%;
						height: 210upx;
					}
				}
				.right {
					width: 48%;
					height: 210upx;
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					justify-content: space-between;
					align-content: flex-start ;
					text {
						width: 100%;
						text-align: left;
						color: gray;
						font-size:24upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.movieName {
						color: #e20000;
					}
					.play {
						width: 200upx;
						height: 50upx;
						color: white;
						line-height: 50upx;
						font-size: 24upx;
						background-color: #e20000;
						border-radius: 50upx;
					}
				}
			}
		}
	}
}
</style>
