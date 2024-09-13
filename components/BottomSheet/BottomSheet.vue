<template>
	<view>
		<!-- 背景遮罩层 -->
		<view v-if="isVisible" class="overlay" @click="close"></view>
		<view :class="['bottom-sheet', { 'is-active': isVisible }]" @touchmove.stop.prevent='moveStop'>
			<view class="content">
				<view class="options">
					<view class="option" v-for="(item, index) in options" :key="index" @click="selectOption(item.text)"
						:style="{ color: fontColor }">
						<image v-if="item.imageSrc" :src="item.imageSrc" class="option-image" />
						<text>{{ item.text }}</text>
					</view>
				</view>
				<button :style="{ color: fontColor }" class="close-button" @click="close">取消</button>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		defineProps,
		defineEmits
	} from 'vue';

	// 定义 props
	const props = defineProps({
		isVisible: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array,
			default: () => []
		},
		fontColor: {
			type: String,
			default: '#000' // 默认字体颜色
		}
	});

	// 定义 emits
	const emit = defineEmits(['update:isVisible', 'optionSelected']);

	// 方法
	const close = () => {
		emit('update:isVisible', false); // 关闭底部栏
	};

	const selectOption = (option) => {
		emit('optionSelected', option); // 触发选项选择事件
		close(); // 选择后关闭底部栏
	};

	const moveStop = () => {}
</script>

<style scoped>
	.bottom-sheet {
		position: fixed;
		bottom: -100%;
		/* 初始隐藏 */
		left: 0;
		right: 0;
		z-index: 1000;
		/* 确保在遮罩层之上 */
		border-radius: 20rpx 20rpx 0 0;
		background-color: #fff;
		transition: bottom 0.3s ease;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
	}

	.bottom-sheet.is-active {
		bottom: 0;
		/* 显示时从底部拉起 */
	}

	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		/* 半透明黑色背景 */
		z-index: 999;
		/* 在底部栏之下 */
	}

	.content {
		background: #EEEEEE;
	}

	.title {
		font-size: 18px;
		font-weight: bold;
	}

	.options {
		background-color: #fff;
	}

	.option {
		margin: 15px;
		padding: 10px;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 36rpx;
		padding-top: 0;
	}

	.option-image {
		width: 48rpx;
		/* 自定义图片宽度 */
		height: 48rpx;
		/* 自定义图片高度 */
		margin-right: 20rpx;
		/* 图片与文本之间的间距 */
	}

	.option:last-child {
		border-bottom: none;
	}


	.close-button {
		margin-top: 16rpx;
		padding: 10px;
		color: #000;
		border: none;
		border-radius: 0px;
		cursor: pointer;
		background: #fff;
	}

	.close-button::after {
		border: none;
	}
</style>