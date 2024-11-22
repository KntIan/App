<template>
	<view class="input-container">
		<input :placeholder="placeholder" :disabled="isDisabled" class="custom-input" v-model="currentValue"
			@input="updateValue" />
		<image class="icon_1" referrerpolicy="no-referrer"
			src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f"
			style="width: 28rpx; height: 28rpx;" @click="enableInput" />
	</view>
</template>

<script>
	import {
		ref,
		watch
	} from 'vue';

	export default {
		props: {
			placeholder: {
				type: String,
				default: '请输入',
			},
			disabled: {
				type: Boolean,
				default: true,
			},
			modelValue: {
				type: String,
				default: '',
			},
		},
		setup(props, {
			emit
		}) {
			const isDisabled = ref(props.disabled);
			const currentValue = ref(props.modelValue);

			const updateValue = () => {
				emit('update:modelValue', currentValue.value);
			};

			const enableInput = () => {
				isDisabled.value = false;
			};

			watch(
				() => props.modelValue,
				(newValue) => {
					currentValue.value = newValue; // Sync with prop value
				}
			);

			watch(
				() => props.disabled,
				(newDisabled) => {
					isDisabled.value = newDisabled; // Sync with prop value
				}
			);

			return {
				isDisabled,
				currentValue,
				updateValue,
				enableInput,
			};
		},
	};
</script>

<style scoped>
	.input-container {
		display: flex;
		align-items: center;
	}

	.custom-input {
		padding: 10px;
		margin-bottom: 15px;
		border-radius: 50px;
		background-color: #EEEEEE;
		font-size: 14px;
		width: 100%;
	}

	.icon_1 {
		position: absolute;
		top: 26rpx;
		right: 36rpx;
	}
</style>