<script>
import util from './utils/public';
const openinstall = uni.requireNativePlugin('openinstall-plugin');
export default {
  onShow: function() {
		const _this = this;
  	if (uni.getStorageSync('userInfo') == ''){
			openinstall.getInstall(
			    30,
			    function(result) {
						let data = result.bindData;
						if( result.channelCode != '' ){
							plus.device.getInfo({
									success:function(e){
										let datas = '';
										if( e.uuid.includes(',') ){
											datas = e.uuid.split(',');
											datas = datas[0]
										}else{
											datas = e.uuid;
										}
										if(data == undefined){
											_this.initUserInfo(1,0,datas);
										}else{
											_this.initUserInfo(result.channelCode,0,datas);
										}
									},
									fail:function(e){
									}
								});
						}else{
							plus.device.getInfo({
									success:function(e){
										let datas = '';
										if( e.uuid.includes(',') ){
											datas = e.uuid.split(',');
											datas = datas[0]
										}else{
											datas = e.uuid;
										}
										if(JSON.parse(data).c == undefined){
											_this.initUserInfo(1,0,datas);
										}else{
											
											_this.initUserInfo(JSON.parse(data).c,JSON.parse(data).u,datas);
										}
										// _this.initUserInfo('1005',undefined,'123');
										 
									},
									fail:function(e){
									}
								});
						}
			    }
			);
			
			//
			// plus.device.getInfo({
			// 	success:function(e){
			// 		let datas = '';
			// 		if( e.uuid.includes(',') ){
			// 			datas = e.uuid.split(',');
			// 			datas = datas[0]
			// 		}else{
			// 			datas = e.uuid;
			// 		}
			// 		 _this.initUserInfo(1,0,datas)
			// 	},
			// 	fail:function(e){
			// 	}
			// });
			//
  	}else {
			plus.device.getInfo({
				success:function(e){
					let datas = '';
					if( e.uuid.includes(',') ){
						datas = e.uuid.split(',');
						datas = datas[0]
					}else{
						datas = e.uuid;
					}
					 _this.initUserInfo(1,0,datas)
				},
				fail:function(e){
				}
			});
  	  
  	}
  },
  methods:{
		// async initUserInfo(){
		// 	let te = uni.getSystemInfoSync();
		// 	const data = await util.getInfoByAxios("get",`${util.config.host}/api/player/do_init`,{
		// 		version:1,
		// 		channel:1,
		// 		machine_code:uuid,
		// 		maker:te.brand,
		// 		mobile_model:te.model,
		// 		system:te.platform== 'ios' ? 2:1,
		// 		system_version:te.system,
		// 		invitation_uid:1
		// 	},true);
		// 	  uni.setStorageSync('userInfo',data.data.data);
		// 		uni.setStorageSync('token',data.data.data.token);
		// },
    async initUserInfo(c,u,uuid){
			let te = uni.getSystemInfoSync();
      const data = await util.getInfoByAxios("post",`${util.config.host}/api/player/do_init`,{
        version:1,
				channel:c != undefined ? c : '1',
        machine_code:uuid,
        maker:te.brand,
        mobile_model:te.model,
				system:te.platform== 'ios' ? 2:1,
        system_version:te.system,
				invitation_uid:u != undefined ? u : '0'
      },true);console.log(data.data.data.token);
			uni.setStorageSync('token',data.data.data.token);
      uni.setStorageSync('userInfo', data.data.data);
    },
  },
}
</script>

<style>
	/*每个页面公共css */
</style>
