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
        <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8add875eba745c3a7751cefc8b2d793_mergeImage.png" alt="" />
        <view class="head_text" v-for="(item,index) in stu_List" :key="index">
          <view class="text_1">
            {{item.name}}
          </view>
          <view class="text_2">
            ID:{{item.id}}
          </view>
        </view>
      </view>
      <view class="score_box">
        <view class="score_box1">
          <view class="score_text">
            优
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

  <div ref="resultsContainer" class="vertical-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/store';

// 使用状态管理
const store = useStore();

// 定义响应式数据
const stu_List = ref([{
  name: '刘琪琦',
  id: '1008601'
}]);

const score_List = ref([{
  title: '重心',
  score: scores.重心得分,
},
{
  title: '位置',
  score: scores.位置得分,
},
{
  title: '形态',
  score: scores.形态得分,
},
{
  title: '笔画',
  score: scores.笔画得分,
}, {
  title: '大小',
  score: scores.大小得分,
}]);

// 这里可以定义 refs
const resultsContainer = ref(null); // 使用 ref 来获取 DOM 元素

// 在组件挂载后执行
onMounted(() => {
  console.log('resultsContainer:', resultsContainer.value);

  const newElement = document.createElement('div');
  console.log('111:', newElement);
  // 从 store 中获取 resultDivData，并确保它是有效的
  if (store.resultDivData) {
    newElement.appendChild(store.resultDivData)// 根据实际内容决定使用 textContent 或 innerHTML
    console.log('222:', newElement.innerHTML);

    // 提取分数
    const scoreText = newElement.querySelector('.word-detail').textContent;
    const scores = {
      综合得分: null,
      重心得分: null,
      形态得分: null,
      大小得分: null,
      位置得分: null,
      笔画得分: null
    };

    // 使用正则表达式提取分数
    const regex = /(综合得分|重心得分|形态得分|大小得分|位置得分|笔画得分)\s+(\d+)/g;
    let match;
    while ((match = regex.exec(scoreText)) !== null) {
      const scoreType = match[1]; // 得分类型
      const scoreValue = match[2]; // 得分值
      if (scores.hasOwnProperty(scoreType)) {
        scores[scoreType] = scoreValue; // 存储得分
      }
    }

    // 打印提取的分数
    console.log('提取的分数:', scores);
    // 定义评分级别函数
    const getLevel = (score) => {
      if (score >= 80) return 5;  // 80-100 -> 等级5
      if (score >= 60) return 4;  // 60-79 -> 等级4
      if (score >= 40) return 3;  // 40-59 -> 等级3
      if (score >= 20) return 2;  // 20-39 -> 等级2
      return 1;                   // 0-19 -> 等级1
    };

    // 打印提取的分数和等级
    for (const [key, value] of Object.entries(scores)) {
      if (value !== null) {
        const level = getLevel(value); // 获取等级
        console.log(`${key}: ${value}, 等级: ${level}`);
      }
    }
    score_List.value.forEach(item => {
      const score = scoreMap[item.title];
      if (score !== undefined) {
        item.score = getLevel(score); // 将等级赋值给对应的项
      }
    });
  }

  // 确保 resultsContainer 存在
  if (resultsContainer.value) {
    resultsContainer.value.appendChild(newElement);
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