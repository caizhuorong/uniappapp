import Vue from 'vue'
import util from './public'
/*视频赞踩*/
Vue.prototype.doPraiseOrCai = async function (type,MovieId){
  if (this.isAllowPraiseOrCai){
    this.isAllowPraiseOrCai = false;
    if(this.$route.name == 'shortMovie'){
      this.$set(this.movieInfo[this.initIndex], 'dislikes', false);
    }
    let data;
    data = await this.getInfoByAxios("get","/request_url/index.php?g=api&m=likeinfo&a=video_like",{
      uid:util.judgeParams().uid,
      channel:util.config.channel,
      video_id:parseInt(MovieId),
      type:type
    },true);
    this.isAllowPraiseOrCai = true;
    if(this.$route.name == 'shortMovie'){
      this.$set(this.movieInfo[this.initIndex], 'dislikes', true);
    }
    if (data.msg=="操作成功"){
      if (data.data.operate==1){
        this.currentPraiseMount++;
        this.isPraiseOrCai=1;
      }
      else if (data.data.operate==0){
        this.currentCaiMount++;
        this.isPraiseOrCai=0;
      }
    }
    else if(data.msg=="用户已经对该视频进行赞踩"){
      Toast({
        message: '用户已经对该视频进行赞踩',
        position: 'bottom',
        duration: 1000
      });
    }
  }
};

/*跳转到反馈页面*/
Vue.prototype.goFeedback = function (movieId,movieName){
  this.$router.push({path:"/feedback",query:{movieId:movieId,movieName:movieName}});
};

/*跳转到更多电影页面*/
Vue.prototype.findMoreMovie = function (typeId,typeName) {
  this.$router.push({path:'/moreMovie',query:{typeId:typeId,typeName:typeName}})
};

/*收藏电影*/
Vue.prototype.doCollect = async function (moveId) {
  if (this.isAllowCollect) {
    this.isAllowCollect = false;
    let data;
    data = await this.getInfoByAxios("get","/request_url/index.php?g=api&m=collection&a=collection",{
      uid:util.judgeParams().uid,
      vid:parseInt(moveId)
    },true);
    if (data.msg=="success") {
      this.isAllowCollect = true;
      this.isCollect = true;
      Toast({
        message: '收藏成功',
        position: 'center',
        duration: 1000
      });
    }
  }
};

/*取消收藏电影*/
Vue.prototype.cancelCollect = async function (moveId,isUpdate){
  if (this.isAllowCancelCollect) {

    /*判断是否实时删除收藏列表数据*/
    if (isUpdate){
      this.$emit("updateCollectInfo",moveId);
    }

    this.isAllowCancelCollect = false;
    let data;
    data = await this.getInfoByAxios("get","/request_url/index.php?g=api&m=collection&a=cancelCollection",{
      vid:parseInt(moveId),
      uid:util.judgeParams().uid
    },true);
    if (data.msg=="操作成功") {
      this.isAllowCancelCollect = true;
      this.isCollect = false;
      Toast({
        message: '取消成功',
        position: 'center',
        duration: 1000
      });
    }


  }

};

/*拼接用户Id*/
Vue.prototype.addUserId = function () {
   this.addUrl +=util.judgeParams().uid;
};

/*隐藏微信分享页面*/
Vue.prototype.initWeiXin = function () {
  let video = document.getElementsByTagName("video")[0];
  let weixin = document.getElementsByClassName("-mob-share-weixin-qrcode-content")[0];
  let weixinBg = document.getElementsByClassName("-mob-share-weixin-qrcode-bg")[0];
  let weixinCon = document.getElementsByClassName("-mob-share-weixin-tips-content")[0];

  if (video){
    video.style.display = "block";
  }
  if (weixin&&weixinBg){
    document.body.removeChild(weixin);
    document.body.removeChild(weixinBg);
  }
  if (weixinCon&&weixinBg){
    document.body.removeChild(weixinCon);
    document.body.removeChild(weixinBg);
  }
};

/*跳转到设置页面*/
Vue.prototype.goSetting = function () {
  this.$router.push("/setting");
};


/*跳转到广告页*/
Vue.prototype.goAdv = function (url) {
  // console.log(url);
  if (url){
    window.location.href=url;
  }
};

/*获取是否开启手机号*/
Vue.prototype.isOpenMobile = async function () {
  let data;
  data = await this.getInfoByAxios("get","/request_url/index.php?g=api&m=player&a=h5_mobile_switch",null,false);
  if (data.data==1){
    this.$store.commit("setIsOpenMobile",true);
  }
  else {
    this.$store.commit("setIsOpenMobile",false);
  }
};
