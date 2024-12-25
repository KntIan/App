<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <!-- <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="code_title"> 赛事比赛 </view>
    </view> -->
    <view class="swibox">
      <swiper
        class="swiper-container"
        indicator-dots="true"
        autoplay="true"
        interval="3000"
        circular="true"
        indicator-color="#ddd"
        indicator-active-color="#333"
      >
        <swiper-item
          v-for="(item, index) in matchDetail.match_banner"
          :key="index"
        >
          <image :src="item.thumb" class="swiper-image"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="game_time">
      <text style="font-weight: 500; font-size: 36rpx; color: #000000"
        >活动时间安排</text
      >
    </view>

    <timeline>
      <timelineItem
        v-for="(item, index) in matchDetail.match_date.data"
        :key="item.id"
        :leftTime="item.title"
        :color="index % 2 === 0 ? '#84F257' : '#F25757'"
      >
        <view class="tips"> {{ item.s_date }}—{{ item.e_date }} </view>
      </timelineItem>
    </timeline>
    <view class="infobox">
      <view
        class="infolistbox"
        v-for="(item, index) in matchDetail.match_news"
        :key="index"
      >
        <view class="infostr">
          <view class="huatibox">
            <!-- <img :src="item.titleimg" alt="" /> -->

            <image
              style="width: 30rpx; height: 30rpx"
              :src="item.titleimg"
              mode="aspectFit"
            />
            <text style="font-size: 32rpx; font-weight: 500">{{
              item.title
            }}</text>
          </view>
          <view class="paddbox">
            <view class="titleText">
              {{ item.description }}
            </view>
            <view class="huatibox">
              <img :src="item.image_input" alt="" />
              <text
                style="
                  font-weight: 400;
                  font-size: 24rpx;
                  color: #666666;
                  font-style: normal;
                  margin-left: 10rpx;
                "
                >{{ item.addtime }}</text
              >
            </view>
          </view>
        </view>

        <view class="infoImg">
          <view class="proImg">
            <!-- <img :src="item.infoImg" alt="" /> -->
            <image
              style="width: 160rpx; height: 160rpx"
              :src="item.thumb"
              mode=""
            />
          </view>
        </view>
      </view>
    </view>

    <view class="event_site">
      <view class="site_title"> 活动现场 </view>

      <view>
        <scroll-view
          class="scroll-view_H"
          scroll-x="true"
          @scroll="scroll"
          scroll-left="120"
          show-scrollbar="false"
        >
          <view
            id="demo1"
            class="scroll-view-item_H uni-bg-red"
            v-for="(item, index) in matchDetail.match_scene"
            :key="index"
            ><img :src="item.thumb" alt="" />
            <view class="img_text">
              {{ item.title }}
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import { useStore } from '@/store'
import { fetchMatchDetail } from '@/utils/api'
import timeline from '../../../components/chenbin-timeline/timeLine.vue'
import timelineItem from '../../../components/chenbin-timeline/timelineItem.vue'
export default {
  components: {
    timeline,
    timelineItem,
  },
  data() {
    return {
      statusBarHeight: '',
      images: [
        '/static/img/swiper1.png',
        'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6',
        '/static/img/swiper1.png',
      ],
      infolist: [
        {
          title: '坚持练习书法的一百个理由',
          content:
            '书法比赛将在2024年7月15号开始本次举办自河南、浙江、广东、山西、湖南...',
          titleimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c',
          timeImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
          ressImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01',
          infotime: '2024-06-14',
          inforess: '湛江市-麻章区-东风路校区',
          infoNumber: '10万人已观看',
          infoImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
          jiantouimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e',
        },
        {
          title: '坚持练习书法的五百个理由',
          content:
            '书法比赛将在2024年7月15号开始本次举办自河南、浙江、广东、山西、湖南...',
          titleimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c',
          timeImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
          ressImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01',
          infotime: '2024-06-23',
          inforess: '湛江市-丰台区-城景路校区',
          infoNumber: '10万人已观看',
          infoImg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
          jiantouimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e',
        },
      ],
      site_imgList: [
        {
          site_img:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png',
          title: '书法家张子豪现场观看指导',
        },
        {
          site_img:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png',
          title: '书法家张子豪现场观看指导',
        },
        {
          site_img:
            'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png',
          title: '书法家张子豪现场观看指导',
        },
      ],
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
      matchDetail: {
        match_date: {
          data: [],
        },
        match_news: [],
        match_scene: {},
        match_banner: [],
      },
      id: null,
    }
  },
  onLoad(options) {
    this.id = options.match_id
    this.statusBarHeight = getApp().globalData.top
  },

  mounted() {
    this.getMatchDetail(this.id)
  },
  methods: {
    async getMatchDetail(id) {
      try {
        const response = await fetchMatchDetail(id) // 调用接口并传入下标
        this.matchDetail = response.items // 将获取到的数据保存到组件状态

        this.matchDetail.match_date.data.sort(
          (a, b) => new Date(a.s_date) - new Date(b.s_date)
        )
        this.matchDetail.match_news = this.matchDetail.match_news.map(
          (item) => ({
            ...item, // 保留原有的属性
            titleimg: item.titleimg || '../../../static/img/jinghao.png',
            image_input:
              item.image_input ||
              'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
          })
        )
        // console.log(this.matchDetail.match_news)
      } catch (error) {
        console.error('请求接口出错:', error)
        uni.showToast({
          title: '获取比赛详情失败',
          icon: 'none',
          duration: 2000,
        })
      }
    },
    goback() {
      uni.navigateBack()
    },

    scroll: function (e) {
      // console.log(e)
      this.old.scrollTop = e.detail.scrollTop
    },
  },
}
</script>

<style scoped>
::v-deep.rightContent {
  padding: 0 10rpx 40rpx 0 !important;
  margin-left: 0 !important;
}
.codepage {
  width: 750rpx;
  height: 1624rpx;
  background-color: #eeeeee;
}

.code_titlebox {
  position: relative;
  padding: 30rpx;
}

.messImg {
  position: absolute;
  /* background-color: ; */
}

.code_title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #000;
}

.swiper-container {
  width: 710rpx;
  height: 320rpx;
  padding: 30rpx 0 30rpx 0;
}

.swiper-image {
  width: 710rpx;
  height: 320rpx;
}

.swibox {
  display: flex;
  justify-content: center;
}

.game_time {
  padding: 0 20rpx;
}

.tripItem {
  height: 140rpx;
  padding: 20rpx 30rpx;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin-bottom: 30rpx;

  .title {
    font-size: 28rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }

  .tips {
    font-size: 22rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin-top: 20rpx;
  }

  .tips {
    font-weight: 400;
    font-size: 24rpx !important;
    color: #333333;
  }
}

.infoText {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15rpx 0;
}

.infolistbox {
  display: flex;
  justify-content: space-between;
  padding: 15rpx;
  padding-right: 30rpx;
  position: relative;
}

.infolistbox::after {
  content: '';
  height: 1px;
  width: 90%;
  background-color: #eee;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}

.infostr {
  width: 70%;
}

.huatibox {
  display: flex;
  align-items: center;
}

.paddbox {
  padding: 10rpx 0rpx 0rpx 40rpx;
}

.titleText {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  margin-bottom: 8rpx;
  display: -webkit-box;
  /* 必须结合下面的属性使用 */
  -webkit-box-orient: vertical;
  /* 设置盒子布局的方向为垂直 */
  -webkit-line-clamp: 2;
  /* 限制显示的行数为2行 */
  overflow: hidden;
  /* 隐藏超出内容 */
  text-overflow: ellipsis;
  /* 使用省略号替代超出的文本 */
  word-break: break-all;
}

.proNum {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site_title {
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  padding: 30rpx 0;
}

.event_site {
  padding: 28rpx;
}

.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}

.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}

.scroll-view-item_H {
  display: inline-block;
  width: 400rpx;
  height: 232rpx;
  margin-left: 10rpx;
}

.scroll-view-item_H img {
  width: 400rpx;
  height: 232rpx;
}

.img_text {
  text-align: center;
  font-weight: 500;
  font-size: 28rpx;
  color: #000000;
}
::v-deep.uni-scroll-view {
  scrollbar-width: none !important;
}
</style>
