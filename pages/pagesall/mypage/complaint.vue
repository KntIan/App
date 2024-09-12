<template>
	<view class="container">
		<view class="form">
			<textarea class="textarea" placeholder="请输入您的投诉意见" v-model="feedback" @input="countCharacters"></textarea>
			<text class="char-count">{{ charCount }}/1000</text>
			<button class="submit-button" @click="submitFeedback">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				feedback: '',
				charCount: 0
			};
		},
		methods: {
			goBack() {
				uni.navigateBack();
			},
			countCharacters() {
				this.charCount = this.feedback.length;
			},
			submitFeedback() {
				if (!this.feedback.trim()) {
					uni.showToast({
						title: '请输入投诉意见',
						icon: 'none'
					});
					return;
				}

				// 在这里处理提交逻辑，例如发送到后端
				uni.showToast({
					title: '投诉意见已提交',
					icon: 'success'
				});
			}
		}
	}
</script>

<style>
	.container {
		background-color: #fff;
		height: 100vh;
	}

	.form {
		padding: 28rpx;
		display: grid;
		grid-template-rows: 13fr 1fr;
	}

	.textarea {
		width: 94%;
		height: 600rpx;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: #f5f5f5;
		font-size: 16px;
		margin-bottom: 10px;
		font-size: 28rpx;
		color: #666666;
	}

	.char-count {
		font-size: 14px;
		color: #999;
		position: absolute;
		z-index: 2;
		right: 60rpx;
		top: 600rpx;
	}

	.submit-button {
		border-radius: 40rpx;
		background-color: #FFA500;
		color: #fff;
		text-align: center;
		font-size: 28rpx;
		line-height: 80rpx;
		width: 100%;
	}
</style>