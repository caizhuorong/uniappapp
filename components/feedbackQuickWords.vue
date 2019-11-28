<template>
    <view class="feedbackQuickWords" :class="{active:isChoose}" @click="changeQuickWords()">{{feedbackQuickWordsValue}}</view>
</template>

<script>
    export default {
        name: "feedbackQuickWords",
        props:['feedbackQuickWordsValue'],
        data(){
          return{
            isChoose:false
          }
        },
        onLoad(){
          this.isChoose = false;
        },
        methods:{
          changeQuickWords(){
            if (this.isChoose){
              this.isChoose = false;
              this.$emit("FeedbackQuickWordChooseAll",this.feedbackQuickWordsValue,this.isChoose);
            }
            else {
              this.isChoose = true;
              this.$emit("FeedbackQuickWordChooseAll",this.feedbackQuickWordsValue,this.isChoose);
            }
          }
        }
    }
</script>

<style scoped lang="scss">
  .feedbackQuickWords{
    background-color: #e8e0a0;
    color: #999999;
    font-size: 28upx;
    border-radius: 10upx;
    border: 1px solid transparent;
		text-align: center;
		width:150upx;
		height:50upx;
		line-height: 50upx;
		margin-bottom: 20upx;
  }
  .active{
    background-color: red;
    color: white;
    border: 1px solid red;
  }
</style>
