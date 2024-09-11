import { computed } from "vue";
import { piniaGlobalStore } from "../modules/global";
import { useUserActions } from "./use-user-store";

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

export const useGlobalActions = () => {
  const { reqGetLoginUserInfo, clearLoginUserInfo } = useUserActions();

  // 登陆
  const login = async () => {
    // todo 登陆接口
    console.log("登陆");

    // 获取登陆用户信息
    await reqGetLoginUserInfo();
  };

  // 退出登陆
  const logout = async () => {
    // todo 退出登陆接口
    console.log("退出登陆");

    // 清除登陆用户信息
    clearLoginUserInfo();
  }

  return {
    login,
    logout
  }
};
