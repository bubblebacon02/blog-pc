<template>
  <div class="blog-container">
    <h2>blog</h2>
    <div class="container">
      <BlogContent v-model:blog-title="condition.title"></BlogContent>
      <BlogSidebar></BlogSidebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BlogContent from "./components/blog-content.vue";
import BlogSidebar from "./components/blog-sidebar.vue";
import type { GetBlogListParams } from "@/apis/modules/blog/type";
const condition = ref<GetBlogListParams>({
  page: 1,
  pageSize: 10,
  title: "",
  categoryId: undefined,
});
</script>

<style lang="less" scoped>
.blog-container {
  background-color: pink;
  padding: 20px;
  @media (max-width: @size-xs) {
    padding: 10px;
    overflow: hidden auto;
  }

  .container {
    margin: 0 auto;
    max-width: var(--center-width);
    display: flex;
    gap: 20px;
  }
}
</style>
