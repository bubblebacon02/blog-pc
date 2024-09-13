<template>
  <div class="navbar-container">
    <div class="wrapper">
      <div class="container">
        <div class="logo" @click="router.push('/')">
          <PiggyLogo />
          <span>logo</span>
        </div>
        <div class="search">search组件</div>
        <div class="menu">
          <div class="menu-wrapper">
            <div
              v-for="item in navbarMenu"
              :key="item.path"
              :class="['menu-item', { active: item.path === currentPath }]"
            >
              <a href="javascript:void(0)" @click="router.push(item.path)">{{
                item.label
              }}</a>
            </div>
          </div>
        </div>
        <div class="hamburger"></div>
        <div class="divide"></div>
        <div class="action">
          <NavbarActions></NavbarActions>
        </div>
        <div class="divide"></div>
        <div class="user">
          <NavbarUser v-if="isLogin"></NavbarUser>
          <el-icon v-else :size="22" @click="goToLogin"><User /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarActions from "./navbar-actions.vue";
import NavbarUser from "./navbar-user.vue";
import { User } from "@element-plus/icons-vue";
import { useUserGetters } from "@/store";
import { useRouter, useRoute } from "vue-router";
import type { NavbarMenuItem } from "./navbar";
import { computed } from "vue";
import PiggyLogo from "@/components/piggy-logo/src/piggy-logo.vue";

const router = useRouter();
const route = useRoute();
const currentPath = computed(() => route.path);

const navbarMenu: NavbarMenuItem[] = [
  { label: "首页", path: "/home" },
  { label: "网络日志", path: "/blog" },
  { label: "友情链接", path: "/friend-chain" },
  { label: "关于你", path: "/about" },
];

const { isLogin } = useUserGetters();
const goToLogin = () => {
  console.log("go to login");
  router.push({
    path: "/login",
  });
};
</script>

<style lang="less" scoped>
.navbar-container {
  width: 100%;
  height: 100%;
  background-color: var(--bg-color);

  .wrapper {
    padding: 0 30px;
    width: 100%;
    height: 100%;
    @media (max-width: @size-sm) {
      padding: 0 8px 0 24px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      height: 100%;
      max-width: var(--center-width);
      @media (max-width: @size-sm) {
        :deep(.el-dialog) {
          width: 90vw !important;
        }
      }
      .logo {
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 22px;
        @media (max-width: @size-xs) {
          font-size: 20px;
        }
      }
      .search {
      }
      .menu {
        display: flex;
        flex: 1;
        height: 100%;
        align-items: center;
        @media (max-width: @size-sm) {
          display: none;
        }
        .menu-wrapper {
          height: 100%;
          display: flex;
          align-items: center;
          margin-left: auto;
          .menu-item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 12px;
            font-weight: 600;
            color: var(--el-text-color-regular);
            font-size: 16px;
            // height: 100%;

            &:hover {
              color: var(--primary-color);
            }
            a {
              text-decoration: none;
            }
            &.active {
              color: var(--primary-color);
              &::before {
                display: block;
              }
            }
            &::before {
              content: "";
              position: absolute;
              left: 0;
              bottom: -20px;
              width: 100%;
              height: 3px;
              background-color: var(--primary-color);
              display: none;
            }
          }
        }
      }
      .hamburger {
      }
      .divide {
        margin: 0 10px;
        width: 1px;
        height: 40%;
        background-color: var(--border-color);
        @media (max-width: @size-sm) {
          margin: 0 8px;
        }
      }
      .user {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
          width: 22px;
          height: 22px;
          fill: var(--el-text-color-regular);
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
