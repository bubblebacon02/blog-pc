<template>
  <div class="home-container">
    <HomeHero></HomeHero>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script setup lang="ts">
import HomeHero from "./components/home-hero.vue";
import HomeFooter from "./components/home-footer.vue";
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  --home-padding: 64px;
  --home-sm-padding: 24px;
  --home-max-width: 1080px;
}
</style>
