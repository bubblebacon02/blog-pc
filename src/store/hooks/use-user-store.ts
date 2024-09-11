import { computed } from "vue";
import { piniaUserStore } from "../modules/user";

export const useUserGetters = () => {
  // 创建 userStore 实例
  const userStore = piniaUserStore();
  // 获取当前用户信息
  const getCurUserInfo = computed(() => userStore.userInfo);
  // 是否登陆
  const isLogin = computed(() => !!userStore.userInfo);

  return {
    getCurUserInfo,
    isLogin,
  };
};

export const useUserActions = () => {
  const { setUserInfo } = piniaUserStore();

  // 获取登陆用户的信息
  const reqGetLoginUserInfo = async () => {
    // todo 调用接口获取用户信息
    // fixme 模拟数据
    setUserInfo({
      id: 1,
      account: "admin",
      email: "bubblebacon@qq.com",
      nickname: "bubblebacon",
      status: 1,
    });
  };

  // 清空登陆用户的信息
  const clearLoginUserInfo = () => {
    setUserInfo(null);
  }

  return {
    reqGetLoginUserInfo,
    clearLoginUserInfo
  }
};
