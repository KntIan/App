<template>
  <div :class="['tui-contact-search', !isPC && 'tui-contact-search-h5']">
<<<<<<< HEAD
    <div
      v-if="!isSearching || !isPC"
      :class="[
        'tui-contact-search-header',
        !isPC && 'tui-contact-search-h5-header',
        isSearching && 'tui-contact-searching-h5-header',
      ]"
      @click="changeContactSearchingStatus(true)"
    >
      <div
        :class="[
          'tui-contact-search-header-icon',
          !isPC && 'tui-contact-search-h5-header-icon',
        ]"
        @click.stop="changeContactSearchingStatus(!isSearching)"
      >
        <Icon
          :file="isSearching ? backSVG : addSVG"
          :width="isSearching ? '20px' : '14px'"
          :height="isSearching ? '20px' : '14px'"
        />
      </div>

      <div
        :class="[
          'tui-contact-search-header-title',
          !isPC && 'tui-contact-search-h5-header-title',
        ]"
      >
        {{ TUITranslateService.t('TUIContact.添加好友/群聊') }}
      </div>
    </div>
    <div
      v-if="isSearching"
      :class="[
        'tui-contact-search-main',
        !isPC && 'tui-contact-search-h5-main',
      ]"
    >
      <input
        v-model="searchValue"
        class="tui-contact-search-main-input"
        type="text"
        :placeholder="searchingPlaceholder"
        enterkeyhint="search"
        @keyup.enter="search"
        @blur="search"
        @confirm="search"
      />
=======
    <div v-if="!isSearching || !isPC" :class="[
        'tui-contact-search-header',
        !isPC && 'tui-contact-search-h5-header',
        isSearching && 'tui-contact-searching-h5-header',
      ]" @click="changeContactSearchingStatus(true)">
      <!-- <div :class="[
          'tui-contact-search-header-icon',
          !isPC && 'tui-contact-search-h5-header-icon',
        ]" @click.stop="changeContactSearchingStatus(!isSearching)">
        <Icon :file="isSearching ? backSVG : addSVG" :width="isSearching ? '20px' : '14px'" :height="isSearching ? '20px' : '14px'" />
      </div> -->

      <div :class="[
          'tui-contact-search-header-title',
          !isPC && 'tui-contact-search-h5-header-title',
        ]">
        {{ TUITranslateService.t("TUIContact.添加好友/群聊") }}
      </div>
    </div>
    <div v-if="isSearching" :class="[
        'tui-contact-search-main',
        !isPC && 'tui-contact-search-h5-main',
      ]">
      <input v-model="searchValue" class="tui-contact-search-main-input" type="text" :placeholder="searchingPlaceholder" enterkeyhint="search" @keyup.enter="search" @blur="search" @confirm="search">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      <!-- <div class="tui-contact-search-main-cancel" @click="isSearching = false">
        {{ TUITranslateService.t("搜索") }}
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
<<<<<<< HEAD
import { ref, watch } from 'vue';
=======
import { ref, watch } from "vue";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  TUITranslateService,
  TUIStore,
  StoreName,
<<<<<<< HEAD
} from '@tencentcloud/chat-uikit-engine';
import TUICore, { TUIConstants } from '@tencentcloud/tui-core';
import { TUIGlobal } from '@tencentcloud/universal-api';
import Icon from '../../common/Icon.vue';
import addSVG from '../../../assets/icon/add.svg';
import backSVG from '../../../assets/icon/back.svg';
import { isPC } from '../../../utils/env';
import { debounce } from '../../../utils/lodash';
import { IContactSearchResult } from '../../../interface';
import { checkUserFriend } from '../../../../utils/api';

import { onLoad } from '@dcloudio/uni-app';

const searchingPlaceholder = TUITranslateService.t('TUIContact.输入ID');
const isSearching = ref<boolean>(true);
const searchValue = ref<String>('');
const searchResult = ref<IContactSearchResult>({
  user: {
    label: '联系人',
    list: [],
  },
  group: {
    label: '群聊',
=======
} from "@tencentcloud/chat-uikit-engine";
import TUICore, { TUIConstants } from "@tencentcloud/tui-core";
import { TUIGlobal } from "@tencentcloud/universal-api";
import Icon from "../../common/Icon.vue";
import addSVG from "../../../assets/icon/add.svg";
import backSVG from "../../../assets/icon/back.svg";
import { isPC } from "../../../utils/env";
import { debounce } from "../../../utils/lodash";
import { IContactSearchResult } from "../../../interface";

const searchingPlaceholder = TUITranslateService.t("TUIContact.输入ID");
const isSearching = ref<boolean>(true);
const searchValue = ref<string>("");
const searchResult = ref<IContactSearchResult>({
  user: {
    label: "联系人",
    list: [],
  },
  group: {
    label: "群聊",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    list: [],
  },
});

const changeContactSearchingStatus = debounce(function (status: boolean) {
  isSearching.value = status;
}, 200);

const search = async () => {
  if (!searchValue.value) {
    return;
  }
<<<<<<< HEAD

  let params = {
    user_id: Number(searchValue.value),
  };
  let res = await checkUserFriend(params);
  if (res.code === 1) {
    // 搜索用户
    let num = Number(searchValue.value);
    let searchVal = String(num);
    TUICore.callService({
      serviceName: TUIConstants.TUISearch.SERVICE.NAME,
      method: TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_USER,
      params: {
        userID: searchVal,
      },
    })
      .then((res: any) => {
        console.log(res, '+5+6');
        searchResult.value.user.list = res.data;

        // 在搜索完成之后清除本地存储的 params
        uni.removeStorageSync('params');
      })
      .catch((error: any) => {
        searchResult.value.user.list = [];
        console.warn('search user error', error);
      });

    // 搜索群组
    TUICore.callService({
      serviceName: TUIConstants.TUISearch.SERVICE.NAME,
      method: TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_GROUP,
      params: {
        groupID: searchValue.value,
      },
    })
      .then((res: any) => {
        searchResult.value.group.list = [res.data.group];

        // 在搜索完成之后清除本地存储的 params
        uni.removeStorageSync('params');
      })
      .catch((error: any) => {
        searchResult.value.group.list = [];
        console.warn('search group error', error);
      });
  } else {
    uni.showToast({
      title: res.msg,
      icon: 'none',
      mask: true,
    });
  }
=======
  TUICore.callService({
    serviceName: TUIConstants.TUISearch.SERVICE.NAME,
    method: TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_USER,
    params: {
      userID: searchValue.value,
    },
  })
    .then((res: any) => {
      searchResult.value.user.list = res.data;
    })
    .catch((error: any) => {
      searchResult.value.user.list = [];
      console.warn("search user error", error);
    });
  TUICore.callService({
    serviceName: TUIConstants.TUISearch.SERVICE.NAME,
    method: TUIConstants.TUISearch.SERVICE.METHOD.SEARCH_GROUP,
    params: {
      groupID: searchValue.value,
    },
  })
    .then((res: any) => {
      searchResult.value.group.list = [res.data.group];
    })
    .catch((error: any) => {
      searchResult.value.group.list = [];
      console.warn("search group error", error);
    });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
};
watch(
  () => searchResult.value,
  () => {
    TUIStore.update(
      StoreName.CUSTOM,
<<<<<<< HEAD
      'currentContactSearchResult',
=======
      "currentContactSearchResult",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      searchResult.value
    );
  },
  {
    deep: true,
    immediate: true,
  }
);
watch(
  () => isSearching.value,
  () => {
    TUIStore.update(
      StoreName.CUSTOM,
<<<<<<< HEAD
      'currentContactSearchingStatus',
      isSearching.value
    );
    if (isSearching.value) {
      searchValue.value = '';
=======
      "currentContactSearchingStatus",
      isSearching.value
    );
    if (isSearching.value) {
      searchValue.value = "";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      searchResult.value.user.list = [];
      searchResult.value.group.list = [];
    }
  },
  {
    deep: true,
    immediate: true,
  }
);

TUIGlobal.updateContactSearch = search;
TUIGlobal.closeSearching = () => {
  isSearching.value = false;
};
<<<<<<< HEAD
onLoad(() => {
  const userId = uni.getStorageSync('params')?.user_id; // 获取存储的 user_id
  console.log(userId, typeof userId);
  if (userId) {
    searchValue.value = userId;
    // console.log((searchValue.value = userId)) // 将 user_id 赋值给 searchValue
    search(); // 自动调用搜索
  }
});
=======
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>
<style lang="scss" scoped>
.tui-contact-search {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #f4f5f9;
  flex-direction: column;

  &-header,
  &-main {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-header {
    user-select: none;
    cursor: pointer;

    &-icon {
      padding-right: 10px;
    }

    &-title {
      font-size: 14px;
    }
  }

  &-main {
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;

    &-input {
      flex: 1;
      font-size: 14px;
      border-radius: 5px;
      padding: 7px;
      border: 1px solid #ddd;
    }

    &-input:focus {
      outline: none;
      border: 1px solid #006eff;
    }

    &-cancel {
      padding-left: 10px;
      user-select: none;
      cursor: pointer;
    }
  }

  &-h5 {
    &-header {
      width: 100%;
    }
  }
}

.tui-contact-searching-h5-header {
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;

  .tui-contact-search-h5-header-title {
    flex: 1;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    margin-right: 30px;
  }
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
