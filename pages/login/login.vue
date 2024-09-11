<template>
	<view class="container">
		<view class="form">
			<view class="textlogin">
				<text>登录/注册</text>
			</view>

			<input type="text" placeholder="账号" class="input" @input="getadmin" />
			<input type="password" placeholder="密码" class="input" @input="getpass" />
			<button class="login-button" @click="getlogin">登录</button>
			<view class="links">
				<text class="link" @click="retPass">找回密码</text>
				<text class="link" @click="regiSter">注册</text>
			</view>
		</view>

		<view class="footer">

			<checkbox-group @change="radiogrp">
				<label class="radio">
					<checkbox value="true" activeBorderColor="#000" activeBackgroundColor="#fff" iconColor="#000"
						style="transform: scale(0.5)" />
					点击登录，即表示同意《隐私政策》和《服务条款》
				</label>
			</checkbox-group>

			<text></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				constants: {},
				admin: '',
				pass: '',
				adminlist: {},
				radio: false,
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
			regiSter() {
				uni.navigateTo({
					url: "/pages/login/register"
				})
			},
			radiogrp(event) {
				console.log(event)
				this.radio = event.detail.value
				console.log(this.radio[0])
			},
			getadmin(event) {
				console.log(event.detail.value)
				this.admin = event.detail.value
			},
			getpass(event) {
				console.log(event.detail.value)
				this.pass = event.detail.value
			},
			async getlogin() {
				this.adminlist = {
					admin: this.admin,
					pass: this.pass
				}
				if (this.radio == false) {
					uni.showToast({
						title: '请勾选同意协议',
						icon: 'error', // 其他值：'none', 'loading'
						duration: 2000 // 提示持续时间，单位为毫秒
					});
				} else if (this.radio[0] == 'true') {
					console.log('111')
					uni.showToast({
						title: '登录成功',
						icon: 'success', // 其他值：'none', 'loading'
						duration: 2000 // 提示持续时间，单位为毫秒
					});
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/pagesall/home'
						})
					}, 1500)

				}
				console.log(this.adminlist)
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

	.radio {
		display: flex;
		align-items: center;
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

	uni-radio {
		-webkit-tap-highlight-color: transparent;
		display: inline-block;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.link {
		color: #555;
		font-size: 12px;
	}

	.uni-checkbox-wrapper .uni-checkbox-input {
		-webkit-appearance: none;
		appearance: none;
		margin-right: 5px;
		outline: 0;
		border: 1px solid #d1d1d1;
		background-color: #ffffff;
		border-radius: 50% !important;
		width: 24px !important;
		height: 24px !important;
		position: relative;

	}

	.footer {
		margin-top: 20px;
		text-align: center;
		font-size: 12px;
		color: #888;
	}
</style>