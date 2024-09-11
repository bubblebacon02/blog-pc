<template>
  <div class="action-container">
    <!-- 主题 -->
    <div class="action-item" title="主题" @click="handleTheme">
      <el-icon v-if="isDark" :size="size"><Moon /></el-icon>
      <el-icon v-else :size="size"><Sunny /></el-icon>
    </div>
    <!-- 设置 -->
    <div class="action-item" title="设置">
      <el-icon :size="size"><Setting /></el-icon>
    </div>

    <!-- 音乐 -->
    <div class="action-item" title="音乐">
      <el-icon :size="size"><Headset /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sunny, Moon, Setting, Headset } from "@element-plus/icons-vue";
import { ref } from "vue";
const size = 22;
const isDark = ref<boolean>(false);

const handleTheme = () => {
  console.log("切换主题");
  isDark.value = !isDark.value;
};
</script>

<style lang="less" scoped>
.action-container {
  height: 40%;
  display: flex;
  align-items: center;
  gap: 10px;

  .action-item {
    display: flex;
    align-items: center;
    color: var(--el-text-color-primary);
  }
}
</style>
