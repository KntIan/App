<template>
	<view class="homePage">


		<view class="titleHome">


			<view class="nameId">
				<view class="head">
					<img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dc222dae1c45493a96cd7da35e8a1a38_mergeImage.png"
						alt="" />
				</view>
				<view class="name">
					<text class="textname">刘易阳</text>
					<text class="textid">ID:000000</text>
				</view>
				<view class="classID">
					书法一班
				</view>
			</view>
			<view class="buttonImg">
				<view class="btnimg1" @click="btnscan">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714"
						alt="" />
				</view>
				<view class="btnimg2" @click="btnsearch">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1bc2ffa456b6fda7ad06eee0d2a6f3efd0c7b823b9eeef0c186995bff9b22e4e"
						alt="" />
				</view>
				<view class="btnimg3" @click="btnmess">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfb5a4b958665280ae8b1c0018d674845333615a9dc10f846fe95ad308c868f08"
						alt="" />
				</view>
			</view>

		</view>
		<view class="posit">
			<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01"
				alt="" />
			<text class="postext">湛江市-霞山区-京广路校区</text>
		</view>


		<swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true"
			indicator-color="#ddd" indicator-active-color="#333">
			<swiper-item v-for="(item, index) in images" :key="index">
				<image :src="item" class="swiper-image" @click="swiper_click"></image>
			</swiper-item>
		</swiper>
		<view class="showbox">
			<view class="showimg">
				<img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/18d1eafb43df40dd8a2c22c0b95e5326_mergeImage.png"
					alt="" class="showimg1" />
			</view>
			<view class="showtext">
				<text class="text-content">
					鲁迅先生说：“唯有民魂是值得宝贵的，唯有让它发扬起来，中国才能进步！”泽熙书法进行书法教育，正是要使学生从中体验民族的精神与魂魄，引导他们热爱祖国及其文化。研学是换种方式带孩子们去体会中国深厚的文化底蕴研学是换种方式带孩子们去体会中国深厚的文化底蕴研学是换种方式带孩子们去体会中国深厚的文化底蕴</text>
			</view>
		</view>
		<view class="works">
			<text class="worktext">优秀作品</text>
			<view class="worksImgs">
				<view class="worksimgbox" v-for="(item,index) in zuopinimglist " :key="index">
					<img :src="item.img" alt="" />
				</view>

			</view>
		</view>
		<view class="students" @click="linshi">
			<text class="stutext">学员风采</text>
			<view class="stusImgs">
				<view class="stuimgbox" v-for="(item,index) in arrimglist " :key="index">
					<img :src="item.img" alt="" />
				</view>
			</view>
		</view>


		<!-- 活动 -->
		<view class="actiClass">

			<view class="actText">
				<text>活动课</text>
				<text style="font-size: 24rpx; color: #666666;">更多</text>
			</view>
			<view class="actitme" v-for="(item,index) in listdata" :key="index">
				<view class="linetext">

				</view>
				<view class="linetext1">
					{{item.online}}
				</view>
				<view class="techerImg">
					<img :src="item.techerimg" alt="" />
				</view>
				<view class="listindex">
					<view class="actitmeText1">
						{{item.biaoti}}
					</view>
					<view class="actitmeText2">
						{{item.laoshi}}
					</view>
					<view class="actitmeText3">
						开课时间:{{item.star}}-
						{{item.end}}
					</view>
					<view class="actImg">
						<img :src="item.hearimg" alt="" />
						<view class="actTeacher">
							<text>{{item.teachername}}</text>
							<text style="font-size: 20rpx; margin-top: 10rpx;">授课</text>
						</view>
						<view class="acttime">
							<text style="font-size: 24rpx;">距结束还剩:</text>
							<view class="timetextbox">
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.hours}}</text>
								<text style="font-size: 20rpx;background-color:#fff;color: #F53C38;">:</text>
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.minutes}}</text>
								<text style="font-size: 20rpx;background-color:#fff;color: #F53C38;">:</text>
								<text
									style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ item.seconds}}</text>
							</view>

						</view>
					</view>

					<view class="endbaoming">
						<view class="peopers">
							<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a"
								alt="" />
							<view class="peotext" style="font-size: 20rpx;">
								{{item.pers}}人报名
							</view>
							<view class="imgbox">
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

		<!-- 资讯 -->
		<view class="infobox">
			<view class="infoText">
				<text>资讯</text>
				<text style="font-size: 24rpx; color: #666666;">更多</text>
			</view>

			<view class="infolistbox" v-for="(item,index) in infolist" :key="index">
				<view class="infostr">
					<view class="huatibox">
						<img :src="item.titleimg" alt="" />
						<text style="font-size: 32rpx; font-weight: 500;">{{item.title}}</text>
					</view>
					<view class="paddbox">
						<view class="titleText">
							{{item.content}}
						</view>
						<view class="huatibox">
							<img :src="item.timeImg" alt="" />
							<text
								style="font-weight: 400;font-size: 24rpx;color: #666666;font-style: normal;">{{item.infotime}}</text>
						</view>
						<view class="huatibox">
							<img :src="item.ressImg" alt="" />
							<text style="font-weight: 400;font-size: 24rpx;font-style: normal;">
								{{item.inforess}}</text>
						</view>
					</view>



				</view>

				<view class="infoImg">
					<view class="proNum">
						<text style="font-weight: 400;font-size: 24rpx;color: #666666;">{{item.infoNumber}}</text>
						<img :src="item.jiantouimg" alt="" style="width: 8rpx;height: 16rpx;" />
					</view>
					<view class="proImg">
						<img :src="item.infoImg" alt="" />
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
				images: [
					'/static/img/swiper1.png',
					'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6',
					'/static/img/swiper1.png'
				],
				listdata: [{
					biaoti: "书法综合突破集训营(赠教学视频)",
					laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
					star: "2024.8.14",
					end: "2024.8.16",
					hearimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
					techerimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
					teachername: '李衣裳',
					pers: '2034',
					money: '免费',
					online: '线上',
					hours: '',
					minutes: '',
					seconds: ''

				}, {
					biaoti: "书法综合突破集训营(赠教学视频)",
					laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
					star: "2024.8.14",
					end: "2024.8.17",
					hearimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
					techerimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
					teachername: '李衣裳',
					pers: '2034',
					money: '450',
					online: '线下',
					hours: '',
					minutes: '',
					seconds: ''
				}],
				infolist: [{
						title: '坚持练习书法的一百个理由',
						content: '书写的意义每次都能在写作上发挥显现出巨大意义.....',
						titleimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c',
						timeImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
						ressImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01',
						infotime: '2024-06-14',
						inforess: '湛江市-麻章区-东风路校区',
						infoNumber: '10万人已观看',
						infoImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
						jiantouimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e',


					},
					{
						title: '坚持练习书法的五百个理由',
						content: '书写的意义每次都能在写作上发挥显现出巨大意义.....',
						titleimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c',
						timeImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
						ressImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01',
						infotime: '2024-06-23',
						inforess: '湛江市-丰台区-城景路校区',
						infoNumber: '10万人已观看',
						infoImg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
						jiantouimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e',


					}
				],
				arrimglist: [{
						img: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1'
					},
					{
						img: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1'
					},
					{
						img: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1'
					}
				],
				zuopinimglist: [{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png'
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png'
					},
					{
						img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png'
					}
				],
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
			btnscan() {
				// uni.navigateTo({
				// 	url: "/pages/pagesall/home/sacnpage"
				// })
				console.log('扫上了')
				uni.scanCode({

					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					},
				});
			},
			btnsearch() {
				uni.navigateTo({
					url: "/pages/pagesall/home/search"
				})
			},
			btnmess() {
				uni.navigateTo({
					url: "/pages/pagesall/home/message"
				})
			},
			btnsignup() {
				uni.navigateTo({
					url: "/pages/pagesall/home/signUp"
				})
			},
			swiper_click() {
				uni.navigateTo({
					url: "/pages/pagesall/home/game"
				})
			},
			linshi() {
				uni.navigateTo({
					url: "/pages/pagesall/home/chat"
				})
			}
		}
	};
</script>


<style>
	.homePage {
		padding: 15rpx 20rpx 15rpx 20rpx;
	}

	.titleHome {
		display: flex;
		justify-content: space-between;
	}

	.nameId {
		width: 40%;
		display: flex;
		align-items: flex-start;


	}

	.timetextbox {
		display: flex;
		margin-top: 10rpx;
	}

	.timetextbox text {
		display: block;
		background-color: #F53C38;
		margin-right: 4rpx;
		color: #fff;
	}

	.name {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 16rpx;
		margin-right: 16rpx;
	}

	.buttonImg {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.textname {
		font-size: 28rpx;
	}

	.textid {
		font-size: 16rpx;
	}

	.classID {
		font-size: 16rpx;
		padding: 2rpx 12rpx 2rpx 12rpx;
		background-color: #FF9E02;
		color: #fff;
		margin-top: 8rpx;
	}

	.posit {
		display: flex;
		align-items: center;
	}

	.postext {
		font-size: 16rpx;
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

	.showbox {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.showimg {
		width: 212rpx;
		height: 212rpx;
	}

	.showimg1 {
		width: 212rpx;
		height: 212rpx;
	}

	.showtext {
		margin-left: 20rpx;
	}

	.text-content {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: 400;
		font-size: 24rpx;
		color: #000000;
		line-height: 34rpx;
		text-align: left;
		font-style: normal;
	}

	.worksImgs {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.stusImgs {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.stutext {
		margin: 15rpx 0;
		display: block;
	}

	.stuimgbox {
		width: 254rpx;
		height: 254rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbd78fc264dd7a014ef4d8c87f28b0858f0fac59b2a450df23b73c19c048bc5f5) 50% no-repeat;
	}

	.worksimgbox {
		width: 254rpx;
		height: 254rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0e0e71aa4be084e3a16a052095bf6950ed5290cb2c60b5f90b0eb25b21205b9d) 50% no-repeat;
	}


	.worktext {
		margin: 15rpx 0;
		display: block;
	}

	.actText {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15rpx 0;
	}

	.infoText {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 15rpx 0;
	}

	.actitme {
		box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
		margin-top: 16rpx;
		border-radius: 16rpx;
		position: relative;
		background-color: #EEEEEE;
	}

	.techerImg {

		position: absolute;
		right: 0;
		bottom: 15%;
	}

	.techerImg img {
		width: 240rpx;
		height: 350rpx;
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

	.listindex {
		width: 580rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
		border-radius: 16rpx;
		border: 0rpx solid rgba(0, 0, 0, 0.25);
		padding: 28rpx 0rpx 28rpx 30rpx;

	}

	.actitmeText1 {
		font-size: 32rpx;
		font-weight: 500;
	}

	.actitmeText2 {
		font-size: 28rpx;
		color: #333333;
	}

	.actitmeText3 {
		font-size: 24rpx;
		color: #666666;
	}

	.actImg {
		display: flex;
	}

	.actImg img {
		width: 80rpx;
		height: 80rpx;
	}

	.actTeacher {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		font-size: 24rpx;
		margin-left: 20rpx;
		margin-right: 50rpx;
	}

	.acttime {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.imgbox {
		position: relative;
		width: 70rpx;
		height: 30rpx;
	}

	.imgbox img {
		position: absolute;
		top: 0;
		right: 0;
		display: inline-block;
		border-radius: 50%;
		border: 1px solid white;
	}

	.endbaoming {
		width: 636rpx;
		height: 64rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 58rpx;
		background: linear-gradient(90deg, #FFFFFF 0%, #F9DCCA 100%);
	}

	.peopers {
		width: 50%;
		display: flex;
		align-items: center;
	}

	.peotext {
		margin-left: 16rpx;
		margin-right: 16rpx;
	}

	.perbtn {
		width: 50%;
		position: relative;
	}

	.actitmeText1 {
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
		cursor: pointer;
	}

	.infostr {
		width: 70%;
	}

	.infoImg {}

	.infolistbox {
		display: flex;
		justify-content: space-between;
	}


	.paddbox {
		padding: 28rpx 40rpx 36rpx 40rpx;
	}

	.titleText {
		width: 90%;
		font-size: 28rpx;
		font-weight: 400;
		margin-bottom: 28rpx;
	}

	.huatibox {
		display: flex;
		align-items: center;
	}

	.proImg {
		width: 192rpx;
		height: 176rpx;
		border-radius: 8rpx;
		margin-top: 38rpx;
		margin-bottom: 34rpx;
	}


	.proImg img {
		width: 192rpx;
		height: 176rpx;
		border-radius: 8rpx;
	}

	.proNum {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>