<template>
	<uv-datetime-picker ref="datetimePicker" v-model="value" mode="date" :minDate="946695809000" @confirm="confirm">
	</uv-datetime-picker>
	<view class="container">
		<view class="form">
			<view class="textTitle">
				<view class="title1">
					欢迎来到泽曦书画
				</view>
				<view class="title2">
					请选择性别年龄，校区班级推荐人
				</view>
			</view>
			<view class="textlogin">
				<view class="img1" @click="roun">
					<img v-if="seen" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng37fd122e911efbf5a6c9a5907384d8c8ed78d7e5b8bc971416d09e8e914fe7a3
				" alt="" />
					<img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316
					" alt="" />
					<view class="imgtext1">
						男
					</view>
				</view>
				<view class="img2" @click="soun">
					<img v-if="loun"
						src='https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7b155ca914f20d43e6b0d5df21fd1967a8aaf33858c8ee8f6f7906c8af300ed'
						alt="" />
					<img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316
					" alt="" />
					<view class="imgtext1">
						女
					</view>
				</view>
			</view>
			<view class="title">姓名</view>
			<input type="text" placeholder="输入姓名" class="input" @input="getname" />
			<view class="title">年龄</view>
			<input type="number" placeholder="例如:12" class="input" @input="getold" />
			<view class="title">出生年月日</view>
			<view class="image-text_1 flex-row justify-between input" @click="open">
				<text>{{dateYear}}</text>
			</view>
			<view class="title">校区</view>
			<view class="input">
				<picker @change="giftPickerChange($event,giftArray)" :value="index" :range="giftArray"
					:range-key="'gift'">
					<view class="uni-input text-group_2">{{giftmoren}}</view>
				</picker>
			</view>

			<view class="title">班级</view>
			<view class="uni-list-cell-db input">
				<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="multiIndex"
					:range="multiArray">
					<view class="uni-input">
						{{multiArray[1][multiIndex[1]]}}
					</view>
				</picker>
			</view>
			<view class="title">推荐人</view>
			<input type="text" placeholder="输入推荐人" class="input" @input="getrefe" />
			<view class="title">手机号</view>
			<input type="text" placeholder="输入手机号" class="input" @input="getiphone" />
			<view class="title">密码</view>
			<input type="text" placeholder="输入密码" class="input" @input="getregpass" />
			<button class="login-button" @click="getlogin">完成</button>

		</view>

		<view class="footer">

		</view>
	</view>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				constants: {},
				name: '',
				old: '',
				refe: '',
				iphone: '',
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
			roun() {
				console.log(this.seen, this.loun)
				if (this.seen == false) {
					this.seen = true
					this.loun = true
				}
				this.gender = '男'
				console.log(this.seen, this.loun)
			},

			soun() {
				console.log(this.seen, this.loun)
				if (this.loun == true) {
					this.seen = false
					this.loun = false
				}
				this.gender = '女'
				console.log(this.seen, this.loun)
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
		font-size: 14px
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
		justify-content: space-around;
		align-items: center;
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