<template>
<<<<<<< HEAD
  <div
    v-if="
      typeof contactInfoData === 'object' && Object.keys(contactInfoData).length
    "
    :class="['tui-contact-info', !isPC && 'tui-contact-info-h5']"
  >
    <div
      v-if="!isPC"
      :class="[
        'tui-contact-info-header',
        !isPC && 'tui-contact-info-h5-header',
      ]"
    >
      <div
        :class="[
          'tui-contact-info-header-icon',
          !isPC && 'tui-contact-info-h5-header-icon',
        ]"
        @click="resetContactSearchingUIData"
      >
        <Icon :file="backSVG" />
      </div>
      <div
        :class="[
          'tui-contact-info-header-title',
          !isPC && 'tui-contact-info-h5-header-title',
        ]"
      >
        {{ TUITranslateService.t('TUIContact.添加好友/群聊') }}
      </div>
    </div>
    <div
      :class="['tui-contact-info-basic', !isPC && 'tui-contact-info-h5-basic']"
    >
      <div
        :class="[
          'tui-contact-info-basic-text',
          !isPC && 'tui-contact-info-h5-basic-text',
        ]"
      >
        <div
          :class="[
            'tui-contact-info-basic-text-name',
            !isPC && 'tui-contact-info-h5-basic-text-name',
          ]"
        >
          {{ generateContactInfoName(contactInfoData) }}
        </div>
        <div
          v-for="item in contactInfoBasicList"
          :key="item.label"
          :class="[
            'tui-contact-info-basic-text-other',
            !isPC && 'tui-contact-info-h5-basic-text-other',
          ]"
        >
=======
  <div v-if="typeof contactInfoData === 'object' && Object.keys(contactInfoData).length" :class="['tui-contact-info', !isPC && 'tui-contact-info-h5']">
    <div v-if="!isPC" :class="[
        'tui-contact-info-header',
        !isPC && 'tui-contact-info-h5-header',
      ]">
      <div :class="[
          'tui-contact-info-header-icon',
          !isPC && 'tui-contact-info-h5-header-icon',
        ]" @click="resetContactSearchingUIData">
        <Icon :file="backSVG" />
      </div>
      <div :class="[
          'tui-contact-info-header-title',
          !isPC && 'tui-contact-info-h5-header-title',
        ]">
        {{ TUITranslateService.t("TUIContact.添加好友/群聊") }}
      </div>
    </div>
    <div :class="['tui-contact-info-basic', !isPC && 'tui-contact-info-h5-basic']">
      <div :class="[
          'tui-contact-info-basic-text',
          !isPC && 'tui-contact-info-h5-basic-text',
        ]">
        <div :class="[
            'tui-contact-info-basic-text-name',
            !isPC && 'tui-contact-info-h5-basic-text-name',
          ]">
          {{ generateContactInfoName(contactInfoData) }}
        </div>
        <div v-for="item in contactInfoBasicList" :key="item.label" :class="[
            'tui-contact-info-basic-text-other',
            !isPC && 'tui-contact-info-h5-basic-text-other',
          ]">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          {{
            `${TUITranslateService.t(`TUIContact.${item.label}`)}:
          ${item.data}`
          }}
        </div>
      </div>
<<<<<<< HEAD
      <img
        :class="[
          'tui-contact-info-basic-avatar',
          !isPC && 'tui-contact-info-h5-basic-avatar',
        ]"
        :src="generateAvatar(contactInfoData)"
      />
    </div>
    <div
      v-if="contactInfoMoreList[0]"
      :class="['tui-contact-info-more', !isPC && 'tui-contact-info-h5-more']"
    >
      <div
        v-for="item in contactInfoMoreList"
        :key="item.key"
        :class="[
=======
      <img :class="[
          'tui-contact-info-basic-avatar',
          !isPC && 'tui-contact-info-h5-basic-avatar',
        ]" :src="generateAvatar(contactInfoData)">
    </div>
    <div v-if="contactInfoMoreList[0]" :class="['tui-contact-info-more', !isPC && 'tui-contact-info-h5-more']">
      <div v-for="item in contactInfoMoreList" :key="item.key" :class="[
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          'tui-contact-info-more-item',
          !isPC && 'tui-contact-info-h5-more-item',
          item.labelPosition === CONTACT_INFO_LABEL_POSITION.TOP
            ? 'tui-contact-info-more-item-top'
            : 'tui-contact-info-more-item-left',
<<<<<<< HEAD
        ]"
      >
        <div
          :class="[
            'tui-contact-info-more-item-label',
            !isPC && 'tui-contact-info-h5-more-item-label',
          ]"
        >
          {{ `${TUITranslateService.t(`TUIContact.${item.label}`)}` }}
        </div>
        <div
          :class="[
            'tui-contact-info-more-item-content',
            !isPC && 'tui-contact-info-h5-more-item-content',
          ]"
        >
          <div
            v-if="!item.editing"
            :class="[
              'tui-contact-info-more-item-content-text',
              !isPC && 'tui-contact-info-h5-more-item-content-text',
            ]"
          >
            <div
              :class="[
                'tui-contact-info-more-item-content-text-data',
                !isPC && 'tui-contact-info-h5-more-item-content-text-data',
              ]"
            >
              {{ item.data }}
            </div>
            <div
              v-if="item.editable"
              :class="[
                'tui-contact-info-more-item-content-text-icon',
                !isPC && 'tui-contact-info-h5-more-item-content-text-icon',
              ]"
              @click="setEditing(item)"
            >
              <Icon :file="editSVG" width="14px" height="14px" />
            </div>
          </div>
          <input
            v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.INPUT"
            v-model="item.data"
            :class="[
              'tui-contact-info-more-item-content-input',
              !isPC && 'tui-contact-info-h5-more-item-content-input',
            ]"
            type="text"
            @confirm="onContactInfoEmitSubmit(item)"
            @keyup.enter="onContactInfoEmitSubmit(item)"
          />
          <textarea
            v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.TEXTAREA"
            v-model="item.data"
            :class="[
              'tui-contact-info-more-item-content-textarea',
              !isPC && 'tui-contact-info-h5-more-item-content-textarea',
            ]"
            confirm-type="done"
          />
          <div
            v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.SWITCH"
            @click="onContactInfoEmitSubmit(item)"
          >
=======
        ]">
        <div :class="[
            'tui-contact-info-more-item-label',
            !isPC && 'tui-contact-info-h5-more-item-label',
          ]">
          {{ `${TUITranslateService.t(`TUIContact.${item.label}`)}` }}
        </div>
        <div :class="[
            'tui-contact-info-more-item-content',
            !isPC && 'tui-contact-info-h5-more-item-content',
          ]">
          <div v-if="!item.editing" :class="[
              'tui-contact-info-more-item-content-text',
              !isPC && 'tui-contact-info-h5-more-item-content-text',
            ]">
            <div :class="[
                'tui-contact-info-more-item-content-text-data',
                !isPC && 'tui-contact-info-h5-more-item-content-text-data',
              ]">
              {{ item.data }}
            </div>
            <div v-if="item.editable" :class="[
                'tui-contact-info-more-item-content-text-icon',
                !isPC && 'tui-contact-info-h5-more-item-content-text-icon',
              ]" @click="setEditing(item)">
              <Icon :file="editSVG" width="14px" height="14px" />
            </div>
          </div>
          <input v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.INPUT" v-model="item.data" :class="[
              'tui-contact-info-more-item-content-input',
              !isPC && 'tui-contact-info-h5-more-item-content-input',
            ]" type="text" @confirm="onContactInfoEmitSubmit(item)" @keyup.enter="onContactInfoEmitSubmit(item)">
          <textarea v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.TEXTAREA" v-model="item.data" :class="[
              'tui-contact-info-more-item-content-textarea',
              !isPC && 'tui-contact-info-h5-more-item-content-textarea',
            ]" confirm-type="done" />
          <div v-else-if="item.editType === CONTACT_INFO_MORE_EDIT_TYPE.SWITCH" @click="onContactInfoEmitSubmit(item)">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
            <SwitchBar :value="item.data" />
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    <div
      :class="[
        'tui-contact-info-button',
        !isPC && 'tui-contact-info-h5-button',
      ]"
    >
      <!-- 发送申请 -->
      <button
        v-for="item in contactInfoButtonList"
        :key="item.key"
        :class="[
=======
    <div :class="[
        'tui-contact-info-button',
        !isPC && 'tui-contact-info-h5-button',
      ]">
      <button v-for="item in contactInfoButtonList" :key="item.key" :class="[
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          'tui-contact-info-button-item',
          !isPC && 'tui-contact-info-h5-button-item',
          item.type === CONTACT_INFO_BUTTON_TYPE.CANCEL
            ? `tui-contact-info-button-item-cancel`
            : `tui-contact-info-button-item-submit`,
<<<<<<< HEAD
        ]"
        @click="onContactInfoButtonClicked(item)"
      >
=======
        ]" @click="onContactInfoButtonClicked(item)">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        {{ TUITranslateService.t(`TUIContact.${item.label}`) }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import TUIChatEngine, {
  TUIStore,
  StoreName,
  TUITranslateService,
  IGroupModel,
  Friend,
  FriendApplication,
<<<<<<< HEAD
} from '@tencentcloud/chat-uikit-engine'
import { TUIGlobal } from '@tencentcloud/universal-api'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { isPC } from '../../../utils/env'
import { checkUserFriend } from '../../../../utils/api'
=======
} from "@tencentcloud/chat-uikit-engine";
import { TUIGlobal } from "@tencentcloud/universal-api";
import { ref, computed, onMounted, onUnmounted } from "vue";
import { isPC } from "../../../utils/env";

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  generateAvatar,
  generateContactInfoName,
  generateContactInfoBasic,
  isFriend,
  isApplicationType,
<<<<<<< HEAD
} from '../utils/index'
import {
  contactMoreInfoConfig,
  contactButtonConfig,
} from './contact-info-config'
import Icon from '../../common/Icon.vue'
import editSVG from '../../../assets/icon/edit.svg'
import backSVG from '../../../assets/icon/back.svg'
import SwitchBar from '../../common/SwitchBar/index.vue'
=======
} from "../utils/index";
import {
  contactMoreInfoConfig,
  contactButtonConfig,
} from "./contact-info-config";
import Icon from "../../common/Icon.vue";
import editSVG from "../../../assets/icon/edit.svg";
import backSVG from "../../../assets/icon/back.svg";
import SwitchBar from "../../common/SwitchBar/index.vue";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  IBlackListUserItem,
  IContactInfoMoreItem,
  IContactInfoButton,
<<<<<<< HEAD
} from '../../../interface'
=======
} from "../../../interface";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  CONTACT_INFO_LABEL_POSITION,
  CONTACT_INFO_MORE_EDIT_TYPE,
  CONTACT_INFO_BUTTON_TYPE,
<<<<<<< HEAD
} from '../../../constant'
import { deepCopy } from '../../TUIChat/utils/utils'
=======
} from "../../../constant";
import { deepCopy } from "../../TUIChat/utils/utils";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

type IContactInfoType =
  | IGroupModel
  | Friend
  | FriendApplication
<<<<<<< HEAD
  | IBlackListUserItem

const emits = defineEmits(['switchConversation'])

const contactInfoData = ref<IContactInfoType>({} as IContactInfoType)
const contactInfoBasicList = ref<Array<{ label: string; data: string }>>([])
const contactInfoMoreList = ref<IContactInfoMoreItem[]>([])
const contactInfoButtonList = ref<IContactInfoButton[]>([])

const setEditing = (item: any) => {
  item.editing = true
}

const isGroup = computed((): boolean =>
  (contactInfoData.value as IGroupModel)?.groupID ? true : false
)

const isApplication = computed((): boolean => {
  return isApplicationType(contactInfoData?.value)
})

// is both friend, if is group type always false
const isBothFriend = ref<boolean>(false)

// is group member, including ordinary member, admin, group owner
const isGroupMember = computed((): boolean => {
  return (contactInfoData.value as IGroupModel)?.selfInfo?.userID ? true : false
})
=======
  | IBlackListUserItem;

const emits = defineEmits(["switchConversation"]);

const contactInfoData = ref<IContactInfoType>({} as IContactInfoType);
const contactInfoBasicList = ref<Array<{ label: string; data: string }>>([]);
const contactInfoMoreList = ref<IContactInfoMoreItem[]>([]);
const contactInfoButtonList = ref<IContactInfoButton[]>([]);

const setEditing = (item: any) => {
  item.editing = true;
};

const isGroup = computed((): boolean =>
  (contactInfoData.value as IGroupModel)?.groupID ? true : false
);

const isApplication = computed((): boolean => {
  return isApplicationType(contactInfoData?.value);
});

// is both friend, if is group type always false
const isBothFriend = ref<boolean>(false);

// is group member, including ordinary member, admin, group owner
const isGroupMember = computed((): boolean => {
  return (contactInfoData.value as IGroupModel)?.selfInfo?.userID
    ? true
    : false;
});
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

// is in black list, if is group type always false
const isInBlackList = computed((): boolean => {
  return (
    !isGroup.value &&
    blackList.value?.findIndex(
      (item: IBlackListUserItem) =>
        item?.userID === (contactInfoData.value as IBlackListUserItem)?.userID
    ) >= 0
<<<<<<< HEAD
  )
})

const blackList = ref<IBlackListUserItem[]>([])
=======
  );
});

const blackList = ref<IBlackListUserItem[]>([]);
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

onMounted(() => {
  TUIStore.watch(StoreName.CUSTOM, {
    currentContactInfo: onCurrentContactInfoUpdated,
<<<<<<< HEAD
  })
  TUIStore.watch(StoreName.USER, {
    userBlacklist: onUserBlacklistUpdated,
  })
})
=======
  });
  TUIStore.watch(StoreName.USER, {
    userBlacklist: onUserBlacklistUpdated,
  });
});
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

onUnmounted(() => {
  TUIStore.unwatch(StoreName.CUSTOM, {
    currentContactInfo: onCurrentContactInfoUpdated,
<<<<<<< HEAD
  })
  TUIStore.unwatch(StoreName.USER, {
    userBlacklist: onUserBlacklistUpdated,
  })
})

const resetContactInfoUIData = () => {
  contactInfoData.value = {} as IContactInfoType
  contactInfoBasicList.value = []
  contactInfoMoreList.value = []
  contactInfoButtonList.value = []
}

const resetContactSearchingUIData = () => {
  TUIStore.update(StoreName.CUSTOM, 'currentContactInfo', {})
  TUIStore.update(StoreName.CUSTOM, 'currentContactSearchingStatus', false)
  TUIGlobal?.closeSearching && TUIGlobal?.closeSearching()
}
=======
  });
  TUIStore.unwatch(StoreName.USER, {
    userBlacklist: onUserBlacklistUpdated,
  });
});

const resetContactInfoUIData = () => {
  contactInfoData.value = {} as IContactInfoType;
  contactInfoBasicList.value = [];
  contactInfoMoreList.value = [];
  contactInfoButtonList.value = [];
};

const resetContactSearchingUIData = () => {
  TUIStore.update(StoreName.CUSTOM, "currentContactInfo", {});
  TUIStore.update(StoreName.CUSTOM, "currentContactSearchingStatus", false);
  TUIGlobal?.closeSearching && TUIGlobal?.closeSearching();
};
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

const onContactInfoEmitSubmit = (item: any) => {
  item.editSubmitHandler &&
    item.editSubmitHandler({
      item,
      contactInfoData: contactInfoData.value,
      isBothFriend: isBothFriend.value,
      isInBlackList: isInBlackList.value,
<<<<<<< HEAD
    })
}

// --------------------

const onContactInfoButtonClicked = async (item: any) => {
  console.log(item.key)
  console.log((contactInfoData.value as IBlackListUserItem)?.userID)

  let params = {
    user_id: (contactInfoData.value as IBlackListUserItem)?.userID,
  }
  let res = await checkUserFriend(params)
  if (item.key === 'addFriend') {
    console.log(res.code)
    if (res.code !== 1) {
      uni.showToast({
        title: res.msg,
        icon: 'none',
        mask: true,
        duration: 3000,
      })
      return
    }
    if (res.data.group_id !== 2) {
      uni.showToast({
        title: '暂无添加此好友权限',
        icon: 'none',
        mask: true,
        duration: 3000,
      })
      return
    }

    if (res.data.group_id === 2) {
      console.log(3333)
      item.onClick?.({
        contactInfoData: contactInfoData.value,
        contactInfoMoreList: contactInfoMoreList.value,
      })

      // 提取重复代码到函数
      handleSwitchConversation(item)
    }
  } else {
    item.onClick?.({
      contactInfoData: contactInfoData.value,
      contactInfoMoreList: contactInfoMoreList.value,
    })

    handleSwitchConversation(item)
  }
}
// 提取处理函数
function handleSwitchConversation(item) {
  if (
    item.key === 'enterGroupConversation' ||
    item.key === 'enterC2CConversation'
  ) {
    emits('switchConversation', contactInfoData.value)
    resetContactSearchingUIData()
  }
}
=======
    });
};

const onContactInfoButtonClicked = (item: any) => {
  item.onClick &&
    item.onClick({
      contactInfoData: contactInfoData.value,
      contactInfoMoreList: contactInfoMoreList.value,
    });
  if (
    item.key === "enterGroupConversation" ||
    item.key === "enterC2CConversation"
  ) {
    emits("switchConversation", contactInfoData.value);
    resetContactSearchingUIData();
  }
};

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
const generateMoreInfo = async () => {
  if (!isApplication.value) {
    if (
      (!isGroup.value && !isBothFriend.value && !isInBlackList.value) ||
      (isGroup.value &&
        !isGroupMember.value &&
        (contactInfoData.value as IGroupModel)?.type !==
          TUIChatEngine?.TYPES?.GRP_AVCHATROOM)
    ) {
<<<<<<< HEAD
      contactMoreInfoConfig.setWords.data = ''
      contactInfoMoreList.value.push(contactMoreInfoConfig.setWords)
    }
    if (!isGroup.value && !isInBlackList.value) {
      contactMoreInfoConfig.setRemark.data =
        (contactInfoData.value as Friend)?.remark || ''
      contactMoreInfoConfig.setRemark.editing = false
      contactInfoMoreList.value.push(contactMoreInfoConfig.setRemark)
    }
    if (!isGroup.value && (isBothFriend.value || isInBlackList.value)) {
      contactMoreInfoConfig.blackList.data = isInBlackList.value || false
      contactInfoMoreList.value.push(contactMoreInfoConfig.blackList)
    }
  } else {
    contactMoreInfoConfig.displayWords.data =
      (contactInfoData.value as FriendApplication)?.wording || ''
    contactInfoMoreList.value.push(contactMoreInfoConfig.displayWords)
  }
}

const generateButton = () => {
  if (isInBlackList.value) {
    return
=======
      contactMoreInfoConfig.setWords.data = "";
      contactInfoMoreList.value.push(contactMoreInfoConfig.setWords);
    }
    if (!isGroup.value && !isInBlackList.value) {
      contactMoreInfoConfig.setRemark.data =
        (contactInfoData.value as Friend)?.remark || "";
      contactMoreInfoConfig.setRemark.editing = false;
      contactInfoMoreList.value.push(contactMoreInfoConfig.setRemark);
    }
    if (!isGroup.value && (isBothFriend.value || isInBlackList.value)) {
      contactMoreInfoConfig.blackList.data = isInBlackList.value || false;
      contactInfoMoreList.value.push(contactMoreInfoConfig.blackList);
    }
  } else {
    contactMoreInfoConfig.displayWords.data =
      (contactInfoData.value as FriendApplication)?.wording || "";
    contactInfoMoreList.value.push(contactMoreInfoConfig.displayWords);
  }
};

const generateButton = () => {
  if (isInBlackList.value) {
    return;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  }
  if (isApplication.value) {
    if (
      (contactInfoData.value as FriendApplication)?.type ===
      TUIChatEngine?.TYPES?.SNS_APPLICATION_SENT_TO_ME
    ) {
      contactInfoButtonList?.value?.push(
        contactButtonConfig.refuseFriendApplication
<<<<<<< HEAD
      )
      contactInfoButtonList?.value?.push(
        contactButtonConfig.acceptFriendApplication
      )
=======
      );
      contactInfoButtonList?.value?.push(
        contactButtonConfig.acceptFriendApplication
      );
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    }
  } else {
    if (isGroup.value && isGroupMember.value) {
      switch ((contactInfoData.value as IGroupModel)?.selfInfo?.role) {
<<<<<<< HEAD
        case 'Owner':
          contactInfoButtonList?.value?.push(contactButtonConfig.dismissGroup)
          break
        default:
          contactInfoButtonList?.value?.push(contactButtonConfig.quitGroup)
          break
      }
      contactInfoButtonList?.value?.push(
        contactButtonConfig.enterGroupConversation
      )
    } else if (!isGroup.value && isBothFriend.value) {
      contactInfoButtonList?.value?.push(contactButtonConfig.deleteFriend)
      contactInfoButtonList?.value?.push(
        contactButtonConfig.enterC2CConversation
      )
=======
        case "Owner":
          contactInfoButtonList?.value?.push(contactButtonConfig.dismissGroup);
          break;
        default:
          contactInfoButtonList?.value?.push(contactButtonConfig.quitGroup);
          break;
      }
      contactInfoButtonList?.value?.push(
        contactButtonConfig.enterGroupConversation
      );
    } else if (!isGroup.value && isBothFriend.value) {
      contactInfoButtonList?.value?.push(contactButtonConfig.deleteFriend);
      contactInfoButtonList?.value?.push(
        contactButtonConfig.enterC2CConversation
      );
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    } else {
      if (isGroup.value) {
        contactInfoButtonList?.value?.push(
          (contactInfoData.value as IGroupModel)?.type ===
            TUIChatEngine?.TYPES?.GRP_AVCHATROOM
            ? contactButtonConfig.joinAVChatGroup
            : contactButtonConfig.joinGroup
<<<<<<< HEAD
        )
      } else {
        contactInfoButtonList?.value?.push(contactButtonConfig.addFriend)
      }
    }
  }
}

function onUserBlacklistUpdated(userBlacklist: IBlackListUserItem[]) {
  blackList.value = userBlacklist
=======
        );
      } else {
        contactInfoButtonList?.value?.push(contactButtonConfig.addFriend);
      }
    }
  }
};

function onUserBlacklistUpdated(userBlacklist: IBlackListUserItem[]) {
  blackList.value = userBlacklist;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
}

async function onCurrentContactInfoUpdated(contactInfo: IContactInfoType) {
  if (
    contactInfoData.value &&
    contactInfo &&
    JSON.stringify(contactInfoData.value) === JSON.stringify(contactInfo)
  ) {
<<<<<<< HEAD
    return
  }
  resetContactInfoUIData()
  // deep clone
  contactInfoData.value = deepCopy(contactInfo) || {}
=======
    return;
  }
  resetContactInfoUIData();
  // deep clone
  contactInfoData.value = deepCopy(contactInfo) || {};
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  if (
    !contactInfoData.value ||
    Object.keys(contactInfoData.value)?.length === 0
  ) {
<<<<<<< HEAD
    return
  }
  contactInfoBasicList.value = generateContactInfoBasic(contactInfoData.value)
  isBothFriend.value = await isFriend(contactInfoData.value)
  generateMoreInfo()
  generateButton()
  if (contactInfo.infoKeyList) {
    contactInfoMoreList.value = contactInfo.infoKeyList.map((key: string) => {
      return (contactMoreInfoConfig as any)[key]
    })
  }
  if (contactInfo.btnKeyList) {
    contactInfoButtonList.value = contactInfo.btnKeyList.map((key: string) => {
      return (contactButtonConfig as any)[key]
    })
  }
}
</script>
<style lang="scss" scoped src="./style/index.scss"></style>
=======
    return;
  }
  contactInfoBasicList.value = generateContactInfoBasic(contactInfoData.value);
  isBothFriend.value = await isFriend(contactInfoData.value);
  generateMoreInfo();
  generateButton();
  if (contactInfo.infoKeyList) {
    contactInfoMoreList.value = contactInfo.infoKeyList.map((key: string) => {
      return (contactMoreInfoConfig as any)[key];
    });
  }
  if (contactInfo.btnKeyList) {
    contactInfoButtonList.value = contactInfo.btnKeyList.map((key: string) => {
      return (contactButtonConfig as any)[key];
    });
  }
}
</script>
<style lang="scss" scoped src="./style/index.scss"></style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
