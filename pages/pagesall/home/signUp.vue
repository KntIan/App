<template>
	<view class="homePage">





		<swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true"
			indicator-color="#ddd" indicator-active-color="#333">
			<swiper-item v-for="(item, index) in images" :key="index">
				<image :src="item" class="swiper-image"></image>
			</swiper-item>
		</swiper>





		<!-- 活动 -->
		<view class="actiClass">
			<view class="act_itme" v-for="(item,index) in listdata" :key="index">
				<view class="techer_Img">
					<img :src="item.techerimg" alt="" />
				</view>
				<view class="list_index">
					<view class="actitme_Text1">
						{{item.biaoti}}
					</view>
					<view class="planumber">
						计划人数:
						<text style="font-weight: 600;font-size: 24rpx;color: #000000;">{{item.planum}}人</text>
					</view>
					<view class="quenumber">
						排队人数:
						<text style="font-weight: 600;font-size: 24rpx;color: #000000;">{{item.quenum}}人</text>
					</view>
					<view class="act_Img">
						<img :src="item.hearimg" alt="" />
						<view class="act_Teacher">
							<text>{{item.teachername}}</text>
							<text style="font-size: 20rpx; margin-top: 10rpx;">授课</text>
						</view>
						<view class="act_time">
							<text style="font-size: 24rpx;">距结束还剩:</text>
							<view class="time_textbox">
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.hours}}</text>
								<text style="font-size: 20rpx;background-color	:#fff;color: #F53C38;">:</text>
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.minutes}}</text>
								<text style="font-size: 20rpx;background-color:#fff;color: #F53C38;">:</text>
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.seconds}}</text>
							</view>

						</view>
					</view>

					<view class="end_baoming">
						<view class="peo_pers">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a"
								alt="" />
							<view class="peo_text" style="font-size: 20rpx;">
								{{item.pers}}人报名
							</view>
							<view class="img_box">
								<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3"
									alt="" style="right: 0rpx;z-index: 10;" />
								<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3"
									alt="" style="right: 20rpx;z-index: 9;" />
								<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3"
									alt="" style="right: 40rpx;z-index: 8;" />
							</view>
						</view>
						<view class="perbtn">
							<view class="permoney">
								{{item.money=="免费"?'免费':'￥'+item.money}}
							</view>
							<view class="gobtn" @click="btnsignup">立即报名</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="eventDetails">
			<view class="detaTitle">
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng771a065a39e551cb80b0755732dcaf20cc3ae52e9d4ee72c3e9f6c9d414f07cb"
					alt="" />
				<text class="detaText">活动详情</text>
			</view>
			<view class="detaxiangqing">
				书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，
				本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区。
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				images: [
					'/static/img/swiper1.png',
					'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6',
					'/static/img/swiper1.png'
				],
				listdata: [{
					biaoti: "书法综合突破集训营(赠教学视频)",
					laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
					star: "2024.8.14",
					end: "2024.8.18",
					hearimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
					techerimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
					teachername: '李衣裳',
					pers: '2034',
					money: '免费',
					online: '线上',
					hours: '',
					minutes: '',
					seconds: '',
					planum: '26000',
					quenum: '15999'
				}],
				intervalId: null // 保存计时器ID
			};
		},
		onLoad() {
			this.startCountdown(); // 开始倒计时
		},
		onUnload() {
			this.stopCountdown(); // 页面卸载时停止倒计时
		},
		methods: {
			formatTime(value) {
				// 确保时间总是两位数
				return value.toString().padStart(2, '0');
			},
			updateCountdown() {
				this.listdata.forEach((e, index) => {
					let now = new Date();
					let end = new Date(e.end);
					let timeDiff = end - now;

					if (timeDiff > 0) {
						let totalSeconds = Math.floor(timeDiff / 1000);
						let hours = Math.floor(totalSeconds / 3600);
						let minutes = Math.floor((totalSeconds % 3600) / 60);
						let seconds = totalSeconds % 60;

						// 格式化小时、分钟和秒
						this.listdata[index].hours = this.formatTime(hours);
						this.listdata[index].minutes = this.formatTime(minutes);
						this.listdata[index].seconds = this.formatTime(seconds);
					} else {
						// 倒计时结束，设置为 00:00:00
						this.listdata[index].hours = '00';
						this.listdata[index].minutes = '00';
						this.listdata[index].seconds = '00';
					}
				});
			},
			startCountdown() {
				this.updateCountdown(); // 初始化
				this.intervalId = setInterval(this.updateCountdown, 1000); // 每秒更新一次
			},
			stopCountdown() {
				if (this.intervalId) {
					clearInterval(this.intervalId); // 停止计时器
					this.intervalId = null;
				}
			},
			btnsignup() {

			},
		}
	};
</script>


<style>
	.homePage {
		padding: 15rpx 20rpx 15rpx 20rpx;
	}

	.time_textbox {
		display: flex;
		margin-top: 10rpx;
	}

	.time_textbox text {
		display: block;
		background-color: #F53C38;
		margin-right: 4rpx;
		color: #fff;
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




	.act_itme {

		margin-top: 16rpx;
		border-radius: 16rpx;
		position: relative;

	}

	.techer_Img {

		position: absolute;
		right: 5%;
		bottom: 30%;
	}

	.techer_Img img {
		width: 192rpx;
		height: 176rpx;
		border-radius: 8rpx;
	}

	.linetext {
		background-color: #FF9E02;
		width: 80rpx;
		height: 80rpx;
		position: absolute;
		top: 0;
		right: 0;
		clip-path: polygon(0 0, 100% 100%, 100% 0);
		border-radius: 0 20rpx 0 0;

	}

	.linetext1 {
		position: absolute;
		top: 0;
		right: 0;
		z-index: 4;
		color: #fff;
		transform: rotate(45deg);
		transform-origin: 0 50%;
		font-size: 20rpx;
	}

	.list_index {
		width: 580rpx;
		background: #FFFFFF;

		border-radius: 16rpx;
		border: 0rpx solid rgba(0, 0, 0, 0.25);
		padding: 28rpx 0rpx 28rpx 30rpx;

	}

	.actitme_Text1 {

		font-weight: 800;
		font-size: 36rpx;
		color: #000000;
	}

	.actitmeText2 {
		font-size: 28rpx;
		color: #333333;
	}

	.actitmeText3 {
		font-size: 24rpx;
		color: #666666;
	}

	.act_Img {
		display: flex;
	}

	.act_Img img {
		width: 80rpx;
		height: 80rpx;
	}

	.act_Teacher {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 50rpx;
	}

	.act_time {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.img_box {
		position: relative;
		width: 70rpx;
		height: 30rpx;
	}

	.img_box img {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid white;
	}

	.end_baoming {
		width: 636rpx;
		height: 64rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 38rpx;
		background: linear-gradient(90deg, #FFFFFF 0%, #F9DCCA 100%);
	}

	.peo_pers {
		width: 50%;
		display: flex;
		align-items: center;
	}

	.peo_text {
		margin-left: 16rpx;
		margin-right: 16rpx;
	}

	.perbtn {
		width: 50%;
		position: relative;
	}

	.actitme_Text1 {
		padding-top: 12rpx;
		padding-bottom: 8rpx;
	}

	.actitmeText3 {
		padding-top: 16rpx;
		padding-bottom: 28rpx;
	}

	.permoney {
		color: #F53C38;
		font-size: 28rpx;
	}

	.gobtn {
		width: 232rpx;
		height: 80rpx;
		background: #FF9E02;
		border-radius: 0rpx 200rpx 200rpx 50rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: -60%;
		right: -5%;
		transform: skewX(-15deg);
	}

	.planumber {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
		padding: 22rpx 0 12rpx 0;
	}

	.quenumber {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
		padding: 0rpx 0 12rpx 0;
	}

	.detaTitle {
		display: flex;
		align-items: center;
	}

	.detaText {
		margin-left: 12rpx;
		font-weight: 500;
		font-size: 32rpx;
		color: #000000;
	}

	.eventDetails {

		background: #FFFFFF;
		border-radius: 16rpx;
		border: 0rpx solid rgba(0, 0, 0, 0.25);
		padding: 28rpx 0rpx 28rpx 30rpx;
	}

	.detaxiangqing {
		font-weight: 400;
		font-size: 24rpx;
		color: #666666;
		text-indent: 2em;
		padding-top: 16rpx;
		line-height: 34rpx;
	}
</style>