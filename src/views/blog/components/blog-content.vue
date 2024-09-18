<template>
  <div class="content-container">
    <h2>content-container</h2>
    <div class="search-bar">
      <el-input
        v-model="blogTitle"
        placeholder="请输入关键字并回车查询"
        size="large"
        spellcheck="false"
        clearable
      >
      </el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const blogTitle = defineModel("blogTitle", {});
</script>

<style lang="less" scoped></style>
