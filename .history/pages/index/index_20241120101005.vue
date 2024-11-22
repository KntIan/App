<template>
  <view class="page">
    <view class="box1">
      <image class="image_2" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4253829e1a377894ca42c94d7edf9cdfd758b5bf890e937604ce7635bfc36c30" />
      <text class="text-group_2">练习书法 习得一手好字</text>
    </view>
    <view class="box2">
      <view class="box_2 flex-col"></view>
      <text class="text2">泽熙书画</text>
    </view>
  </view>

</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  onLoad() {
    // 检查本地存储中是否存在标志位
    const hasViewed = uni.getStorageSync('hasViewedStartupPage');

    // 定义一个标志位以避免重复导航
    let isNavigating = false;

    if (!hasViewed) {
      // 用户第一次进入，设置标志位
      uni.setStorageSync('hasViewedStartupPage', true);

      // 显示启动页的逻辑，例如展示动画等
      this.showStartupPage(); // 自定义函数显示启动页

      // 等待启动页结束后再跳转
      this.startupPageFinished = () => {
        console.log('333跳转到登录页');
        if (!isNavigating) {
          console.log('2222跳转到登录页');
          isNavigating = true; // 设置导航标志
          // 异步跳转到登录页，并添加错误处理
          uni.navigateTo({
            url: "/pages/login/login",
            success: () => {
              console.log('成功跳转到登录页');
            },
            fail: (error) => {
              console.error('跳转失败:', error);
              isNavigating = false; // 在失败时重置标志
            }
          });
        }
      };
    } else {
      console.log('1111跳转到登录页');
      if (!isNavigating) {
        isNavigating = true; // 设置导航标志
        // 如果已经查看过，直接跳转到主页面，并添加错误处理
        uni.navigateTo({
          url: '/pages/login/login', // 跳转到登录页或其他页面
          success: () => {
            console.log('成功跳转到登录页1111');
          },
          fail: (error) => {
            console.error('跳转失败:', error);
            isNavigating = false; // 在失败时重置标志
          }
        });
      }
    }
  },


  methods: {
    showStartupPage() {
      // 这里可以添加展示启动页的逻辑
      // 当启动页展示完成后，调用 this.startupPageFinished()
      setTimeout(() => {
        // 示例：模拟启动页展示完成
        this.startupPageFinished();
      }, 3000); // 假设展示3秒后完成
    }
  },
};
</script>
<style>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10%;
}

.image_2 {
  width: 174px;
  height: 164px;
}

.box2 {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
}

.box_2 {
  border-radius: 4px;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/236b4a513e3f4f5fb13b40084948436c_mergeImage.png);
  width: 44px;
  height: 44px;
}

.text2 {
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  font-family: PangMenZhengDao;
}
</style>