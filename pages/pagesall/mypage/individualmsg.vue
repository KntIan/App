<template>
  <view class="indmsg">
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="msg_Title">
      <view class="msgImg" @click="ind_goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="msg_text"> 刘易阳信息 </view>
    </view>

    <view class="bg_left"></view>
    <view class="bg_right"></view>
    <view class="bg_center"></view>

    <view class="indivimsg_name">
      <img :src="indivimsg_heard" alt="" />
      <view class="msg_text1" style="margin-top: 8rpx">
        {{ indivimsg_name }}
      </view>
      <view class="msg_text2" style="margin-top: 8rpx">
        ID:{{ indivimsg_id }}
      </view>
      <view class="textflex">
        <view class="msgtext3"> 书法一班 </view>
        <view class="msgtext4"> 11岁 </view>
      </view>
    </view>

    <view class="worksmsg">
      <uni-section title="实心标签" type="line">
        <view class="uni-padding-wrap uni-common-mt">
          <uni-segmented-control
            class="uni_center"
            style="border-bottom: 0.5rpx solid #eeeeee"
            :current="current"
            :values="items"
            active-color="#5791F2"
            styleType="text"
            @clickItem="onClickItem"
          />
          <view class="indi_oper" v-if="current === 0"> </view>
          <view class="indi_oper1" v-if="current === 1"> </view>
        </view>
      </uni-section>
      <view class="AIlist" v-if="current === 0">
        <myhistList :histList="AIhistList" />
      </view>

      <view class="AIlist" v-if="current !== 0">
        <myhistList :histList="teacherhistList" />
      </view>
    </view>
  </view>
</template>

<script>
import myhistList from './compontents/histList.vue';
export default {
  components: {
    myhistList,
  },
  data() {
    return {
      statusBarHeight: '',
      indivimsg_heard:
        'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/26483a4d5dc54c63ae2af524e81ebb4d_mergeImage.png',
      indivimsg_name: '刘易阳-田园路校区',
      indivimsg_id: '0000002',
      current: 0,
      items: ['AI检查', '老师审阅'],
      AIhistList: [
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '书法练习第一课',
          date: '2024-07-1',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '书法练习第二课',
          date: '2024-07-1',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '书法练习第三课',
          date: '2024-07-1',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '书法练习第四课',
          date: '2024-07-1',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '书法练习第一课',
          date: '2024-07-1',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '书法练习第二课',
          date: '2024-07-1',
        },
      ],
      teacherhistList: [
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
        {
          img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
          title: '有进步继续努力',
          teacherName: '王老师',
        },
      ],
    };
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    ind_goback() {
      uni.navigateBack();
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
  },
};
</script>

<style>
.indmsg {
  background: linear-gradient(180deg, #e5eafc 0%, #f4f5f9 48%, #f4f5f9 100%);
}

.bg_left {
  width: 250rpx;
  height: 424rpx;
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngec785e609e1d528e62d2b34a33cf177d7d25a89a759f7b364a3c51049b070b92)
    100% no-repeat;
  background-size: 100% 100%;
}

.bg_right {
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng535865731072ef451bfdfd4b5c84d1229aff109062f3a9105a1ec7a62a15a02a)
    100% no-repeat;
  width: 250rpx;
  height: 424rpx;
  position: absolute;
  top: 136rpx;
  right: 0;
  background-size: 100% 100%;
}

.bg_center {
  width: 50rpx;
  height: 50rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf29ca8122eaff0fe2a3b8f7a7f15bea056d87f410d157b01f69a1475983ef885)
    100% no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 366rpx;
  left: 210rpx;
}

.msg_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.msg_text {
  width: 100%;
  text-align: center;
}

.indivimsg_name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28rpx;
  margin-bottom: 48rpx;
}

.indivimsg_name img {
  width: 176rpx;
  height: 176rpx;
}

.msg_text1 {
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
}

.msg_text2 {
  font-weight: 400;
  font-size: 24rpx;
  color: #000000;
}

.textflex {
  display: flex;
  margin-top: 16rpx;
}

.msgtext3 {
  padding: 2rpx 8rpx 2rpx 8rpx;
  background: #ff9e02;
  border-radius: 4rpx;
  margin-right: 8rpx;
  font-size: 16rpx;
  color: #ffffff;
}

.msgtext4 {
  padding: 2rpx 8rpx 2rpx 8rpx;
  background: #5791f2;
  border-radius: 4rpx;
  margin-right: 8rpx;
  font-size: 16rpx;
  color: #ffffff;
}

.worksmsg {
  border-radius: 32rpx 32rpx 0rpx 0rpx;
  background: #ffffff;
}

.uni-padding-wrap {
  padding: 0rpx 20rpx;
}

.uni-common-mt {
  margin-top: 2rpx;
}

.indi_oper {
  width: 48rpx;
  height: 8rpx;
  background-color: #1d56f9;
  position: absolute;
  top: 41%;
  left: 5.5%;
  border-radius: 30rpx;
}

.indi_oper1 {
  width: 48rpx;
  height: 8rpx;
  background-color: #1d56f9;
  position: absolute;
  top: 41%;
  left: 47%;
  border-radius: 30rpx;
}

.uni_center {
  width: 590rpx;
  display: flex;
}

.segmented-control__item {
  justify-content: left !important;
}

:deep .segmented-control__item--text {
  border-bottom: 0rpx !important;
}
</style>
