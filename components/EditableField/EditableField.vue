<template>
	<view class="input_po">
		<view class="title">{{ title }}</view>
		<input v-if="isEditing" type="text" :placeholder="placeholder" class="input" v-model="inputValue"
			@blur="saveValue" />
		<view v-else @click="startEdit" class="readonly-text">{{ value }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			value: String,
			placeholder: {
				type: String,
				default: '请输入'
			}
		},
		data() {
			return {
				inputValue: this.value,
				isEditing: false
			};
		},
		methods: {
			startEdit() {
				this.isEditing = true;
			},
			saveValue() {
				this.isEditing = false;
				this.$emit('edit', this.inputValue);
			}
		}
	};
</script>

<style>
	.input_po {
		position: relative;
		margin-bottom: 15px;
	}

	.readonly-text {
		padding: 10px;
		border-radius: 8px;
		background-color: #EEEEEE;
		font-size: 14px;
	}

	.input {
		padding: 10px;
		border-radius: 8px;
		background-color: #EEEEEE;
		font-size: 14px;
	}

	.title {
		margin-bottom: 5px;
	}
</style>