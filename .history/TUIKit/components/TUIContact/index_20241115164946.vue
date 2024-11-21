<template>
  <view>
    <SelectFriend v-if="isShowSelectFriend" />
    <div v-else-if="isShowContactList" :class="['tui-contact', !isPC && 'tui-contact-h5']">
      <div :class="['tui-contact-left', !isPC && 'tui-contact-h5-left']">
        <ContactSearch />
        <ContactList :class="['tui-contact-left-list', !isPC && 'tui-contact-h5-left-list']" />
      </div>
      <!-- <div v-if="isShowContactInfo" :class="['tui-contact-right', !isPC && 'tui-contact-h5-right']">
        <ContactInfo @switchConversation="switchConversation" />
      </div> -->

      <div v-if="isShowContactInfo" :class="['tui-contact-right', !isPC && 'tui-contact-h5-right']">
        <ContactInfo @switchConversation="switchConversation" />
      </div>
    </div>

    <!-- <button v-for="item in contactInfoButtonList" :key="item.key" :class="[
          'tui-contact-info-button-item',
          !isPC && 'tui-contact-info-h5-button-item',
          item.type === CONTACT_INFO_BUTTON_TYPE.CANCEL
            ? `tui-contact-info-button-item-cancel`
            : `tui-contact-info-button-item-submit`,
        ]" @click="onContactInfoButtonClicked(item)">
      {{ TUITranslateService.t(`TUIContact.${item.label}`) }}
    </button> -->
    <!-- <TabBar :tabs="tabs" :currentIndex="currentTabIndex" @tab-selected="onTabSelected" /> -->
  </view>

</template>
<script lang="ts" setup>
import { TUIStore, StoreName } from "@tencentcloud/chat-uikit-engine";
import { TUIGlobal } from "@tencentcloud/universal-api";
import { ref, watchEffect } from "vue";
import { isPC, isUniFrameWork } from "../../utils/env";

import SelectFriend from "./select-friend/index.vue";
import ContactSearch from "./contact-search/index.vue";
import ContactList from "./contact-list/index.vue";
import ContactInfo from "./contact-info/index.vue";

import TabBar from "../tabbar/tabbar";

const emits = defineEmits(["switchConversation"]);

const props = defineProps({
  // web/h5 single page application display format, uniapp please ignore
  displayType: {
    type: String,
    default: "contactList", // "contactList" /  "selectFriend"
    require: false,
  },
});

const displayTypeRef = ref<string>(props.displayType || "contactList");
const isShowSelectFriend = ref(false);
const isShowContactList = ref(true);
const isShowContactInfo = ref(true);
const currentTabIndex = ref(1);
const tabs = ref([
  { label: "消息", icon: "/static/message.png" },
  { label: "通讯录", icon: "/static/profile-selected.png" },
  // { label: "设置", icon: "/path/to/icon3.png" },
]);
// 处理选项卡选择
const onTabSelected = (index) => {
  currentTabIndex.value = index;
  if (index === 0) {
    // 通讯录 Tab 的索引为 1
    TUIGlobal?.navigateTo({
      url: "/TUIKit/components/TUIConversation/index",
    });
  }
};

watchEffect(() => {
  isShowContactList.value = props?.displayType !== "selectFriend";
});

TUIStore.watch(StoreName.CUSTOM, {
  isShowSelectFriendComponent: (data: any) => {
    if (!isUniFrameWork && props?.displayType === "selectFriend") {
      isShowSelectFriend.value = data;
      isShowContactList.value = false;
      return;
    }
    if (data) {
      isShowSelectFriend.value = true;
      if (isUniFrameWork) {
        displayTypeRef.value = "selectFriend";
        TUIGlobal?.hideTabBar();
      }
    } else {
      isShowSelectFriend.value = false;
      if (isUniFrameWork) {
        displayTypeRef.value = props.displayType;
        TUIGlobal?.showTabBar()?.catch(() => {
          /* ignore */
        });
      }
    }
  },
  currentContactInfo: (contactInfo: any) => {
    isShowContactInfo.value =
      isPC ||
      (contactInfo &&
        typeof contactInfo === "object" &&
        Object.keys(contactInfo)?.length > 0);
  },
});

const switchConversation = (data: any) => {
  isUniFrameWork &&
    TUIGlobal?.navigateTo({
      url: "/TUIKit/components/TUIChat/index",
    });
  emits("switchConversation", data);
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/common";

.tui-contact {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;

  &-left {
    min-width: 285px;
    flex: 0 0 24%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  &-right {
    border-left: 1px solid #f4f5f9;
    flex: 1;
    overflow: hidden;
  }
}

.tui-contact-h5 {
  position: relative;

  &-left,
  &-right {
    width: 100%;
    height: 100%;
    flex: 1;
  }

  &-right {
    position: absolute;
    z-index: 100;
  }

  &-left {
    &-list {
      overflow-y: auto;
    }
  }
}
</style>