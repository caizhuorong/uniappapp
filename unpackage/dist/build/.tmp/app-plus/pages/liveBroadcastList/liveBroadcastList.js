(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/liveBroadcastList/liveBroadcastList"],{"2d06":function(e,t,n){"use strict";n.r(t);var o=n("fe6e"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"9fae":function(e,t,n){},ab3a:function(e,t,n){"use strict";var o=n("9fae"),a=n.n(o);a.a},c2d3:function(e,t,n){"use strict";(function(e){n("bee6"),n("921b");o(n("66fd"));var t=o(n("deef"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},deef:function(e,t,n){"use strict";n.r(t);var o=n("e1b6"),a=n("2d06");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("ab3a");var u=n("2877"),r=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"11205f48",null);t["default"]=r.exports},e1b6:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},fe6e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(n("040e"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/allMovie")]).then(n.bind(null,"8b59"))},i={name:"channel",data:function(){return{navState:null,movieTypesArray:[],url:""}},components:{allMovie:a},onLoad:function(t){this.url=t.url,this.getMovieType(t.url),e.setNavigationBarTitle({title:t.title})},onPullDownRefresh:function(){this.getMovieType(this.url)},methods:{findMoreMovie:function(t,n){e.setStorageSync("title",n),e.navigateTo({url:"../liveBroadcastDetail/liveBroadcastDetail?url=".concat(t)})},getMovieType:function(){var t=this;e.showLoading({title:"加载中..."}),e.request({url:"https://zb.papalu.in/zhibo/".concat(this.url),method:"GET",data:{},success:function(n){e.hideLoading(),t.movieTypesArray=n.data.zhubo,e.stopPullDownRefresh()},fail:function(t){e.stopPullDownRefresh(),e.hideLoading(),setTimeout(function(){e.showToast({message:"请求失败",position:"center",duration:2e3})},1e3)}})},changeNav:function(e){this.navState=e}}};t.default=i}).call(this,n("6e42")["default"])}},[["c2d3","common/runtime","common/vendor"]]]);