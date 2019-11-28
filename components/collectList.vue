<template>
	<view class="collectList" @click="playMovie(x.vid)">
		<image class="movieImg" :src="x.logo"></image>
		<view class="movieName">{{ x.name }}</view>
		<view class="movieType">{{ x.tname }}</view>
		<image src="../../static/13.png" class="logo" @click.stop="cancelCollects(x.vid)"></image>
	</view>
</template>

<script>
import util from '../utils/public.js';
export default {
	name: 'collectList',
	props: ['x'],
	data() {
		return {
			isAllowCancelCollect: true,
			isCollect: true
		};
	},
	methods: {
		playMovie(movieId) {
			util.playmove(movieId);
		},
		cancelCollects(id){
			this.$emit("cancelCollects",id)
		},
	}
};
</script>

<style scoped lang="scss">
.collectList {
	width: 95%;
	margin: 0 auto;
	margin-bottom: 20upx;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	view{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.movieImg {
		width: 300upx;
		height: 160upx;
	}
	.movieName {
		width: 225upx;
		color: #595959;
		font-size: 26upx;
		text-align: center;
	}
	.movieType {
		width:150upx;
		color: gray;
		font-size: 24upx;
		text-align: center;
	}
	.logo {
		width: 60upx;
		height: 60upx;
	}
}
</style>
