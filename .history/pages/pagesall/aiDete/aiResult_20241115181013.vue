<template>
  <view class="res_box">
    <view class="res_box2">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68" alt="" @click="res_goback" />
      <view class="res_text">
        AI测评结果
      </view>
    </view>

    <view class="res_box3">
      <view class="res_heard">
        <img style="border-radius: 50%;" :src="userInfo.avatar" alt="" />
        <view class="head_text">
          <view class="text_1">
            {{userInfo.nickname}}
          </view>
          <view class="text_2">
            ID:{{userInfo.id}}
          </view>
        </view>
      </view>
      <view class="score_box">
        <view class="score_box1">
          <view class="score_text">
            {{ comprehensiveLevel }}
          </view>
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe293373ca510260bf25cf15905e96d33c640dc3b4be40d673f30a4860f69215" alt="" />
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe293373ca510260bf25cf15905e96d33c640dc3b4be40d673f30a4860f69215" alt="" />
        </view>
        <view class="scoring_box">

          <view class="xingxing1" v-for="(item,index) in score_List" :key="index">
            <view class="xingxing">
              {{item.title}}
            </view>
            <uni-rate :readonly="true" size="20" :value="item.score" />
          </view>

        </view>

      </view>

      <textarea type="text" class="ipt_res" placeholder="  重心写的很棒，注意整体形态，笔画再加长一些，加油！你距离成功仅仅一步之遥，多跟泽曦名师学习，相信可以写的更好！" />

    </view>

  </view>

  <view>
    <canvas ref="myCanvas" canvas-id="myCanvas" id="myCanvas" :style="{ width: '100vw', height: canvasHeight + 'px' }" @tap="handleCanvasClick">
    </canvas>
  </view>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from '@/store';
import { onLoad } from '@dcloudio/uni-app'; // 导入 onLoad 生命周期钩子

// 使用状态管理
const store = useStore();
const userInfo = computed(() => store.userinfo)
// 定义响应式数据
const stu_List = ref([{
  name: '刘琪琦',
  id: '1008601'
}]);

const score_List = ref([{
  title: '重心',
  score: 5,
},
{
  title: '位置',
  score: 4,
},
{
  title: '形态',
  score: 3,
},
{
  title: '笔画',
  score: 2,
}, {
  title: '大小',
  score: 1,
}]);
const resultsContainer = ref(null);
const comprehensiveLevel = ref('');

onMounted(() => {

  // 检查 store 中是否有 resultDiv 对象
  const savedResultDiv = store.resultDivData;

  // 删除 class 为 vertical-container 的节点，并保存内容
  if (savedResultDiv) {
    const verticalContainer = savedResultDiv.querySelector('.vertical-container');

    let scoreText = '';
    if (verticalContainer) {
      scoreText = verticalContainer.textContent; // 保存内容
      // verticalContainer.remove(); // 从 DOM 中移除该节点
      verticalContainer.style.display = 'none';
    }

    // 将获取到的对象插入到 resultsContainer
    if (resultsContainer.value && savedResultDiv) {
      resultsContainer.value.appendChild(savedResultDiv);
    }

    // 使用保存的 scoreText 继续后续操作
    if (scoreText) {
      // 使用正则表达式提取分数
      const scores = {
        卷面分: null,
        重心得分: null,
        形态得分: null,
        大小得分: null,
        位置得分: null,
        笔画得分: null
      };

      const regex = /(卷面分|重心得分|形态得分|大小得分|位置得分|笔画得分)[^\d]*(\d+)/g;
      let match;
      while ((match = regex.exec(scoreText)) !== null) {
        // console.log('匹配到的内容:', match); // 打印每次匹配到的内容
        const scoreType = match[1]; // 得分类型
        const scoreValue = parseInt(match[2], 10); // 将得分值转换为整数
        if (scores.hasOwnProperty(scoreType)) {
          scores[scoreType] = scoreValue; // 存储得分
        }
      }

      // 打印提取的分数
      // console.log('提取的分数:', scores);

      // 定义评分级别函数
      const getComprehensiveLevel = (score) => {
        if (score >= 60) return '优'; // 60分及以上为优
        return '差';                 // 60分以下为差
      };

      if (scores.卷面分 !== null) {
        comprehensiveLevel.value = getComprehensiveLevel(scores.卷面分);
      }

      const getOtherLevel = (score) => {
        if (score >= 80) return 5;  // 80-100 -> 等级5
        if (score >= 60) return 4;  // 60-79 -> 等级4
        if (score >= 40) return 3;  // 40-59 -> 等级3
        if (score >= 20) return 2;  // 20-39 -> 等级2
        return 1;                   // 0-19 -> 等级1
      };

      // 打印提取的分数和等级
      for (const [key, value] of Object.entries(scores)) {
        if (value !== null) {
          let level;
          if (key === '卷面分') {
            level = getComprehensiveLevel(value); // 获取综合得分等级
          } else {
            level = getOtherLevel(value); // 获取其他得分等级
          }
          // console.log(`${key}: ${value}, 等级: ${level}`);
        }
      }

      const scoreMap = {
        '重心': scores.重心得分,
        '位置': scores.位置得分,
        '形态': scores.形态得分,
        '笔画': scores.笔画得分,
        '大小': scores.大小得分,
      };

      score_List.value.forEach(item => {
        const score = scoreMap[item.title];
        if (score !== undefined) {
          item.score = getOtherLevel(score); // 将等级赋值给对应的项
          // console.log(item.title, item.score);
        }
      });
    }
  }

});

// 方法定义
const res_goback = () => {
  uni.navigateBack();
};

const addResult = () => {
  // 示例：添加新的操作
  const resultDiv = document.createElement('div');
  resultDiv.textContent = '新的结果';
  resultsContainer.value.appendChild(resultDiv);
};
</script>



<style>
.res_box {
  width: 750rpx;
  height: 850rpx;
  background-color: rgba(249, 183, 34, 1);
}

.res_box2 {
  position: relative;
  padding: 30rpx;
}

.res_box2 img {
  position: absolute;
  top: 40rpx;
}

.res_text {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #ffffff;
}

.res_box3 {
  width: 638rpx;
  height: 632rpx;
  background: #ffffff;
  border-radius: 16rpx;
  margin-left: 28rpx;
  padding: 28rpx;
  margin-top: 30rpx;
}

.res_heard {
  display: flex;
  align-items: center;
}

.res_heard img {
  width: 144rpx;
  height: 144rpx;
}

.head_text {
  margin-left: 28rpx;
}

.text_2 {
  margin-top: 8rpx;
  font-weight: 400;
  font-size: 24rpx;
  color: #000000;
}

.text_1 {
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
}

.score_text {
  width: 128rpx;
  height: 180rpx;
  overflow-wrap: break-word;
  color: rgba(219, 1, 12, 1);
  font-size: 128rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 180rpx;
}

.score_box1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.score_box {
  display: flex;
  justify-content: space-between;
}

.xingxing1 {
  width: 284rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rpx 0;
}

.xingxing {
  font-weight: 600;
  font-size: 28rpx;
  color: #000000;
  line-height: 48rpx;
  text-align: left;
}

.ipt_res {
  width: 608rpx;
  height: 164rpx;
  background: #f1f1f1;
  border-radius: 8rpx;
  padding: 15rpx;
  margin-top: 15rpx;
  font-size: 28rpx;
}

.score_img {
  width: 870rpx;
  height: 946rpx;
}

.score_line {
  width: 870rpx;
  height: 1000rpx;
  background-color: rgba(249, 183, 34, 1);
}
</style>