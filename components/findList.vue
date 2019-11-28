<template>
    <view class="findList">
      <view class="videoContent" v-if="findMovieObject.view_type==1">
        <view class="movieimage" @click="playMovie(findMovieObject.video_id)">
          <image class="movieSrc" :src="findMovieObject.img">
          <image src="../../static/38.png" class="bofang">
        </view>
        <view class="movieIntro">
          <view class="left">
            <view class="movieName">{{findMovieObject.name}}</view>
            <view class="movieType">{{findMovieObject.types}}</view>
          </view>
          <view class="right">
            <view class="share" @click="doShare">
              <image src="../../static/11.png">
              <text>分享</text>
            </view>
            <view class="willCollect" v-if="!isCollect" @click="doCollect(findMovieObject.video_id)">
              <image src="../../static/4.png">
              <text>收藏</text>
            </view>
            <view class="alreadyCollect" v-if="isCollect" @click="cancelCollect(findMovieObject.video_id)">
              <image src="../../static/13.png" >
              <text>已收藏</text >
            </view>
          </view>
        </view>
      </view>
      <view class="advContent" v-if="findMovieObject.view_type==3" @click="goAdv(findMovieObject.url)">
        <image :src="findMovieObject.img"></image>
        <view>{{findMovieObject.name}}</view>
      </view>
    </view>
</template>

<script>
	import util from '../utils/public.js';
    export default {
        name: "findList",
        props:['findMovieObject'],
        data(){
          return{
            isAllowCollect:true,
            isAllowCancelCollect:true,

            isCollect:false
          }
        },
        created(){

        },
        mounted(){
					console.log(this.findMovieObject.is_collect);
          if (this.findMovieObject.is_collect==0){
            this.isCollect = false;
          }
          else if (this.findMovieObject.is_collect==1){
            this.isCollect = true;
          }
        },
        activated(){

        },
        methods:{
					playMovie(movieId) {
						util.playmove(movieId);
					},
					doShare() {
						uni.navigateTo({
							url:'../extension/extension'
						})
					},
					/*收藏电影*/
					async doCollect () {
					  if (this.isAllowCollect) {
					    this.isAllowCollect = false;
					    const data = await util.getInfoByAxios("post",`${util.config.host}/api/Collection/collection`,{
					      video_id:parseInt(this.movieId)
					    },true);
							if(data.data.code == 1){
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
							if( data.data.code == 1 ){
								this.isAllowCancelCollect = true;
								this.isCollect = false;
								uni.showToast({
								  title: '取消成功',
									icon:'none'
								});
							}
					  }
					},
					goAdv(url) {
						if (url){
							plus.runtime.openURL(url, function(res) {
								console.log(res);
							});
						}
					},
        }
    }
</script>

<style scoped lang="scss">
  .findList{
    width: 98%;
		margin:0 auto;
    .videoContent{
      width: 100%;
      .movieimage{
        width: 100%;
        height: 404upx;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
				border-radius: 16upx;
        .movieSrc{
          width: 100%;
          height: 100%;
					border-radius: 16upx;
        }
        .bofang{
					width:100upx;
					height: 100upx;
          position: absolute;
          left: 50%;
          margin-left: -50upx;
          top: 50%;
          margin-top: -50upx;
        }
      }
      .movieIntro{
				height: 60upx;
				margin-bottom: 30upx;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .left{
          width: 55%;
          text-align: left;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
          .movieName{
						width: 250upx;
            font-size: 26upx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						color:#333;
						margin-left: 20upx;
          }
          .movieType{
            font-size: 26upx;
            color: gray;
						margin-left: 20upx;
          }
        }
        .right{
          width: 45%;
          display: flex;
          justify-content: space-around;
          >view{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            image{
							height:40upx;
              width: 40upx;
            }
            text{
              font-size: 26upx;
              color: gray;
            }
          }
          .alreadyCollect{
            text{
              color: #ECA09C;
            }
          }
        }
      }
    }
    .advContent{
      width: 100%;
      font-size: 0;
			margin-bottom: 30upx;
      image{
        width: 100%;
        height:370upx;
				border-radius: 16upx;
      }
      view{
        width: 100%;
        text-align: left;
        font-size: 28upx;
				margin-left: 20upx;
      }
    }
  }
</style>
