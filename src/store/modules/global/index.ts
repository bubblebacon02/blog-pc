import { defineStore } from "pinia";
import { reactive, ref, toRefs, watch } from "vue";
import { switchFontBeautify } from "./helper";
import { setLocalCache, getLocalCache, removeLocalCache } from "@/utils";
import {
  BLOG_GLOBAL_CONFIG,
  BLOG_TOKEN,
  DEFAULT_PRIMARY_COLOR,
} from "@/constants";
import type { AuthorInfo, SiteHomeInfo } from "@/apis/modules/global/type";
import type { GlobalConfig, ThemeType } from "./type";

export const piniaGlobalStore = defineStore("global", () => {
  // tag 作者信息
  const authorInfo = ref<AuthorInfo | null>(null);
  const setAuthorInfo = (info: AuthorInfo) => {
    authorInfo.value = info;
  };

  // tag token
  const token = ref<string | undefined>(getLocalCache(BLOG_TOKEN));
  const setToken = (newToken: string) => {
    setLocalCache(BLOG_TOKEN, newToken);
    token.value = newToken;
  };
  const clearToken = () => {
    removeLocalCache(BLOG_TOKEN);
    token.value = undefined;
  };

  // tag 全局默认配置
  const defaultGlobalConfig: GlobalConfig = {
    routeAnimation: "fade",
    grayMode: false,
    colorWeakness: false,
    fontBeautify: true,
    theme: "light",
    primaryColor: DEFAULT_PRIMARY_COLOR,
  };
  const globalConfig = reactive<GlobalConfig>(
    Object.assign(defaultGlobalConfig, getLocalCache(BLOG_GLOBAL_CONFIG) || {})
  );

  // tag 全局-灰色模式
  const toggleGrayMode = (value?: boolean) => {
    setSwitchGlobalConfig("grayMode", value);
    document.body.classList.toggle("gray-mode", value);
  };

  // tag 全局-色弱模式
  const toggleColorWeakness = (value?: boolean) => {
    setSwitchGlobalConfig("colorWeakness", value);
    document.body.classList.toggle("color-weakness", value);
  };

  // tag 全局-route-animation
  const setRouteAnimation = (value: string) => {
    globalConfig.routeAnimation = value;
  };

  // tag 全局-字体
  const toggleFontBeautify = (value: boolean) => {
    setSwitchGlobalConfig("fontBeautify", value);
    switchFontBeautify(value);
  };

  // tag 全局-主题
  const toggleTheme = (theme: ThemeType) => {
    globalConfig.theme = theme;
  };
  // tag 全局-主题颜色
  const setPrimaryColor = (value: string) => {
    globalConfig.primaryColor = value;
    // todo 后续解开注释
    // setThemePrimaryColor(value);
  };

  // tag 监听全局配置
  watch(
    () => globalConfig,
    () => storageGlobalConfig(),
    { deep: true, immediate: true }
  );

  // tag 存储全局配置
  function storageGlobalConfig() {
    setLocalCache(BLOG_GLOBAL_CONFIG, globalConfig);
  }

  // tag 设置开关的全局配置
  function setSwitchGlobalConfig(field: keyof GlobalConfig, value?: boolean) {
    (globalConfig[field] as boolean) =
      value === undefined ? !globalConfig[field] : value;
  }

  // tag 首页信息
  const siteHomeInfo = ref<SiteHomeInfo | null>(null);
  const setSiteHomeInfo = (info: SiteHomeInfo) => {
    siteHomeInfo.value = info;
  };

  return {
    ...toRefs(globalConfig),
    authorInfo,
    setAuthorInfo,
    toggleGrayMode,
    toggleColorWeakness,
    setRouteAnimation,
    toggleFontBeautify,
    toggleTheme,
    setPrimaryColor,
    token,
    setToken,
    clearToken,
    siteHomeInfo,
    setSiteHomeInfo,
  };
});
