import { computed } from "vue";
import { piniaGlobalStore } from "../modules/global";

export const useGlobalGetters = () => {
  // 创建 globalStore 实例
  const globalStore = piniaGlobalStore();
  // 获取作者信息
  const getAuthorInfo = computed(() => globalStore.authorInfo);
  // 获取首页信息
  const getSiteHomeInfo = computed(() => globalStore.siteHomeInfo);

  return {
    getAuthorInfo,
    getSiteHomeInfo,
  };
};
