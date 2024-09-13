<template>
  <div class="iframe-container">
    <iframe :src="src" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'IframeEmbed',
  props: {
    src: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 500px; /* 根据需要调整高度 */
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>