<template>
  <div class="user-container">
    <!-- 用户下拉框 -->
    <el-dropdown>
      <div class="avatar">
        <img
          :src="getCurUserInfo?.avatarUrl || '../../../../public/烟花.ico'"
          alt="用户头像"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="router.push('./my-center')" :icon="User">
            个人中心</el-dropdown-item
          >
          <el-dropdown-item @click="logout" :icon="SwitchButton">
            退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { User, SwitchButton } from "@element-plus/icons-vue";
import { useUserGetters, useGlobalActions } from "@/store";

const router = useRouter();
const { getCurUserInfo } = useUserGetters();
const { logout } = useGlobalActions();
</script>

<style lang="less" scoped>
.user-container {
  flex-shrink: 0;
  display: flex;
  align-items: center;

  .avatar {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      border: 1px solid var(--el-color-primary);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
