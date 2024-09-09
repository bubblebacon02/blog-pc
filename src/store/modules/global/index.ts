import { defineStore } from "pinia";
import { ref } from "vue";

import type { AuthorInfo, SiteHomeInfo } from "@/apis/modules/global/type";

export const piniaGlobalStore = defineStore("global", () => {
  // 作者信息
  const authorInfo = ref<AuthorInfo | null>(null);
  const setAuthorInfo = (info: AuthorInfo) => {
    authorInfo.value = info;
  };

  // 首页信息
  const siteHomeInfo = ref<SiteHomeInfo | null>(null);
  const setSiteHomeInfo = (info: SiteHomeInfo) => {
    siteHomeInfo.value = info;
  };

  return {
    authorInfo,
    setAuthorInfo,
    siteHomeInfo,
    setSiteHomeInfo,
  };
});
