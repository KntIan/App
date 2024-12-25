<template>
  <div>
<<<<<<< HEAD
    <div
      v-if="conversationList.length > 0"
      ref="conversationListInnerDomRef"
      class="tui-conversation-list"
    >
      <ActionsMenu
        v-if="isShowOverlay"
        :selectedConversation="currentConversation"
        :actionsMenuPosition="actionsMenuPosition"
        :selectedConversationDomRect="currentConversationDomRect"
        @closeConversationActionMenu="closeConversationActionMenu"
      />
      <div
        v-for="(conversation, index) in conversationList"
        :id="`convlistitem-${index}`"
        :key="index"
        :class="[
          'tui-conversation-content',
          isMobile && 'tui-conversation-content-h5 disable-select',
        ]"
      >
        <div
          style="padding: 12px 0 !important"
          :class="[
            isPC && 'isPC',
            'tui-conversation-item',
            currentConversationID === conversation.conversationID &&
              'tui-conversation-item-selected',
            conversation.isPinned && 'tui-conversation-item-pinned',
          ]"
          @click="enterConversationChat(conversation.conversationID)"
          @longpress="showConversationActionMenu($event, conversation, index)"
          @contextmenu="
            showConversationActionMenu($event, conversation, index, true)
          "
        >
          <aside class="left">
            <Avatar
              useSkeletonAnimation
              :url="conversation.getAvatar()"
              size="30px"
            />
            <div
              v-if="userOnlineStatusMap && isShowUserOnlineStatus(conversation)"
              :class="[
                'online-status',
                Object.keys(userOnlineStatusMap).length > 0 &&
=======
    <div v-if="conversationList.length > 0" ref="conversationListInnerDomRef" class="tui-conversation-list">
      <ActionsMenu v-if="isShowOverlay" :selectedConversation="currentConversation" :actionsMenuPosition="actionsMenuPosition" :selectedConversationDomRect="currentConversationDomRect" @closeConversationActionMenu="closeConversationActionMenu" />
      <div v-for="(conversation, index) in conversationList" :id="`convlistitem-${index}`" :key="index" :class="[
        'tui-conversation-content',
        isMobile && 'tui-conversation-content-h5 disable-select',
      ]">
        <div style="padding: 12px 0!important" :class="[
          isPC && 'isPC',
          'tui-conversation-item',
          currentConversationID === conversation.conversationID &&
            'tui-conversation-item-selected',
          conversation.isPinned && 'tui-conversation-item-pinned',
        ]" @click="enterConversationChat(conversation.conversationID)" @longpress="showConversationActionMenu($event, conversation, index)" @contextmenu="showConversationActionMenu($event, conversation, index, true)">
          <aside class="left">
            <Avatar useSkeletonAnimation :url="conversation.getAvatar()" size="30px" />
            <div v-if="userOnlineStatusMap && isShowUserOnlineStatus(conversation)" :class="[
              'online-status',
              Object.keys(userOnlineStatusMap).length > 0 &&
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
                Object.keys(userOnlineStatusMap).includes(
                  conversation.userProfile.userID
                ) &&
                userOnlineStatusMap[conversation.userProfile.userID]
                  .statusType === 1
<<<<<<< HEAD
                  ? 'online-status-online'
                  : 'online-status-offline',
              ]"
            />
            <span
              v-if="conversation.unreadCount > 0 && !conversation.isMuted"
              class="num"
            >
              {{
                conversation.unreadCount > 99 ? '99+' : conversation.unreadCount
              }}
            </span>
            <span
              v-if="conversation.unreadCount > 0 && conversation.isMuted"
              class="num-notify"
            />
          </aside>
          <div class="content">
            <div style="margin-left: 10px" class="content-header">
=======
                ? 'online-status-online'
                : 'online-status-offline',
            ]" />
            <span v-if="conversation.unreadCount > 0 && !conversation.isMuted" class="num">
              {{
              conversation.unreadCount > 99 ? "99+" : conversation.unreadCount
            }}
            </span>
            <span v-if="conversation.unreadCount > 0 && conversation.isMuted" class="num-notify" />
          </aside>
          <div class="content">
            <div style="margin-left: 10px;" class="content-header">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
              <label class="content-header-label">
                <p class="name">{{ conversation.getShowName() }}</p>
              </label>
              <div class="middle-box">
<<<<<<< HEAD
                <span
                  v-if="
                    conversation.draftText &&
                    conversation.conversationID !== currentConversationID
                  "
                  class="middle-box-draft"
                  >{{ TUITranslateService.t('TUIChat.[草稿]') }}</span
                >
                <span
                  v-else-if="
                    conversation.type === 'GROUP' &&
                    conversation.groupAtInfoList &&
                    conversation.groupAtInfoList.length > 0
                  "
                  class="middle-box-at"
                  >{{ conversation.getGroupAtInfo() }}</span
                >
                <div class="middle-box-content">
                  {{ conversation.getLastMessage('text') }}
=======
                <span v-if="conversation.draftText && conversation.conversationID !== currentConversationID" class="middle-box-draft">{{ TUITranslateService.t('TUIChat.[草稿]') }}</span>
                <span v-else-if="
                  conversation.type === 'GROUP' &&
                    conversation.groupAtInfoList &&
                    conversation.groupAtInfoList.length > 0
                " class="middle-box-at">{{ conversation.getGroupAtInfo() }}</span>
                <div class="middle-box-content">
                  {{ conversation.getLastMessage("text") }}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
                </div>
              </div>
            </div>
            <div class="content-footer">
<<<<<<< HEAD
              <span class="time">{{
                conversation.getLastMessage('time')
              }}</span>
=======
              <span class="time">{{ conversation.getLastMessage("time") }}</span>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
              <Icon v-if="conversation.isMuted" :file="muteIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>

<<<<<<< HEAD
    <div
      v-else
      class="kong"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      "
    >
      <image
        style="margin-top: -600rpx"
        src="@/static/img/noTea.png"
        mode="aspectFit"
      />
=======
    <div v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <image style="margin-top: -600rpx;" src="@/static/img/noTea.png" mode="aspectFit" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IUserStatus {
<<<<<<< HEAD
  statusType: number
  customStatus: string
}

interface IUserStatusMap {
  [userID: string]: IUserStatus
}

import { ref, onMounted, onUnmounted, defineProps, watch } from 'vue'
=======
  statusType: number;
  customStatus: string;
}

interface IUserStatusMap {
  [userID: string]: IUserStatus;
}

import { ref, onMounted, onUnmounted, defineProps, watch } from "vue";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import TUIChatEngine, {
  TUIStore,
  StoreName,
  TUIConversationService,
  TUITranslateService,
  IConversationModel,
<<<<<<< HEAD
} from '@tencentcloud/chat-uikit-engine'
=======
} from "@tencentcloud/chat-uikit-engine";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  TUIGlobal,
  isIOS,
  addLongPressListener,
<<<<<<< HEAD
} from '@tencentcloud/universal-api'
import Icon from '../../common/Icon.vue'
import Avatar from '../../common/Avatar/index.vue'
import ActionsMenu from '../actions-menu/index.vue'
import muteIcon from '../../../assets/icon/mute.svg'
import { isPC, isH5, isUniFrameWork, isMobile } from '../../../utils/env'

const props = defineProps<{
  marker?: string // 可选的 marker 属性
}>()
=======
} from "@tencentcloud/universal-api";
import Icon from "../../common/Icon.vue";
import Avatar from "../../common/Avatar/index.vue";
import ActionsMenu from "../actions-menu/index.vue";
import muteIcon from "../../../assets/icon/mute.svg";
import { isPC, isH5, isUniFrameWork, isMobile } from "../../../utils/env";

const props = defineProps<{
  marker?: string; // 可选的 marker 属性
}>();
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
// 监视 marker 属性并打印
watch(
  () => props.marker,
  (newMarker) => {
<<<<<<< HEAD
    console.log('Received marker:', newMarker)
  },
  { immediate: true }
) // immediate: true 使得
const emits = defineEmits(['handleSwitchConversation', 'getPassingRef'])
const currentConversation = ref<IConversationModel>()
const currentConversationID = ref<string>()
const currentConversationDomRect = ref<DOMRect>()
const isShowOverlay = ref<boolean>(false)
const conversationList = ref<IConversationModel[]>([])
const conversationListDomRef = ref<HTMLElement | undefined>()
const conversationListInnerDomRef = ref<HTMLElement | undefined>()
const actionsMenuPosition = ref<{
  top: number
  left: number | undefined
  conversationHeight: number | undefined
=======
    console.log("Received marker:", newMarker);
  },
  { immediate: true }
); // immediate: true 使得
const emits = defineEmits(["handleSwitchConversation", "getPassingRef"]);
const currentConversation = ref<IConversationModel>();
const currentConversationID = ref<string>();
const currentConversationDomRect = ref<DOMRect>();
const isShowOverlay = ref<boolean>(false);
const conversationList = ref<IConversationModel[]>([]);
const conversationListDomRef = ref<HTMLElement | undefined>();
const conversationListInnerDomRef = ref<HTMLElement | undefined>();
const actionsMenuPosition = ref<{
  top: number;
  left: number | undefined;
  conversationHeight: number | undefined;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
}>({
  top: 0,
  left: undefined,
  conversationHeight: undefined,
<<<<<<< HEAD
})
const displayOnlineStatus = ref(false)
const userOnlineStatusMap = ref<IUserStatusMap>()

let lastestOpenActionsMenuTime: number | null = null
=======
});
const displayOnlineStatus = ref(false);
const userOnlineStatusMap = ref<IUserStatusMap>();

let lastestOpenActionsMenuTime: number | null = null;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

onMounted(() => {
  TUIStore.watch(StoreName.CONV, {
    currentConversationID: onCurrentConversationIDUpdated,
    conversationList: onConversationListUpdated,
    currentConversation: onCurrentConversationUpdated,
<<<<<<< HEAD
  })
=======
  });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

  TUIStore.watch(StoreName.USER, {
    displayOnlineStatus: onDisplayOnlineStatusUpdated,
    userStatusList: onUserStatusListUpdated,
<<<<<<< HEAD
  })

  if (!isUniFrameWork && isIOS && !isPC) {
    addLongPressHandler()
  }
})
=======
  });

  if (!isUniFrameWork && isIOS && !isPC) {
    addLongPressHandler();
  }
});
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CONV, {
    currentConversationID: onCurrentConversationIDUpdated,
    conversationList: onConversationListUpdated,
    currentConversation: onCurrentConversationUpdated,
<<<<<<< HEAD
  })
=======
  });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

  TUIStore.unwatch(StoreName.USER, {
    displayOnlineStatus: onDisplayOnlineStatusUpdated,
    userStatusList: onUserStatusListUpdated,
<<<<<<< HEAD
  })
})
=======
  });
});
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

const isShowUserOnlineStatus = (conversation: IConversationModel): boolean => {
  return (
    displayOnlineStatus.value &&
    conversation.type === TUIChatEngine.TYPES.CONV_C2C
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

const showConversationActionMenu = (
  event: Event,
  conversation: IConversationModel,
  index: number,
  isContextMenuEvent?: boolean
) => {
  if (isContextMenuEvent) {
<<<<<<< HEAD
    event.preventDefault()
    if (isUniFrameWork) {
      return
    }
  }
  currentConversation.value = conversation
  lastestOpenActionsMenuTime = Date.now()
  getActionsMenuPosition(event, index)
}
=======
    event.preventDefault();
    if (isUniFrameWork) {
      return;
    }
  }
  currentConversation.value = conversation;
  lastestOpenActionsMenuTime = Date.now();
  getActionsMenuPosition(event, index);
};
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

const closeConversationActionMenu = () => {
  // Prevent continuous triggering of overlay tap events
  if (
    lastestOpenActionsMenuTime &&
    Date.now() - lastestOpenActionsMenuTime > 300
  ) {
<<<<<<< HEAD
    currentConversation.value = undefined
    isShowOverlay.value = false
  }
}

const getActionsMenuPosition = (event: Event, index: number) => {
  if (isUniFrameWork) {
    if (typeof conversationListDomRef.value === 'undefined') {
      emits('getPassingRef', conversationListDomRef)
    }
    const query = TUIGlobal?.createSelectorQuery().in(
      conversationListDomRef.value
    )
=======
    currentConversation.value = undefined;
    isShowOverlay.value = false;
  }
};

const getActionsMenuPosition = (event: Event, index: number) => {
  if (isUniFrameWork) {
    if (typeof conversationListDomRef.value === "undefined") {
      emits("getPassingRef", conversationListDomRef);
    }
    const query = TUIGlobal?.createSelectorQuery().in(
      conversationListDomRef.value
    );
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    query
      .select(`#convlistitem-${index}`)
      .boundingClientRect((data) => {
        if (data) {
          actionsMenuPosition.value = {
            // The uni-page-head of uni-h5 is not considered a member of the viewport, so the height of the head is manually increased.
            top: data.bottom + (isH5 ? 44 : 0),
            // @ts-expect-error in uniapp event has touches property
            left: event.touches[0].pageX,
            conversationHeight: data.height,
<<<<<<< HEAD
          }
          isShowOverlay.value = true
        }
      })
      .exec()
=======
          };
          isShowOverlay.value = true;
        }
      })
      .exec();
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  } else {
    const rect =
      (
        (event.currentTarget || event.target) as HTMLElement
<<<<<<< HEAD
      )?.getBoundingClientRect() || {}
=======
      )?.getBoundingClientRect() || {};
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    if (rect) {
      actionsMenuPosition.value = {
        top: rect.bottom,
        left: isPC ? (event as MouseEvent).clientX : undefined,
        conversationHeight: rect.height,
<<<<<<< HEAD
      }
    }
    isShowOverlay.value = true
  }
}

const enterConversationChat = (conversationID: string) => {
  emits('handleSwitchConversation', conversationID)
  TUIConversationService.switchConversation(conversationID)
}

function addLongPressHandler() {
  if (!conversationListInnerDomRef.value) {
    return
=======
      };
    }
    isShowOverlay.value = true;
  }
};

const enterConversationChat = (conversationID: string) => {
  emits("handleSwitchConversation", conversationID);
  TUIConversationService.switchConversation(conversationID);
};

function addLongPressHandler() {
  if (!conversationListInnerDomRef.value) {
    return;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  }
  addLongPressListener({
    element: conversationListInnerDomRef.value,
    onLongPress: (event, target) => {
      const index = (
        Array.from(conversationListInnerDomRef.value!.children) as HTMLElement[]
<<<<<<< HEAD
      ).indexOf(target!)
      showConversationActionMenu(event, conversationList.value[index], index)
    },
    options: {
      eventDelegation: {
        subSelector: '.tui-conversation-content',
      },
    },
  })
}

function onCurrentConversationUpdated(conversation: IConversationModel) {
  currentConversation.value = conversation
}

function onConversationListUpdated(list: IConversationModel[]) {
  // 清空 conversationList 数组
  conversationList.value = []

  // Iterate through the list to separate conversations
  list.forEach((conversation) => {
    if (conversation.type !== 'GROUP') {
      // If the type is GROUP, push to conversationList
      conversationList.value.push(conversation)
    }
  })
=======
      ).indexOf(target!);
      showConversationActionMenu(event, conversationList.value[index], index);
    },
    options: {
      eventDelegation: {
        subSelector: ".tui-conversation-content",
      },
    },
  });
}

function onCurrentConversationUpdated(conversation: IConversationModel) {
  currentConversation.value = conversation;
}

function onConversationListUpdated(list: IConversationModel[]) {
  console.log("++++++++++++++++++++++++", list);

  // 清空 conversationList 数组
  conversationList.value = [];

  // Iterate through the list to separate conversations
  list.forEach((conversation) => {
    if (conversation.type !== "GROUP") {
      // If the type is GROUP, push to conversationList
      conversationList.value.push(conversation);
    }
  });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  // Log the group conversations
  //   console.log("Group Conversations----------- ", conversationList.value);

  // Store conversationList to local storage
}

function onCurrentConversationIDUpdated(id: string) {
<<<<<<< HEAD
  currentConversationID.value = id
}

function onDisplayOnlineStatusUpdated(status: boolean) {
  displayOnlineStatus.value = status
=======
  currentConversationID.value = id;
}

function onDisplayOnlineStatusUpdated(status: boolean) {
  displayOnlineStatus.value = status;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
}

function onUserStatusListUpdated(list: Map<string, IUserStatus>) {
  if (list.size !== 0) {
    userOnlineStatusMap.value = [...list.entries()].reduce(
      (obj, [key, value]) => {
<<<<<<< HEAD
        obj[key] = value
        return obj
      },
      {} as IUserStatusMap
    )
  }
}
// Expose to the parent component and close actionsMenu when a sliding event is detected
defineExpose({ closeChildren: closeConversationActionMenu })
=======
        obj[key] = value;
        return obj;
      },
      {} as IUserStatusMap
    );
  }
}
// Expose to the parent component and close actionsMenu when a sliding event is detected
defineExpose({ closeChildren: closeConversationActionMenu });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>

<style lang="scss" scoped src="./style/index.scss"></style>
<style lang="scss" scoped>
.disable-select {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
