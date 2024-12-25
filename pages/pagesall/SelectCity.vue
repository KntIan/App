<template>
  <view class="container">
<<<<<<< HEAD
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="search-bar">
      <text>选择城市</text>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="请输入城市"
        @input="filterCities"
      />
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="search-bar">
      <text>选择城市</text>
      <input type="text" v-model="searchQuery" placeholder="请输入城市" @input="filterCities" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>

    <view class="current-location">
      <text>当前位置</text>
      <view class="city-tag">湛江市</view>
    </view>

    <view class="hot-cities">
      <text>热门城市</text>
      <view class="city-list">
<<<<<<< HEAD
        <text
          class="city-tag"
          v-for="(city, index) in hotCities"
          :key="index"
          @click="goToCityDetail(city)"
        >
=======
        <text class="city-tag" v-for="(city, index) in hotCities" :key="index" @click="goToCityDetail(city)">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          {{ city }}
        </text>
      </view>
    </view>

<<<<<<< HEAD
    <view
      class="city-list-group"
      v-for="(cities, letter) in sortedCities"
      :key="letter"
    >
      <text>{{ letter }}</text>

      <view
        @click="goToCityDetail(city.name)"
        v-for="(city, index) in cities"
        :key="index"
        class="city"
      >
=======
    <view class="city-list-group" v-for="(cities, letter) in sortedCities" :key="letter">
      <text>{{ letter }}</text>

      <view @click="goToCityDetail(city.name)" v-for="(city, index) in cities" :key="index" class="city">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        {{ city.name }}
      </view>
    </view>

    <!-- 可继续添加更多的城市列表分组 -->
  </view>
<<<<<<< HEAD
=======

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</template>

<script>
export default {
  data() {
    return {
      statusBarHeight: '',
      searchQuery: '',
<<<<<<< HEAD
      hotCities: [
        '北京',
        '上海',
        '广州',
        '深圳',
        '西安',
        '郑州',
        '重庆',
        '武汉',
      ],
      allCities: [
        {
          name: '阿坝',
          pinyin: 'A',
        },
        {
          name: '阿城',
          pinyin: 'A',
        },
        {
          name: '阿克苏',
          pinyin: 'A',
        },
        {
          name: '阿拉善盟',
          pinyin: 'A',
        },
        {
          name: '阿勒泰',
          pinyin: 'A',
        },
        {
          name: '阿里',
          pinyin: 'A',
        },
        {
          name: '北京市',
          pinyin: 'B',
        },
        {
          name: '上海市',
          pinyin: 'S',
        },
        {
          name: '广州市',
          pinyin: 'G',
        },
        {
          name: '深圳市',
          pinyin: 'S',
        },
        {
          name: '西安市',
          pinyin: 'X',
        },
        {
          name: '郑州市',
          pinyin: 'Z',
        },
        // 更多城市...
      ],
      filteredCities: [],
    };
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
=======
      hotCities: ['北京', '上海', '广州', '深圳', '西安', '郑州', '重庆', '武汉'],
      allCities: [{
        name: '阿坝',
        pinyin: 'A'
      },
      {
        name: '阿城',
        pinyin: 'A'
      },
      {
        name: '阿克苏',
        pinyin: 'A'
      },
      {
        name: '阿拉善盟',
        pinyin: 'A'
      },
      {
        name: '阿勒泰',
        pinyin: 'A'
      },
      {
        name: '阿里',
        pinyin: 'A'
      },
      {
        name: '北京市',
        pinyin: 'B'
      },
      {
        name: '上海市',
        pinyin: 'S'
      },
      {
        name: '广州市',
        pinyin: 'G'
      },
      {
        name: '深圳市',
        pinyin: 'S'
      },
      {
        name: '西安市',
        pinyin: 'X'
      },
      {
        name: '郑州市',
        pinyin: 'Z'
      },
        // 更多城市...
      ],
      filteredCities: []
    };
  },
  onLoad() { this.statusBarHeight = getApp().globalData.top; },
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  mounted() {
    this.filteredCities = this.allCities; // 初始化为所有城市
  },
  methods: {
    filterCities() {
<<<<<<< HEAD
      this.filteredCities = this.allCities.filter((city) =>
=======
      this.filteredCities = this.allCities.filter(city =>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        city.name.includes(this.searchQuery)
      );
    },
    goToCityDetail(city) {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      prevPage.updateSelectedCity(city);
      uni.switchTab({
<<<<<<< HEAD
        url: '/pages/pagesall/oper',
      });
    },
=======
        url: "/pages/pagesall/oper"
      });
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  computed: {
    sortedCities() {
      const grouped = {};

<<<<<<< HEAD
      this.filteredCities.forEach((city) => {
=======
      this.filteredCities.forEach(city => {
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        const firstLetter = city.pinyin;
        if (!grouped[firstLetter]) {
          grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(city);
      });

      return grouped;
<<<<<<< HEAD
    },
  },
=======
    }
  }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
};
</script>

<style scoped>
.container {
  padding: 16px;
}

.search-bar text {
  font-size: 48rpx;
  color: #000000;
}

.search-bar input {
  padding: 16rpx;
  background: #eeeeee;
  border-radius: 40rpx;
  font-size: 28rpx;
  color: #999999;
  line-height: 40rpx;
  margin-top: 16rpx;
}

.current-location,
.hot-cities {
  margin-top: 16px;
}

.hot-cities > text:first-child,
.current-location > text:first-child {
  display: inline-block;
  margin-bottom: 24rpx;
}

.city-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15rpx;
}

.city-tag {
  width: 160rpx;
  height: 64rpx;
  background: #eeeeee;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #000000;
  text-align: center;
  line-height: 64rpx;
}

.city-list-group {
  margin-top: 16px;
}

.city {
  padding: 16rpx 0;
  border-bottom: 1rpx solid #eee;
  font-size: 28rpx;
  color: #000;
  padding-top: 28rpx;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
