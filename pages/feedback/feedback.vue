<template>
	<view class="feedback">
		<view class="feedbackContent">
			<view class="feedbackQuickWordContent">
				<feedbackQuickWords
					:feedbackQuickWordsValue="feedbackQuick"
					v-for="(feedbackQuick, index) in FeedbackQuickWordArray"
					:key="index"
					@FeedbackQuickWordChooseAll="FeedbackQuickWordChooseAll"
				></feedbackQuickWords>
			</view>
			<view class="content">
				<textarea class="textAreaValue" @input="changeInput" :value="textAreaValue" placeholder="可描述下您的意见或建议，便于我们更好地为您解决问题哦(选填)"/>
			</view>
			<button
				class="feedbackButton"
				type="default"
				@click="submitFeedback()"
				:class="{ active: FeedbackQuickWordChoose.length > 0 || textAreaValue.length > 0 }"
			>
				提交
			</button>
		</view>
	</view>
</template>

<script>
import feedbackQuickWords from '../../components/feedbackQuickWords.vue';
import util from '../../utils/public';
export default {
	name: 'feedback',
	components: {
		feedbackQuickWords
	},
	data() {
		return {
			textAreaValue: '',
			FeedbackQuickWordArray:[],
			FeedbackQuickWordChoose:[],
			id:'',
			name:'',
			msg:1,
		};
	},
	onLoad(option) {
		this.id = option.id;
		this.name = option.name;
		this.getFeedbackQuickWordInfo();
	},
	methods: {
		changeInput(e){
			this.textAreaValue = e.target.value
		},
		submitFeedback() {
				if (this.FeedbackQuickWordChoose.length > 0 || this.textAreaValue.trim().length > 0 || this.imageArray.length > 0) {
					uni.showLoading({
						title: '加载中...'
					});
					let allFeedbackInfo ='';
					if (this.FeedbackQuickWordChoose.length > 0) {
						allFeedbackInfo = this.FeedbackQuickWordChoose.join(',');
					}
					if (this.textAreaValue.length > 0) {
						allFeedbackInfo = `${allFeedbackInfo},${this.textAreaValue}`;
					}
					let data= {
						video_id: parseInt(this.id),
						content:allFeedbackInfo
					}
					console.log(data)
					this.ress(data);
				}
		},
		async ress(feedbackInfo) {
			const data = await util.getInfoByAxios('post', `${util.config.host}/api/opinion/do_opinion`, feedbackInfo, true);
			console.log(data);
			if (data.data.msg == '反馈成功') {
				uni.showToast({
					title:'反馈成功',
					icon:'none'
				});
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					});
				}, 1500);
			}
		},
		async getFeedbackQuickWordInfo() {
			let data;
			data = await util.getInfoByAxios(
				'post',
				`${util.config.host}/api/opinion/quick_word`,
				{},
				true
			);
			this.FeedbackQuickWordArray = data.data.data;
		},
		FeedbackQuickWordChooseAll(value, type) {
			if (type) {
				this.FeedbackQuickWordChoose.push(value);
				this.msg = this.msg ++;
			} else {
				for (let i = 0; i < this.FeedbackQuickWordChoose.length; i++) {
					if (this.FeedbackQuickWordChoose[i] == value) {
						this.FeedbackQuickWordChoose.splice(i, 1);
					}
				}
			}
		}
	}
};
</script>

<style scoped lang="scss">
.feedback {
	width: 100%;
	.feedbackContent {
		width: 100%;
		.feedbackQuickWordContent {
			width: 100%;
			display:flex;
			justify-content:space-around;
			align-items:center;
			margin-top:30upx;
			flex-wrap:wrap;
		}
		.content {
			width: 710upx;
			margin:0 auto;
			position: relative;
			border: 1upx solid #999999;
			.textAreaValue {
				width:90%;
				margin: 0 auto;
				margin-top:30upx;
				border-radius: 16upx;
				font-size: 26upx;
			}
		}
		.feedbackButton {
			width: 70%;
			color: white;
			margin: 6% auto 0;
			padding: 2% 2%;
			border-radius: 1rem;
			background-color: gray;
			font-size: 0.8rem;
			letter-spacing: 0.1rem;
		}
		.active {
			background-color: red;
		}
	}
}
</style>
