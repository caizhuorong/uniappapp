<template>
  <view class="playRecord">
    <view class="contentOne" v-if="playRecordArray.length<=0">
      <image src="../../static/7.png">
    </view>
    <view class="contentTwo" v-else>
      <view class="details" v-for="(x,y) in playRecordArray" :key="x.id" @click="playMovie(x.id)">
        <view class="left">
          <image class="movieimage" :src="x.logo">
        </view>
        <view class="middle">
          <view class="top">
            <text class="movieName">{{x.name}}</text>
            <text class="movieType">{{x.tname}}</text>
          </view>
          <view class="bottom">上次观看至{{x.progress}}</view>
        </view>
        <view class="delete" @click.stop="deletePlayRecord(x.id)">删除</view>
      </view>
    </view>
  </view>
</template>

<script>
  import util from '../../utils/public'
  export default {
    name: "playRecord",
    data(){
      return{
        playRecordArray:[],
      }
    },
    onLoad(){
      this.getPlayRecordInfo();
    },
    methods:{
			playMovie(movieId) {
				util.playmove(movieId);
			},
      async getPlayRecordInfo(){
        const data = await util.getInfoByAxios("get",`${util.config.host}/api/History/history`,{},true);
				console.log(data);
        this.playRecordArray = data.data.data;
      },
      async deletePlayRecord(movieId){
        for (let i = 0;i<this.playRecordArray.length;i++){
          if (this.playRecordArray[i].id==movieId) {
            this.playRecordArray.splice(i,1);
          }
        }
				console.log(movieId);
        const data = await util.getInfoByAxios("get",`${util.config.host}/api/History/del`,{
          id:parseInt(movieId)
        },true);
        console.log(data);
      }
    },
  }
</script>

<style scoped lang="scss">
  .playRecord{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f4f4f4;
    .contentOne{
      width: 100%;
			height: 100%;
			position: fixed;
			top: 0upx;
			left:0upx;
      image{
        width: 100%;
				height:100%
      }
    }
    .contentTwo{
      width: 95%;
			margin: 0 auto;
      flex: 1;
      overflow: auto;
      .details{
        width: 100%;
        margin-bottom:20upx;
        display: flex;
        justify-content: space-between;
        align-items: center;
				background-color: #fff;
         .left{
           width: 40%;
           height: 160upx;
           .movieimage{
             width: 100%;
            height: 160upx;
           }
         }
        .middle{
          width: 45%;
          height: 160upx;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          text-align: left;
         .top{
           width: 100%;
           display: flex;
           justify-content: space-between;
           text{
             width: 90%;
             overflow: hidden;
             text-overflow:ellipsis;
             white-space: nowrap;
           }
           .movieName{
						 width:60%;
             color: black;
             font-size: 28upx;
           }
           .movieType{
             color: gray;
             font-size: 24upx;
           }
         }
          .bottom{
            font-size: 26upx;
          }
        }
        .delete{
          height: 160upx;
          line-height: 160upx;
          font-size: 30upx;
          color: red;
					margin-right: 20upx;
        }
      }
    }
    .bottomButton{
      width: 100%;
      padding: 5% 0;
      border-top: 1px solid gainsboro;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: white;
      font-size: 1.1rem;
      .allChoose{
        width: 48%;
        color: black;
        letter-spacing: .1rem;
      }
      .delete{
        color: red;
        width: 48%;
        letter-spacing: .1rem;
      }
    }
  }
</style>
