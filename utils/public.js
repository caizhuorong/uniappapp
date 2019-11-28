import md5 from './md5';
import { Base64 } from 'js-base64';
import 'url-search-params-polyfill';
const util = {
	config: {
		channel: 1, //渠道ID
		key: 'GKeQF5dUD1)T3!r5UCxhD7sOjM!WVAsE',
		appid: 1013,
		machine_code: new Date().getTime(), //设备号    new Date().getTime()返回 1970 年 1 月 1 日至今的毫秒数。
		host: "https://api.f2083.cn",
		sharekey: '1db39bd40e24e',
		version:'3',
	},
	jointUrl(data) {
		let oArray = Object.keys(data).sort();
		var params = '';
		for (let i = 0; i < oArray.length; i++) {
			params += oArray[i] + '=' + data[oArray[i]] + '&';
		}
		params = params.replace(/&{1}$/, '');
		return params;
	},
	getSign(options) {
		return md5(this.jointUrl(options) +'&'+this.config.key).toLowerCase();
	},
	judgeOs() {
		var u = uni.getSystemInfoSync();
		return u.platform;
	},
	judgeBrower() {
		let u = navigator.userAgent;
		return {
			isAndroid: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			isIOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			isSafari: u.indexOf('Safari') > -1,
			/*这个判断不准确，在安卓中通过QQ自带的浏览器打开显示的也是safari*/
			isQQ: u.match(/QQ\/[0-9]/i),
			/*QQ内置浏览器*/
			isWx: u.match(/MicroMessenger\/[0-9]/i),
		}
	},
	judgeParams() {
		let system = null;
		let uid = null;
		let userName = null;
		let OS = this.judgeOs();
		if (OS == "android") {
			system = 1;
		} else if (OS == "ios") {
			system = 2;
		}
		if (uni.getStorageSync('userInfo')) {
			uid = parseInt(uni.getStorageSync('userInfo').uid);
			userName = uni.getStorageSync('userInfo').nick_name;
		} else {
			uid = 0;
			userName = "";
		}
		return {
			system: system,
			uid: uid,
			userName: userName
		}
	},
	arrayDelete(array) {
		for (let i = array.length - 1; i >= 0; i--) {
			for (let j = i - 1; j >= 0; j--) {
				if (array[i] === array[j]) {
					array.splice(j, 1);
					j++;
				}
			}
		}
		return array;
	},
	uploadImgToBaseSixFour(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function() { // 图片转base64完成后返回reader对象
				resolve(reader);
			};
			reader.onerror = reject
		})
	},
	deepClone(source) {
		const targetObj = source.constructor === Array ? [] : {}; // 判断复制的目标是数组还是对象
		for (let keys in source) { // 遍历目标
			if (source.hasOwnProperty(keys)) {
				if (source[keys] && typeof source[keys] === 'object') { // 如果值是对象，就递归一下
					targetObj[keys] = source[keys].constructor === Array ? [] : {};
					targetObj[keys] = deepClone(source[keys]);
				} else { // 如果不是，就直接赋值
					targetObj[keys] = source[keys];
				}
			}
		}
		return targetObj;
	},
	goTop() {
		// 回到顶部
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
		var setI = setInterval(() => {
			scrollTop = scrollTop - scrollTop / 1;
			window.scrollTo(0, scrollTop);
			if (scrollTop <= 1) {
				clearInterval(setI)
			}
		}, 10);
	},
	getNetworkType() {
		var ua = navigator.userAgent;
		var networkStr = ua.match(/NetType\/\w+/) ? ua.match(/NetType\/\w+/)[0] : 'NetType/other';
		networkStr = networkStr.toLowerCase().replace('nettype/', '');
		var networkType;
		switch (networkStr) {
			case 'wifi':
				networkType = 'wifi';
				break;
			case '4g':
				networkType = '4g';
				break;
			case '3g':
				networkType = '3g';
				break;
			case '3gnet':
				networkType = '3g';
				break;
			case '2g':
				networkType = '2g';
				break;
			default:
				networkType = 'other';
		}
		alert(networkStr)
	},
	exchangeSecond(num) {
		let h;
		let m;
		let s;
		let str = "";
		h = parseInt(num / 3600);
		m = parseInt(num % 3600 / 60);
		s = num % 3600 % 60;
		h += "";
		m += "";
		s += "";
		h = (h.length == 1) ? "0" + h : h;
		m = (m.length == 1) ? "0" + m : m;
		s = (s.length == 1) ? "0" + s : s;
		if (h > 0) {
			str = str + h + ":";
		}
		if (m > 0 || (h > 0 && m == 0)) {
			str = str + m + ":";
		}
		str = str + s;
		return str;
	},
	downloadFile(fileName, content) {
		let aLink = document.createElement('a');
		let blob = this.base64ToBlob(content); //new Blob([content]);

		let evt = document.createEvent("HTMLEvents");
		evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
		aLink.download = fileName;
		aLink.href = URL.createObjectURL(blob);
		aLink.dispatchEvent(new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
			view: window
		})); //兼容1火狐
	},
	base64ToBlob(code) {
		let parts = code.split(';base64,');
		let contentType = parts[0].split(':')[1];
		let raw = window.atob(parts[1]);
		let rawLength = raw.length;
		let uInt8Array = new Uint8Array(rawLength);
		for (let i = 0; i < rawLength; ++i) {
			uInt8Array[i] = raw.charCodeAt(i);
		}
		return new Blob([uInt8Array], {
			type: contentType
		});
	},
	playmove(movieId, url) {
		if (movieId) {
			uni.navigateTo({
				url: `../movieDetails/movieDetails?movieId=${movieId}`,
			})
		} else {
			if( url != undefined ){
				plus.runtime.openURL(url, function(res) {
				});
			}
		}
	},
	getInfoByAxios(type, url, params, isSign) {
		uni.showLoading({
			title: '加载中...',
			icon: 'none',
			mask: true
		})
		if (type === "get") {
			return new Promise((resolve, reject) => {
				uni.request({
					url: url,
					method: 'GET',
					timeout:5000,
					header:{
						token:uni.getStorageSync('token') ? uni.getStorageSync('token'):'0'
					},
					data: params,
					success: (res) => {
						uni.hideLoading();
						if (typeof res.data == 'string' ) {
							var ress = res.data.split('').join('');
							var b = new Buffer(ress, 'base64');
							var s2 = b.toString('utf8');
							let data = {
								data:JSON.parse(s2)
							}
							if( data.data.code == 401 ){
								uni.navigateTo({
									url:'../first/first?type=1'
								})
							}
							resolve(data);
						} else {
							if( res.data.code == 401 ){
								uni.navigateTo({
									url:'../first/first?type=1'
								})
								return false;
							}
							resolve(data);
						}
					},
					fail: (error) => {
						reject(error);
						uni.stopPullDownRefresh();
						uni.hideLoading();
						uni.showToast({
							title: '下拉刷新',
							icon:'none'
						});
					}
				});
			})
		} else if (type === "post") {
			params.t = util.config.machine_code + Math.round(Math.random()*10000000);;
			if(isSign){
				params.sign = util.getSign(params);
			}
			let postParams = params;
			return new Promise((resolve, reject) => {
				uni.request({
					url: url,
					method: 'POST',
					timeout:5000,
					header:{
						token:uni.getStorageSync('token') ? uni.getStorageSync('token'):'0',
					},
					data: postParams,
					success: (res) => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
						if (typeof res.data == 'string' ) {
							var ress = res.data.split('').join('');
							var b = new Buffer(ress, 'base64');
							var s2 = b.toString('utf8');
							let data = {
								data:JSON.parse(s2)
							}
							if( data.data.code == 401 ){
								uni.navigateTo({
									url:'../first/first?type=1'
								})
								return false;
							}
							resolve(data);
						} else {
							if( res.data.code == 401 ){
								uni.navigateTo({
									url:'../first/first?type=1'
								})
							}
							resolve(res);
						}
					},
					fail: (error) => {
						reject(error);
						uni.stopPullDownRefresh();
						uni.hideLoading();
						uni.showToast({
							title: '下拉刷新',
							icon:'none'
						});
					}
				});
			})
		}
	},
};
export default util;
