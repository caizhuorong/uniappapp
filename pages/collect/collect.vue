<template>
    <view class="collect">
      <view class="contentOne" v-if="collectRecordArray.length<=0">
        <image src="../../static/10.png" ></image>
      </view>
      <view class="contentTwo" v-else>
        <collectList :x="x" v-for="(x,y) in collectRecordArray" :key="y"  @cancelCollects="cancelCollects()"></collectList>
			</view>
    </view>
</template>

<script>
    import collectList from '../../components/collectList.vue'
    import util from '../../utils/public'
    export default {
        name: "collect",
        components:{
          collectList
        },
        data(){
          return{
            collectRecordArray:[]
          }
        },
        onLoad(){
          this.getCollectInfo();
        },
        methods:{
					/*取消收藏电影*/
					async cancelCollects(moveId) {
						console.log(moveId);
						const data = await util.getInfoByAxios(
							'post',
							`${util.config.host}/api/Collection/cancelCollection`,
							{
								video_id: parseInt(moveId),
							},
							true
						);
						console.log(data);
						if( data.data.code = 1 ){
							uni.showToast({
								title:'取消成功',
								icon:'none'
							})
						}
						for (let i = 0;i<this.collectRecordArray.length;i++){
						  if (this.collectRecordArray[i].vid==moveId) {
						    this.collectRecordArray.splice(i,1);
						  }
						}
					},
          async getCollectInfo(id){
            const data = await util.getInfoByAxios("get",`${util.config.host}/api/Collection/myCollection`,{},true);
						console.log(data);
						this.collectRecordArray = data.data.data;
          },
         
        },
    }
</script>

<style scoped lang="scss">
  .collect{
    width: 100%;
    .contentOne{
      width: 100%;
			height: 100%;
			position: fixed;
			z-index: 1;
			top: 0;
			left: 0;
      image{
        width: 100%;
				height: 100%;
      }
    }
    .contentTwo{
      width: 100%;
			background-color:#f4f4f4;
    }
  }
</style>
