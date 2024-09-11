<template>
	<view class="code_titlebox">
		<view class="code_title">
			课程
		</view>
	</view>
	<view class="game_time">
		<text style="font-weight: 500;font-size: 36rpx;color: #000000;">活动时间安排</text>
	</view>

	<timeline>
		<view class="line_list" v-for="(item, index) in infolist" :key="index">
			<timelineItem class="list_box_cour" :leftTime="item.title" color="#5791F2">
				<view class=" tips"
					style="height: 134rpx;font-weight: 500;font-size: 28rpx;color: #000000; margin-left: 20rpx;">
					主讲：{{item.teach}}
				</view>
				<view class="class_room">
					<view class="" style="font-weight: 400;font-size: 24rpx;color: #000000;">
						教室:{{item.classroom}}
					</view>
					<view class="" style="font-weight: 400;font-size: 24rpx;color: #333333;">
						时间:{{item.start}}-{{item.end}}
					</view>
				</view>
			</timelineItem>
		</view>
	</timeline>




	<view class="game_time">
		<text style="font-weight: 500;font-size: 36rpx;color: #000000;">近期课程</text>
	</view>

	<timeline>
		<view class="line_list" v-for="(item, index) in ti_tea_room_list" :key="index">
			<timelineItem class="list_box_cour" :leftTime="item.title" :color="item.color"
				style="font-weight: 600;font-size: 28rpx;color: #000000;">
				<view class="tips" style="height: 154rpx;font-weight: 500;font-size: 28rpx;color: #000000;">
					主讲：{{item.teach}}</view>
				<view class="class_room">
					<view class="" style="font-weight: 400;color: #000000;">
						教室:{{item.classroom}}
					</view>
					<view class="" style="font-weight: 400;font-size: 24rpx;color: #333333;">
						时间:{{item.start}}-{{item.end}}
					</view>
				</view>
				<view class="list_btn" :style="{ backgroundColor: item.color }" @click="btn_study">
					{{item.status}}
				</view>
			</timelineItem>
		</view>
	</timeline>
	<view class="infobox"></view>
</template>

<script>
	import timeline from '../../components/chenbin-timeline/timeLine.vue';
	import timelineItem from '../../components/chenbin-timeline/timelineItem.vue';

	export default {
		components: {
			timeline,
			timelineItem
		},
		data() {
			return {
				infolist: [{
						title: "硬币书法“三点水”书写的意义",
						teach: '王老师',
						classroom: '文苑3楼102',
						start: '10:00',
						end: '10:30',
						color: '#5791F2'
					},
					// 确保每个对象都有 title 属性
					{
						title: "另一个课程名称",
						teach: '李老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						color: '#5791F2'
					}
				],
				ti_tea_room_list: [{
						title: "硬币书法“三点水”书写的意义",
						teach: '王老师',
						classroom: '文苑3楼102',
						start: '10:00',
						end: '10:30',
						status: '作业已完成',
						color: '#666666'
					},
					// 确保每个对象都有 title 属性
					{
						title: "硬币书法“三点水”书写的意义",
						teach: '张老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						status: '写作业',
						color: '#5791F2'
					},
					// 确保每个对象都有 title 属性
					{
						title: "硬币书法“三点水”书写的意义",
						teach: '张老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						status: '写作业',
						color: '#5791F2'
					},
					// 确保每个对象都有 title 属性
					{
						title: "硬币书法“三点水”书写的意义",
						teach: '张老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						status: '写作业',
						color: '#5791F2'
					},
					// 确保每个对象都有 title 属性
					{
						title: "硬币书法“三点水”书写的意义",
						teach: '张老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						status: '写作业',
						color: '#5791F2'
					},
					// 确保每个对象都有 title 属性
					{
						title: "硬币书法“三点水”书写的意义",
						teach: '张老师',
						classroom: '文苑3楼103',
						start: '11:00',
						end: '11:30',
						status: '写作业',
						color: '#5791F2'
					}
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			};
		},
		methods: {
			goback() {
				uni.navigateBack();
			},
			scroll(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			btn_study() {
				uni.navigateTo({
					url: "/pages/pagesall/course/go_learn"
				})
			}
		}
	};
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

	.swiper-container {
		width: 710rpx;
		height: 320rpx;
		padding: 30rpx 0 30rpx 0;
	}

	.swiper-image {
		width: 710rpx;
		height: 320rpx;
	}

	.timeline {
		padding: 30rpx !important;
	}

	.swibox {
		display: flex;
		justify-content: center;
	}

	.game_time {
		padding: 0 20rpx;
	}

	.tripItem {
		height: 140rpx;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
		border-radius: 10px;
		margin-bottom: 30rpx;

		.title {
			font-size: 28rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}

		.tips {
			font-weight: 600;
			font-size: 28rpx;
			color: #000000;
			margin-top: 20rpx;
		}

		.tips {
			font-weight: 600;
			font-size: 24rpx !important;
			color: #333333;
		}
	}

	.line_list {
		position: relative;
	}

	.class_room {
		width: 96%;
		display: flex;
		justify-content: space-between;
		position: absolute;
		left: 5%;
		bottom: 45%;
	}

	.list_btn {
		width: 200rpx;
		height: 52rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 10%;
		right: 0;
		background-color: #5791F2;
		color: #fff;
		border-radius: 10rpx;
	}
</style>