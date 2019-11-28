<template>
    <view class="moveMovieList">
      <view class="videoContent" v-if="moreMovieListObject.view_type==1" @click="playMovie(moreMovieListObject.video_id)">
        <view class="movieimage">
          <image :src="moreMovieListObject.img" :key="moreMovieListObject.video_id"></image>
					<!-- <view class="hot">{{moreMovieListObject.is_vip == 1 ? 'VIP':'限免'}}</view> -->
        </view>
        <view class="movieName">
          {{moreMovieListObject.name}}
        </view>
       <view class="pl">
          <view class="praise">
            <image src="../../static/9.png" class="list_img"></image>
            <text>{{moreMovieListObject.likes_percent}}%喜欢</text>
          </view>
          <view class="look">
            <image src="../../static/14.png" class="list_img"></image>
            <text>{{moreMovieListObject.plays}}</text>
          </view>
        </view>
      </view>
      <view class="advContent" v-if="moreMovieListObject.view_type==3" @click="goAdv(moreMovieListObject.url)">
        <image :src="moreMovieListObject.img"></image>
        <view>{{moreMovieListObject.name}}</view>
      </view>
    </view>
</template>

<script>
	import util from '../utils/public';
    export default {
        name: 'moveMovieList',
        props:['moreMovieListObject','tid'],
        data: function () {
            return {}
        },
        methods: {
					goAdv( url ){
						if (url){
						  plus.runtime.openURL(url, function(res) {
						  	console.log(res);
						  });
						}
					},
					async playMovie(movieId) {
						if( this.tid == 10 ){
							const data = await util.getInfoByAxios(
								'post',
								`${util.config.host}/api/video/video_info`,
								{
									video_id: movieId,
								},
								true
							);
							console.log(data);
							uni.navigateTo({
								url:`../liveBroadcastDetail/liveBroadcastDetail?url=${data.data.data.video_info.media_url}&title=${data.data.data.video_info.name}`
							})
						}else{
							util.playmove(movieId);
						}
					},
				},
    }
</script>

<style scoped lang="scss">
  .moveMovieList{
    width:360upx;
		height: 300upx;
    margin-bottom:30upx;
    .videoContent{
      width: 100%;
			height: 300upx;
      .movieimage{
        width: 100%;
        height:202upx;
				box-shadow: 0 0 10upx rgba(0,0,0,.3);
				border-radius: 14upx;
				position: relative;
        image{
          width: 100%;
          height: 202upx;
					border-radius: 14upx;
        }
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
      }
      .movieName{
				width: 100%;
				height: 40upx;
        text-align: left;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
				padding-top: 10upx;
        font-size: 26upx;
      }
      .pl{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .praise{
          width: 50%;
					height: 40upx;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .list_img{
            width:40upx;
						height: 40upx;
          }
          text{
            font-size:24upx;
						padding-left:10upx;
            color: gray;
          }
        }
				.look{
					width: 50%;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					height: 40upx;
					.list_img{
					  width:45upx;
						height: 40upx;
					}
					text{
					  font-size:24upx;
						padding-left:10upx;
					  color: gray;
					}
				}
      }
    }
    .advContent{
      width: 100%;
      font-size: 0;
      image{
        width: 100%;
        height:156upx;
      }
      view{
        width: 100%;
        padding: 4% 2%;
        text-align: left;
        font-size:26upx;
      }
    }
  }
	.moveMovieList:nth-child(odd){
		margin-left: 10upx;
	}
</style>
