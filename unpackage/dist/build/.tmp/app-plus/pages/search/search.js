(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"5dea":function(e,t,a){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=o(a("a34a")),n=o(a("040e"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,r,c,n,o){try{var s=e[n](o),i=s.value}catch(u){return void a(u)}s.done?t(i):Promise.resolve(i).then(r,c)}function i(e){return function(){var t=this,a=arguments;return new Promise(function(r,c){var n=e.apply(t,a);function o(e){s(n,r,c,o,i,"next",e)}function i(e){s(n,r,c,o,i,"throw",e)}o(void 0)})}}var u={name:"",data:function(){return{hotSearchArray:[],searchInfo:null,searchRecordArray:[],currentPage:1,searchResultArray:[],isHaveSearchRecord:!1,isHaveSearchResult:!0,loading:!1,allLoaded:!1}},onLoad:function(t){if(this.getHotSearch(),"undefined"!=t.searchInfo?(this.searchInfo=t.searchInfo,this.doSearch(t.searchInfo)):(this.searchInfo="",this.isHaveSearchResult=!1),e.getStorageSync("searchRecord")){this.searchRecordArray=[],this.isHaveSearchRecord=!0;var a=e.getStorageSync("searchRecord");console.log(r(a," at pages\\search\\search.vue:93")),a.map(function(e,t){e.includes("object")&&a.splice(t,1)}),console.log(r(a," at pages\\search\\search.vue:99")),this.searchRecordArray=a,e.setStorageSync("searchRecord",this.searchRecordArray),this.searchRecordArray.reverse()}},onReachBottom:function(){this.loadMore()},methods:{playMovie:function(e){n.default.playmove(e)},goCorrect:function(){e.navigateTo({url:"../collect/collect"})},goLookRecord:function(){e.navigateTo({url:"../playRecord/playRecord"})},back:function(){e.navigateBack({delta:1})},getHotSearch:function(){var e=i(c.default.mark(function e(){var t;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.default.getInfoByAxios("post","".concat(n.default.config.host,"/api/video/hot_search_by_type"),{},!0);case 2:t=e.sent,console.log(r(t," at pages\\search\\search.vue:134")),this.hotSearchArray=t.data.data.split(",");case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),doSearch:function(){var t=i(c.default.mark(function t(a){var r,o,s;return c.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.currentPage=1,a=a.trim(),this.searchInfo=a,e.getStorageSync("searchRecord")?(r=e.getStorageSync("searchRecord"),r.push(a),r=n.default.arrayDelete(r),e.setStorageSync("searchRecord",r)):(o=[],o.push(a),e.setStorageSync("searchRecord",o)),this.searchRecordArray=[],this.isHaveSearchRecord=!0,this.searchRecordArray=e.getStorageSync("searchRecord"),this.searchRecordArray.reverse(),t.next=10,n.default.getInfoByAxios("post","".concat(n.default.config.host,"/api/video/do_search"),{search:this.searchInfo,page:this.currentPage},!0);case 10:s=t.sent,s.data.length<=0?(e.showToast({title:"暂时找不到影片",icon:"none",position:"center"}),this.isHaveSearchResult=!1):(this.searchResultArray=s.data.data,this.isHaveSearchResult=!0);case 12:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}(),closeSearchRecord:function(){this.isHaveSearchRecord=!1,e.removeStorageSync("searchRecord")},judgeSearchInfoLength:function(e){console.log(r(e.detail.value," at pages\\search\\search.vue:188")),this.doSearch(this.searchInfo),e.preventDefault()},loadMore:function(){var e=i(c.default.mark(function e(){var t,a;return c.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.allLoaded=!1,this.currentPage++,console.log(r(this.currentPage," at pages\\search\\search.vue:200")),e.next=5,n.default.getInfoByAxios("post","".concat(n.default.config.host,"/api/video/do_search"),{search:this.searchInfo,page:this.currentPage},!0);case 5:if(t=e.sent,console.log(r(t," at pages\\search\\search.vue:210")),t.data.data.length>0)for(a=0;a<t.data.data.length;a++)this.searchResultArray.push(t.data.data[a]);else this.allLoaded=!0;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}};t.default=u}).call(this,a("6e42")["default"],a("0de9")["default"])},6310:function(e,t,a){"use strict";a.r(t);var r=a("c010"),c=a("cde2");for(var n in c)"default"!==n&&function(e){a.d(t,e,function(){return c[e]})}(n);a("c1c9");var o=a("2877"),s=Object(o["a"])(c["default"],r["a"],r["b"],!1,null,"241535f5",null);t["default"]=s.exports},c010:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},c=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return c})},c1c9:function(e,t,a){"use strict";var r=a("c6fb"),c=a.n(r);c.a},c6fb:function(e,t,a){},cde2:function(e,t,a){"use strict";a.r(t);var r=a("5dea"),c=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);t["default"]=c.a},f52a:function(e,t,a){"use strict";(function(e){a("bee6"),a("921b");r(a("66fd"));var t=r(a("6310"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f52a","common/runtime","common/vendor"]]]);