<template>
	<view class="AI_Title">
		<view class="aiImg" @click="goback">
			<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
				alt="" />
		</view>
		<view class="ai_text">
			AI历史测评
		</view>
	</view>

	<view class="aihist-box">
		<input type="text" @click="searchCity" class="aihist_input" placeholder="请输入要查找的城市" />
	</view>
	<myhistList
	:histList="AIhistList"
	/>
	
</template>

<script>
	import myhistList from './compontents/histList.vue';
	export default {
		components: {
			myhistList
		},
		data() {
			return {
				AIhistList: [{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
						title: '书法练习第一课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
						title: '书法练习第二课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
						title: '书法练习第三课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
						title: '书法练习第四课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
						title: '书法练习第四课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
						title: '书法练习第四课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
						title: '书法练习第四课',
						date: '2024-07-1',
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
						title: '书法练习第四课',
						date: '2024-07-1',
					}
				],
			}
		},
		methods: {
			goback(){
				uni.navigateBack()
			}
		},
	}
</script>

<style>
	.AI_Title {
		display: flex;
		align-items: center;
		padding: 20rpx;
	}

	.ai_text {
		width: 100%;
		text-align: center;
	}
	
	.aihist-box{
		padding: 20rpx;
		padding-bottom: 0rpx;
	}

	.aihist_input {
		height: 80rpx;
		padding-left: 36rpx;
		background: #EEEEEE;
		border-radius: 40rpx;
		margin-top: 16rpx;
	}
</style>