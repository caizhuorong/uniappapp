<template>
    <mt-loadmore class="allMovie" :top-method="refresh" :topDistance="50" :distanceIndex="3" :autoFill="false" ref="refreshComponentChannel">
      <view class="content">
        <moreMovieList :moreMovieListObject="moreMovieListObject" v-for="(moreMovieListObject,index) in moreMovieArray" :key="index"></moreMovieList>
      </view>
      <view v-show="allLoaded&&moreMovieArray.length>=20" class="allLoadedTips">已全部加载</view>

     <!-- <view slot="top" class="mint-loadmore-top">
        <text v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</text>
        &lt;!&ndash;<text v-show="topStatus === 'loading'">Loading...</text>&ndash;&gt;
        <mt-spinner :type="3" color="gray" :size="31" v-show="topStatus === 'loading'">加载中</mt-spinner>
      </view>-->
    </mt-loadmore>
</template>

<script>
  import util from '../utils/public'
  import moreMovieList from './moreMovieList.vue'
    export default {
        name: "allMovie",
        components:{
          moreMovieList
        },
        props:['movieTypeObject'],
        data(){
          return{
            moreMovieArray:[],
            currentPage:1,
            topStatus: '',
            loading:false,
            allLoaded:false,
          }
        },
        onLoad(){
          this.getMoreMovieInfo(this.movieTypeObject.tid,this.currentPage);
        },
        methods:{
          async getMoreMovieInfo(typeId,page){
						uni.showLoading({
							title:'加载中...',
							icon:'none'
						})
            const data = await util.getInfoByAxios("get",`${util.config.host}/api/video/video_type_list`,{
              channel:util.config.channel,
              tid:parseInt(typeId),
              uid:util.judgeParams().uid,
              page:page
            },true);
            Indicator.close();
            this.moreMovieArray = data.data.list;
          },
          /*上拉加载更多*/
          async loadMore(){
            this.loading = true;
            this.allLoaded = false;
            this.currentPage++;
            const data = await util.getInfoByAxios("get",`${util.config.host}/api/video/video_type_list`,{
              channel:util.config.channel,
              tid:parseInt(this.movieTypeObject.tid),
              uid:util.judgeParams().uid,
              page:this.currentPage
            },true);
            if (data.data.list.length > 0) {
              for (let i = 0; i < data.data.list.length; i++) {
                this.moreMovieArray.push(data.data.list[i]);
                this.loading = false;
              }
            }
            else {
              this.loading = true;
              this.allLoaded = true;
            }
          },
          /*下拉刷新*/
          async refresh(){
            this.currentPage = 1;
            const data = await util.getInfoByAxios("get",`${util.config.host}/api/video/video_type_list`,{
              channel:util.config.channel,
              tid:parseInt(this.movieTypeObject.tid),
              uid:util.judgeParams().uid,
              page:this.currentPage
            },true);
           setTimeout(()=>{
             this.moreMovieArray = data.data.list;
             this.$refs.refreshComponentChannel.onTopLoaded();
             this.loading = false;
             this.allLoaded = false;
           },600);

          },
        }
    }
</script>

<style scoped lang="scss">
  .allMovie{
    width: 100%;
    flex: 1;
    overflow: auto;
    .content{
      width: 100%;
      padding: 0 1%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
</style>
