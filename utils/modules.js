import Vue from 'vue'
import util from './public'
/*axios*/
import axios from 'axios'
Vue.prototype.$axios = axios;

/*全局引入fastclick*/
import fastClick from 'fastClick'
if (util.judgeOs()!=="ios"){
  fastClick.attach(document.body);
}
/*引入剪切板*/
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

/*全局引入图片懒加载*/
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error:require('../../static/icon/01-a_icon_a.png'),
  loading:require('../../static/icon/b_icon_b.png')
});
/*引入base64*/
let Base64 = require('js-base64').Base64
