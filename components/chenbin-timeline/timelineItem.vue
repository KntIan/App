<template>
  <view class="timelineItem">
    <view class="timeItem">
      <view class="line">
        <view class="out" :style="{ background: color == '' ? '' : color }">
          <view
            class="inner"
            :style="{ background: color == '' ? '' : color }"
          ></view>
        </view>
      </view>
      <view
        class="leftTime"
        @click="handleClick"
        style="
          font-weight: bold;
          font-size: 28rpx;
          color: #000000;
          overflow: hidden;
        "
      >
        {{ leftTime }}
        <view class="leftlist1" v-if="leftlist1 !== ''">
          {{ leftlist1 }}
        </view>

        <view class="leftlist2" v-if="leftlist2 !== ''">
          {{ leftlist2 }}
        </view>

        <view class="leftlist3" v-if="leftlist3 !== ''">
          {{ leftlist3 }}
        </view>
      </view>
      <view
        class="rightContent"
        style="
          text-align: right;
          font-weight: 400;
          font-size: 24rpx;
          color: #333333;
        "
      >
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    id: {
      default: '',
    },
    leftTime: {
      default: '',
    },
    color: {
      default: '',
    },
    leftlist1: {
      default: '',
    },
    leftlist2: {
      default: '',
    },
    leftlist3: {
      default: '',
    },
  },
  data() {
    return {}
  },
  emits: ['tiaozhuan'],
  methods: {
    handleClick(id) {
      console.log('左侧时间被点击')
      this.$emit('tiaozhuan', id)
      console.log('接收到的 id:', this.id)
    },
  },
}
</script>

<style scoped lang="less">
.timelineItem {
  .timeItem {
    display: flex;

    .leftTime {
      width: 320rpx;
      padding: 0 10rpx;
      font-family: PingFangSC-Medium, PingFang SC;
      color: rgba(51, 51, 51, 1);
      margin-right: 10rpx;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
      font-size: 28rpx;
      color: #000000;
      margin-left: 20rpx;
    }

    .line {
      width: 1px;
      background: rgba(204, 204, 204, 1);
      position: relative;

      .out {
        position: absolute;
        top: 4%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18rpx;
        height: 18rpx;
        background: rgba(236, 104, 23, 0.6);
        border-radius: 50%;

        .inner {
          width: 18rpx;
          height: 18rpx;
          background: rgba(236, 104, 23, 1);
          border-radius: 50%;
        }
      }
    }

    .rightContent {
      flex: 1;
      padding: 0 10rpx 40rpx;
      margin-left: 20rpx;
      min-height: 50rpx;
    }
  }
}

.leftlist1 {
  padding: 20rpx 0;
  font-weight: 400;
  font-size: 28rpx;
  color: #333333;
}

.leftlist2 {
  padding: 20rpx 0;
  font-weight: 400;
  font-size: 28rpx;
  color: #333333;
}

.leftlist3 {
  padding: 20rpx 0;
  font-weight: 400;
  font-size: 28rpx;
  color: #333333;
}
</style>
