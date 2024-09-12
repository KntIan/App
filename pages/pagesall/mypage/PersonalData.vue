<template>
	<uv-datetime-picker ref="datetimePicker" v-model="value" mode="date" :minDate="946695809000" @confirm="confirm">
	</uv-datetime-picker>
	<view class="container">
		<view class="form">
			<view class="textTitle">
				<view class="title1">
					更换头像
				</view>
			</view>
			<view class="textlogin">
				<view class="img1" @click="chooseAvatar">
					<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng37fd122e911efbf5a6c9a5907384d8c8ed78d7e5b8bc971416d09e8e914fe7a3
				" alt="" />
					<!-- <img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316
					" alt="" /> -->
					<view class="imgtext1">
						男
					</view>
				</view>

			</view>
			<view class="title">姓名</view>
			<view class="input_po">

				<custom-input v-model="formData.name" :placeholder="'输入姓名'" :disabled="true" />

			</view>

			<view class="title">年龄</view>
			<view class="input_po">
				<custom-input v-model="formData.age" :placeholder="'例如:12'" :disabled="true" />

			</view>

			<view class="title">出生年月日</view>
			<view class="input_po">
				<view :class="{'disabled':isDisabled}" class="image-text_1 flex-row justify-between input">
					<text>{{dateYear}}</text>
				</view>
				<image class="icon_1" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f"
					style="width: 28rpx;
				height: 28rpx;" @click="!isDisabled?null:open()" />
			</view>

			<view class="title">校区</view>
			<view class="input_po">
				<view class="input">
					<picker :disabled="isDisabled1" @change="giftPickerChange($event,giftArray)" :value="index"
						:range="giftArray" :range-key="'gift'">
						<view class="uni-input text-group_2">{{giftmoren}}</view>
					</picker>
				</view>
				<image class="icon_1" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f"
					style="width: 28rpx;
				height: 28rpx;" @click="togglePicker" />
			</view>


			<view class="title">班级</view>
			<view class="input_po">
				<view class="uni-list-cell-db input">
					<picker :disabled="isDisabled2" mode="multiSelector" @columnchange="bindMultiPickerColumnChange"
						:value="multiIndex" :range="multiArray">
						<view class="uni-input">
							{{multiArray[1][multiIndex[1]]}}
						</view>
					</picker>
				</view>
				<image class="icon_1" referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f"
					style="width: 28rpx;
				height: 28rpx;" @click="togglePickerclass" />
			</view>

			<view class="title">推荐人</view>
			<view class="input_po">
				<custom-input v-model="formData.referrer" :placeholder="'输入推荐人'" :disabled="true" />

			</view>


			<view class="title">手机号</view>
			<view class="input_po">
				<custom-input v-model="formData.phone" :placeholder="'输入手机号'" :disabled="true" />

			</view>

			<view class="title">密码</view>
			<view class="input_po">
				<custom-input v-model="formData.password" :placeholder="'输入密码'" :disabled="true" />

			</view>

			<button class="login-button" @click="getlogin">完成</button>

		</view>

		<view class="footer">

		</view>
	</view>
</template>

<script>
	import CustomInput from '@/components/CustomInput/CustomInput';
	export default {
		components: {
			CustomInput
		},
		name: 'Login',
		data() {
			return {
				formData: {
					name: '张三', // 模拟数据
					age: 25, // 模拟数据
					referrer: '李老师', // 模拟数据
					phone: '13812345678', // 模拟数据
					password: '12315'
				},
				isDisabled1: true,
				isDisabled2: true,
				isDisabled: true,
				constants: {},
				name: '张三',
				old: '12',
				refe: '',
				iphone: '13565165',
				trepass: '',
				dateYear: '年/月/日',
				giftmoren: '选择校区',
				giftindex: 0,
				giftArray: [{
					"gift": '湛江市-麻章区-东风路校区',

				}, {
					"gift": '湛江市-霞山区-京广路校区',

				}, {
					"gift": '湛江市-吴川市-国基路校区',

				}, {
					"gift": '湛江市-雷州市-花园路校区',

				}, {
					"gift": '湛江市-廉江市-迎宾路校区',

				}],
				multiArray: [
					['书法', '绘画'],
					['书法一班', '书法二班', '书法三班', '书法四班', '书法五班', '书法六班'],

				],
				multiIndex: [0, 0, 0],
				seen: true,
				loun: true,
				gender: '',
				refelist: {}
			}
		},
		onLoad() {

		},

		methods: {
			async retPass() {
				await uni.navigateTo({
					url: "/pages/login/ratpass"
				})
			},
			open() {
				this.$refs.datetimePicker.open();
				console.log(this.$refs.datetimePicker)
			},
			getname(event) {
				this.name = event.detail.value
				console.log(this.name)
			},
			getold(event) {
				this.old = event.detail.value
			},
			getrefe(event) {
				this.refe = event.detail.value
			},
			getiphone(event) {
				this.iphone = event.detail.value
			},
			getregpass(event) {
				this.trepass = event.detail.value
			},
			togglePicker() {
				this.isDisabled1 = !this.isDisabled1; // 切换禁用状态

			},
			togglePickerclass() {
				this.isDisabled2 = !this.isDisabled2; // 切换禁用状态

			},
			getlogin() {

				this.refelist = {
					gender: this.gender,
					name: this.name,
					dateYear: this.dateYear,
					giftmoren: this.giftmoren,
					multiArray: this.multiArray[1][this.multiIndex[1]],
					refe: this.refe,
					iphone: this.iphone,
					trepass: this.trepass
				}
				console.log(this.refelist)
			},
			giftPickerChange: function(e, giftArray) {
				console.log('picker发送选择改变，携带值为', e.detail.value)
				let index = e.detail.value;
				this.giftindex = index
				this.giftmoren = giftArray[index].gift
			},
			// 选择头像
			chooseAvatar() {
				uni.showActionSheet({
					itemList: ['拍照', '从相册选择'],
					success: (res) => {
						if (res.tapIndex === 0) {
							// 拍照
							this.takePhoto();
						} else if (res.tapIndex === 1) {
							// 从相册选择
							this.pickImageFromAlbum();
						}
					},
					fail: (err) => {
						console.error(err);
					}
				});
			},
			// 拍照
			takePhoto() {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					success: (res) => {
						this.avatarUrl = res.tempFilePaths[0]; // 更新头像URL为选中的图片
					},
					fail: (error) => {
						console.error('拍照失败:', error);
					}
				});
			},
			// 从相册选择
			pickImageFromAlbum() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
					success: (res) => {
						this.avatarUrl = res.tempFilePaths[0]; // 更新头像URL为选中的图片
					},
					fail: (error) => {
						console.error('选择图片失败:', error);
					}
				});
			},

			bindMultiPickerColumnChange: function(e) {
				console.log('修改的列为：' + e.detail.column + '，值为：' + e.detail.value)
				this.multiIndex[e.detail.column] = e.detail.value
				switch (e.detail.column) {
					case 0: //拖动第1列
						switch (this.multiIndex[0]) {
							case 0:
								this.multiArray[1] = ['书法一班', '书法二班', '书法三班', '书法四班', '书法五班', '书法六班']

								break
							case 1:
								this.multiArray[1] = ['绘画一班', '绘画二班', '绘画三班', '绘画四班', '绘画五班', '绘画六班']

								break
						}
						this.multiIndex.splice(1, 1, 0)
						this.multiIndex.splice(2, 1, 0)
						break



				}
				this.$forceUpdate()
			},
			confirm(e) {
				let date = new Date(e.value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM; //月补0
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d; //天补0
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h; //小时补0
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m; //分钟补0
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s; //秒补0
				let newtime = y + '-' + MM + '-' + d; //年月日
				let newtime2 = y + '.' + MM + '.' + d

				this.dateYear = newtime2
				this.newtime = newtime

			}
		},
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		height: 100vh;
		background-color: #fff;
	}

	.input_po {
		position: relative;

	}

	.icon_1 {
		position: absolute;
		top: 26rpx;
		right: 36rpx;
	}

	.form {
		width: 90%;
	}

	.title {
		margin-bottom: 20rpx;
	}

	.title1 {
		height: 25rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 700;
		font-size: 36rpx;
		color: #000000;
		line-height: 25rpx;
		text-align: left;
		font-style: normal;
	}

	.title2 {
		margin-top: 24rpx;
		height: 17rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		line-height: 17rpx;
		text-align: left;
		font-style: normal;
	}

	.textTitle {
		margin-top: 60rpx;
	}

	.input {
		padding: 10px;
		margin-bottom: 15px;
		border-radius: 50px;
		background-color: #EEEEEE;
		font-size: 14px;

	}

	.login-button {
		width: 100%;
		padding: 2px;
		border-radius: 50px;
		background-color: #666666;
		color: #fff;
		text-align: center;
		font-size: 16px;
		margin-top: 48rpx;
		margin-bottom: 48rpx;
	}

	.textlogin {
		margin-bottom: 24rpx;
		font-weight: 700;
		display: flex;

		margin-top: 24rpx;
	}

	.links {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10rpx;
	}

	.link {
		color: #555;
		font-size: 12rpx;
	}

	.footer {
		margin-top: 20rpx;
		text-align: center;
		color: #888;
	}

	.imgtext1 {
		text-align: center;
		font-size: 28rpx;
		font-weight: 500;
	}

	.img1 {}
</style>