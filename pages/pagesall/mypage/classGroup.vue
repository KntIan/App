<template>
	<view class="class-group">
		<view class="mess_Title">
			<view class="messImg" @click="goback">
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
					alt="" />
			</view>
			<view class="title_text">
				班级群
			</view>
			<view class="title_img">
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng321758fb81a047a63eed79ffbd8a9de39b6d95d0adc9749329922655c760bb3a"
					alt="" @click="mycode" />
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714"
					alt="" />
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60de4c6690251e592eeb3edf5e89b8b74e18a9d17717d9949db1edcb3fcd23bd"
					alt="" />
			</view>
		</view>
		
		<msglist :msgList="class_List"/>
		
	</view>
</template>

<script>
	import msglist from './compontents/msglist.vue';
	export default {
		components: {
			msglist
		},
		data() {
			return {
				class_List:[{
					className:'书法一班班级群',
					massage:'刘易阳:王老师你教的真好啊',
					head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
				},
				{
					className:'书法二班班级群',
					massage:'刘易阳:王老师你教的真好啊',
					head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
				},
				{
					className:'书法三班班级群',
					massage:'刘易阳:王老师你教的真好啊',
					head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
				},
				{
					className:'书法四班班级群',
					massage:'刘易阳:王老师你教的真好啊',
					head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
				},
				{
					className:'书法五班班级群',
					massage:'刘易阳:王老师你教的真好啊',
					head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
				}]
			}
		},
		onLoad() {
	
		},
		methods: {
			goback() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.class-group{
		width: 750rpx;
	}
	
	.mess_Title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
	}
	
	.title_text {
		margin-left: 90rpx;
	}
	
	.title_img img {
		margin-left: 25rpx;
		width: 32rpx;
		height: 32rpx;
	}
	
	.classbox_img {
		width: 88rpx;
		height: 88rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
	}
	
</style>