<template>
<<<<<<< HEAD
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <TUIContact />
  </view>
</template>

<script>
import TUIContact from '../../../TUIKit/components/TUIContact/index.vue';
=======

  <!-- <view class="btnbox">
    <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0ac4c131284679fa0f7412d62e239e026e1af50accd921fa8c94da8d9d529b26" alt="" class="btns_img" />
    <input type="text" placeholder="请输入搜索ID" class="input1" prefix="search" @input="input_search" />

    <view class="" v-if="btnyes" @click="cancel_lation">
      <text class="btn">取消</text>
    </view>
    <view class="" v-else>
      <text class="btn">搜索</text>
    </view>
  </view> -->
  <view>

    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <TUIContact />
  </view>

  <!-- <view class="friends" v-for="(item,index) in friends_List" :key="index">
		<view class="friendsbox" @click="friendsgoback">
			<view class="friendsbox2">
				<view class="friendsbox_img">
					<img :src="item.head" alt="" />
				</view>

				<view class="friendsinter">
					<view class="friends_text1">
						{{item.name}}
					</view>
					<view class="friends_text2">
						ID:{{item.id}}
					</view>

				</view>
			</view>

			<text class="friends_text3" @click="add_friend">添加好友</text>
		</view>
	</view> -->
</template>

<script>
import TUIContact from '../../../TUIKit/components/TUIContact/index.vue'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

export default {
  components: { TUIContact },
  data() {
    return {
      statusBarHeight: '',
      btnyes: true,
      input_text: '',
<<<<<<< HEAD
      friends_List: [],
    };
  },
  onLoad(options) {
    // const userId = options.user_id
    // console.log('接收到的用户ID：', userId)
=======
      friends_List: [{
        name: '王老师',
        id: '000000',
        head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      },
      {
        name: '王老师',
        id: '000000',
        head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      }
      ]
    }
  },
  onLoad() {
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    input_search(event) {
<<<<<<< HEAD
      console.log(event.detail.value);
      this.input_text = event.detail.value;
      if (this.input_text == '') {
        this.btnyes = true;
      } else if (this.input_text != '') {
        this.btnyes = false;
=======
      console.log(event.detail.value)
      this.input_text = event.detail.value
      if (this.input_text == '') {
        this.btnyes = true
      } else if (this.input_text != '') {
        this.btnyes = false
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      }
    },
    add_friend() {
      uni.navigateTo({
<<<<<<< HEAD
        url: '/pages/pagesall/home/add_friend',
      });
    },
    cancel_lation() {
      uni.navigateBack();
    },
  },
};
=======
        url: "/pages/pagesall/home/add_friend"
      })
    },
    cancel_lation() {
      uni.navigateBack()
    }

  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>

<style>
.btnbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 14rpx;
  margin-bottom: 80rpx;
}

.input1 {
  width: 540rpx;
  height: 80rpx;
  background: #eeeeee;
  border-radius: 40rpx;
  font-weight: 400;
  font-size: 28rpx;
  color: #666666;
  padding-left: 80rpx;
}

.btn {
  font-weight: 400;
  font-size: 28rpx;
  color: #666666;
  margin-left: 20rpx;
}

.btns_img {
  position: absolute;
  left: 10%;
  top: 35%;
}

.friendsbox_img {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.friendsbox {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
}

.friends_text1 {
  font-weight: 500;
  font-size: 28rpx;
  color: #000000;
}

.friends_text2 {
  font-weight: 400;
  font-size: 16rpx;
  color: #000000;
}

.friends_text3 {
  width: 160rpx;
  height: 64rpx;

  background: #5791f2;
  border-radius: 32rpx;
  font-weight: 500;
  font-size: 28rpx;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.friendsbox2 {
  display: flex;
  align-items: center;
}

.friendsinter {
  margin-left: 28rpx;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
