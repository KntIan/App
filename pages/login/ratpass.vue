<template>
	<view class="container">
		<view class="form">
			<view class="textlogin">
				<text>找回密码</text>
			</view>

			<input type="text" placeholder="请输入手机号" class="input" @input="getaccount" />
			<input type="password" placeholder="请确认密码" class="input" @input="getpassword1" />
			<input type="password" placeholder="请在此确认密码" class="input" @input="getpassword2" />
			<view class="button1">
				<input type="text" placeholder="请输入验证码" class="input button2" @input="getaCode" />
				<button class="button3" @click="getIpcode">获取</button>
			</view>
			<button class="login-button" @click="getratlogin">完成</button>

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
				account: '',
				password1: '',
				password2: '',
				code: '',
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
			getaccount(event) {
				this.account = event.detail.value
				console.log(this.account.length)
			},
			getpassword1(event) {
				this.password1 = event.detail.value
			},
			getpassword2(event) {
				this.password2 = event.detail.value
			},

			getaCode(event) {
				this.code = event.detail.value
			},
			getIpcode() {
				if (this.account != '' && this.account && this.account.length == 11) {
					uni.showToast({
						title: '获取成功',
						icon: 'success', // 其他值：'none', 'loading'
						duration: 2000 // 提示持续时间，单位为毫秒
					});
				} else {
					uni.showToast({
						title: '请检查手机号是否正确',
						icon: 'error', // 其他值：'none', 'loading'
						duration: 2000 // 提示持续时间，单位为毫秒
					});
				}
			},
			getratlogin() {
				console.log(this.account, this.password1, this.password2, this.code)
			},
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
		width: 80%;
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
	}

	.textlogin {
		margin-bottom: 24px;
		font-weight: 700;
	}

	.links {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.link {
		color: #555;
		font-size: 12px;
	}

	.footer {
		margin-top: 20px;
		text-align: center;
		font-size: 12px;
		color: #888;
	}

	.button1 {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 30rpx;
	}

	.button2 {
		width: 40%;
		margin-bottom: 0;

	}

	.button3 {
		width: 30%;
		float: right;
		margin-right: 0;
		border-radius: 60rpx;
		font-size: 12px;
		border: 0.5px #555 solid;
	}
</style>