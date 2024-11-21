<template>
  <view class="input-container">
    <!-- <input :placeholder="placeholder" :disabled="isDisabled" class="custom-input" v-model="currentValue" @input="updateValue" /> -->
    <uni-easyinput class="custom-input" :type="inputType" v-model="currentValue" :disabled="isDisabled" :placeholder="placeholder" @input="updateValue"></uni-easyinput>
    <image class="icon_1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f" style="width: 28rpx; height: 28rpx;" @click="enableInput" />
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
    type: {  // 新增 type 属性
      type: String,
      default: 'text', // 默认设置为 
    },
  },
  setup(props, {
    emit
  }) {
    const isDisabled = ref(props.disabled);
    const currentValue = ref(props.modelValue);
    // 添加 inputType，以保持与 props.type 同步
    const inputType = ref(props.type);
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
    // 监视 type 属性的变化
    watch(
      () => props.type,
      (newType) => {
        inputType.value = newType; // 同步更新 inputType
      }
    );

    return {
      isDisabled,
      currentValue,
      updateValue,
      enableInput,
      inputType
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
  background-color: #eeeeee;
  font-size: 14px;
  width: 100%;
}

.icon_1 {
  position: absolute;
  top: 26rpx;
  right: 36rpx;
}
</style>