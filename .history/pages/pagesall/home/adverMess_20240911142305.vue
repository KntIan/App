<template>
	<view class="codepage">
		<view class="code_titlebox">
			<view class="messImg" @click="goback">
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
					alt="" />
			</view>
			<view class="code_title">
				公告消息
			</view>
		</view>


		<view class="adverbox" v-for="(item,index) in messList" :key="index">
			<view class="adver_time">

				<view class="adver_hour"
					style="text-align: center; font-weight: 400;font-size: 20rpx;color: #000000;margin: 28rpx 0 28rpx 0;">
					<text>{{item.month}}</text><text style="margin-left: 20rpx;">{{item.hour}}</text>
				</view>

				<view class="adver_content">
					<view class="adver_text1">{{item.title}}</view>
					<view class="adver_text2">{{item.content}}</view>
					<view class="line">
						<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng754b004becd9b25a8ebdc9d2cb98f423d3fa6fdf022dd0a97d950d38fe548f62"
							alt="" />
					</view>
					<view class="adver_btn" @click="adverbtn(event,index)">
						查看详情
					</view>
				</view>



			</view>
		</view>







	</view>
</template>

<script>
	export default {
		data() {
			return {
				messList: [{
						month: '7-12',
						hour: '20:04',
						title: '快来参加书法协会的比赛吧',
						content: '书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古'

					},
					{
						month: '7-12',
						hour: '20:04',
						title: '快来参加书法协会的比赛吧',
						content: '书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古'

					}
				],
			}
		},
		onLoad() {

		},
		methods: {
			goback() {
				uni.navigateBack()
			},
			adverbtn(event, index) {
				console.log(event, index)
				uni.navigateTo({
					url: "/pages/pagesall/home/adver_detail"
				})
			},
			mycode() {
				uni.navigateTo({
					url: "/pages/pagesall/home/mycode"
				})
			},
		}
	}
</script>

<style>
	.codepage {
		width: 750rpx;
		height: 1624rpx;
		background-color: #EEEEEE;

	}

	.code_titlebox {
		position: relative;
		padding: 30rpx;

	}

	.messImg {
		position: absolute;
		background-color: ;


	}

	.code_title {
		text-align: center;
		font-weight: 500;
		font-size: 36rpx;
		color: #000;
	}

	.adver_content {
		width: 634rpx;
		height: 276rpx;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 16rpx;
	}

	.adver_time {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
	}

	.adver_text1 {
		margin-bottom: 16rpx;
		font-weight: 500;
		font-size: 32rpx;
		color: #000000;
	}

	.adver_text2 {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
	}

	.line {
		width: 100%;
		margin: 28rpx 0 28rpx 0;
	}

	.line img {
		width: 636rpx;
	}

	.adver_btn {
		text-align: center;
		font-weight: 400;
		font-size: 28rpx;
		color: #5791F2;
	}
</style>