<template>
  <div class="home-hero">
    <div class="container">
      <!-- <div class="image-wrap"><PiggyLogo /></div> -->
      <div class="iframe-wrap">
        <IframeEmbed :src="pokerSwiper" />
      </div>
      <div class="main">
        <!-- title和slogan -->
        <TextErasure class="title" text="bubblebacon"> </TextErasure>
        <TextErasure class="slogan" text="A BLOG ABOUT FRONT-END DEVELOPMENT">
        </TextErasure>
        <!-- 按钮 -->
        <div class="actions">
          <el-button
            @click="$router.push(item.url)"
            v-for="item in actionList"
            :key="item.name"
            type="primary"
            size="large"
            :plain="item.isPlain"
            >{{ item.name }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextErasure from "@/components/text-erasure";
import { useGlobalGetters } from "@/store";
const pokerSwiper = "/poker-swiper/poker.html";
const { getSiteHomeInfo } = useGlobalGetters();

const actionList = [
  {
    name: "快速开始",
    url: "/blog",
    isPlain: false,
  },
  {
    name: "关于你",
    url: "/about",
    isPlain: true,
  },
];
</script>

<style lang="less" scoped>
.home-hero {
  padding: var(--home-padding);
  // padding-bottom: 50px;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: @size-xs) {
    padding: var(--home-sm-padding);
  }
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: var(--home-max-width);
    padding: 0 8px;
    @media (max-width: @size-sm) {
      padding: 0;
    }
    .main {
      // margin-top: 30px;
      text-align: center;
      letter-spacing: -0.4px;
      .title {
        font-size: 50px;
        color: var(--primary-color);
        font-weight: 600;
      }
      .slogan {
        font-size: 42px;
        color: var(--el-color-primary-light-3);
        margin-top: 10px;
      }
      .actions {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        // a {
        //   text-decoration: none;
        // }
      }
    }
    .image-wrap {
      width: 240px;
      height: 240px;
      overflow: hidden;
      svg {
        width: 100%;
        height: 100%;
        fill: var(--primary-color);
      }
    }
    .iframe-wrap {
      width: 100%;
      height: 450px;
      overflow: hidden;
      iframe {
        width: 100%;
        height: 100%;
      }
    }
    @media (max-width: @size-md) {
      position: relative;
      flex-direction: column;
    }
    @media (max-width: @size-xs) {
      .image-wrap {
        margin-top: 50px;
      }
      .main {
        .title {
          font-size: 28px;
        }
        .slogan {
          font-size: 22px;
        }
        // .tagline {
        //   font-size: 16px;
        // }
        .actions {
          margin-top: 20px;
        }
      }
      .image-wrap {
        width: 160px;
        height: 160px;
      }
    }
  }
}
</style>
