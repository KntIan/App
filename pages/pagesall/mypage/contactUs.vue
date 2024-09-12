<template>
	<view class="container">
		<view class="content">
			<text>客服电话</text>
			<text class="phone-number" @click="showActionSheet">400-000-0000</text>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goBack() {
				uni.navigateBack();
			},
			showActionSheet() {
				uni.showActionSheet({
					itemColor: '#007aff',
					itemList: ['呼叫 400-000-0000'],
					success: (res) => {
						if (res.tapIndex === 0) {
							this.makePhoneCall();
						}
					}
				});
			},
			makePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '4000000000',
					success: () => {
						console.log("拨打电话成功");
					},
					fail: () => {
						console.log("拨打电话失败");
					}
				});
			}
		}
	}
</script>

<style>
	.container {
		background-color: #fff;
		padding: 28rpx;
		font-size: 28rpx;
		line-height: 80rpx;
		padding-top: 0;
	}

	.header {
		padding: 20px;
		display: flex;
		align-items: center;
	}

	.back {
		font-size: 30px;
		margin-right: 10px;
	}

	.title {
		font-size: 18px;
		flex-grow: 1;
		text-align: center;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #eee;
	}

	.phone-number {
		color: blue;
	}
</style>